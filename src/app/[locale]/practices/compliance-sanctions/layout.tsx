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
    const enPath = "/practices/compliance-sanctions";
    const esPath = "/es/practices/compliance-sanctions";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Cumplimiento Normativo y Sanciones Internacionales | Ágora"
            : "Compliance & International Sanctions | Ágora",
        description: isSpanish
            ? "Asesoría legal en cumplimiento normativo y sanciones internacionales para transacciones transfronterizas, gestión de riesgos regulatorios y exposición a sanciones en jurisdicciones de alto riesgo."
            : "Compliance and international sanctions legal counsel for cross-border transactions, regulatory risk, and sanctions exposure involving high-risk jurisdictions.",
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
                ? "Cumplimiento Normativo y Sanciones Internacionales | Ágora"
                : "Compliance & International Sanctions | Ágora",
            description: isSpanish
                ? "Asesoría legal en cumplimiento normativo y sanciones internacionales para transacciones transfronterizas, gestión de riesgos regulatorios y exposición a sanciones en jurisdicciones de alto riesgo."
                : "Compliance and international sanctions legal counsel for cross-border transactions, regulatory risk, and sanctions exposure involving high-risk jurisdictions.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function ComplianceSanctionsLayout({ children, params }: Props) {
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
                "name": isSpanish ? "Cumplimiento y Sanciones" : "Compliance & Sanctions",
                "item": isSpanish ? `${baseUrl}/es/practices/compliance-sanctions` : `${baseUrl}/practices/compliance-sanctions`
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
