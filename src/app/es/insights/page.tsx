import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InsightsIndexView } from "@/views/insights/InsightsIndexView";

export async function generateMetadata(): Promise<Metadata> {
    setRequestLocale("es");
    const t = await getTranslations({ locale: "es", namespace: "InsightsPage" });
    const baseUrl = "https://www.agoralatam.com";
    const enPath = "/insights";
    const esPath = "/es/insights";

    return {
        title: t("hero.metaTitle"),
        description: t("hero.metaDescription"),
        alternates: {
            canonical: esPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: t("hero.metaTitle"),
            description: t("hero.metaDescription"),
            url: `${baseUrl}${esPath}`,
            type: "website",
        },
    };
}

export default async function SpanishInsightsPage() {
    setRequestLocale("es");
    return <InsightsIndexView locale="es" />;
}
