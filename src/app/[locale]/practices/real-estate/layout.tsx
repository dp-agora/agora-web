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
    const enPath = "/practices/real-estate";
    const esPath = "/es/practices/real-estate";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Derecho Inmobiliario | Ágora"
            : "Real Estate | Ágora",
        description: isSpanish
            ? "Asesoría legal inmobiliaria para adquisiciones, desarrollos, arrendamientos e inversiones inmobiliarias transfronterizas en América Latina."
            : "Real estate legal counsel for acquisitions, development, leasing, and cross-border property investments across Latin America.",
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
                ? "Derecho Inmobiliario | Ágora"
                : "Real Estate | Ágora",
            description: isSpanish
                ? "Asesoría legal inmobiliaria para adquisiciones, desarrollos, arrendamientos e inversiones inmobiliarias transfronterizas en América Latina."
                : "Real estate legal counsel for acquisitions, development, leasing, and cross-border property investments across Latin America.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function RealEstateLayout({ children, params }: Props) {
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
                "name": isSpanish ? "Derecho Inmobiliario" : "Real Estate",
                "item": isSpanish ? `${baseUrl}/es/practices/real-estate` : `${baseUrl}/practices/real-estate`
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
