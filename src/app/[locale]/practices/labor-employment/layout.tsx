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
    const enPath = "/practices/labor-employment";
    const esPath = "/es/practices/labor-employment";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Derecho Laboral y Empleo | Ágora"
            : "Labor & Employment | Ágora",
        description: isSpanish
            ? "Asesoría legal en derecho laboral y empleo para cumplimiento normativo, conflictos laborales, reorganizaciones y gestión de relaciones laborales en América Latina."
            : "Labor and employment legal counsel for workforce compliance, labor disputes, restructurings, and employment matters across Latin America.",
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
                ? "Derecho Laboral y Empleo | Ágora"
                : "Labor & Employment | Ágora",
            description: isSpanish
                ? "Asesoría legal en derecho laboral y empleo para cumplimiento normativo, conflictos laborales, reorganizaciones y gestión de relaciones laborales en América Latina."
                : "Labor and employment legal counsel for workforce compliance, labor disputes, restructurings, and employment matters across Latin America.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function LaborEmploymentLayout({ children, params }: Props) {
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
                "name": isSpanish ? "Derecho Laboral y Empleo" : "Labor & Employment",
                "item": isSpanish ? `${baseUrl}/es/practices/labor-employment` : `${baseUrl}/practices/labor-employment`
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
