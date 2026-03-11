import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Link } from "@/i18n/routing";
import { getAllInsights } from "@/lib/insights";
import { getTranslations } from "next-intl/server";
import { ArrowRight } from "lucide-react";
import type { Insight } from "@/types/insight";

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function InsightsPage({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations("InsightsPage");
    const insights = getAllInsights(locale as "en" | "es");

    return (
        <>
            <Navbar />
            <main>
                <PageHeader
                    title={t("hero.title")}
                    subtitle={t("hero.subtitle")}
                    variant="institutional"
                    imageSrc="/assets/insights/insights-image.webp"
                    imageOpacity={0.45}
                    imageAlt="Insights"
                />
                <section className="py-20 md:py-28 bg-white">
                    <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
                        {insights.length === 0 ? (
                            <p className="text-slate-500 text-lg">{t("noInsights")}</p>
                        ) : (
                            <ul className="space-y-8">
                                {insights.map((insight: Insight) => (
                                    <li key={insight.slug}>
                                        <InsightCard insight={insight} readMoreLabel={t("readMore")} />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

function InsightCard({
    insight,
    readMoreLabel,
}: {
    insight: Insight;
    readMoreLabel: string;
}) {
    return (
        <article className="border-b border-slate-200 pb-8 last:border-b-0">
            <Link
                href={`/insights/${insight.slug}`}
                className="group block outline-none"
            >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">
                        {insight.category}
                    </span>
                    <span className="text-sm text-slate-500">
                        {insight.date} · {insight.readingTime}
                    </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-primary group-hover:text-primary/80 transition-colors mb-3">
                    {insight.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4 max-w-3xl">
                    {insight.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    {readMoreLabel}
                    <ArrowRight className="h-4 w-4" />
                </span>
            </Link>
        </article>
    );
}
