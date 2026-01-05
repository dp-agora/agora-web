import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Architect the Future of Regional Investment"
                    subtitle="Careers"
                    badge="Join Our Mission"
                    description="We are seeking high-autonomy professionals who thrive at the intersection of law, finance, and emerging market strategy. At Ágora, you don't just advise; you build the frameworks for the next decade of Latin American growth."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div className="space-y-12">
                                <h2 className="text-4xl font-serif text-primary">Precision & Autonomy</h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "Intellectual Challenge", desc: "Work at the intersection of complex legal frameworks and global investment strategy." },
                                        { title: "Regional Impact", desc: "Directly influence the institutional foundation of Latin American growth." },
                                        { title: "Multidisciplinary Environment", desc: "Collaborate with lawyers, economists, and strategic operators in a flat, high-output culture." }
                                    ].map((benefit, i) => (
                                        <div key={i} className="space-y-2">
                                            <h4 className="text-xl font-bold text-primary">{benefit.title}</h4>
                                            <p className="text-slate-500 leading-relaxed max-w-md">{benefit.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-slate-50 p-12 lg:p-16 border border-slate-100 space-y-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40">Open Positions</h3>
                                <div className="space-y-0 divide-y divide-slate-200">
                                    {[
                                        "Senior Investment Analyst",
                                        "Strategic Legal Counsel (Energy Focus)",
                                        "Principal Advisor - Cross-border Strategy",
                                        "Corporate Governance Associate"
                                    ].map((position, i) => (
                                        <Link key={i} href="#" className="group block py-8 flex items-center justify-between hover:translate-x-2 transition-transform">
                                            <div>
                                                <h4 className="text-lg font-serif text-primary group-hover:text-primary transition-colors">{position}</h4>
                                                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Full-time • Hybrid</p>
                                            </div>
                                            <MoveUpRight className="h-5 w-5 text-slate-300 group-hover:text-primary transition-colors" />
                                        </Link>
                                    ))}
                                </div>
                                <div className="pt-8">
                                    <p className="text-xs text-slate-500 font-medium">
                                        Don&apos;t see a fit? We are always looking for exceptional talent. <br />
                                        <Link href="mailto:careers@agoralatam.com" className="text-primary font-bold hover:underline">Send us your credentials.</Link>
                                    </p>
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
