"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useBooking } from "@/context/BookingContext";

const offices = [
    {
        city: "Caracas",
        designation: "Headquarters",
        address: "Avenida Venezuela, entre Calle Mohedano y Calle Sojo, Torre Simple, Piso 12. Urbanización El Rosal, Municipio Chacao (1060), Estado Miranda, Caracas – Venezuela.",
    },
    {
        city: "Mexico City",
        designation: "Office",
        address: "Bosque de Radiatas 22, Piso 4, Bosques de las Lomas, 05120 Ciudad de México, CDMX, México.",
    },
    {
        city: "Aragua",
        designation: "Office",
        address: "Avenida 19 de Abril, Edificio Profesional, Piso 2, Oficina 2-B, Maracay, Estado Aragua, Venezuela.",
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
                        label: t("office.connect"),
                        onClick: openBooking
                    }}
                />

                <section className="py-24">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mb-24">
                            <h2 className="text-4xl md:text-5xl font-serif text-primary italic leading-tight mb-8">
                                {t("intro.quote")}
                            </h2>
                            <p className="text-slate-600 leading-relaxed text-xl font-light">
                                {t("intro.description")}
                            </p>
                        </div>

                        {/* Offices Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-24">
                            {offices.map((office) => (
                                <div key={office.city} className="space-y-8 flex flex-col">
                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-2xl font-serif text-primary mb-1">{office.city}</h3>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                                    {office.designation}
                                                </span>
                                            </div>
                                            <MapPin className="h-5 w-5 text-primary/30 mt-1" />
                                        </div>
                                        <p className="text-slate-500 leading-relaxed font-light text-sm min-h-[80px]">
                                            {office.address}
                                        </p>
                                    </div>

                                    {/* Map Placeholder */}
                                    <div className="aspect-[4/3] bg-slate-50 border border-slate-100 flex items-center justify-center grayscale opacity-80">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                                            {office.city} Map Location
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Secondary Contact Details */}
                        <div className="pt-24 border-t border-slate-100">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                                <div className="space-y-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                                        {t("details.email")}
                                    </span>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-lg font-serif text-primary hover:text-primary/70 transition-colors block"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                                <div className="space-y-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                                        {t("details.phone")}
                                    </span>
                                    <span className="text-lg font-serif text-primary block">
                                        {contactInfo.phone}
                                    </span>
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
