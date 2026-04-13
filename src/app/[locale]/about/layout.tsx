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
    const enPath = "/about";
    const esPath = "/es/about";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Sobre Ágora | Firma Legal Boutique en América Latina"
            : "About Ágora | Boutique Legal Firm in Latin America",
        description: isSpanish
            ? "Conoce a Ágora Abogados, firma legal boutique especializada en asesoría estratégica y transaccional transfronteriza en América Latina y Venezuela."
            : "Learn about Ágora, a boutique legal firm delivering strategic cross-border advisory in Latin America and Venezuela with global reach and institutional-grade execution.",
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
                ? "Sobre Ágora | Firma Legal Boutique en América Latina"
                : "About Ágora | Boutique Legal Firm in Latin America",
            description: isSpanish
                ? "Conoce a Ágora Abogados, firma legal boutique especializada en asesoría estratégica y transaccional transfronteriza en América Latina y Venezuela."
                : "Learn about Ágora, a boutique legal firm delivering strategic cross-border advisory in Latin America and Venezuela with global reach and institutional-grade execution.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function AboutLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
