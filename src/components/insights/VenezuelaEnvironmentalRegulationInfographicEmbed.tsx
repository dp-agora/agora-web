export function VenezuelaEnvironmentalRegulationInfographicEmbed({
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
            ? "/images/insights/venezuela-environmental-regulation-infographic-2026.html?lang=en"
            : "/images/insights/venezuela-environmental-regulation-infographic-2026.html?lang=es";

    return (
        <div
            className="not-prose my-8 w-full max-w-[1080px] mx-auto overflow-hidden rounded-sm border border-slate-200"
            role="group"
            aria-label={ariaLabel}
        >
            <iframe
                src={src}
                title={title ?? ariaLabel ?? "Venezuela environmental regulation infographic"}
                className="w-full"
                style={{ aspectRatio: "1 / 1", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
