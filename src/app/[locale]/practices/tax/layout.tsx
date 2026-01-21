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
    const enPath = "/practices/tax";
    const esPath = "/es/practices/tax";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Asesoría Fiscal | Ágora"
            : "Tax Advisory | Ágora",
        description: isSpanish
            ? "Asesoría fiscal transfronteriza para empresas multinacionales y grupos de inversión. Estructuración, precios de transferencia e impuestos internacionales en América Latina."
            : "Cross-border tax advisory for multinational companies and investment groups. We advise on structuring, transfer pricing, and international tax matters across Latin America.",
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
                ? "Asesoría Fiscal | Ágora"
                : "Tax Advisory | Ágora",
            description: isSpanish
                ? "Asesoría fiscal transfronteriza para empresas multinacionales y grupos de inversión. Estructuración, precios de transferencia e impuestos internacionales en América Latina."
                : "Cross-border tax advisory for multinational companies and investment groups. We advise on structuring, transfer pricing, and international tax matters across Latin America.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function TaxLayout({ children, params }: Props) {
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
                "name": isSpanish ? "Asesoría Fiscal" : "Tax Advisory",
                "item": isSpanish ? `${baseUrl}/es/practices/tax` : `${baseUrl}/practices/tax`
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
