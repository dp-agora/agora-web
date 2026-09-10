export function OfacAugust2026GlsInfographicEmbed({
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
            ? "/images/insights/ofac-august-2026-gls-infographic.en.html"
            : "/images/insights/ofac-august-2026-gls-infographic.es.html";

    /**
     * The graphics are authored on a fixed 1080px canvas and scale themselves down
     * to the iframe width, so the frame has to match the canvas exactly or the
     * artwork gets clipped. The Spanish copy wraps onto more lines, hence the
     * taller ratio.
     */
    const aspectRatio = locale === "en" ? "1080 / 759" : "1080 / 836";

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
                    "OFAC removes the U.S.-law requirement from eight Venezuela General Licenses infographic"
                }
                className="w-full"
                style={{ aspectRatio, border: 0 }}
                scrolling="no"
                loading="lazy"
            />
        </div>
    );
}
