import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isSpanish = locale === "es";

    const baseUrl = "https://www.agoralatam.com";
    const enPath = "/practices/investment-arbitration";
    const esPath = "/es/practices/investment-arbitration";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Arbitraje de Inversión | Ágora Abogados"
            : "Investment Arbitration | Ágora",
        description: isSpanish
            ? "Asesoría institucional en disputas inversor-Estado en América Latina. Procedimientos CIADI y CNUDMI, negociación con estados, ejecución y monetización de laudos arbitrales."
            : "Institutional-grade counsel for investor-state disputes across Latin America. ICSID and UNCITRAL proceedings, state negotiations, and cross-border enforcement and monetization of arbitral awards.",
        alternates: {
            canonical: currentPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: isSpanish
                ? "Arbitraje de Inversión | Ágora Abogados"
                : "Investment Arbitration | Ágora",
            description: isSpanish
                ? "Asesoría institucional en disputas inversor-Estado en América Latina. Procedimientos CIADI y CNUDMI."
                : "Institutional-grade counsel for investor-state disputes across Latin America. ICSID and UNCITRAL proceedings.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function InvestmentArbitrationLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const isSpanish = locale === "es";
    const baseUrl = "https://www.agoralatam.com";

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": isSpanish ? "Inicio" : "Home",
                "item": isSpanish ? `${baseUrl}/es` : baseUrl,
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": isSpanish ? "Áreas de Práctica" : "Practice Areas",
                "item": isSpanish ? `${baseUrl}/es/practices` : `${baseUrl}/practices`,
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": isSpanish ? "Arbitraje de Inversión" : "Investment Arbitration",
                "item": isSpanish ? `${baseUrl}/es/practices/investment-arbitration` : `${baseUrl}/practices/investment-arbitration`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
