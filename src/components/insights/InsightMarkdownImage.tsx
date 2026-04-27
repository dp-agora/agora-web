import type { ImgHTMLAttributes } from "react";
import { CommercialArbitrationInfographic } from "@/components/insights/CommercialArbitrationInfographic";

/** Markdown still references this path as a sentinel for the embedded React graphic. */
const COMMERCIAL_ARBITRATION_INFOGRAPHIC =
    "/images/insights/commercial-arbitration-venezuela-infographic.png";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
    node?: unknown;
    locale?: "en" | "es";
};

export function InsightMarkdownImage({
    src,
    alt,
    title,
    node: _node,
    locale = "en",
    ...rest
}: Props) {
    if (!src || typeof src !== "string") return null;

    if (src === COMMERCIAL_ARBITRATION_INFOGRAPHIC) {
        return (
            <CommercialArbitrationInfographic
                locale={locale}
                ariaLabel={alt ?? ""}
                title={title}
            />
        );
    }

    return (
        <img src={src} alt={alt ?? ""} title={title} className="max-w-full h-auto" {...rest} />
    );
}
