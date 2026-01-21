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
    const enPath = "/practices/banking-finance";
    const esPath = "/es/practices/banking-finance";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Banca y Finanzas | Ágora"
            : "Banking & Finance | Ágora",
        description: isSpanish
            ? "Asesoría legal en banca y finanzas para financiamientos transfronterizos, estructuras financieras, asuntos regulatorios y mercados de capitales en América Latina."
            : "Banking and finance legal counsel for cross-border lending, structured finance, regulatory matters, and capital markets transactions across Latin America.",
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
                ? "Banca y Finanzas | Ágora"
                : "Banking & Finance | Ágora",
            description: isSpanish
                ? "Asesoría legal en banca y finanzas para financiamientos transfronterizos, estructuras financieras, asuntos regulatorios y mercados de capitales en América Latina."
                : "Banking and finance legal counsel for cross-border lending, structured finance, regulatory matters, and capital markets transactions across Latin America.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function BankingFinanceLayout({ children, params }: Props) {
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
                "name": isSpanish ? "Banca y Finanzas" : "Banking & Finance",
                "item": isSpanish ? `${baseUrl}/es/practices/banking-finance` : `${baseUrl}/practices/banking-finance`
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
