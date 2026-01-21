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
    const enPath = "/practices/litigation-disputes";
    const esPath = "/es/practices/litigation-disputes";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Litigios y Resolución de Disputas | Ágora"
            : "Litigation & Dispute Resolution | Ágora",
        description: isSpanish
            ? "Asesoría legal en litigios y resolución de disputas para controversias comerciales complejas, conflictos societarios y ejecución transfronteriza ante tribunales y arbitrajes."
            : "Litigation and dispute resolution counsel for complex commercial disputes, shareholder conflicts, and cross-border enforcement before courts and arbitral tribunals.",
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
                ? "Litigios y Resolución de Disputas | Ágora"
                : "Litigation & Dispute Resolution | Ágora",
            description: isSpanish
                ? "Asesoría legal en litigios y resolución de disputas para controversias comerciales complejas, conflictos societarios y ejecución transfronteriza ante tribunales y arbitrajes."
                : "Litigation and dispute resolution counsel for complex commercial disputes, shareholder conflicts, and cross-border enforcement before courts and arbitral tribunals.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function LitigationDisputesLayout({ children, params }: Props) {
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
                "name": isSpanish ? "Litigios y Resolución de Disputas" : "Litigation & Dispute Resolution",
                "item": isSpanish ? `${baseUrl}/es/practices/litigation-disputes` : `${baseUrl}/practices/litigation-disputes`
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
