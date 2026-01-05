import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Defining the Frontier"
                    subtitle="Our Firm"
                    badge="Foundation & Legacy"
                    description="Ágora was built on the belief that institutional excellence is the single most important factor for success in emerging markets."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40 mb-8">Establishment</h3>
                                <p className="text-3xl font-serif text-primary italic leading-tight">
                                    "Success in the region depends on more than just capital; it depends on high-quality institutional ties."
                                </p>
                            </div>
                            <div className="lg:col-span-8 space-y-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-serif font-bold text-primary">Strategic Origin</h4>
                                        <p className="text-slate-500 leading-relaxed">
                                            Founded to bridge the gap between global standards of legal excellence and the complex reality of operating within Latin America.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-serif font-bold text-primary">Our Philosophy</h4>
                                        <p className="text-slate-500 leading-relaxed">
                                            We treat every advisory engagement with the precision of a product rollout, ensuring clarity, risk mitigation, and operational speed.
                                        </p>
                                    </div>
                                </div>

                                <div className="aspect-[21/9] bg-slate-100 border border-slate-200" />
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
                                    { title: "Local Mastery", desc: "Unparalleled depth in regional dynamics, starting with our foundations in Caracas." }
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
