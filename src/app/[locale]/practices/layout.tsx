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
    const enPath = "/practices";
    const esPath = "/es/practices";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Áreas de Práctica | Ágora Abogados — Derecho Corporativo, Bancario, Tributario y Más"
            : "Practice Areas | Ágora — Corporate, Banking, Tax, Arbitration & More",
        description: isSpanish
            ? "Ágora Abogados ofrece asesoría legal especializada en derecho corporativo y M&A, banca y finanzas, tributario, cumplimiento normativo, litigio, arbitraje, inmobiliario, ambiental y laboral en América Latina."
            : "Ágora offers specialized legal counsel across corporate M&A, banking & finance, tax, compliance & sanctions, litigation, investment arbitration, real estate, environmental, and labor law in Latin America.",
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
                ? "Áreas de Práctica | Ágora Abogados"
                : "Practice Areas | Ágora",
            description: isSpanish
                ? "Asesoría legal especializada en nueve áreas de práctica clave en América Latina y Venezuela."
                : "Specialized legal counsel across nine core practice areas in Latin America and Venezuela.",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function PracticesLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
