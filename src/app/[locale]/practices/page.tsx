"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useBooking } from "@/context/BookingContext";
import Script from "next/script";

// Practice configuration with slugs and cluster assignments
const practicesByCluster = {
    corporate: {
        practices: [{ slug: "corporate-ma", key: "corporateMA" }],
    },
    finance: {
        practices: [{ slug: "banking-finance", key: "bankingFinance" }],
    },
    disputes: {
        practices: [
            { slug: "litigation-disputes", key: "litigationDisputes" },
            { slug: "investment-arbitration", key: "investmentArbitration" },
        ],
    },
    regulatory: {
        practices: [
            { slug: "tax", key: "tax" },
            { slug: "compliance-sanctions", key: "complianceSanctions" },
            { slug: "environmental", key: "environmental" },
        ],
    },
    realAssets: {
        practices: [
            { slug: "real-estate", key: "realEstate" },
            { slug: "labor-employment", key: "laborEmployment" },
        ],
    },
};

// Flatten practices for schema generation
const allPractices = Object.values(practicesByCluster).flatMap(
    (cluster) => cluster.practices
);

export default function PracticesPage() {
    const t = useTranslations("PracticesHub");
    const { openBooking } = useBooking();

    // Generate JSON-LD Schema
    const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: t("hero.title"),
        description: t("hero.subtitle"),
        url: "https://www.agoralatam.com/practices",
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: allPractices.length,
            itemListElement: allPractices.map((practice, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "Service",
                    "@id": `https://www.agoralatam.com/practices/${practice.slug}`,
                    name: t(`practices.${practice.key}.title`),
                    description: t(`practices.${practice.key}.description`),
                    provider: {
                        "@id": "https://www.agoralatam.com/#organization",
                    },
                },
            })),
        },
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.agoralatam.com/#organization",
        name: "Ágora Abogados",
        url: "https://www.agoralatam.com",
        logo: "https://www.agoralatam.com/icons/agora-logo.svg",
    };

    return (
        <>
            <Script
                id="collection-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionPageSchema),
                }}
            />
            <Script
                id="organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />

            <Navbar />

            <main>
                {/* Hero Section */}
                <PageHeader
                    badge={t("hero.badge")}
                    title={t("hero.title")}
                    subtitle={t("hero.subtitle")}
                    videoSrc="/assets/video/agora-eco.mp4"
                    videoOpacity={0.75}
                    overlayClassName="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/45"
                />

                {/* Practice Clusters */}
                <section className="py-20 md:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        {/* Cluster 1: Corporate & Transactions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif text-[#1a2b4a] mb-8">
                                {t("clusters.corporate.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {practicesByCluster.corporate.practices.map((practice) => (
                                    <PracticeCard
                                        key={practice.slug}
                                        slug={practice.slug}
                                        title={t(`practices.${practice.key}.title`)}
                                        description={t(`practices.${practice.key}.description`)}
                                        linkText={t("linkText")}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Cluster 2: Finance & Capital Markets */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif text-[#1a2b4a] mb-8">
                                {t("clusters.finance.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {practicesByCluster.finance.practices.map((practice) => (
                                    <PracticeCard
                                        key={practice.slug}
                                        slug={practice.slug}
                                        title={t(`practices.${practice.key}.title`)}
                                        description={t(`practices.${practice.key}.description`)}
                                        linkText={t("linkText")}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Cluster 3: Disputes & Arbitration */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif text-[#1a2b4a] mb-8">
                                {t("clusters.disputes.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {practicesByCluster.disputes.practices.map((practice) => (
                                    <PracticeCard
                                        key={practice.slug}
                                        slug={practice.slug}
                                        title={t(`practices.${practice.key}.title`)}
                                        description={t(`practices.${practice.key}.description`)}
                                        linkText={t("linkText")}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Cluster 4: Regulatory, Tax & Compliance */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif text-[#1a2b4a] mb-8">
                                {t("clusters.regulatory.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {practicesByCluster.regulatory.practices.map((practice) => (
                                    <PracticeCard
                                        key={practice.slug}
                                        slug={practice.slug}
                                        title={t(`practices.${practice.key}.title`)}
                                        description={t(`practices.${practice.key}.description`)}
                                        linkText={t("linkText")}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Cluster 5: Real Assets & Employment */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif text-[#1a2b4a] mb-8">
                                {t("clusters.realAssets.title")}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {practicesByCluster.realAssets.practices.map((practice) => (
                                    <PracticeCard
                                        key={practice.slug}
                                        slug={practice.slug}
                                        title={t(`practices.${practice.key}.title`)}
                                        description={t(`practices.${practice.key}.description`)}
                                        linkText={t("linkText")}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8f9fa] to-white">
                    <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-serif text-[#1a2b4a] mb-6">
                                {t("cta.title")}
                            </h2>
                            <p className="text-lg text-[#4a5568] mb-8 max-w-2xl mx-auto">
                                {t("cta.description")}
                            </p>
                            <button
                                onClick={openBooking}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a2b4a] text-white font-medium rounded-sm hover:bg-[#2a3b5a] transition-colors duration-300"
                            >
                                {t("cta.button")}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}

// Practice Card Component
function PracticeCard({
    slug,
    title,
    description,
    linkText,
}: {
    slug: string;
    title: string;
    description: string;
    linkText: string;
}) {
    return (
        <Link href={`/practices/${slug}`}>
            <motion.div
                whileHover={{ y: -2 }}
                className="group h-full p-6 bg-white border border-[#e2e8f0] hover:border-[#1a2b4a]/30 transition-all duration-300"
            >
                <h3 className="text-lg font-serif text-[#1a2b4a] mb-3 group-hover:text-[#5575C4] transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
                    {description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-[#5575C4] font-medium group-hover:underline">
                    {linkText}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
            </motion.div>
        </Link>
    );
}
