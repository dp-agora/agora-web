export function OfacSeptember2026CoalMiningInfographicEmbed({
    ariaLabel,
    title,
    locale = "en",
}: {
    ariaLabel: string;
    title?: string;
    locale?: "en" | "es";
}) {
    const src =
        locale === "en"
            ? "/images/insights/ofac-september-2026-coal-mining-infographic.en.html"
            : "/images/insights/ofac-september-2026-coal-mining-infographic.es.html";

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
                    "OFAC adds coal to its Venezuela mining licenses infographic"
                }
                className="w-full"
                style={{ aspectRatio: "1080 / 889", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
