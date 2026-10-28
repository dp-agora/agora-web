"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useTranslations } from "next-intl";

export default function CareersPage() {
    const t = useTranslations("CareersPage");

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title={t("header.title")}
                    subtitle={t("header.subtitle")}
                    badge={t("header.badge")}
                    description={t("header.description")}
                    imageSrc="/assets/team/team-join.jpg"
                    imageOpacity={0.4}
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto space-y-8 text-center">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 leading-relaxed block">
                                {t("opportunities.subtitle")}
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary italic leading-tight">
                                {t("intro.quote")}
                            </h2>
                            <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed italic">
                                {t("intro.p1")}
                            </p>
                        </div>
                    </div>
                </section>

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
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <div className="space-y-6">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 leading-relaxed block">
                                    {t("contact.text")}
                                </span>
                                <a
                                    href={`mailto:${t("contact.email")}`}
                                    className="text-xl md:text-2xl lg:text-3xl font-serif text-white hover:text-white/70 transition-all duration-500 leading-tight block"
                                >
                                    {t("contact.email")}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

