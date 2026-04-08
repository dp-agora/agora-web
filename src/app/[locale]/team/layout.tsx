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
    const enPath = "/team";
    const esPath = "/es/team";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Equipo | Abogados y Asesores | Ágora Abogados"
            : "Team | Lawyers & Advisors | Ágora",
        description: isSpanish
            ? "Conoce al equipo de Ágora Abogados: socios, asociados y especialistas en derecho corporativo, bancario, tributario, arbitraje y más en América Latina."
            : "Meet the Ágora team: partners, associates, and specialists in corporate, banking, tax, arbitration, and regulatory law across Latin America and Venezuela.",
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
                ? "Equipo | Ágora Abogados"
                : "Team | Ágora",
            description: isSpanish
                ? "Conoce al equipo de Ágora Abogados: socios y especialistas en derecho corporativo, bancario, tributario y arbitraje."
                : "Meet the Ágora team: partners and specialists in corporate, banking, tax, and arbitration law.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function TeamLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
