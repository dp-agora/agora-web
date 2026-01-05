import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function InsightsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Strategic Intelligence"
                    subtitle="Insights"
                    badge="Thought Leadership"
                    description="High-fidelity analysis for strategic operators and investors in Latin America."
                />

                <section className="py-20 bg-white border-b">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:row items-center justify-between gap-8 mb-16">
                            <div className="flex gap-8 border-b w-full md:w-auto">
                                {['All', 'Market Briefings', 'Legal Updates', 'Advisories'].map((cat) => (
                                    <button key={cat} className="pb-4 text-xs font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary">
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <div className="relative w-full md:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input placeholder="Search insights..." className="pl-10 rounded-none border-slate-200" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <article key={i} className="group cursor-pointer">
                                    <div className="aspect-[16/10] bg-slate-100 mb-8 overflow-hidden relative border border-slate-200">
                                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="font-serif text-6xl text-slate-200 italic">0{i}</span>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Market Briefing • Jan 2026</span>
                                        <h3 className="text-2xl font-serif text-primary leading-tight group-hover:text-primary/70 transition-colors">
                                            Emerging Investment Corridors: Logistics and Energy Infrastructure in the Region
                                        </h3>
                                        <p className="text-slate-500 line-clamp-3 text-sm leading-relaxed mb-6">
                                            An in-depth look at the regulatory shifts and capital flows currently defining the infrastructure landscape in Venezuela and neighboring jurisdictions.
                                        </p>
                                        <Link href="/insights/post" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all">
                                            Read Analysis <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-20 flex justify-center">
                            <button className="text-xs font-bold uppercase tracking-widest text-primary border border-primary px-12 py-5 hover:bg-primary hover:text-white transition-all">
                                Load More Intelligence
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
