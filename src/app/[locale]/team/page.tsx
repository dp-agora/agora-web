"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function TeamPage() {
    const t = useTranslations("TeamPage");

    const teamGroups = [
        {
            title: t("groups.partners"),
            members: [
                {
                    name: "Álvaro Posada",
                    role: t("members.alvaro.role"),
                    bio: t("members.alvaro.bio"),
                    image: "/assets/team/alvaro-posada.webp"
                },
                {
                    name: "María Eugenia Reyes",
                    role: t("members.maria.role"),
                    bio: t("members.maria.bio"),
                    image: "/assets/team/maria-eugenia.webp"
                }
            ]
        },
        {
            title: t("groups.leads"),
            members: [
                {
                    name: "José P. Barnola Jr.",
                    role: t("members.jose.role"),
                    bio: t("members.jose.bio"),
                    image: "/assets/team/jose-barnola.webp"
                },
                {
                    name: "Ariana Cabrera",
                    role: t("members.ariana.role"),
                    bio: t("members.ariana.bio"),
                    image: "/assets/team/ariana-cabrera.webp"
                }
            ]
        },
        {
            title: t("groups.regional"),
            members: [
                {
                    name: "Lizeth Reyes",
                    role: t("members.lizeth.role"),
                    bio: t("members.lizeth.bio"),
                    image: "/assets/team/lizeth-reyes.webp"
                }
            ]
        },
        {
            title: t("groups.associates"),
            members: [
                {
                    name: "Marco Gómez",
                    role: t("members.marco.role"),
                    bio: t("members.marco.bio"),
                    image: "/assets/team/marco-gomez.webp"
                },
                {
                    name: "Bárbara Briceño",
                    role: t("members.barbara.role"),
                    bio: t("members.barbara.bio"),
                    image: "/assets/team/barbara-briceno.webp"
                },
                {
                    name: "Manuel Domingo",
                    role: t("members.manuel.role"),
                    bio: t("members.manuel.bio"),
                    image: "/assets/team/manuel-domingo.webp"
                },
                {
                    name: "Dayana Velíz",
                    role: t("members.dayana.role"),
                    bio: t("members.dayana.bio"),
                    image: "/assets/team/dayana-veliz.webp"
                },
                {
                    name: "Raúl Sancristobal",
                    role: t("members.raul.role"),
                    bio: t("members.raul.bio"),
                    image: "/assets/team/raul-sancristobal.webp"
                },
                {
                    name: "Rodrigo Colmenares",
                    role: t("members.rodrigo.role"),
                    bio: t("members.rodrigo.bio"),
                    image: "/assets/team/rodrigo-colmenares.webp"
                },
                {
                    name: "Andreína Flores",
                    role: t("members.andreina.role"),
                    bio: t("members.andreina.bio"),
                    image: "/assets/team/andreina-flores.webp"
                },
                {
                    name: "Fabiola Flores",
                    role: t("members.fabiola.role"),
                    bio: t("members.fabiola.bio"),
                    image: "/assets/team/fabiola-flores.webp"
                }
            ]
        },
        {
            title: t("groups.operations"),
            members: [
                {
                    name: "Andrea Regalado",
                    role: t("members.andrea.role"),
                    bio: t("members.andrea.bio"),
                    image: "/assets/team/andrea-regalado.webp"
                },
                {
                    name: "Oriana Rodríguez",
                    role: t("members.oriana.role"),
                    bio: t("members.oriana.bio"),
                    image: "/assets/team/oriana-rodriguez.webp"
                },
                {
                    name: "Juan Francisco Posada",
                    role: t("members.juan.role"),
                    bio: t("members.juan.bio"),
                    image: "/assets/team/juan-posada.webp"
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
                            <div key={groupIndex} id={groupIndex === 0 ? "partners" : undefined} className={groupIndex > 0 ? "mt-24" : ""}>
                                <div className="border-b border-slate-100 pb-8 mb-16 scroll-mt-32">

                                    <h2 className="text-3xl font-serif text-primary italic">{group.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
                                    {group.members.map((member, i) => (
                                        <div key={i} className="group">
                                            <div className="aspect-[4/5] bg-slate-50 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-100 relative overflow-hidden">
                                                {member.image ? (
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <span className="font-serif text-7xl text-slate-100 italic">Á</span>
                                                    </div>
                                                )}
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



