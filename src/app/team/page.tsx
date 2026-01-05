import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function TeamPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="A Multidisciplinary Command"
                    subtitle="Our People"
                    badge="Partner-Led Engagement"
                    description="Our team brings together elite legal minds, investment strategists, and institutional experts. We are led by partners who have navigated the region's most complex transitions and high-stakes transactions."
                />

                <section className="py-20 bg-white border-b">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-col md:row items-center justify-between gap-8 mb-20">
                            <div className="flex flex-wrap gap-4 border-b w-full md:w-auto overflow-x-auto pb-4">
                                {['All', 'Partners', 'Strategic Advisors', 'Legal Counsel', 'Analysts'].map((cat) => (
                                    <button key={cat} className="whitespace-nowrap pb-2 text-xs font-bold uppercase tracking-widest text-primary/40 hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary">
                                        {cat}
                                    </button>
                                ))}
                            </div>
                            <div className="relative w-full md:w-80">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <Input placeholder="Search people or expertise..." className="pl-10 rounded-none border-slate-200 focus-visible:ring-primary/20 focus-visible:border-primary" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                            {[
                                { name: "Partner Placeholder", role: "Managing Partner", focus: "Investment Advisory" },
                                { name: "Advisor Placeholder", role: "Senior Strategic Advisor", focus: "Cross-border Operations" },
                                { name: "Counsel Placeholder", role: "Special Legal Counsel", focus: "Regulatory Compliance" },
                                { name: "Partner Placeholder", role: "Partner", focus: "Deal Structuring" },
                            ].map((member, i) => (
                                <div key={i} className="group">
                                    <div className="aspect-[3/4] bg-slate-100 mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-200 relative overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="font-serif text-6xl text-slate-200 italic opacity-50">Á</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-serif text-primary">{member.name}</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{member.role}</p>
                                        <p className="text-sm text-slate-500 pt-3 border-t border-slate-100 mt-4 italic">
                                            Specializing in {member.focus}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
