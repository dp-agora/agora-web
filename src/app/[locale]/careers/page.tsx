"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MoveUpRight } from "lucide-react";
import { Link } from "@/i18n/routing";
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div className="space-y-12">
                                <h2 className="text-4xl font-serif text-primary italic">{t("intro.quote")}</h2>
                                <div className="space-y-8">
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">
                                        {t.rich("intro.p1", {
                                            seniorLayer: (chunks) => <strong className="font-bold text-primary">{chunks}</strong>
                                        })}
                                    </p>
                                    <p className="text-slate-500 leading-relaxed">
                                        {t("intro.p2")}
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-12 lg:p-16 border border-slate-100 space-y-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40">{t("profile.title")}</h3>
                                <div className="space-y-0 divide-y divide-slate-200">
                                    <div className="py-8 space-y-6">
                                        <h4 className="text-2xl font-serif text-primary">{t("profile.position")}</h4>
                                        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                                            <ul className="space-y-4">
                                                <li className="flex gap-4">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    <span>{t("profile.req1")}</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    <span>{t("profile.req2")}</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    <div>
                                                        <span className="block font-bold text-primary mb-2">{t("profile.req3")}</span>
                                                        <ul className="space-y-2 opacity-80">
                                                            {/* We can map skills if we want, or just hardcode the keys */}
                                                            <li>• {t("profile.skills.0")}</li>
                                                            <li>• {t("profile.skills.1")}</li>
                                                            <li>• {t("profile.skills.2")}</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-slate-200">
                                    <p className="text-sm text-slate-500 font-medium mb-4">
                                        {t("contact.text")}
                                    </p>
                                    <a
                                        href="mailto:Admin@agoralatam.com"
                                        className="text-2xl font-serif text-primary hover:text-primary/70 transition-colors flex items-center gap-3"
                                    >
                                        Admin@agoralatam.com
                                        <MoveUpRight className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

