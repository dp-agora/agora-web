import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const isSpanish = locale === "es";
    const t = await getTranslations({ locale, namespace: "InsightsPage" });

    const baseUrl = "https://www.agoralatam.com";
    const enPath = "/insights";
    const esPath = "/es/insights";
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: t("hero.metaTitle"),
        description: t("hero.metaDescription"),
        alternates: {
            canonical: currentPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: t("hero.metaTitle"),
            description: t("hero.metaDescription"),
            url: `${baseUrl}${currentPath}`,
            type: "website",
        },
    };
}

export default async function InsightsLayout({ children, params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    return <>{children}</>;
}
