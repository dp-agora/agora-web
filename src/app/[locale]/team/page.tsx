"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useTranslations } from "next-intl";

export default function TeamPage() {
    const t = useTranslations("TeamPage");

    const teamGroups = [
        {
            title: t("groups.partners"),
            members: [
                {
                    name: "Álvaro Posada",
                    role: t("members.alvaro.role"),
                    bio: t("members.alvaro.bio")
                },
                {
                    name: "María Eugenia Reyes",
                    role: t("members.maria.role"),
                    bio: t("members.maria.bio")
                }
            ]
        },
        {
            title: t("groups.leads"),
            members: [
                {
                    name: "José P. Barnola Jr.",
                    role: t("members.jose.role"),
                    bio: t("members.jose.bio")
                },
                {
                    name: "Ariana Cabrera",
                    role: t("members.ariana.role"),
                    bio: t("members.ariana.bio")
                }
            ]
        },
        {
            title: t("groups.regional"),
            members: [
                {
                    name: "Lizeth Reyes",
                    role: t("members.lizeth.role"),
                    bio: t("members.lizeth.bio")
                }
            ]
        },
        {
            title: t("groups.associates"),
            members: [
                {
                    name: "Marco Gómez",
                    role: t("members.marco.role"),
                    bio: t("members.marco.bio")
                },
                {
                    name: "Bárbara Briceño",
                    role: t("members.barbara.role"),
                    bio: t("members.barbara.bio")
                },
                {
                    name: "Manuel Domingo",
                    role: t("members.manuel.role"),
                    bio: t("members.manuel.bio")
                },
                {
                    name: "Dayana Velíz",
                    role: t("members.dayana.role"),
                    bio: t("members.dayana.bio")
                },
                {
                    name: "Raúl Sancristobal",
                    role: t("members.raul.role"),
                    bio: t("members.raul.bio")
                },
                {
                    name: "Rodrigo Colmenares",
                    role: t("members.rodrigo.role"),
                    bio: t("members.rodrigo.bio")
                },
                {
                    name: "Andreína Flores",
                    role: t("members.andreina.role"),
                    bio: t("members.andreina.bio")
                },
                {
                    name: "Fabiola Flores",
                    role: t("members.fabiola.role"),
                    bio: t("members.fabiola.bio")
                }
            ]
        },
        {
            title: t("groups.operations"),
            members: [
                {
                    name: "Andrea Regalado",
                    role: t("members.andrea.role"),
                    bio: t("members.andrea.bio")
                },
                {
                    name: "Oriana Rodríguez",
                    role: t("members.oriana.role"),
                    bio: t("members.oriana.bio")
                },
                {
                    name: "Juan Francisco Posada",
                    role: t("members.juan.role"),
                    bio: t("members.juan.bio")
                }
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
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        {teamGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className={groupIndex > 0 ? "mt-24" : ""}>
                                <div className="border-b border-slate-100 pb-8 mb-16">
                                    <h2 className="text-3xl font-serif text-primary italic">{group.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
                                    {group.members.map((member, i) => (
                                        <div key={i} className="group">
                                            <div className="aspect-[4/5] bg-slate-50 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-100 relative overflow-hidden">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="font-serif text-7xl text-slate-100 italic">Á</span>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="text-2xl font-serif text-primary mb-1">{member.name}</h3>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{member.role}</p>
                                                </div>
                                                <p className="text-sm text-slate-600 leading-relaxed font-light italic">
                                                    {member.bio}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}


