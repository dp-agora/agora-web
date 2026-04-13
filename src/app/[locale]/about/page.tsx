"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function AboutPage() {
    const t = useTranslations("AboutPage");
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqItems = Array.from({ length: 4 }, (_, i) => ({
        question: t(`faq.items.${i}.question`),
        answer: t(`faq.items.${i}.answer`),
    }));

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title={t("header.title")}
                    subtitle={t("header.subtitle")}
                    badge={t("header.badge")}
                    description={t("header.description")}
                    imageSrc="/assets/team/about-us.jpg"
                    imageOpacity={0.4}
                />


                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-4">
                                <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-8">{t("firm.title")}</h3>
                                <p className="text-3xl font-serif text-primary italic leading-tight">
                                    {t("firm.quote")}
                                </p>
                            </div>
                            <div className="lg:col-span-8 space-y-12">
                                <p className="text-slate-600 leading-relaxed text-lg font-light">
                                    {t("firm.description")}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {[
                                        { title: t("pillars.pillar1.title"), desc: t("pillars.pillar1.desc") },
                                        { title: t("pillars.pillar2.title"), desc: t("pillars.pillar2.desc") },
                                        { title: t("pillars.pillar3.title"), desc: t("pillars.pillar3.desc") },
                                        { title: t("pillars.pillar4.title"), desc: t("pillars.pillar4.desc") }
                                    ].map((pillar, i) => (
                                        <div key={i} className="space-y-4">
                                            <h4 className="text-xl font-serif font-bold text-primary">{pillar.title}</h4>
                                            <p className="text-slate-500 leading-relaxed text-sm">
                                                {pillar.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
                    {/* Architectural Texture Background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(30,58,138,0.15)_0%,transparent_70%)]" />

                        {/* Structural Beams */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-[0.1]">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute top-0 h-[200%] bg-white w-[1px]"
                                    style={{
                                        right: `${15 + (i * 8)}%`,
                                        transform: 'rotate(25deg) translateY(-25%)',
                                        opacity: 1 - (i * 0.1),
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="max-w-4xl">
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-16">{t("values.title")}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {[
                                    { title: t("values.value1.title"), desc: t("values.value1.desc") },
                                    { title: t("values.value2.title"), desc: t("values.value2.desc") },
                                    { title: t("values.value3.title"), desc: t("values.value3.desc") },
                                    { title: t("values.value4.title"), desc: t("values.value4.desc") },
                                    {
                                        title: t("values.value5.title"),
                                        desc: t("values.value5.desc"),
                                        full: true
                                    }
                                ].map((value, i) => (
                                    <div key={i} className={`flex gap-8 items-start border-l-2 border-white/10 pl-8 hover:border-white transition-colors py-2 ${value.full ? 'md:col-span-2' : ''}`}>
                                        <span className="text-white/20 font-serif text-xl italic tracking-[0.2em]">0{i + 1}</span>
                                        <div>
                                            <h4 className="text-2xl font-serif text-white mb-2">{value.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed font-light">{value.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16">{t("industry.title")}</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { title: t("industry.focus1.title"), desc: t("industry.focus1.desc") },
                                { title: t("industry.focus2.title"), desc: t("industry.focus2.desc") },
                                { title: t("industry.focus3.title"), desc: t("industry.focus3.desc") },
                                { title: t("industry.focus4.title"), desc: t("industry.focus4.desc") },
                                { title: t("industry.focus5.title"), desc: t("industry.focus5.desc") }
                            ].map((industry, i) => (
                                <div key={i} className="p-10 border border-slate-100 bg-slate-50 group hover:bg-primary transition-all duration-700 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                    <div className="max-w-2xl">
                                        <h4 className="text-2xl font-serif text-primary group-hover:text-white mb-4 transition-colors">{industry.title}</h4>
                                        <p className="text-slate-500 group-hover:text-slate-300 leading-relaxed transition-colors font-light italic">{industry.desc}</p>
                                    </div>
                                    <div className="h-px w-12 bg-primary/10 group-hover:bg-white/30 hidden md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-50 border-t">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-wrap items-center justify-between gap-12 opacity-60">
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Chambers Global</span>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Chambers Latin America</span>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">ITR Americas Tax</span>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">IFLR1000</span>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
                <section className="py-24 bg-white border-t">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-16">{t("faq.title")}</h2>
                            <div className="space-y-4">
                                {faqItems.map((item, index) => (
                                    <div key={index} className="border border-slate-100 bg-slate-50">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                            className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                                            aria-expanded={openFaq === index}
                                        >
                                            <span className="font-bold text-primary pr-4 group-hover:text-primary/70 transition-colors">
                                                {item.question}
                                            </span>
                                            <ChevronDown
                                                className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                                            aria-hidden={openFaq !== index}
                                        >
                                            <p className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                                                {item.answer}
                                            </p>
                                        </div>
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

