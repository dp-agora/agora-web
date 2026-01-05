import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "capital-entry",
        title: "Capital Entry & Deal Structuring",
        icon: TrendingUp,
        description: "Establishing the jurisdictional and financial vehicles required for regional market entry with a focus on Venezuela.",
        features: ["Entry Vehicle Design", "Multi-jurisdictional Capital Flows", "Market Due Diligence", "Local Representative Services"]
    },
    {
        id: "legal-implementation",
        title: "High-Stakes Implementation",
        icon: Shield,
        description: "Facilitating the legal and operational groundwork for mergers, acquisitions, and joint ventures in complex environments.",
        features: ["Governance & Compliance", "Contractual Frameworks", "M&A Execution Support", "Regulatory Implementation"]
    },
    {
        id: "ongoing-ops",
        title: "Ongoing Regional Operations",
        icon: Globe,
        description: "Continuous governance, tax strategy, and regulatory mapping required to maintain and scale your regional presence.",
        features: ["Entity Management", "Tax Efficiency Strategy", "Trade & Sanctions Compliance", "Institutional Relations"]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Strategic Command from Entry to Scale"
                    subtitle="Our Focus"
                    badge="Capital Entry & Execution"
                    description="We provide the legal and strategic infrastructure required to navigate the Latin American landscape. Our focus is on the precision of your entry and the stability of your ongoing operations."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {services.map((service) => (
                                <div key={service.id} className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                    <service.icon className="h-10 w-10 text-primary mb-8" />
                                    <h3 className="text-3xl font-serif text-primary mb-6 leading-tight">{service.title}</h3>
                                    <p className="text-slate-500 mb-12 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-4 mb-12">
                                        {service.features.map((f, i) => (
                                            <li key={i} className="text-sm font-medium text-slate-400 flex items-center gap-3">
                                                <div className="h-1 w-1 bg-primary/20 rounded-full" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href={`/contact`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">
                                        Inquire for Execution Details <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Methodology / The Wedge Section */}
                <section className="py-24 bg-primary text-white overflow-hidden relative">
                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <h2 className="text-4xl md:text-5xl font-serif">The Ágora Methodology</h2>
                            <p className="text-white/60 text-lg max-w-2xl mx-auto italic">
                                Using local mastery in Caracas as our primary wedge for wider regional implementation.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
                                {[
                                    { step: "01", title: "Assessment", desc: "Rigorous evaluation of the market, sovereign risk, and legal landscape." },
                                    { step: "02", title: "Structuring", desc: "Designing high-fidelity institutional vehicles built for operational clarity." },
                                    { step: "03", title: "Execution", desc: "Managing the on-the-ground legal and strategic implementation to ensure scale." }
                                ].map((m, i) => (
                                    <div key={i} className="space-y-4 border-l border-white/10 pl-8">
                                        <span className="text-white/30 font-serif text-2xl italic">{m.step}</span>
                                        <h4 className="text-xl font-bold">{m.title}</h4>
                                        <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Abstract background Á */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                        <span className="font-serif text-[30vw] font-bold text-white select-none">Á</span>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
