"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Linkedin, Mail, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function TeamMemberPage() {
    const t = useTranslations("TeamMember");
    const tMembers = useTranslations("TeamPage.members");
    const params = useParams();
    const slug = params.slug as string;

    // Basic member metadata that doesn't usually change with language (except role which is already translated in TeamPage)
    const teamGroups = [
        {
            members: [
                { id: "alvaro-posada", name: "Álvaro Posada", roleKey: "alvaro.role", image: "/assets/team/alvaro-posada.webp", email: "alvaro.posada@agoralatam.com", linkedin: "#" },
                { id: "maria-eugenia-reyes", name: "María Eugenia Reyes", roleKey: "maria.role", image: "/assets/team/maria-eugenia.webp", email: "maria.reyes@agoralatam.com", linkedin: "#" },
                { id: "jose-barnola", name: "José P. Barnola Jr.", roleKey: "jose.role", image: "/assets/team/jose-barnola.webp", email: "jose.barnola@agoralatam.com", linkedin: "#" },
                { id: "ariana-cabrera", name: "Ariana Cabrera", roleKey: "ariana.role", image: "/assets/team/ariana-cabrera.webp", email: "ariana.cabrera@agoralatam.com", linkedin: "#" },
                { id: "lizeth-reyes", name: "Lizeth Reyes", roleKey: "lizeth.role", image: "/assets/team/lizeth-reyes.webp", email: "lizeth.reyes@agoralatam.com", linkedin: "#" },
                { id: "marco-gomez", name: "Marco Gómez", roleKey: "marco.role", image: "/assets/team/marco-gomez.webp", email: "marco.gomez@agoralatam.com", linkedin: "#" },
                { id: "barbara-briceno", name: "Bárbara Briceño", roleKey: "barbara.role", image: "/assets/team/barbara-briceno.webp", email: "barbara.briceno@agoralatam.com", linkedin: "#" },
                { id: "manuel-domingo", name: "Manuel Domingo", roleKey: "manuel.role", image: "/assets/team/manuel-domingo.webp", email: "manuel.domingo@agoralatam.com", linkedin: "#" },
                { id: "dayana-veliz", name: "Dayana Velíz", roleKey: "dayana.role", image: "/assets/team/dayana-veliz.webp", email: "dayana.veliz@agoralatam.com", linkedin: "#" },
                { id: "raul-sancristobal", name: "Raúl Sancristobal", roleKey: "raul.role", image: "/assets/team/raul-sancristobal.webp", email: "raul.sancristobal@agoralatam.com", linkedin: "#" },
                { id: "rodrigo-colmenares", name: "Rodrigo Colmenares", roleKey: "rodrigo.role", image: "/assets/team/rodrigo-colmenares.webp", email: "rodrigo.colmenares@agoralatam.com", linkedin: "#" },
                { id: "andreina-flores", name: "Andreína Flores", roleKey: "andreina.role", image: "/assets/team/andreina-flores.webp", email: "andreina.flores@agoralatam.com", linkedin: "#" },
                { id: "fabiola-flores", name: "Fabiola Flores", roleKey: "fabiola.role", image: "/assets/team/fabiola-flores.webp", email: "fabiola.flores@agoralatam.com", linkedin: "#" },
                { id: "andrea-regalado", name: "Andrea Regalado", roleKey: "andrea.role", image: "/assets/team/andrea-regalado.webp", email: "andrea.regalado@agoralatam.com", linkedin: "#" },
                { id: "oriana-rodriguez", name: "Oriana Rodríguez", roleKey: "oriana.role", image: "/assets/team/oriana-rodriguez.webp", email: "oriana.rodriguez@agoralatam.com", linkedin: "#" },
                { id: "juan-posada", name: "Juan Francisco Posada", roleKey: "juan.role", image: "/assets/team/juan-posada.webp", email: "juan.posada@agoralatam.com", linkedin: "#" }
            ]
        }
    ];

    const member = teamGroups.flatMap(g => g.members).find(m => m.id === slug);

    // Fetch translated content for the specific slug
    let currentLegacyData: any = null;
    try {
        currentLegacyData = t.raw(slug);
    } catch (e) {
        // Content not yet translated for this member
        currentLegacyData = null;
    }

    if (!member) {
        return (
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-serif text-primary mb-4">{t("labels.notFound")}</h1>
                        <Link href="/team" className="text-primary hover:underline flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" /> {t("labels.back")}
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero / Profile Header */}
                <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-slate-50 border-b">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-4 lg:col-span-3">
                                <div className="aspect-[4/5] bg-white border border-slate-100 relative overflow-hidden shadow-xl">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-8 lg:col-span-9 space-y-8">
                                <Link href="/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm uppercase tracking-widest font-bold mb-4">
                                    <ArrowLeft className="h-4 w-4" /> {t("labels.back")}
                                </Link>
                                <div>
                                    <h1 className="text-5xl md:text-7xl font-serif text-primary mb-4">{member.name}</h1>
                                    <p className="text-xl text-primary/60 font-serif italic uppercase tracking-widest">{tMembers(member.roleKey)}</p>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-12 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="h-12 w-12 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <div className="container mx-auto px-6 lg:px-12 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-8 space-y-20">
                            {/* Overview Section */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-serif text-primary italic border-b border-slate-100 pb-4">{t("labels.overview")}</h2>
                                <div className="prose prose-slate prose-lg max-w-none space-y-6">
                                    {currentLegacyData?.overview ? (
                                        currentLegacyData.overview.map((para: string, i: number) => (
                                            <p key={i} className="text-slate-600 leading-relaxed font-light italic">
                                                {para}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-slate-600 leading-relaxed font-light italic">
                                            [Placeholder Overview: Detailed introduction and professional summary for {member.name} to be added soon.]
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Experience / Focus Areas */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-serif text-primary italic border-b border-slate-100 pb-4">{t("labels.experience")}</h2>
                                <div className="prose prose-slate prose-lg max-w-none space-y-6">
                                    {currentLegacyData?.experience ? (
                                        currentLegacyData.experience.map((content: any, i: number) => (
                                            typeof content === 'string' ? (
                                                <p key={i} className="text-slate-600 leading-relaxed font-light italic">{content}</p>
                                            ) : (
                                                <ul key={i} className="space-y-4 text-slate-600 font-light list-disc pl-6">
                                                    {content.items.map((item: string, j: number) => (
                                                        <li key={j} className="italic">{item}</li>
                                                    ))}
                                                </ul>
                                            )
                                        ))
                                    ) : (
                                        <ul className="space-y-4 text-slate-600 font-light">
                                            <li>[Placeholder Experience: Key practice areas and industry expertise.]</li>
                                            <li>[Placeholder Experience: Notable transactions and representative matters.]</li>
                                            <li>[Placeholder Experience: Strategic counseling and client advisory roles.]</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-20">
                            {/* Credentials / Education */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-serif text-primary italic border-b border-slate-100 pb-4">{t("labels.credentials")}</h2>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{t("labels.education")}</span>
                                        <div className="space-y-3">
                                            {currentLegacyData?.education ? (
                                                currentLegacyData.education.map((edu: string, i: number) => (
                                                    <p key={i} className="text-sm text-primary font-medium leading-relaxed italic">{edu}</p>
                                                ))
                                            ) : (
                                                <p className="text-sm text-primary font-medium">[Placeholder: Law School / University Degree]</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{t("labels.office")}</span>
                                        <p className="text-sm text-primary font-medium italic">
                                            {currentLegacyData ? currentLegacyData.office : "[Placeholder: City, Country]"}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{t("labels.languages")}</span>
                                        <p className="text-sm text-primary font-medium italic">
                                            {currentLegacyData ? currentLegacyData.languages : "[Placeholder: Spanish, English, etc.]"}
                                        </p>
                                    </div>

                                    {currentLegacyData?.affiliations && (
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{t("labels.affiliations")}</span>
                                            <p className="text-sm text-primary font-medium leading-relaxed italic">
                                                {currentLegacyData.affiliations}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Optional Publications */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-serif text-primary italic border-b border-slate-100 pb-4">{t("labels.publications")}</h2>
                                <div className="space-y-6">
                                    {currentLegacyData?.publications && currentLegacyData.publications.length > 0 ? (
                                        currentLegacyData.publications.map((pub: string, i: number) => (
                                            <p key={i} className="text-sm text-slate-600 leading-relaxed italic">
                                                {pub}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-sm text-slate-400 italic">{t("labels.noPublications")}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
