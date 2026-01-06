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
                    title="Join Ágora"
                    subtitle="Careers"
                    badge="Collaborate with Leaders"
                    description="Be part of a dynamic team committed to excellence and innovative solutions in a collaborative environment."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                            <div className="space-y-12">
                                <h2 className="text-4xl font-serif text-primary italic">"Innovation, excellence, and leadership define our path."</h2>
                                <div className="space-y-8">
                                    <p className="text-slate-600 leading-relaxed text-lg font-light">
                                        At Ágora Abogados, we continue to grow and are looking to add a <strong className="font-bold text-primary">Senior Lawyer</strong> with solid experience in the corporate and financial world to our team.
                                    </p>
                                    <p className="text-slate-500 leading-relaxed">
                                        You will work alongside highly recognized professionals advising national and multinational companies on complex cross-border transactions and strategic legal matters.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-12 lg:p-16 border border-slate-100 space-y-12">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40">Ideal Candidate Profile</h3>
                                <div className="space-y-0 divide-y divide-slate-200">
                                    <div className="py-8 space-y-6">
                                        <h4 className="text-2xl font-serif text-primary">Senior Lawyer</h4>
                                        <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                                            <ul className="space-y-4">
                                                <li className="flex gap-4">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    <span>More than 6 years of graduate experience.</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    <span>Previous experience in law firms, investment funds, or similar structures.</span>
                                                </li>
                                                <li className="flex gap-4">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                                                    <div>
                                                        <span className="block font-bold text-primary mb-2">Solid knowledge and experience in:</span>
                                                        <ul className="space-y-2 opacity-80">
                                                            <li>• Corporate and commercial law.</li>
                                                            <li>• Capital markets.</li>
                                                            <li>• Financing, Credit and Corporate Finance Transactions.</li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-slate-200">
                                    <p className="text-sm text-slate-500 font-medium mb-4">
                                        If you meet the profile, we invite you to send your CV to:
                                    </p>
                                    <Link
                                        href="mailto:Admin@agoralatam.com"
                                        className="text-2xl font-serif text-primary hover:text-primary/70 transition-colors flex items-center gap-3"
                                    >
                                        Admin@agoralatam.com
                                        <MoveUpRight className="h-5 w-5" />
                                    </Link>
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
