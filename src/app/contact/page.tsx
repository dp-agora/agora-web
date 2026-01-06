import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, MapPin, Phone } from "lucide-react";

const office = {
    city: "Caracas",
    address: "Avenida Venezuela, entre Calle Mohedano y Calle Sojo, Torre Simple, Piso 12. Urbanización El Rosal, Municipio Chacao (1060), Estado Miranda, Caracas – Venezuela.",
    phone: "+58 (412) 534-2877",
    email: "admin@agoralatam.com",
    focus: "Headquarters"
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Connect with Our Specialists"
                    subtitle="Contact"
                    badge="Discovery Call"
                    description="Establish your strategic on-ramp for Latin American investment."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                            <div className="lg:col-span-12">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                    <div className="space-y-12">
                                        <div className="space-y-8">
                                            <h2 className="text-4xl font-serif text-primary italic leading-tight">"Institutional excellence begins with a single conversation."</h2>
                                            <p className="text-slate-600 leading-relaxed text-lg font-light">
                                                Whether you are a private equity fund, an institutional investor, or a strategic operator, our team is ready to provide the local clarity you need.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Direct Email</span>
                                                <a href="mailto:admin@agoralatam.com" className="text-xl font-serif text-primary hover:text-primary/70 transition-colors">
                                                    admin@agoralatam.com
                                                </a>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Phone Support</span>
                                                <span className="text-xl font-serif text-primary">
                                                    +58 (412) 534-2877
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-12 border border-slate-100 bg-slate-50 space-y-8">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-3xl font-serif text-primary">{office.city}</h3>
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="space-y-6">
                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{office.focus}</p>
                                            <p className="text-lg text-slate-500 leading-relaxed font-light">{office.address}</p>
                                            <div className="pt-8 aspect-video bg-white border border-slate-200 flex items-center justify-center grayscale">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Caracas HQ Map Location</span>
                                            </div>
                                        </div>
                                    </div>
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
