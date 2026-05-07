export function LocotaInfographicEmbed({
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
            ? "/images/insights/locota-infographic-2026.en.html"
            : "/images/insights/locota-infographic-2026.es.html";

    return (
        <div
            className="not-prose my-8 w-full max-w-[1080px] mx-auto overflow-hidden rounded-sm border border-slate-200"
            role="group"
            aria-label={ariaLabel}
        >
            <iframe
                src={src}
                title={title ?? ariaLabel ?? "LOCOTA infographic"}
                className="w-full"
                style={{ aspectRatio: "1 / 1", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}

