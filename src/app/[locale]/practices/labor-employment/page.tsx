"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Scale, Users, FileText, TrendingUp, Briefcase, Globe, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import Script from "next/script";

export default function LaborEmploymentPage() {
    const t = useTranslations("LaborEmployment");
    const { openBooking } = useBooking();
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const services = [
        {
            icon: Scale,
            key: "litigation",
            title: t("services.litigation.title"),
            description: t("services.litigation.description")
        },
        {
            icon: Users,
            key: "bargaining",
            title: t("services.bargaining.title"),
            description: t("services.bargaining.description")
        },
        {
            icon: Briefcase,
            key: "dueDiligence",
            title: t("services.dueDiligence.title"),
            description: t("services.dueDiligence.description")
        },
        {
            icon: FileText,
            key: "compliance",
            title: t("services.compliance.title"),
            description: t("services.compliance.description")
        },
        {
            icon: TrendingUp,
            key: "compensation",
            title: t("services.compensation.title"),
            description: t("services.compensation.description")
        },
        {
            icon: Globe,
            key: "mobility",
            title: t("services.mobility.title"),
            description: t("services.mobility.description")
        }
    ];

    const values = ["integrated", "expertise", "experience", "pragmatic"];

    const sectors = ["multinational", "regional", "family", "privateEquity"];

    const faqs = ["individual", "contingencies", "risks", "negotiate", "terminations", "crossBorder"];

    const teamMembers = [
        { slug: "ariana-cabrera", key: "ariana", image: "/assets/team/ariana-cabrera.webp" },
        { slug: "lizeth-reyes", key: "lizeth", image: "/assets/team/lizeth-reyes.webp" },
        { slug: "andreina-flores", key: "andreina", image: "/assets/team/andreina-flores.webp" }
    ];

    // Schema markup for SEO
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Labor & Employment Law",
        "provider": {
            "@type": "LegalService",
            "name": "Agora",
            "url": "https://agoralatam.com"
        },
        "areaServed": {
            "@type": "Place",
            "name": "Latin America"
        },
        "description": t("hero.subtitle"),
        "serviceType": "Labor and Employment Law"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": t(`faqs.${faq}.question`),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": t(`faqs.${faq}.answer`)
            }
        }))
    };

    return (
        <>
            <Script id="labor-employment-service-schema" type="application/ld+json">
                {JSON.stringify(serviceSchema)}
            </Script>
            <Script id="labor-employment-faq-schema" type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </Script>

            <Navbar />

            <div className="min-h-screen">
                {/* Hero Section */}
                <PageHeader
                    title={t("hero.title")}
                    subtitle={t("hero.subtitle")}
                />

                {/* Main Content */}
                <div className="container mx-auto px-4 py-16 max-w-7xl">
                    {/* Definition Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                                {t("definition.badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                                {t("definition.title")}
                            </h2>
                            <div className="prose prose-lg text-gray-700 space-y-4">
                                <p>{t("definition.paragraph1")}</p>
                                <p>{t("definition.paragraph2")}</p>
                                <p>{t("definition.paragraph3")}</p>
                            </div>
                        </div>
                    </motion.section>

                    {/* Core Services */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                {t("services.badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {t("services.title")}
                            </h2>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {services.map(({ icon: Icon, key, title, description }) => (
                                <motion.div
                                    key={key}
                                    variants={fadeIn}
                                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* How We Add Value */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-white text-primary rounded-full text-sm font-semibold mb-4">
                                {t("value.badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {t("value.title")}
                            </h2>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                        >
                            {values.map((value) => (
                                <motion.div
                                    key={value}
                                    variants={fadeIn}
                                    className="bg-white p-8 rounded-xl"
                                >
                                    <h3 className="text-xl font-bold mb-3 text-gray-900">
                                        {t(`value.${value}.title`)}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {t(`value.${value}.description`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* Representative Matters */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                                {t("matters.badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                                {t("matters.title")}
                            </h2>
                            <ul className="space-y-4">
                                {[1, 2, 3, 4, 5, 6].map((num) => (
                                    <motion.li
                                        key={num}
                                        variants={fadeIn}
                                        className="flex items-start gap-3 text-gray-700"
                                    >
                                        <span className="text-primary mt-1">✓</span>
                                        <span>{t(`matters.matter${num}`)}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.section>

                    {/* Who We Serve */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                {t("sectors.badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {t("sectors.title")}
                            </h2>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
                        >
                            {sectors.map((sector) => (
                                <motion.div
                                    key={sector}
                                    variants={fadeIn}
                                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-primary/30 transition-colors"
                                >
                                    <h3 className="font-bold text-lg mb-2 text-gray-900">
                                        {t(`sectors.${sector}.title`)}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {t(`sectors.${sector}.description`)}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* Related Practice Areas */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                                {t("related.badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                                {t("related.title")}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {["corporate", "tax", "litigation", "immigration"].map((practice) => (
                                    <Link
                                        key={practice}
                                        href={t(`related.${practice}.link`)}
                                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all group"
                                    >
                                        <div>
                                            <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                                {t(`related.${practice}.title`)}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {t(`related.${practice}.description`)}
                                            </p>
                                        </div>
                                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-primary rotate-[-90deg]" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Practice Leadership */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                                {t("leadership.badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {t("leadership.title")}
                            </h2>
                        </div>

                        <motion.div
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid md:grid-cols-3 gap-8"
                        >
                            {teamMembers.map(({ slug, key, image }) => (
                                <motion.div key={slug} variants={fadeIn}>
                                    <Link href={`/team/${slug}`} className="group block">
                                        <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                                            <Image
                                                src={image}
                                                alt={t(`leadership.members.${key}.name`)}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                                            {t(`leadership.members.${key}.name`)}
                                        </h3>
                                        <p className="text-primary font-semibold mb-2">
                                            {t(`leadership.members.${key}.role`)}
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            {t(`leadership.members.${key}.focus`)}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.section>

                    {/* FAQs */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mb-20"
                    >
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                                {t("faqs.badge")}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                                {t("faqs.title")}
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={faq}
                                        variants={fadeIn}
                                        className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-gray-900 pr-8">
                                                {t(`faqs.${faq}.question`)}
                                            </span>
                                            {openFaqIndex === index ? (
                                                <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                            )}
                                        </button>
                                        {openFaqIndex === index && (
                                            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                                <p className="text-gray-700 leading-relaxed">
                                                    {t(`faqs.${faq}.answer`)}
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* CTA Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t("cta.title")}
                        </h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            {t("cta.subtitle")}
                        </p>
                        <button
                            onClick={openBooking}
                            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                        >
                            {t("cta.button")}
                        </button>
                    </motion.section>
                </div>
            </div>

            <Footer />
        </>
    );
}
