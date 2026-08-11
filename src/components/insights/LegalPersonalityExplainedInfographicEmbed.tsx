export function LegalPersonalityExplainedInfographicEmbed({
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
            ? "/images/insights/legal-personality-explained.en.html"
            : "/images/insights/legal-personality-explained.es.html";

    return (
        <div
            className="not-prose my-8 w-full max-w-[1080px] mx-auto overflow-hidden rounded-sm border border-slate-200"
            role="group"
            aria-label={ariaLabel}
        >
            <iframe
                src={src}
                title={title ?? ariaLabel ?? "Legal personality explained infographic"}
                className="w-full"
                style={{ aspectRatio: "1080 / 810", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
