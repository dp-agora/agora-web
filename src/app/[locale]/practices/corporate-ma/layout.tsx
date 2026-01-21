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
    const enPath = "/practices/corporate-ma";
    const esPath = "/es/practices/corporate-ma";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Derecho Corporativo y M&A | Ágora"
            : "Corporate & M&A | Ágora",
        description: isSpanish
            ? "Asesoría legal en fusiones y adquisiciones transfronterizas, joint ventures y reorganizaciones corporativas en América Latina."
            : "Cross-border M&A counsel for complex acquisitions, joint ventures, and corporate reorganizations across Latin America. Institutional-grade legal execution.",
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
                ? "Derecho Corporativo y M&A | Ágora"
                : "Corporate & M&A | Ágora",
            description: isSpanish
                ? "Asesoría legal en fusiones y adquisiciones transfronterizas, joint ventures y reorganizaciones corporativas en América Latina."
                : "Cross-border M&A counsel for complex acquisitions, joint ventures, and corporate reorganizations across Latin America. Institutional-grade legal execution.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function CorporateMaLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const isSpanish = locale === "es";
    const baseUrl = "https://www.agoralatam.com";

    // BreadcrumbList schema for SEO
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": isSpanish ? "Inicio" : "Home",
                "item": isSpanish ? `${baseUrl}/es` : baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": isSpanish ? "Áreas de Práctica" : "Practice Areas",
                "item": isSpanish ? `${baseUrl}/es/practices` : `${baseUrl}/practices`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": isSpanish ? "Derecho Corporativo y M&A" : "Corporate & M&A",
                "item": isSpanish ? `${baseUrl}/es/practices/corporate-ma` : `${baseUrl}/practices/corporate-ma`
            }
        ]
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
