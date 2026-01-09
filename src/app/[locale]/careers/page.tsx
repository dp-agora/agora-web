"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MoveUpRight, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ApplicationModal } from "@/components/careers/ApplicationModal";

export default function CareersPage() {
    const t = useTranslations("CareersPage");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");

    const handleApply = (jobTitle: string) => {
        setSelectedJob(jobTitle);
        setIsModalOpen(true);
    };

    const openings = [
        {
            title: t("opportunities.openings.0.title"),
            location: t("opportunities.openings.0.location"),
            experience: t("opportunities.openings.0.experience"),
            description: t("opportunities.openings.0.description"),
            requirements: [
                t("opportunities.openings.0.requirements.0"),
                t("opportunities.openings.0.requirements.1"),
                t("opportunities.openings.0.requirements.2"),
            ]
        },
        {
            title: t("opportunities.openings.1.title"),
            location: t("opportunities.openings.1.location"),
            experience: t("opportunities.openings.1.experience"),
            description: t("opportunities.openings.1.description"),
            requirements: [
                t("opportunities.openings.1.requirements.0"),
                t("opportunities.openings.1.requirements.1"),
                t("opportunities.openings.1.requirements.2"),
            ]
        },
        {
            title: t("opportunities.openings.2.title"),
            location: t("opportunities.openings.2.location"),
            experience: t("opportunities.openings.2.experience"),
            description: t("opportunities.openings.2.description"),
            requirements: [
                t("opportunities.openings.2.requirements.0"),
                t("opportunities.openings.2.requirements.1"),
                t("opportunities.openings.2.requirements.2"),
            ]
        }
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
                    imageSrc="/assets/team/team-join.jpg"
                    imageOpacity={0.4}
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto mb-24 space-y-8 text-center">
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

                        <div className="space-y-6">
                            {openings.map((job, idx) => (
                                <div
                                    key={idx}
                                    className="group p-10 border border-slate-100 bg-slate-50 hover:bg-primary transition-all duration-700 relative overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between gap-12"
                                >
                                    <div className="flex-1 max-w-2xl space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 group-hover:text-white/60 transition-colors">
                                                <span>{job.location}</span>
                                                <span className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-white/30" />
                                                <span>{job.experience}</span>
                                            </div>
                                            <h3 className="text-3xl font-serif text-primary group-hover:text-white transition-colors leading-tight">
                                                {job.title}
                                            </h3>
                                        </div>
                                        <p className="text-slate-500 group-hover:text-slate-200 transition-colors mb-0 leading-relaxed font-light italic">
                                            {job.description}
                                        </p>
                                        <button
                                            onClick={() => handleApply(job.title)}
                                            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary group-hover:text-white transition-all duration-500 pt-4"
                                        >
                                            <span className="border-b border-primary/20 group-hover:border-white/40 pb-1">{t("contact.apply")}</span>
                                            <ArrowRight className="h-3 w-3" />
                                        </button>
                                    </div>

                                    <div className="lg:w-1/3">
                                        <ul className="space-y-3">
                                            {job.requirements.map((req, rIdx) => (
                                                <li key={rIdx} className="flex gap-4 text-sm text-slate-500 group-hover:text-white/70 transition-colors font-light">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-white mt-1.5 shrink-0" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Subtle background decoration */}
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none scale-150 rotate-12">
                                        <MoveUpRight size={120} className="text-primary group-hover:text-white" />
                                    </div>
                                </div>
                            ))}
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
                                    className="text-4xl md:text-5xl lg:text-7xl font-serif text-white hover:text-white/70 transition-all duration-500 leading-tight block truncate"
                                >
                                    {t("contact.email")}
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob}
            />
        </div>
    );
}

