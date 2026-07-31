import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getAllInsights } from "@/lib/insights";
import { buildInsightArticleMetadata } from "@/views/insights/insight-article-metadata";
import { InsightArticleView } from "@/views/insights/InsightArticleView";

type Props = {
    params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;

export async function generateStaticParams() {
    return getAllInsights("es").map((insight) => ({
        slug: insight.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    setRequestLocale("es");
    const { slug } = await params;
    return buildInsightArticleMetadata("es", slug);
}

export default async function SpanishInsightArticlePage({ params }: Props) {
    setRequestLocale("es");
    const { slug } = await params;
    return <InsightArticleView locale="es" slug={slug} />;
}
