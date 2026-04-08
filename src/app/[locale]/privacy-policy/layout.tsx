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
    const enPath = "/privacy-policy";
    const esPath = "/es/privacy-policy";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: isSpanish
            ? "Política de Privacidad | Ágora Abogados"
            : "Privacy Policy | Ágora",
        description: isSpanish
            ? "Política de privacidad de Ágora Abogados: cómo recopilamos, usamos y protegemos su información personal."
            : "Ágora's privacy policy: how we collect, use, and protect your personal information.",
        alternates: {
            canonical: currentPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: isSpanish ? "Política de Privacidad | Ágora" : "Privacy Policy | Ágora",
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function PrivacyPolicyLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
