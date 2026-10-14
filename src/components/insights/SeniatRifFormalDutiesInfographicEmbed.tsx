export function SeniatRifFormalDutiesInfographicEmbed({
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
            ? "/images/insights/seniat-rif-formal-duties-2026.en.html"
            : "/images/insights/seniat-rif-formal-duties-2026.es.html";

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
                    "SENIAT eliminated three formal RIF duties infographic"
                }
                className="w-full"
                style={{ aspectRatio: "1080 / 688", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
