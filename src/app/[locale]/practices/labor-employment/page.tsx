"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useBooking } from "@/context/BookingContext";
import Script from "next/script";
import {
    Scale,
    Users,
    Briefcase,
    FileText,
    TrendingUp,
    Globe,
    Shield,
    Handshake,
    ChevronDown,
    ArrowRight
} from "lucide-react";

export default function LaborEmploymentPage() {
    const t = useTranslations("LaborEmployment");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openBooking } = useBooking();

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

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
        { key: "litigation", icon: Scale },
        { key: "bargaining", icon: Users },
        { key: "dueDiligence", icon: Briefcase },
        { key: "compliance", icon: FileText },
        { key: "compensation", icon: TrendingUp },
        { key: "mobility", icon: Globe },
        { key: "policies", icon: Shield },
        { key: "restructuring", icon: Handshake }
    ];

    const definitions = ["individual", "collective", "crossBorder"];
    const valuePillars = ["integrated", "expertise", "litigation", "pragmatic"];
    const matters = ["collectiveAction", "oilGasNegotiation", "manufacturingAcquisition", "techRelocation", "familyRetention", "financialAudit"];
    const clientTypes = ["multinational", "regional", "family", "privateEquity", "stateOwned"];
    const relatedPractices = [
        { key: "corporate", path: "/practices/corporate-ma" },
        { key: "tax", path: "/practices/tax" },
        { key: "litigation", path: "/practices/litigation" }
    ];
    const faqs = ["individual", "contingencies", "compliance", "collective", "terminations", "crossBorder"];

    const teamMembers = [
        { slug: "ariana-cabrera", key: "ariana", image: "/assets/team/ariana-cabrera.webp" },
        { slug: "lizeth-reyes", key: "lizeth", image: "/assets/team/lizeth-reyes.webp" },
        { slug: "andreina-flores", key: "andreina", image: "/assets/team/andreina-flores.webp" }
    ];

    // Schema markup for SEO
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Labor & Employment Legal Services",
        "provider": {
            "@type": "LegalService",
            "name": "Ágora",
            "url": "https://www.agoralatam.com"
        },
        "areaServed": {
            "@type": "Place",
            "name": "Latin America"
        },
        "description": t("intro.lead")
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": t(`faqs.items.${faq}.question`),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": t(`faqs.items.${faq}.answer`)
            }
        }))
    };

    return (
        <>
            <Script
                id="labor-employment-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="labor-employment-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Navbar />

            {/* Hero Section */}
            <PageHeader
                badge={t("hero.badge")}
                title={t("hero.title")}
                subtitle={t("hero.subtitle")}
                description={t("intro.lead")}
                imageSrc="/assets/practices/labor-employment.jpeg"
                imageAlt="Ágora Labor & Employment legal practice"
                imageOpacity={0.7}
                overlayClassName="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/45"
            />

            {/* Intro Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            {t("practice.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mt-4 mb-8">
                            {t("practice.title")}
                        </h2>
                    </motion.div>

                    {/* Definition Blocks */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-8 mt-12"
                    >
                        {definitions.map((def) => (
                            <motion.div
                                key={def}
                                variants={fadeIn}
                                className="bg-slate-50 p-8 rounded-lg border-l-4 border-primary"
                            >
                                <h3 className="text-xl font-serif text-primary mb-4">
                                    {t(`practice.definitions.${def}.title`)}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {t(`practice.definitions.${def}.content`)}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Core Services Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            {t("services.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mt-4">
                            {t("services.title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {services.map(({ key, icon: Icon }) => (
                            <motion.div
                                key={key}
                                variants={fadeIn}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                            >
                                <Icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-lg font-serif text-primary mb-2">
                                    {t(`services.items.${key}.title`)}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t(`services.items.${key}.description`)}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Value Framework Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="font-medium tracking-wider uppercase text-sm text-white/80">
                            {t("value.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif mt-4">
                            {t("value.title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {valuePillars.map((pillar, index) => (
                            <motion.div
                                key={pillar}
                                variants={fadeIn}
                                className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
                            >
                                <span className="text-4xl font-serif text-white/30">
                                    0{index + 1}
                                </span>
                                <h3 className="text-xl font-serif mt-4 mb-3">
                                    {t(`value.pillars.${pillar}.title`)}
                                </h3>
                                <p className="text-white/80 leading-relaxed">
                                    {t(`value.pillars.${pillar}.description`)}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Representative Matters Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            {t("matters.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mt-4">
                            {t("matters.title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-6"
                    >
                        {matters.map((matter, index) => (
                            <motion.div
                                key={matter}
                                variants={fadeIn}
                                className="flex items-start gap-6 p-6 bg-slate-50 rounded-lg"
                            >
                                <span className="text-3xl font-serif text-primary/30 min-w-[3rem]">
                                    0{index + 1}
                                </span>
                                <div>
                                    <h3 className="text-lg font-serif text-primary mb-2">
                                        {t(`matters.items.${matter}.title`)}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {t(`matters.items.${matter}.description`)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Client Types Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            {t("clients.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mt-4">
                            {t("clients.title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {clientTypes.map((client) => (
                            <motion.div
                                key={client}
                                variants={fadeIn}
                                className="bg-white p-6 rounded-lg shadow-sm text-center"
                            >
                                <h3 className="text-lg font-serif text-primary mb-2">
                                    {t(`clients.types.${client}.title`)}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t(`clients.types.${client}.description`)}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Related Practices Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-12"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            {t("related.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mt-4">
                            {t("related.title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-6"
                    >
                        {relatedPractices.map(({ key, path }) => (
                            <motion.div key={key} variants={fadeIn}>
                                <Link
                                    href={path}
                                    className="block p-6 bg-slate-50 rounded-lg hover:bg-primary hover:text-white transition-colors group"
                                >
                                    <h3 className="text-lg font-serif mb-2 group-hover:text-white">
                                        {t(`related.practices.${key}.title`)}
                                    </h3>
                                    <p className="text-slate-600 text-sm group-hover:text-white/80">
                                        {t(`related.practices.${key}.description`)}
                                    </p>
                                    <ArrowRight className="w-5 h-5 mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Practice Leadership Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            {t("leadership.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mt-4">
                            {t("leadership.title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                    >
                        {teamMembers.map(({ slug, key, image }) => (
                            <motion.div key={slug} variants={fadeIn}>
                                <Link
                                    href={`/team/${slug}`}
                                    className="block group"
                                >
                                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                                        <Image
                                            src={image}
                                            alt={t(`leadership.members.${key}.name`)}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="text-xl font-serif text-primary group-hover:text-primary/80 transition-colors">
                                        {t(`leadership.members.${key}.name`)}
                                    </h3>
                                    <p className="text-slate-600 text-sm">
                                        {t(`leadership.members.${key}.role`)}
                                    </p>
                                    <p className="text-slate-500 text-sm mt-1">
                                        {t(`leadership.members.${key}.focus`)}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">
                            {t("faqs.badge")}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif text-primary mt-4">
                            {t("faqs.title")}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq}
                                variants={fadeIn}
                                className="border border-slate-200 rounded-lg overflow-hidden"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-serif text-primary pr-4">
                                        {t(`faqs.items.${faq}.question`)}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary transition-transform ${openFaq === index ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-6">
                                        <p className="text-slate-600 leading-relaxed">
                                            {t(`faqs.items.${faq}.answer`)}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">
                            {t("cta.title")}
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                            {t("cta.description")}
                        </p>
                        <button
                            onClick={openBooking}
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-white/90 transition-colors"
                        >
                            {t("cta.button")}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
