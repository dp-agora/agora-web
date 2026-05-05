export function VenezuelaEnvironmentalRegulationInfographicEmbed({
    ariaLabel,
    title,
}: {
    ariaLabel: string;
    title?: string;
}) {
    return (
        <div
            className="not-prose my-8 w-full max-w-[1080px] mx-auto overflow-hidden rounded-sm border border-slate-200"
            role="group"
            aria-label={ariaLabel}
        >
            <iframe
                src="/images/insights/venezuela-environmental-regulation-infographic-2026.html"
                title={title ?? ariaLabel ?? "Venezuela environmental regulation infographic"}
                className="w-full"
                style={{ aspectRatio: "1 / 1", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
