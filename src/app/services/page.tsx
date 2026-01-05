import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Globe, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "investment",
        title: "Investment Advisory",
        icon: TrendingUp,
        description: "Structuring capital for entry, growth, and exit in Latin American markets.",
        features: ["Deal Structuring", "Market Due Diligence", "Local Representative Services", "Joint Venture Support"]
    },
    {
        id: "legal",
        title: "Strategic Legal",
        icon: Shield,
        description: "The institutional foundation for global operations.",
        features: ["Governance & Compliance", "Contractual Frameworks", "Intellectual Property", "Litigation Strategy"]
    },
    {
        id: "global",
        title: "Cross-border Strategy",
        icon: Globe,
        description: "Navigating the complexities of multi-jurisdictional operations.",
        features: ["International Tax Planning", "Regulatory Mapping", "Sovereign Risk Management", "Trade & Sanctions Compliance"]
    }
];

export default function ServicesPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Practices & Expertise"
                    subtitle="Our Services"
                    badge="High-Stakes Advisory"
                    description="We provide the structural framework for strategic investment and legal excellence in the region."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {services.map((service) => (
                                <div key={service.id} className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                    <service.icon className="h-10 w-10 text-primary mb-8" />
                                    <h3 className="text-3xl font-serif text-primary mb-6">{service.title}</h3>
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
                                    <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">
                                        Detail Overview <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-primary text-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl mx-auto text-center space-y-12">
                            <h2 className="text-4xl md:text-5xl font-serif">Methodology: The Ágora Framework</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-16">
                                {[
                                    { step: "01", title: "Assessment", desc: "Rigorous evaluation of the market and legal landscape." },
                                    { step: "02", title: "Structuring", desc: "Designing a robust institutional vehicle for the objective." },
                                    { step: "03", title: "Execution", desc: "Local operational management and advisory support." }
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
                </section>
            </main>
            <Footer />
        </div>
    );
}
