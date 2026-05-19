import type { ImgHTMLAttributes } from "react";
import { CommercialArbitrationInfographic } from "@/components/insights/CommercialArbitrationInfographic";
import { OfacApril2026Infographic } from "@/components/insights/OfacApril2026Infographic";
import { VenezuelaEnvironmentalRegulationInfographicEmbed } from "@/components/insights/VenezuelaEnvironmentalRegulationInfographicEmbed";
import { LocotaInfographicEmbed } from "@/components/insights/LocotaInfographicEmbed";
import { LocotaVsLestaComparativeChartEmbed } from "@/components/insights/LocotaVsLestaComparativeChartEmbed";
import { VenezuelaSecuritiesFinancingFourMechanismsEmbed } from "@/components/insights/VenezuelaSecuritiesFinancingFourMechanismsEmbed";
import { VenezuelaSpecialTaxpayersSpeEmbed } from "@/components/insights/VenezuelaSpecialTaxpayersSpeEmbed";
import { AppriVenezuelaColombiaInfographicEmbed } from "@/components/insights/AppriVenezuelaColombiaInfographicEmbed";

/** Markdown still references these paths as sentinels for embedded React graphics. */
const COMMERCIAL_ARBITRATION_INFOGRAPHIC =
    "/images/insights/commercial-arbitration-venezuela-infographic.png";
const OFAC_APRIL_2026_INFOGRAPHIC =
    "/images/insights/ofac-april-2026-infographic.png";
const VENEZUELA_ENVIRONMENTAL_REGULATION_INFOGRAPHIC_2026 =
    "/images/insights/venezuela-environmental-regulation-infographic-2026.html";
const LOCOTA_INFOGRAPHIC_2026 =
    "/images/insights/locota-infographic-2026.html";
const LOCOTA_VS_LESTA_COMPARATIVE_2026 =
    "/images/insights/locota-vs-lesta-comparative-2026.html";
const VENEZUELA_SECURITIES_FINANCING_FOUR_MECHANISMS_2026 =
    "/images/insights/venezuela-securities-financing-four-mechanisms-2026.html";
const VENEZUELA_SPECIAL_TAXPAYERS_SPE_2026 =
    "/images/insights/venezuela-special-taxpayers-spe-2026.html";
const APPRI_VENEZUELA_COLOMBIA_BIT_2026 =
    "/images/insights/appri-venezuela-colombia-bit-2026.html";

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
                locale={locale}
                ariaLabel={alt ?? ""}
                title={title}
            />
        );
    }

    if (src === LOCOTA_INFOGRAPHIC_2026) {
        return (
            <LocotaInfographicEmbed
                locale={locale}
                ariaLabel={alt ?? ""}
                title={title}
            />
        );
    }

    if (src === LOCOTA_VS_LESTA_COMPARATIVE_2026) {
        return (
            <LocotaVsLestaComparativeChartEmbed
                locale={locale}
                ariaLabel={alt ?? ""}
                title={title}
            />
        );
    }

    if (src === VENEZUELA_SECURITIES_FINANCING_FOUR_MECHANISMS_2026) {
        return (
            <VenezuelaSecuritiesFinancingFourMechanismsEmbed
                locale={locale}
                ariaLabel={alt ?? ""}
                title={title}
            />
        );
    }

    if (src === VENEZUELA_SPECIAL_TAXPAYERS_SPE_2026) {
        return (
            <VenezuelaSpecialTaxpayersSpeEmbed
                locale={locale}
                ariaLabel={alt ?? ""}
                title={title}
            />
        );
    }

    if (src === APPRI_VENEZUELA_COLOMBIA_BIT_2026) {
        return (
            <AppriVenezuelaColombiaInfographicEmbed
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
