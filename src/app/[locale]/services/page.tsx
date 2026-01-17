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
                    videoSrc="/assets/video/agora-eco.mp4"
                    videoOpacity={0.6}
                />

                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col gap-4">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    onClick={() => {
                                        if (service.fullContent) {
                                            setSelectedService(service);
                                        }
                                    }}
                                    className={`group p-10 border border-slate-100 bg-slate-50 hover:bg-primary transition-all duration-700 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-12 ${service.fullContent ? 'cursor-pointer' : ''}`}
                                >
                                    <div className="flex-1 max-w-2xl">
                                        <div className="flex items-center gap-6 mb-6">
                                            <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                                            <h3 className="text-3xl font-serif text-primary group-hover:text-white transition-colors leading-tight">{service.title}</h3>
                                        </div>
                                        <p className="text-slate-500 group-hover:text-slate-200 transition-colors mb-0 leading-relaxed font-light italic">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col md:items-end gap-6">
                                        <ul className="flex flex-wrap md:justify-end gap-x-6 gap-y-2">
                                            {service.features.slice(0, 3).map((f, i) => (
                                                <li key={i} className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-white/60 transition-colors">
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        {service.fullContent && (
                                            <div className="flex items-center gap-3 text-primary group-hover:text-white font-bold text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                                <span>View Expertise</span>
                                                <Plus className="h-4 w-4" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Subtle background decoration */}
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                                        <service.icon size={120} className="text-primary group-hover:text-white" />
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


                <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
                    {/* Architectural Texture Background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,58,138,0.15)_0%,transparent_70%)]" />

                        {/* Structural Beams */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-[0.1]">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute top-0 h-[200%] bg-white w-[1px]"
                                    style={{
                                        right: `${10 + (i * 8)}%`,
                                        transform: 'rotate(-20deg) translateY(-25%)',
                                        opacity: 1 - (i * 0.08),
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="max-w-4xl mx-auto space-y-16">
                            <div className="text-center space-y-6">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Our Approach</span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">{t("methodology.title")}</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                                {methodology.map((m, i) => (
                                    <div key={i} className="space-y-6 group">
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-white/10 font-serif text-5xl italic group-hover:text-white/20 transition-colors uppercase tracking-widest">{m.step}</span>
                                            <h4 className="text-xl font-serif text-white">{m.title}</h4>
                                        </div>
                                        <div className="h-px w-8 bg-white/20" />
                                        <p className="text-slate-400 text-sm leading-relaxed font-light">{m.desc}</p>
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

