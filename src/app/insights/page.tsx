import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InsightsIndexView } from "@/views/insights/InsightsIndexView";

export async function generateMetadata(): Promise<Metadata> {
    setRequestLocale("en");
    const t = await getTranslations({ locale: "en", namespace: "InsightsPage" });
    const baseUrl = "https://www.agoralatam.com";
    const enPath = "/insights";
    const esPath = "/es/insights";

    return {
        title: t("hero.metaTitle"),
        description: t("hero.metaDescription"),
        alternates: {
            canonical: enPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: t("hero.metaTitle"),
            description: t("hero.metaDescription"),
            url: `${baseUrl}${enPath}`,
            type: "website",
        },
    };
}

export default async function EnglishInsightsPage() {
    setRequestLocale("en");
    return <InsightsIndexView locale="en" />;
}
