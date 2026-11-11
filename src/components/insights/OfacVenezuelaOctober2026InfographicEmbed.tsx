export function OfacVenezuelaOctober2026InfographicEmbed({
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
            ? "/images/insights/ofac-venezuela-october-2026-update.en.html"
            : "/images/insights/ofac-venezuela-october-2026-update.es.html";

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
                    "OFAC Venezuela October 2026 update infographic"
                }
                className="w-full"
                style={{ aspectRatio: "1080 / 857", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
