import type { Image, Paragraph, Root } from "mdast";
import { visit } from "unist-util-visit";

type UnwrapOp = { parent: { children: unknown[] }; index: number; image: Image };

/**
 * CommonMark wraps standalone images in a paragraph. Replacing `img` with a
 * block component then yields invalid `<p><div>…</div></p>` and hydration errors.
 * Hoist lone `image` children so they become siblings of paragraphs instead.
 */
export function remarkUnwrapLoneImageParagraphs() {
    return (tree: Root) => {
        const ops: UnwrapOp[] = [];

        visit(tree, "paragraph", (node: Paragraph, index, parent) => {
            if (
                parent === undefined ||
                index === undefined ||
                typeof index !== "number" ||
                !("children" in parent)
            ) {
                return;
            }
            if (node.children.length !== 1) return;
            const only = node.children[0];
            if (!only || only.type !== "image") return;
            ops.push({
                parent: parent as { children: unknown[] },
                index,
                image: only as Image,
            });
        });

        const byParent = new Map<{ children: unknown[] }, UnwrapOp[]>();
        for (const op of ops) {
            const list = byParent.get(op.parent) ?? [];
            list.push(op);
            byParent.set(op.parent, list);
        }
        for (const list of byParent.values()) {
            list.sort((a, b) => b.index - a.index);
            for (const { parent, index, image } of list) {
                parent.children.splice(index, 1, image);
            }
        }
    };
}
