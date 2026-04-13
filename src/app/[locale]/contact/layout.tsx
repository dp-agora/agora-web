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
    const enPath = "/contact";
    const esPath = "/es/contact";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Contacto | Ágora Abogados — Caracas, México, América Latina"
            : "Contact | Ágora — Caracas, Mexico City & Latin America",
        description: isSpanish
            ? "Contáctanos en nuestras oficinas en Caracas, Maracay, Valencia, Cagua y Ciudad de México. Asesoría legal estratégica en América Latina."
            : "Reach Ágora's offices in Caracas, Maracay, Valencia, Cagua, and Mexico City. Strategic legal advisory across Latin America and cross-border transactions.",
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
                ? "Contacto | Ágora Abogados"
                : "Contact | Ágora",
            description: isSpanish
                ? "Contáctanos en nuestras oficinas en Caracas, Maracay, Valencia, Cagua y Ciudad de México."
                : "Reach Ágora's offices in Caracas, Maracay, Valencia, Cagua, and Mexico City.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function ContactLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
