"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Shield, TrendingUp, X, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ServicesPage() {

    const t = useTranslations("ServicesPage");
    const [selectedService, setSelectedService] = useState<any>(null);

    const services = [
        {
            id: "m-and-a",
            title: t("services.m-and-a.title"),
            icon: TrendingUp,
            description: t("services.m-and-a.desc"),
            fullContent: t("services.m-and-a.fullContent"),
            features: [
                t("services.m-and-a.features.0"),
                t("services.m-and-a.features.1"),
                t("services.m-and-a.features.2"),
                t("services.m-and-a.features.3")
            ]
        },
        {
            id: "banking",
            title: t("services.banking.title"),
            icon: Shield,
            description: t("services.banking.desc"),
            fullContent: t("services.banking.fullContent"),
            features: [
                t("services.banking.features.0"),
                t("services.banking.features.1"),
                t("services.banking.features.2"),
                t("services.banking.features.3")
            ]
        },
        {
            id: "capital-markets",
            title: t("services.capital-markets.title"),
            icon: TrendingUp,
            description: t("services.capital-markets.desc"),
            fullContent: t("services.capital-markets.fullContent"),
            features: [
                t("services.capital-markets.features.0"),
                t("services.capital-markets.features.1"),
                t("services.capital-markets.features.2"),
                t("services.capital-markets.features.3")
            ]
        },
        {
            id: "debt-restructuring",
            title: t("services.debt-restructuring.title"),
            icon: Shield,
            description: t("services.debt-restructuring.desc"),
            fullContent: t("services.debt-restructuring.fullContent"),
            features: [
                t("services.debt-restructuring.features.0"),
                t("services.debt-restructuring.features.1"),
                t("services.debt-restructuring.features.2"),
                t("services.debt-restructuring.features.3")
            ]
        },
        {
            id: "labor",
            title: t("services.labor.title"),
            icon: TrendingUp,
            description: t("services.labor.desc"),
            fullContent: t("services.labor.fullContent"),
            features: [
                t("services.labor.features.0"),
                t("services.labor.features.1"),
                t("services.labor.features.2"),
                t("services.labor.features.3")
            ]
        },
        {
            id: "regulatory",
            title: t("services.regulatory.title"),
            icon: Shield,
            description: t("services.regulatory.desc"),
            fullContent: t("services.regulatory.fullContent"),
            features: [
                t("services.regulatory.features.0"),
                t("services.regulatory.features.1"),
                t("services.regulatory.features.2"),
                t("services.regulatory.features.3")
            ]
        },
        {
            id: "tax",
            title: t("services.tax.title"),
            icon: Globe,
            description: t("services.tax.desc"),
            fullContent: t("services.tax.fullContent"),
            features: [
                t("services.tax.features.0"),
                t("services.tax.features.1"),
                t("services.tax.features.2"),
                t("services.tax.features.3")
            ]
        }
    ];



    const methodology = [
        { step: "01", title: t("methodology.step1.title"), desc: t("methodology.step1.desc") },
        { step: "02", title: t("methodology.step2.title"), desc: t("methodology.step2.desc") },
        { step: "03", title: t("methodology.step3.title"), desc: t("methodology.step3.desc") }
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title={t("header.title")}
                    subtitle={t("header.subtitle")}
                    badge={t("header.badge")}
                    description={t("header.description")}
                    variant="institutional"
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    onClick={() => service.fullContent && setSelectedService(service)}
                                    className={`group p-10 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden ${service.fullContent ? 'cursor-pointer' : ''}`}
                                >
                                    <div className="relative z-10">
                                        <service.icon className="h-10 w-10 text-primary mb-8 transition-transform group-hover:-translate-y-1" />
                                        <h3 className="text-3xl font-serif text-primary mb-6 transition-colors group-hover:text-primary/70">{service.title}</h3>
                                        <p className="text-slate-500 mb-12 leading-relaxed h-20 overflow-hidden line-clamp-3">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <ul className="flex gap-4">
                                                {service.features.slice(0, 2).map((f, i) => (
                                                    <li key={i} className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                        {f}
                                                    </li>
                                                ))}
                                            </ul>
                                            {service.fullContent && (
                                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                                    <span>View Detail</span>
                                                    <Plus className="h-4 w-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Abstract background element */}
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                                        <service.icon size={120} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <AnimatePresence>
                    {selectedService && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedService(null)}
                                className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative bg-white w-full max-w-4xl shadow-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setSelectedService(null)}
                                    className="absolute top-8 right-8 text-primary/20 hover:text-primary transition-colors z-20"
                                >
                                    <X className="h-8 w-8" />
                                </button>

                                <div className="grid grid-cols-1 md:grid-cols-12">
                                    <div className="md:col-span-12 p-12 md:p-20">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="space-y-12"
                                        >
                                            <div className="space-y-4">
                                                <div className="h-1 w-12 bg-primary/20" />
                                                <h2 className="text-4xl md:text-6xl font-serif text-primary leading-tight">
                                                    {selectedService.title}
                                                </h2>
                                            </div>

                                            <div className="prose prose-slate prose-lg max-w-none">
                                                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light font-serif italic border-l-4 border-primary/10 pl-8">
                                                    {selectedService.fullContent}
                                                </p>
                                            </div>

                                            <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-12">
                                                {selectedService.features.map((feature: string, i: number) => (
                                                    <div key={i} className="space-y-1">
                                                        <span className="text-[10px] font-bold text-primary/30 uppercase tracking-[0.2em]">Excellence 0{i + 1}</span>
                                                        <p className="text-sm font-bold text-primary">{feature}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>


                <section className="py-24 bg-primary text-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <h2 className="text-4xl md:text-5xl font-serif">{t("methodology.title")}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
                                {methodology.map((m, i) => (
                                    <div key={i} className="space-y-4 border-l border-white/10 pl-8">
                                        <span className="text-white/30 font-serif text-2xl italic">{m.step}</span>
                                        <h4 className="text-xl font-bold">{m.title}</h4>
                                        <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

