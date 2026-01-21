"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useBooking } from "@/context/BookingContext";
import {
    Building2,
    Globe,
    Users,
    FileText,
    TrendingUp,
    Shield,
    Scale,
    Briefcase,
    ArrowRight,
    ChevronDown
} from "lucide-react";
import { useState } from "react";
import Script from "next/script";

export default function CorporateMaPage() {
    const t = useTranslations("CorporateMA");
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const { openBooking } = useBooking();

    const coreServices = [
        { id: "buy-side", icon: TrendingUp },
        { id: "sell-side", icon: Building2 },
        { id: "joint-ventures", icon: Users },
        { id: "restructurings", icon: Scale },
        { id: "minority-investments", icon: Briefcase },
        { id: "cross-border", icon: Globe },
        { id: "governance", icon: Shield },
        { id: "due-diligence", icon: FileText }
    ];

    const valueFramework = [
        { id: "cross-border-execution", number: "01" },
        { id: "technical-rigor", number: "02" },
        { id: "commercial-alignment", number: "03" },
        { id: "governance-focus", number: "04" }
    ];

    const representativeMatters = [
        "strategic-acquisition",
        "cross-border-jv",
        "corporate-restructuring",
        "minority-stake",
        "multinational-exit"
    ];

    const clientTypes = [
        "corporates",
        "family-offices",
        "multinationals",
        "founders",
        "investors"
    ];

    const teamMembers = [
        // Partners
        { slug: "alvaro-posada", key: "alvaro", image: "/assets/team/alvaro-posada.webp" },
        { slug: "maria-eugenia-reyes", key: "maria", image: "/assets/team/maria-eugenia.webp" },
        // Senior Associates
        { slug: "marco-gomez", key: "marco", image: "/assets/team/marco-gomez.webp" },
        { slug: "barbara-briceno", key: "barbara", image: "/assets/team/barbara-briceno.webp" },
        { slug: "manuel-domingo", key: "manuel", image: "/assets/team/manuel-domingo.webp" },
        { slug: "dayana-veliz", key: "dayana", image: "/assets/team/dayana-veliz.webp" },
        // Junior Associates
        { slug: "raul-sancristobal", key: "raul", image: "/assets/team/raul-sancristobal.webp" },
        { slug: "rodrigo-colmenares", key: "rodrigo", image: "/assets/team/rodrigo-colmenares.webp" }
    ];

    const faqs = [0, 1, 2, 3, 4, 5];

    // JSON-LD Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "@id": "https://www.agoralatam.com/practices/corporate-ma#service",
        "name": "Corporate & M&A Legal Services",
        "provider": {
            "@id": "https://www.agoralatam.com/#organization"
        },
        "description": "Cross-border M&A, joint ventures, corporate restructurings, and governance advisory for strategic corporates, family offices, and multinationals across Latin America.",
        "areaServed": ["Venezuela", "Mexico", "Latin America", "United States", "Europe"],
        "serviceType": ["Mergers & Acquisitions", "Joint Ventures", "Corporate Restructuring", "Cross-Border Transactions", "Corporate Governance"]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((i) => ({
            "@type": "Question",
            "name": t(`faqs.${i}.question`),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": t(`faqs.${i}.answer`)
            }
        }))
    };

    return (
        <>
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                    {/* Hero Section */}
                    <PageHeader
                        title={t("hero.title")}
                        subtitle={t("hero.subtitle")}
                        badge={t("hero.badge")}
                        description={t("hero.description")}
                        imageSrc="/assets/practices/corporate-mergers-acquisitions.jpeg"
                        imageAlt="Ágora Corporate & M&A legal practice"
                        imageOpacity={0.7}
                        overlayClassName="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/30 to-primary/45"
                    />

                    {/* Intro Section */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 lg:px-12">
                            <div className="max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-8"
                                >
                                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-serif italic border-l-4 border-primary/20 pl-8">
                                        {t("intro.lead")}
                                    </p>
                                    <p className="text-lg text-slate-600 leading-relaxed">
                                        {t("intro.body")}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    {/* Our Practice Section */}
                    <section className="py-20 bg-slate-50">
                        <div className="container mx-auto px-6 lg:px-12">
                            <div className="max-w-4xl mx-auto space-y-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-4"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                        {t("practice.badge")}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                        {t("practice.title")}
                                    </h2>
                                </motion.div>

                                <div className="space-y-6">
                                    <p className="text-slate-600 leading-relaxed">
                                        {t("practice.paragraph1")}
                                    </p>

                                    {/* Definition Block 1 */}
                                    <div className="bg-white p-8 border-l-4 border-primary/30">
                                        <h3 className="text-lg font-bold text-primary mb-3">
                                            {t("practice.definition1.title")}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {t("practice.definition1.content")}
                                        </p>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed">
                                        {t("practice.paragraph2")}
                                    </p>

                                    {/* Definition Block 2 */}
                                    <div className="bg-white p-8 border-l-4 border-primary/30">
                                        <h3 className="text-lg font-bold text-primary mb-3">
                                            {t("practice.definition2.title")}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {t("practice.definition2.content")}
                                        </p>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed">
                                        {t("practice.paragraph3")}
                                    </p>

                                    {/* Definition Block 3 */}
                                    <div className="bg-white p-8 border-l-4 border-primary/30">
                                        <h3 className="text-lg font-bold text-primary mb-3">
                                            {t("practice.definition3.title")}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {t("practice.definition3.content")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Services Section */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center space-y-4 mb-16"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                    {t("services.badge")}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                    {t("services.title")}
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {coreServices.map((service, index) => (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-8 bg-slate-50 hover:bg-primary transition-all duration-500 border border-slate-100"
                                    >
                                        <div className="flex items-start gap-4">
                                            <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors flex-shrink-0 mt-1" />
                                            <div className="space-y-3">
                                                <h3 className="text-xl font-serif text-primary group-hover:text-white transition-colors">
                                                    {t(`services.items.${service.id}.title`)}
                                                </h3>
                                                <p className="text-slate-600 group-hover:text-slate-200 transition-colors text-sm leading-relaxed">
                                                    {t(`services.items.${service.id}.description`)}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* How We Add Value Section */}
                    <section className="py-20 bg-slate-900 text-white">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center space-y-4 mb-16"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
                                    {t("value.badge")}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-white">
                                    {t("value.title")}
                                </h2>
                                <p className="text-slate-400 max-w-2xl mx-auto">
                                    {t("value.subtitle")}
                                </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {valueFramework.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="space-y-4"
                                    >
                                        <span className="text-4xl font-serif text-white/10 italic">
                                            {item.number}
                                        </span>
                                        <h3 className="text-lg font-bold text-white">
                                            {t(`value.items.${item.id}.title`)}
                                        </h3>
                                        <div className="h-px w-8 bg-white/20" />
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {t(`value.items.${item.id}.description`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Representative Matters Section */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4 mb-12"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                    {t("matters.badge")}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                    {t("matters.title")}
                                </h2>
                            </motion.div>

                            <div className="space-y-6 max-w-4xl">
                                {representativeMatters.map((matter, index) => (
                                    <motion.div
                                        key={matter}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4 p-6 bg-slate-50 border-l-4 border-primary/20 hover:border-primary transition-colors"
                                    >
                                        <span className="text-2xl font-serif text-primary/20 italic">
                                            0{index + 1}
                                        </span>
                                        <div>
                                            <h3 className="font-bold text-primary mb-2">
                                                {t(`matters.items.${matter}.title`)}
                                            </h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                {t(`matters.items.${matter}.description`)}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Who We Serve Section */}
                    <section className="py-20 bg-slate-50">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center space-y-4 mb-12"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                    {t("clients.badge")}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                    {t("clients.title")}
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
                                {clientTypes.map((client, index) => (
                                    <motion.div
                                        key={client}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 bg-white border border-slate-100 text-center hover:shadow-lg transition-shadow"
                                    >
                                        <h3 className="font-bold text-primary text-sm">
                                            {t(`clients.items.${client}.title`)}
                                        </h3>
                                        <p className="text-slate-500 text-xs mt-2">
                                            {t(`clients.items.${client}.description`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Related Practice Areas */}
                    <section className="py-16 bg-white border-t border-slate-100">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4 mb-8"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                    {t("related.badge")}
                                </span>
                                <h2 className="text-2xl font-serif text-primary">
                                    {t("related.title")}
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <Link
                                    href="/practices/banking-finance"
                                    className="p-4 bg-slate-50 hover:bg-primary hover:text-white transition-all text-sm font-medium text-primary text-center"
                                >
                                    {t("related.links.banking")}
                                </Link>
                                <Link
                                    href="/practices/capital-markets"
                                    className="p-4 bg-slate-50 hover:bg-primary hover:text-white transition-all text-sm font-medium text-primary text-center"
                                >
                                    {t("related.links.capital-markets")}
                                </Link>
                                <Link
                                    href="/practices/tax"
                                    className="p-4 bg-slate-50 hover:bg-primary hover:text-white transition-all text-sm font-medium text-primary text-center"
                                >
                                    {t("related.links.tax")}
                                </Link>
                                <Link
                                    href="/practices/employment"
                                    className="p-4 bg-slate-50 hover:bg-primary hover:text-white transition-all text-sm font-medium text-primary text-center"
                                >
                                    {t("related.links.employment")}
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Practice Leadership Section */}
                    <section className="py-20 bg-slate-50">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4 mb-12"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                    {t("leadership.badge")}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                    {t("leadership.title")}
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {teamMembers.map((member, index) => (
                                    <motion.div
                                        key={member.slug}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={`/team/${member.slug}`}
                                            className="block bg-white hover:bg-primary group transition-all duration-500 border border-slate-100 overflow-hidden"
                                        >
                                            <div className="relative w-full aspect-[4/5] overflow-hidden">
                                                <Image
                                                    src={member.image}
                                                    alt={t(`leadership.members.${member.key}.name`)}
                                                    fill
                                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="font-bold text-primary group-hover:text-white transition-colors">
                                                    {t(`leadership.members.${member.key}.name`)}
                                                </h3>
                                                <p className="text-slate-500 group-hover:text-slate-200 text-sm mt-1 transition-colors">
                                                    {t(`leadership.members.${member.key}.role`)}
                                                </p>
                                                <p className="text-slate-400 group-hover:text-slate-300 text-xs mt-3 transition-colors">
                                                    {t(`leadership.members.${member.key}.focus`)}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center space-y-4 mb-12"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                    {t("faq.badge")}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                    {t("faq.title")}
                                </h2>
                            </motion.div>

                            <div className="max-w-3xl mx-auto space-y-4">
                                {faqs.map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-slate-50 border border-slate-100"
                                    >
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full p-6 flex items-center justify-between text-left"
                                        >
                                            <h3 className="font-bold text-primary pr-4">
                                                {t(`faqs.${i}.question`)}
                                            </h3>
                                            <ChevronDown
                                                className={`h-5 w-5 text-primary transition-transform flex-shrink-0 ${openFaq === i ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>
                                        {openFaq === i && (
                                            <div className="px-6 pb-6">
                                                <p className="text-slate-600 leading-relaxed">
                                                    {t(`faqs.${i}.answer`)}
                                                </p>
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="py-20 bg-primary text-white">
                        <div className="container mx-auto px-6 lg:px-12">
                            <div className="max-w-3xl mx-auto text-center space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-3xl md:text-4xl font-serif">
                                        {t("cta.title")}
                                    </h2>
                                    <p className="text-slate-300 text-lg">
                                        {t("cta.description")}
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <button
                                        onClick={openBooking}
                                        className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer"
                                    >
                                        {t("cta.button")}
                                        <ArrowRight className="h-4 w-4" />
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
