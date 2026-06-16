export function OfacJune2026GlsInfographicEmbed({
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
            ? "/images/insights/ofac-june-2026-gls-infographic.en.html"
            : "/images/insights/ofac-june-2026-gls-infographic.es.html";

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
                    "OFAC amended seven Venezuela General Licenses infographic"
                }
                className="w-full"
                style={{ aspectRatio: "1080 / 820", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
