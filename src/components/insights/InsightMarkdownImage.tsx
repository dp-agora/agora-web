import type { ImgHTMLAttributes } from "react";
import { CommercialArbitrationInfographic } from "@/components/insights/CommercialArbitrationInfographic";
import { OfacApril2026Infographic } from "@/components/insights/OfacApril2026Infographic";
import { VenezuelaEnvironmentalRegulationInfographicEmbed } from "@/components/insights/VenezuelaEnvironmentalRegulationInfographicEmbed";

/** Markdown still references these paths as sentinels for embedded React graphics. */
const COMMERCIAL_ARBITRATION_INFOGRAPHIC =
    "/images/insights/commercial-arbitration-venezuela-infographic.png";
const OFAC_APRIL_2026_INFOGRAPHIC =
    "/images/insights/ofac-april-2026-infographic.png";
const VENEZUELA_ENVIRONMENTAL_REGULATION_INFOGRAPHIC_2026 =
    "/images/insights/venezuela-environmental-regulation-infographic-2026.html";

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

    if (src === OFAC_APRIL_2026_INFOGRAPHIC) {
        return (
            <OfacApril2026Infographic
                locale={locale}
                ariaLabel={alt ?? ""}
                title={title}
            />
        );
    }

    if (src === VENEZUELA_ENVIRONMENTAL_REGULATION_INFOGRAPHIC_2026) {
        return (
            <VenezuelaEnvironmentalRegulationInfographicEmbed
                ariaLabel={alt ?? ""}
                title={title}
            />
        );
    }

    return (
        <img src={src} alt={alt ?? ""} title={title} className="max-w-full h-auto" {...rest} />
    );
}
