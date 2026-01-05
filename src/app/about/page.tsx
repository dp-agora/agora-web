import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Founded in Caracas, Defined Globally"
                    subtitle="Our Firm"
                    badge="Mission & Legacy"
                    description="Ágora was established to solve a singular problem: the lack of high-fidelity institutional advice in complex markets. We blend deep regional roots with a global perspective to serve as the definitive on-ramp for strategic investment."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40 mb-8">Firm Philosophy</h3>
                                <p className="text-3xl font-serif text-primary italic leading-tight">
                                    "We believe that advisory should be a catalyst for action, not a bottleneck."
                                </p>
                            </div>
                            <div className="lg:col-span-8 space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-serif font-bold text-primary">Ensuring Institutional Integrity</h4>
                                        <p className="text-slate-500 leading-relaxed">
                                            Our mission is to provide the legal and strategic infrastructure that allows global capital to operate with confidence in Latin America. We define the standard for high-fidelity advisory in the region.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-serif font-bold text-primary">Precision & Authority</h4>
                                        <p className="text-slate-500 leading-relaxed">
                                            We treat every advisory engagement with a product-driven mindset—focusing on clarity, transparency, and operational execution.
                                        </p>
                                    </div>
                                </div>

                                <div className="aspect-[21/9] bg-slate-100 border border-slate-200 flex items-center justify-center grayscale overflow-hidden group">
                                    <span className="font-serif text-[10vw] text-slate-200 italic font-bold group-hover:scale-110 transition-transform duration-1000">ÁGORA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-50 border-y">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl font-serif text-primary mb-12">Core Values</h2>
                            <div className="space-y-12">
                                {[
                                    { title: "Institutional Integrity", desc: "Setting the standard for transparency and governance in every market we enter." },
                                    { title: "Operational Excellence", desc: "A commitment to precision that moves beyond traditional legal services into true strategic partnership." },
                                    { title: "Local Mastery", desc: "Unparalleled depth in regional dynamics, providing the institutional foundation for the next wave of strategic investment." }
                                ].map((value, i) => (
                                    <div key={i} className="flex gap-8 items-start border-l-2 border-primary/10 pl-8 hover:border-primary transition-colors py-2">
                                        <span className="text-slate-300 font-serif text-2xl italic">0{i + 1}</span>
                                        <div>
                                            <h4 className="text-2xl font-serif text-primary mb-2">{value.title}</h4>
                                            <p className="text-slate-500">{value.desc}</p>
                                        </div>
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
