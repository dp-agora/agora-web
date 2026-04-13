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
    const enPath = "/disclaimers";
    const esPath = "/es/disclaimers";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Avisos Legales | Ágora Abogados"
            : "Disclaimers & Notices | Ágora",
        description: isSpanish
            ? "Avisos y descargos de responsabilidad de Ágora Abogados. El contenido de este sitio es informativo y no constituye asesoramiento legal."
            : "Disclaimers and legal notices for Ágora. Content on this site is informational only and does not constitute legal advice.",
        alternates: {
            canonical: currentPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: isSpanish ? "Avisos Legales | Ágora" : "Disclaimers & Notices | Ágora",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function DisclaimersLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
