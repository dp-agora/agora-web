import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getAllInsights } from "@/lib/insights";
import { buildInsightArticleMetadata } from "@/views/insights/insight-article-metadata";
import { InsightArticleView } from "@/views/insights/InsightArticleView";

type Props = {
    params: Promise<{ slug: string }>;
};

/** New insight markdown files must resolve without a dev-server restart. */
export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
    return getAllInsights("en").map((insight) => ({
        slug: insight.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    setRequestLocale("en");
    const { slug } = await params;
    return buildInsightArticleMetadata("en", slug);
}

export default async function EnglishInsightArticlePage({ params }: Props) {
    setRequestLocale("en");
    const { slug } = await params;
    return <InsightArticleView locale="en" slug={slug} />;
}
