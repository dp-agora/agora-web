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
    const enPath = "/legal-terms";
    const esPath = "/es/legal-terms";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Términos Legales | Ágora Abogados"
            : "Legal Terms | Ágora",
        description: isSpanish
            ? "Términos y condiciones de uso del sitio web de Ágora Abogados. Propiedad intelectual, limitación de responsabilidad y ley aplicable."
            : "Terms and conditions governing use of the Ágora website. Intellectual property, limitation of liability, and governing law.",
        alternates: {
            canonical: currentPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: isSpanish ? "Términos Legales | Ágora" : "Legal Terms | Ágora",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function LegalTermsLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
