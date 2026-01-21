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
    const enPath = "/practices/environmental";
    const esPath = "/es/practices/environmental";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Derecho Ambiental y Recursos Naturales | Ágora"
            : "Environmental & Natural Resources | Ágora",
        description: isSpanish
            ? "Asesoría legal en derecho ambiental y recursos naturales para permisos, cumplimiento regulatorio, ESG y desarrollo de proyectos en América Latina."
            : "Environmental and natural resources legal counsel for permitting, regulatory compliance, ESG matters, and project development across Latin America.",
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
                ? "Derecho Ambiental y Recursos Naturales | Ágora"
                : "Environmental & Natural Resources | Ágora",
            description: isSpanish
                ? "Asesoría legal en derecho ambiental y recursos naturales para permisos, cumplimiento regulatorio, ESG y desarrollo de proyectos en América Latina."
                : "Environmental and natural resources legal counsel for permitting, regulatory compliance, ESG matters, and project development across Latin America.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function EnvironmentalLayout({ children, params }: Props) {
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
                "name": isSpanish ? "Derecho Ambiental y Recursos Naturales" : "Environmental & Natural Resources",
                "item": isSpanish ? `${baseUrl}/es/practices/environmental` : `${baseUrl}/practices/environmental`
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
