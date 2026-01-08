"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Linkedin, Mail } from "lucide-react";

export default function TeamPage() {
    const t = useTranslations("TeamPage");

    const teamGroups = [
        {
            title: t("groups.partners"),
            members: [
                {
                    id: "alvaro-posada",
                    name: "Álvaro Posada",
                    role: t("members.alvaro.role"),
                    bio: t("members.alvaro.bio"),
                    image: "/assets/team/alvaro-posada.webp",
                    email: "alvaro.posada@agoralatam.com",
                    linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-posada-328156a4/"
                },
                {
                    id: "maria-eugenia-reyes",
                    name: "María Eugenia Reyes",
                    role: t("members.maria.role"),
                    bio: t("members.maria.bio"),
                    image: "/assets/team/maria-eugenia.webp",
                    email: "maria.reyes@agoralatam.com",
                    linkedin: "https://www.linkedin.com/in/maria-eugenia-reyes-feo-40410624/"
                }
            ]
        },
        {
            title: t("groups.leads"),
            members: [
                {
                    id: "jose-barnola",
                    name: "José P. Barnola Jr.",
                    role: t("members.jose.role"),
                    bio: t("members.jose.bio"),
                    image: "/assets/team/jose-barnola.webp",
                    email: "jose.barnola@agoralatam.com",
                    linkedin: "https://mx.linkedin.com/in/josepbarnolajr"
                },
                {
                    id: "ariana-cabrera",
                    name: "Ariana Cabrera",
                    role: t("members.ariana.role"),
                    bio: t("members.ariana.bio"),
                    image: "/assets/team/ariana-cabrera.webp",
                    email: "ariana.cabrera@agoralatam.com",
                    linkedin: "https://ve.linkedin.com/in/ariana-cabrera-acevedo"
                }
            ]
        },
        {
            title: t("groups.regional"),
            members: [
                {
                    id: "lizeth-reyes",
                    name: "Lizeth Reyes",
                    role: t("members.lizeth.role"),
                    bio: t("members.lizeth.bio"),
                    image: "/assets/team/lizeth-reyes.webp",
                    email: "lizeth.reyes@agoralatam.com",
                    linkedin: "https://www.linkedin.com/in/lizeth-reyesb"
                }
            ]
        },
        {
            title: t("groups.associates"),
            members: [
                { id: "marco-gomez", name: "Marco Gómez", role: t("members.marco.role"), bio: t("members.marco.bio"), image: "/assets/team/marco-gomez.webp", email: "marco.gomez@agoralatam.com", linkedin: "https://www.linkedin.com/in/marcoantoniogomez/" },
                { id: "barbara-briceno", name: "Bárbara Briceño", role: t("members.barbara.role"), bio: t("members.barbara.bio"), image: "/assets/team/barbara-briceno.webp", email: "barbara.briceno@agoralatam.com", linkedin: "https://www.linkedin.com/in/barbara-briceño-7a1b9b53" },
                { id: "manuel-domingo", name: "Manuel Domingo", role: t("members.manuel.role"), bio: t("members.manuel.bio"), image: "/assets/team/manuel-domingo.webp", email: "manuel.domingo@agoralatam.com", linkedin: "https://www.linkedin.com/in/manuel-domingo-2419b273/" },
                { id: "dayana-veliz", name: "Dayana Velíz", role: t("members.dayana.role"), bio: t("members.dayana.bio"), image: "/assets/team/dayana-veliz.webp", email: "dayana.veliz@agoralatam.com", linkedin: "https://www.linkedin.com/in/dayana-veliz-1714b5162/" },
                { id: "raul-sancristobal", name: "Raúl Sancristobal", role: t("members.raul.role"), bio: t("members.raul.bio"), image: "/assets/team/raul-sancristobal.webp", email: "raul.sancristobal@agoralatam.com", linkedin: "https://www.linkedin.com/in/raul-eduardo-sancristobal-444a44139/" },
                { id: "rodrigo-colmenares", name: "Rodrigo Colmenares", role: t("members.rodrigo.role"), bio: t("members.rodrigo.bio"), image: "/assets/team/rodrigo-colmenares.webp", email: "rodrigo.colmenares@agoralatam.com", linkedin: "https://www.linkedin.com/in/rodrigo-colmenares-fernández-144b03200/" },
                { id: "andreina-flores", name: "Andreína Flores", role: t("members.andreina.role"), bio: t("members.andreina.bio"), image: "/assets/team/andreina-flores.webp", email: "andreina.flores@agoralatam.com", linkedin: "http://www.linkedin.com/in/andreina-floresr" },
                { id: "fabiola-flores", name: "Fabiola Flores", role: t("members.fabiola.role"), bio: t("members.fabiola.bio"), image: "/assets/team/fabiola-flores.webp", email: "fabiola.flores@agoralatam.com", linkedin: "https://www.linkedin.com/in/fabiola-floresr" }
            ]
        },
        {
            title: t("groups.operations"),
            members: [
                { id: "andrea-regalado", name: "Andrea Regalado", role: t("members.andrea.role"), bio: t("members.andrea.bio"), image: "/assets/team/andrea-regalado.webp", email: "andrea.regalado@agoralatam.com", linkedin: "#" },
                { id: "oriana-rodriguez", name: "Oriana Rodríguez", role: t("members.oriana.role"), bio: t("members.oriana.bio"), image: "/assets/team/oriana-rodriguez.webp", email: "oriana.rodriguez@agoralatam.com", linkedin: "#" },
                { id: "juan-posada", name: "Juan Francisco Posada", role: t("members.juan.role"), bio: t("members.juan.bio"), image: "/assets/team/juan-posada.webp", email: "juan.posada@agoralatam.com", linkedin: "#" }
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
                    imageSrc="/assets/team/Team 1.jpg"
                    imageOpacity={0.4}
                />


                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        {teamGroups.map((group, groupIndex) => (
                            <div key={groupIndex} id={groupIndex === 0 ? "partners" : undefined} className={groupIndex > 0 ? "mt-24" : ""}>
                                <div className="border-b border-primary/10 pb-12 mb-24 scroll-mt-32">
                                    <h2 className="text-4xl md:text-5xl font-serif text-primary italic leading-tight">{group.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
                                    {group.members.map((member, i) => (
                                        <div key={i} className="group flex flex-col h-full">
                                            <Link href={`/team/${member.id}`} className="flex-1 space-y-8">
                                                <div className="aspect-[4/5] bg-slate-50 grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-100 relative overflow-hidden">
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
                                                        <h3 className="text-2xl font-serif text-primary mb-2 group-hover:text-primary/70 transition-colors leading-tight">{member.name}</h3>
                                                        <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.3em]">{member.role}</p>
                                                    </div>
                                                    <p className="text-sm text-slate-500 leading-relaxed font-light italic line-clamp-4">
                                                        {member.bio}
                                                    </p>
                                                </div>
                                            </Link>

                                            <div className="flex gap-4 pt-8 mt-auto border-t border-slate-50">
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Linkedin className="h-4 w-4" />
                                                </a>
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-primary/5 text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Mail className="h-4 w-4" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </section>

                <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
                    {/* Architectural Texture Background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,58,138,0.15)_0%,transparent_70%)]" />

                        {/* Structural Beams */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.1]">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute top-0 h-[200%] bg-white w-[1px]"
                                    style={{
                                        left: `${15 + (i * 8)}%`,
                                        transform: 'rotate(-25deg) translateY(-25%)',
                                        opacity: 1 - (i * 0.1),
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center space-y-12">
                        <div className="max-w-3xl mx-auto space-y-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Global Perspective</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-white">{t("header.title")}</h2>
                            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed italic">
                                {t("header.description")}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
}



