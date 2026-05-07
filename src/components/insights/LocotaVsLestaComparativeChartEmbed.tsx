export function LocotaVsLestaComparativeChartEmbed({
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
            ? "/images/insights/locota-vs-lesta-comparative-2026.en.html"
            : "/images/insights/locota-vs-lesta-comparative-2026.es.html";

    return (
        <div
            className="not-prose my-8 w-full max-w-[1080px] mx-auto overflow-hidden rounded-sm border border-slate-200"
            role="group"
            aria-label={ariaLabel}
        >
            <iframe
                src={src}
                title={title ?? ariaLabel ?? "LOCOTA 2026 vs LESTA 2014 comparative chart"}
                className="w-full"
                style={{ aspectRatio: "1080 / 1320", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}

