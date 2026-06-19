import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { getAllInsights } from "@/lib/insights";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InsightsList } from "@/components/insights/InsightsList";

type Props = {
    locale: "en" | "es";
};

export async function InsightsIndexView({ locale }: Props) {
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: "InsightsPage" });
    const insights = getAllInsights(locale);

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
                            <InsightsList
                                insights={insights}
                                readMoreLabel={t("readMore")}
                                locale={locale}
                                filterAllLabel={t("filterAll")}
                                filterAllAuthorsLabel={t("filterAllAuthors")}
                                noResultsLabel={t("noResults")}
                            />
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
