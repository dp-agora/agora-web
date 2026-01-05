import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

const offices = [
    {
        city: "Caracas",
        address: "Avenida Francisco de Miranda, Caracas, Venezuela",
        phone: "+58 XXX XXX XXXX",
        email: "caracas@agoralatam.com",
        focus: "Regional Headquarters & Strategic Advisory"
    },
    {
        city: "Madrid",
        address: "Calle de Velázquez, Madrid, Spain",
        phone: "+34 XXX XXX XXX",
        email: "madrid@agoralatam.com",
        focus: "Strategic European Partnerships"
    },
    {
        city: "New York",
        address: "Park Avenue, New York, NY, USA",
        phone: "+1 XXX XXX XXXX",
        email: "ny@agoralatam.com",
        focus: "Global Capital Relations"
    }
];

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Begin a Strategic Alignment"
                    subtitle="Contact"
                    badge="Discovery Call"
                    description="Establish your strategic on-ramp for Latin American investment. Discovery calls are strictly confidential and designed to assess institutional alignment."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                            <div className="lg:col-span-4 space-y-12">
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-serif text-primary italic">"Institutional excellence begins with a single conversation."</h2>
                                    <p className="text-slate-500 leading-relaxed text-sm">
                                        Whether you are a private equity fund, an institutional investor, or a strategic operator, our team is ready to provide the local clarity you need.
                                    </p>
                                </div>

                                <div className="p-6 bg-slate-50 border border-slate-100 space-y-4">
                                    <div className="flex items-center gap-3 text-primary">
                                        <ShieldCheck className="h-5 w-5" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Confidential Reporting</span>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Your inquiry is handled with the highest degree of professional discretion and multi-jurisdictional privilege where applicable.
                                    </p>
                                </div>

                                <div className="space-y-6 pt-4">
                                    <div className="flex items-center gap-4 text-primary">
                                        <Mail className="h-5 w-5" />
                                        <span className="font-bold text-sm uppercase tracking-widest">advisory@agoralatam.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-primary">
                                        <Phone className="h-5 w-5" />
                                        <span className="font-bold text-sm uppercase tracking-widest">+1 (800) AGORA-LATAM</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {offices.map((office) => (
                                        <div key={office.city} className="p-8 border border-slate-100 bg-slate-50 space-y-6 hover:translate-y-[-4px] transition-transform duration-300">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-2xl font-serif text-primary">{office.city}</h3>
                                                <MapPin className="h-5 w-5 text-primary/20" />
                                            </div>
                                            <div className="space-y-4">
                                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{office.focus}</p>
                                                <p className="text-sm text-slate-500 leading-relaxed">{office.address}</p>
                                                <div className="pt-4 space-y-1 border-t border-slate-200">
                                                    <p className="text-sm font-medium text-primary">{office.phone}</p>
                                                    <p className="text-sm font-medium text-primary/60">{office.email}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 aspect-[21/9] bg-slate-200 border border-slate-300 flex items-center justify-center grayscale">
                                    <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.5em]">Interactive Global Map Placeholder</span>
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
