"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Globe, Shield, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ServicesPage() {
    const t = useTranslations("ServicesPage");

    const services = [
        {
            id: "m-and-a",
            title: t("services.m-and-a.title"),
            icon: TrendingUp,
            description: t("services.m-and-a.desc"),
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
            features: [
                t("services.banking.features.0"),
                t("services.banking.features.1"),
                t("services.banking.features.2"),
                t("services.banking.features.3")
            ]
        },
        {
            id: "tax",
            title: t("services.tax.title"),
            icon: Globe,
            description: t("services.tax.desc"),
            features: [
                t("services.tax.features.0"),
                t("services.tax.features.1"),
                t("services.tax.features.2"),
                t("services.tax.features.3")
            ]
        },
        {
            id: "labor",
            title: t("services.labor.title"),
            icon: TrendingUp,
            description: t("services.labor.desc"),
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
            features: [
                t("services.regulatory.features.0"),
                t("services.regulatory.features.1"),
                t("services.regulatory.features.2"),
                t("services.regulatory.features.3")
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
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {services.map((service) => (
                                <div key={service.id} className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                    <service.icon className="h-10 w-10 text-primary mb-8" />
                                    <h3 className="text-3xl font-serif text-primary mb-6">{service.title}</h3>
                                    <p className="text-slate-500 mb-12 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="grid grid-cols-2 gap-4 mb-12">
                                        {service.features.map((f, i) => (
                                            <li key={i} className="text-sm font-medium text-slate-400 flex items-center gap-3">
                                                <div className="h-1 w-1 bg-primary/20 rounded-full" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

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

