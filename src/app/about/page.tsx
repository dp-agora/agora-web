import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="Experience and Innovation"
                    subtitle="About Us"
                    badge="Caracas Based, Global Vision"
                    description="Ágora Abogados combines the dynamism of a modern firm with the vast experience and leadership of our partners."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-4">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-primary/40 mb-8">Our Firm</h3>
                                <p className="text-3xl font-serif text-primary italic leading-tight">
                                    "We provide the personalized service of a legal boutique with global reach, capabilities, and vision."
                                </p>
                            </div>
                            <div className="lg:col-span-8 space-y-12">
                                <p className="text-slate-600 leading-relaxed text-lg font-light">
                                    Ágora Abogados is a law firm based in Caracas, Venezuela. We combine the dynamism and innovation of a modern firm with the vast experience and renowned leadership of our partners and team.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {[
                                        {
                                            title: "Quality, Agility and Excellence",
                                            desc: "A team committed to delivering top-quality service to our clients and continuously improving high-performance standards."
                                        },
                                        {
                                            title: "In-Depth Analysis",
                                            desc: "We are dedicated to thoroughly understanding the specific circumstances, challenges and objectives of our clients' businesses, in order to provide comprehensive legal advice."
                                        },
                                        {
                                            title: "Tailored Strategies",
                                            desc: "After gaining a complete understanding of the challenges and opportunities, our innovative team will identify the best option and design customized legal strategies to achieve the best possible outcome."
                                        },
                                        {
                                            title: "Agile and Precise Execution",
                                            desc: "Our team of highly recognized professionals implements solutions effectively, ensuring sustainable and long-lasting results."
                                        }
                                    ].map((pillar, i) => (
                                        <div key={i} className="space-y-4">
                                            <h4 className="text-xl font-serif font-bold text-primary">{pillar.title}</h4>
                                            <p className="text-slate-500 leading-relaxed text-sm">
                                                {pillar.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-50 border-y">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl">
                            <h2 className="text-4xl font-serif text-primary mb-16">Core Values</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {[
                                    { title: "Innovation", desc: "We are accustomed to going beyond the conventional to develop innovative legal strategies and achieve optimal results." },
                                    { title: "Sustainability", desc: "Priority on sustainable and socially responsible practices in governance and environmental matters across all operations." },
                                    { title: "Excellence", desc: "Committed to continuous improvement and at the forefront of legal practices in ever-changing environments." },
                                    { title: "Integrity", desc: "Highlighting ethical conduct and transparency in all interactions, fostering trust with clients and stakeholders." },
                                    {
                                        title: "Loyalty, Trust & Collaboration",
                                        desc: "The pillars of our relationships. We build strong, lasting bonds based on transparency, mutual respect, and an unwavering commitment to our clients' interests.",
                                        full: true
                                    }
                                ].map((value, i) => (
                                    <div key={i} className={`flex gap-8 items-start border-l-2 border-primary/10 pl-8 hover:border-primary transition-colors py-2 ${value.full ? 'md:col-span-2' : ''}`}>
                                        <span className="text-slate-300 font-serif text-xl italic">0{i + 1}</span>
                                        <div>
                                            <h4 className="text-2xl font-serif text-primary mb-2">{value.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <h2 className="text-4xl font-serif text-primary mb-16">Industry Focus</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {[
                                {
                                    title: "Banking, Finance, Capital Markets, VC and PE",
                                    desc: "Strategic legal advice to banks, brokers, and financial institutions. Expertise in international financial services, captive financing entities, and holding structures. Specialization in retail financing, consumer and automotive financing, and debtor-creditor relations."
                                },
                                {
                                    title: "Food & Agriculture",
                                    desc: "Comprehensive legal support in agricultural and agro-industrial sectors. From project development and infrastructure to regulatory compliance, planting programs, and supply chain management. Designing corporate structures for regional expansion and financing."
                                },
                                {
                                    title: "Energy, Infrastructure and Environment",
                                    desc: "Supporting sustainable development and project financing in the energy and infrastructure sectors, ensuring compliance and operational efficiency."
                                },
                                {
                                    title: "Healthcare & Life Sciences",
                                    desc: "High-value specialized legal services in healthcare and pharmaceuticals. Focus on regulatory compliance, IP protection, distribution networks, pharmacy franchises, and specialized M&A."
                                },
                                {
                                    title: "Industrials, Manufacturing & Transportation",
                                    desc: "Specialized services to transportation companies, including cable systems. Efficient structures for national market operations, addressing public law and multi-level taxation."
                                }
                            ].map((industry, i) => (
                                <div key={i} className="p-10 border border-slate-100 bg-slate-50 group hover:bg-primary transition-all duration-500">
                                    <h4 className="text-2xl font-serif font-bold text-primary group-hover:text-white mb-4 transition-colors">{industry.title}</h4>
                                    <p className="text-slate-500 group-hover:text-slate-200 leading-relaxed transition-colors">{industry.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-50 border-t">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="flex flex-wrap items-center justify-between gap-12 opacity-60">
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Chambers Global</span>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Chambers Latin America</span>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">ITR Americas Tax</span>
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">IFLR1000</span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
