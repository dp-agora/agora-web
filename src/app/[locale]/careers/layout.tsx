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
    const enPath = "/careers";
    const esPath = "/es/careers";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Carreras | Únete a Ágora Abogados"
            : "Careers | Join Ágora Abogados",
        description: isSpanish
            ? "Explora oportunidades de carrera en Ágora Abogados. Buscamos abogados talentosos con pasión por el derecho corporativo y transaccional en América Latina."
            : "Explore career opportunities at Ágora. We seek talented lawyers with a passion for corporate and transactional law across Latin America and Venezuela.",
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
                ? "Carreras | Ágora Abogados"
                : "Careers | Ágora",
            description: isSpanish
                ? "Explora oportunidades de carrera en Ágora Abogados."
                : "Explore career opportunities at Ágora.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function CareersLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
