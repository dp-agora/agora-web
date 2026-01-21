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
    Scale,
    Gavel,
    Globe,
    Shield,
    Users,
    Building2,
    Briefcase,
    Target,
    ArrowRight,
    MapPin
} from "lucide-react";
import Script from "next/script";

export default function LitigationDisputesPage() {
    const t = useTranslations("LitigationDisputes");
    const { openBooking } = useBooking();

    const coreServices = [
        { id: "commercial-litigation", icon: Gavel },
        { id: "corporate-disputes", icon: Users },
        { id: "arbitration-adr", icon: Scale },
        { id: "enforcement-recovery", icon: Shield }
    ];

    const valueFramework = [
        { id: "multi-forum", number: "01" },
        { id: "enforcement-record", number: "02" },
        { id: "institutional-discipline", number: "03" },
        { id: "counsel-integration", number: "04" }
    ];

    const clientTypes = [
        "multinationals",
        "regional-groups",
        "shareholders-investors",
        "international-firms",
        "boards-fiduciaries"
    ];

    const jurisdictions = [
        { id: "venezuela", icon: MapPin },
        { id: "latin-america", icon: Globe },
        { id: "international-forums", icon: Scale },
        { id: "enforcement-jurisdictions", icon: Shield }
    ];

    const relatedPractices = [
        { key: "banking", path: "/practices/banking-finance" },
        { key: "corporate", path: "/practices/corporate-ma" },
        { key: "compliance", path: "/practices/compliance-sanctions" },
        { key: "real-estate", path: "/practices/real-estate" }
    ];

    const teamMembers = [
        { slug: "alvaro-posada", key: "alvaro", image: "/assets/team/alvaro-posada.webp" },
        { slug: "ariana-cabrera", key: "ariana", image: "/assets/team/ariana-cabrera.webp" },
        { slug: "marco-gomez", key: "marco", image: "/assets/team/marco-gomez.webp" },
        { slug: "raul-sancristobal", key: "raul", image: "/assets/team/raul-sancristobal.webp" }
    ];

    // JSON-LD Schema
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Litigation & Dispute Resolution Legal Services",
        "provider": {
            "@type": "LegalService",
            "name": "Ágora Abogados",
            "url": "https://www.agoralatam.com"
        },
        "description": "Institutional-grade litigation and arbitration counsel for cross-border disputes, advising multinational corporations, regional business groups, and investors in complex commercial controversies, shareholder conflicts, and enforcement proceedings.",
        "areaServed": ["Venezuela", "Latin America", "United States", "European Union", "United Kingdom"],
        "serviceType": ["Commercial Litigation", "Corporate Disputes", "International Arbitration", "Cross-Border Enforcement", "Asset Recovery"]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Ágora Abogados",
        "url": "https://www.agoralatam.com",
        "logo": "https://www.agoralatam.com/assets/logo.png",
        "description": "Institutional-grade litigation and arbitration counsel for cross-border disputes across Venezuela, Latin America, and international forums.",
        "areaServed": {
            "@type": "Place",
            "name": "Latin America"
        },
        "knowsAbout": ["Commercial Litigation", "Shareholder Disputes", "International Arbitration", "Cross-Border Enforcement", "Asset Recovery", "ICC Arbitration", "ICSID Arbitration"]
    };

    return (
        <>
            <Script
                id="litigation-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <Script
                id="litigation-organization-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
                        imageSrc="/assets/practices/litigation-dispute-resolution.jpeg"
                        imageAlt="Ágora Litigation & Dispute Resolution legal practice"
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

                    {/* Our Approach Section */}
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
                                        {t("approach.badge")}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                        {t("approach.title")}
                                    </h2>
                                </motion.div>

                                <div className="space-y-6">
                                    <p className="text-slate-600 leading-relaxed">
                                        {t("approach.paragraph1")}
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">
                                        {t("approach.paragraph2")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Core Capabilities Section */}
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

                    {/* Who We Advise Section */}
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

                    {/* Jurisdictional Reach Section */}
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center space-y-4 mb-12"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                    {t("jurisdictions.badge")}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                    {t("jurisdictions.title")}
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                                {jurisdictions.map((jurisdiction, index) => (
                                    <motion.div
                                        key={jurisdiction.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 bg-slate-50 border border-slate-100 text-center"
                                    >
                                        <jurisdiction.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                                        <h3 className="font-bold text-primary text-sm">
                                            {t(`jurisdictions.items.${jurisdiction.id}.title`)}
                                        </h3>
                                        <p className="text-slate-500 text-xs mt-2">
                                            {t(`jurisdictions.items.${jurisdiction.id}.description`)}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Why Ágora Section */}
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

                    {/* Related Practices Section */}
                    <section className="py-20 bg-slate-50">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center space-y-4 mb-12"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/50">
                                    {t("related.badge")}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif text-primary">
                                    {t("related.title")}
                                </h2>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                                {relatedPractices.map((practice, index) => (
                                    <motion.div
                                        key={practice.key}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={practice.path}
                                            className="block p-6 bg-white border border-slate-100 hover:bg-primary group transition-all duration-300"
                                        >
                                            <h3 className="font-bold text-primary group-hover:text-white text-sm transition-colors">
                                                {t(`related.items.${practice.key}.title`)}
                                            </h3>
                                            <p className="text-slate-500 group-hover:text-slate-200 text-xs mt-2 transition-colors">
                                                {t(`related.items.${practice.key}.description`)}
                                            </p>
                                            <ArrowRight className="h-4 w-4 text-primary group-hover:text-white mt-4 transition-colors" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Practice Leadership Section */}
                    <section className="py-20 bg-white">
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
                                            className="block bg-slate-50 hover:bg-primary group transition-all duration-500 border border-slate-100 overflow-hidden"
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
