"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapPin, Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useBooking } from "@/context/BookingContext";


const offices = [
    {
        city: "Caracas",
        designationKey: "office.focus",
        address: "Avenida Venezuela, entre Calle Mohedano y Calle Sojo, Torre Simple, Piso 12. Urbanización El Rosal, Municipio Chacao (1060), Estado Miranda, Caracas – Venezuela.",
        mapQuery: "Torre Simple, El Rosal, Caracas",
    },
    {
        city: "Mexico City",
        designationKey: "office.designation",
        address: "Bosque de Radiatas 22, Piso 4, Bosques de las Lomas, 05120 Ciudad de México, CDMX, México.",
        mapQuery: "Bosque de Radiatas 22, Ciudad de México",
    },
    {
        city: "Aragua",
        designationKey: "office.designation",
        address: "Avenida 19 de Abril, Edificio Profesional, Piso 2, Oficina 2-B, Maracay, Estado Aragua, Venezuela.",
        mapQuery: "Edificio Profesional Maracay",
    },
];

const contactInfo = {
    phone: "+58 (412) 534-2877",
    email: "admin@agoralatam.com",
};

export default function ContactPage() {
    const t = useTranslations("ContactPage");
    const { openBooking } = useBooking();

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title={t("header.title")}
                    subtitle={t("header.subtitle")}
                    badge={t("header.badge")}
                    description={t("header.description")}
                    imageSrc="/assets/team/team-Connect.jpg"
                    imageOpacity={0.4}
                    cta={{
                        label: t("header.badge"),
                        onClick: openBooking
                    }}
                />

                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mb-24 space-y-8">
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 leading-relaxed block">
                                {t("intro.quote")}
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary italic leading-tight">
                                {t("intro.description")}
                            </h2>
                        </div>

                        {/* Offices Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                            {offices.map((office) => (
                                <div key={office.city} className="group space-y-8 flex flex-col">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between border-b border-primary/10 pb-6 transition-colors group-hover:border-primary/30">
                                            <div className="space-y-2">
                                                <h3 className="text-3xl font-serif text-primary leading-tight transition-all group-hover:translate-x-1 duration-500">
                                                    {office.city}
                                                </h3>
                                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 block">
                                                    {t(office.designationKey)}
                                                </span>
                                            </div>
                                            <MapPin className="h-6 w-6 text-primary/20 group-hover:text-primary transition-colors duration-500" />
                                        </div>
                                        <p className="text-slate-500 leading-relaxed font-light text-sm italic pr-4">
                                            {office.address}
                                        </p>
                                    </div>

                                    {/* Map Integration */}
                                    <div className="aspect-[4/3] bg-slate-50 border border-slate-100 relative overflow-hidden group/map transition-all duration-700 grayscale hover:grayscale-0 shadow-sm hover:shadow-md">
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            loading="lazy"
                                            allowFullScreen
                                            referrerPolicy="no-referrer-when-downgrade"
                                            src={`https://www.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                            className="opacity-70 group-hover/map:opacity-100 transition-opacity duration-700"
                                        ></iframe>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
                    {/* Architectural Texture Background */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(30,58,138,0.15)_0%,transparent_70%)]" />

                        {/* Structural Beams */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-[0.1]">
                            {[...Array(12)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute top-0 h-[200%] bg-white w-[1px]"
                                    style={{
                                        left: `${15 + (i * 8)}%`,
                                        transform: 'rotate(-25deg) translateY(-25%)',
                                        opacity: 1 - (i * 0.08),
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
                            <div className="space-y-6 group cursor-default">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 leading-relaxed block transition-colors group-hover:text-white/60">
                                    {t("details.email")}
                                </span>
                                <a
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-2xl font-serif text-white hover:text-white/70 transition-all duration-500 flex items-center gap-4 border-b border-white/10 pb-4"
                                    onClick={() => {
                                        // Contact email clicked
                                    }}
                                >
                                    <Mail className="h-5 w-5 opacity-40 shrink-0" />
                                    {contactInfo.email}
                                </a>
                            </div>
                            <div className="space-y-6 group cursor-default">
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 leading-relaxed block transition-colors group-hover:text-white/60">
                                    {t("details.phone")}
                                </span>
                                <div className="text-2xl font-serif text-white flex items-center gap-4 border-b border-white/10 pb-4">
                                    <Phone className="h-5 w-5 opacity-40 shrink-0" />
                                    {contactInfo.phone}
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
