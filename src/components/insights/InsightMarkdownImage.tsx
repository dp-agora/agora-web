import type { ImgHTMLAttributes } from "react";
import Image from "next/image";

/** Body infographic — dimensions match upscaled PNG in public/images/insights. */
const COMMERCIAL_ARBITRATION_INFOGRAPHIC =
    "/images/insights/commercial-arbitration-venezuela-infographic.png";

type Props = ImgHTMLAttributes<HTMLImageElement> & { node?: unknown };

export function InsightMarkdownImage({ src, alt, node: _node, ...rest }: Props) {
    if (!src || typeof src !== "string") return null;

    if (src === COMMERCIAL_ARBITRATION_INFOGRAPHIC) {
        return (
            <span className="not-prose my-8 block w-full max-w-full">
                <Image
                    src={src}
                    alt={alt ?? ""}
                    width={2048}
                    height={1536}
                    className="h-auto w-full rounded-sm"
                    sizes="(max-width: 768px) 100vw, min(48rem, 100vw)"
                    decoding="async"
                />
            </span>
        );
    }

    return <img src={src} alt={alt ?? ""} className="max-w-full h-auto" {...rest} />;
}
