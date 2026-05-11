export function VenezuelaSecuritiesFinancingFourMechanismsEmbed({
    ariaLabel,
    title,
    locale = "es",
}: {
    ariaLabel: string;
    title?: string;
    locale?: "en" | "es";
}) {
    const src =
        locale === "en"
            ? "/images/insights/venezuela-securities-financing-four-mechanisms-2026.en.html"
            : "/images/insights/venezuela-securities-financing-four-mechanisms-2026.es.html";

    return (
        <div
            className="not-prose my-8 w-full max-w-[1080px] mx-auto overflow-hidden rounded-sm border border-slate-200"
            role="group"
            aria-label={ariaLabel}
        >
            <iframe
                src={src}
                title={
                    title ??
                    ariaLabel ??
                    "Four mechanisms to raise funds in Venezuela's securities market"
                }
                className="w-full"
                style={{ aspectRatio: "1080 / 840", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
