import type { Metadata } from "next";
import { getInsightBySlug } from "@/lib/insights";

export function getInsightArticlePaths(insight: {
    lang: "en" | "es";
    slug: string;
    translationSlug: string;
}) {
    const enSlug = insight.lang === "en" ? insight.slug : insight.translationSlug;
    const esSlug = insight.lang === "es" ? insight.slug : insight.translationSlug;
    const enPath = `/insights/${enSlug}`;
    const esPath = `/es/insights/${esSlug}`;
    return { enSlug, esSlug, enPath, esPath };
}

export function buildInsightArticleMetadata(
    locale: string,
    slug: string
): Metadata {
    const insight = getInsightBySlug(slug, locale === "es" ? "es" : "en");
    if (!insight) return { title: "Not Found" };

    const baseUrl = "https://www.agoralatam.com";
    const isSpanish = locale === "es";
    const { enPath, esPath } = getInsightArticlePaths(insight);
    const currentPath = isSpanish ? esPath : enPath;

    return {
        title: insight.seoTitle,
        description: insight.seoDescription,
        alternates: {
            canonical: currentPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: insight.seoTitle,
            description: insight.seoDescription,
            images: insight.ogImage ? [{ url: `${baseUrl}${insight.ogImage}` }] : undefined,
            url: `${baseUrl}${currentPath}`,
            type: "article",
            publishedTime: insight.date,
            modifiedTime: insight.lastUpdated,
        },
    };
}
