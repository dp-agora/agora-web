"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("AboutPage");

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
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40 mb-8">{t("firm.title")}</h3>
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

                <section className="py-24 bg-slate-50 border-y">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl">
                            <h2 className="text-4xl font-serif text-primary mb-16">{t("values.title")}</h2>
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
                                    <div key={i} className={`flex gap-8 items-start border-l-2 border-primary/10 pl-8 hover:border-primary transition-colors py-2 ${value.full ? 'md:col-span-2' : ''}`}>
                                        <span className="text-slate-300 font-serif text-xl italic">0{i + 1}</span>
                                        <div>
                                            <h4 className="text-2xl font-serif text-primary mb-2">{value.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <h2 className="text-4xl font-serif text-primary mb-16">{t("industry.title")}</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {[
                                { title: t("industry.focus1.title"), desc: t("industry.focus1.desc") },
                                { title: t("industry.focus2.title"), desc: t("industry.focus2.desc") },
                                { title: t("industry.focus3.title"), desc: t("industry.focus3.desc") },
                                { title: t("industry.focus4.title"), desc: t("industry.focus4.desc") },
                                { title: t("industry.focus5.title"), desc: t("industry.focus5.desc") }
                            ].map((industry, i) => (
                                <div key={i} className="p-10 border border-slate-100 bg-slate-50 group hover:bg-primary transition-all duration-500">
                                    <h4 className="text-2xl font-serif font-bold text-primary group-hover:text-white mb-4 transition-colors">{industry.title}</h4>
                                    <p className="text-slate-500 group-hover:text-slate-200 leading-relaxed transition-colors">{industry.desc}</p>
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
            </main>
            <Footer />
        </div>
    );
}

