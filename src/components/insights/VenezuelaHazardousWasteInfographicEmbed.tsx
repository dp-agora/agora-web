export function VenezuelaHazardousWasteInfographicEmbed({
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
            ? "/images/insights/venezuela-hazardous-waste-2026.en.html"
            : "/images/insights/venezuela-hazardous-waste-2026.es.html";

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
                    "Hazardous materials and waste regime in Venezuela infographic"
                }
                className="w-full"
                style={{ aspectRatio: "1080 / 960", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
