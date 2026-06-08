export function ElectronicSignaturesVenezuelaEmbed({
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
            ? "/images/insights/electronic-signatures-venezuela-digital-risk-2026.en.html"
            : "/images/insights/electronic-signatures-venezuela-digital-risk-2026.es.html";

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
                    "Electronic signatures in Venezuela legal risk infographic"
                }
                className="w-full"
                style={{ aspectRatio: "1080 / 980", border: 0 }}
                loading="lazy"
            />
        </div>
    );
}
