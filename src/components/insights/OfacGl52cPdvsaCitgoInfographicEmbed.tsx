export function OfacGl52cPdvsaCitgoInfographicEmbed({
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
            ? "/images/insights/ofac-gl52c-pdvsa-citgo-september-2026.en.html"
            : "/images/insights/ofac-gl52c-pdvsa-citgo-september-2026.es.html";

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
                    "OFAC lets blocked PdVSA officers sign, and fences off CITGO infographic"
                }
                className="w-full"
                style={{ aspectRatio: "1080 / 786", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
