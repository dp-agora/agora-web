import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Link } from "@/i18n/routing";
import { getInsightBySlug, getAllInsights } from "@/lib/insights";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

type Props = {
    params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        getAllInsights(locale as "en" | "es").map((insight) => ({
            locale,
            slug: insight.slug,
        }))
    );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const insight = getInsightBySlug(slug);
    if (!insight) return { title: "Not Found" };

    const baseUrl = "https://www.agoralatam.com";
    const isSpanish = locale === "es";
    const enSlug = insight.lang === "en" ? insight.slug : insight.translationSlug;
    const esSlug = insight.lang === "es" ? insight.slug : insight.translationSlug;
    const enPath = `/insights/${enSlug}`;
    const esPath = `/es/insights/${esSlug}`;
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

export default async function InsightArticlePage({ params }: Props) {
    const resolvedParams = await params;
    const slug = typeof resolvedParams.slug === "string" ? resolvedParams.slug : "";
    const locale = resolvedParams.locale;

    if (!slug) notFound();

    const t = await getTranslations({ locale, namespace: "InsightsPage" });
    const insight = getInsightBySlug(slug);

    if (!insight) notFound();

    const baseUrl = "https://www.agoralatam.com";
    const isSpanish = locale === "es";
    const enSlug = insight.lang === "en" ? insight.slug : insight.translationSlug;
    const esSlug = insight.lang === "es" ? insight.slug : insight.translationSlug;
    const currentPath = isSpanish ? `/es/insights/${esSlug}` : `/insights/${enSlug}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${baseUrl}${currentPath}#article`,
        "headline": insight.seoTitle || insight.title,
        "description": insight.seoDescription || insight.excerpt,
        "datePublished": insight.date,
        "dateModified": insight.lastUpdated || insight.date,
        "author": {
            "@type": "Person",
            "name": insight.author,
            "url": insight.authorUrl
                ? (insight.authorUrl.startsWith("http")
                    ? insight.authorUrl
                    : `${baseUrl}${insight.authorUrl}`)
                : undefined,
            "worksFor": { "@id": `${baseUrl}/#organization` },
        },
        "publisher": { "@id": `${baseUrl}/#organization` },
        "isPartOf": { "@id": `${baseUrl}/#website` },
        "url": `${baseUrl}${currentPath}`,
        "inLanguage": locale,
        "articleSection": insight.category,
        "keywords": insight.tags?.join(", "),
        ...(insight.ogImage ? { "image": `${baseUrl}${insight.ogImage}` } : {}),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <Navbar />
            <main className="min-h-screen flex flex-col">
                <article className="flex-1">
                    <header className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-slate-50 border-b">
                        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
                            <Link
                                href="/insights"
                                className="inline-flex items-center gap-2 text-primary/70 hover:text-primary text-sm font-medium mb-8 transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                {t("article.backToInsights")}
                            </Link>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-4">
                                <span>{insight.category}</span>
                                <span>{insight.date}</span>
                                <span>{insight.readingTime}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight mb-6">
                                {insight.title}
                            </h1>
                            <p className="text-slate-600 text-lg mb-4">{insight.excerpt}</p>
                            <div className="flex flex-wrap items-center gap-4 mt-4">
                                <span className="text-sm text-slate-600">
                                    <span className="font-medium text-slate-500">{t("article.authorLabel")}: </span>
                                    {insight.authorUrl ? (
                                        insight.authorUrl.startsWith('http://') || insight.authorUrl.startsWith('https://') ? (
                                            <a
                                                href={insight.authorUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary font-medium hover:underline"
                                            >
                                                {insight.author}
                                            </a>
                                        ) : (
                                            <Link
                                                href={insight.authorUrl as `/${string}`}
                                                className="text-primary font-medium hover:underline"
                                            >
                                                {insight.author}
                                            </Link>
                                        )
                                    ) : (
                                        <span className="font-medium">{insight.author}</span>
                                    )}
                                    {insight.authorTitle && (
                                        <span className="text-slate-500"> · {insight.authorTitle}</span>
                                    )}
                                </span>
                            </div>
                        </div>
                    </header>
                    <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
                        <div className="max-w-3xl">
                            {insight.content?.trim() ? (
                                <div className="prose prose-slate prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
                                        {insight.content}
                                    </ReactMarkdown>
                                </div>
                            ) : (
                                <p className="text-slate-500 italic">{t("article.contentUnavailable")}</p>
                            )}
                            <div className="mt-12 py-10 px-8 bg-slate-50 border border-slate-200 text-center">
                                <p className="text-base font-medium text-primary mb-6">
                                    {t("article.ctaHeading")}
                                </p>
                                <a
                                    href="https://calendly.com/aregalado-agoralatam/30min?month=2026-03"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-primary text-white text-sm font-bold uppercase tracking-widest px-8 py-4 hover:bg-primary/90 transition-colors"
                                >
                                    {t("article.ctaButton")}
                                </a>
                            </div>
                            <p className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
                                {t("article.disclaimer")}
                            </p>
                        </div>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
