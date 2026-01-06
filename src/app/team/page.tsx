import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function TeamPage() {
    const teamGroups = [
        {
            title: "Senior Partners",
            members: [
                {
                    name: "Álvaro Posada",
                    role: "Senior Partner",
                    bio: "With over 30 years of legal experience, Álvaro stands as a prominent figure in Banking, Finance, and Capital Markets. His career includes a tenure as partner at Baker McKenzie. He has provided strategic counsel to both national and international financial institutions on complex regulatory matters, project financing, and high-value transactions."
                },
                {
                    name: "María Eugenia Reyes",
                    role: "Senior Partner",
                    bio: "María Eugenia brings over three decades of legal expertise, specializing in Corporate, Real Estate, Environmental, and Sustainability law. Previously a partner at Baker McKenzie, she has advised major corporations on cross-border transactions, regulatory compliance, and sustainable development initiatives across Latin America."
                }
            ]
        },
        {
            title: "Practice Leads",
            members: [
                {
                    name: "José P. Barnola Jr.",
                    role: "Practice Lead",
                    bio: "José is an expert in Taxation and M&A with over 25 years of professional experience. Licensed to practice law in both Mexico and Venezuela, he has designed and implemented complex tax structures for multinational corporations and led significant cross-border acquisitions."
                },
                {
                    name: "Ariana Cabrera",
                    role: "Practice Lead",
                    bio: "Ariana leads the Labor Law practice with over 10 years of specialized experience. As a member of the Venezuelan Institute of Social Law, she provides expert guidance on employment contracts, workforce restructuring, and labor litigation for diverse industries."
                }
            ]
        },
        {
            title: "Regional Leads",
            members: [
                {
                    name: "Lizeth Reyes",
                    role: "Regional Lead",
                    bio: "Lizeth, based in Aragua, is a Civil and Commercial Litigation expert with over 25 years of experience. She represents clients in complex commercial disputes, contract law, and judicial procedures, ensuring robust legal protection across various regional jurisdictions."
                }
            ]
        },
        {
            title: "Associates",
            members: [
                {
                    name: "Marco Gómez",
                    role: "Associate",
                    bio: "Marco specializes in Tax Law, providing strategic counsel on fiscal compliance and litigation. He has extensive experience in both administrative and judicial tax procedures, helping clients navigate complex regulatory frameworks."
                },
                {
                    name: "Bárbara Briceño",
                    role: "Associate",
                    bio: "Bárbara focuses on Corporate Law and Intellectual Property. She advises clients on business formation, contract negotiation, and the protection of brand assets and innovative technologies."
                },
                {
                    name: "Manuel Domingo",
                    role: "Associate",
                    bio: "Manuel is a specialist in Labor Law and Human Resources. He assists corporations in managing employment relationships, drafting comprehensive internal policies, and ensuring compliance with labor regulations."
                },
                {
                    name: "Dayana Velíz",
                    role: "Associate",
                    bio: "Dayana focuses on Corporate and Commercial Law. She supports clients through the lifecycle of their business operations, from incorporation and governance to commercial agreements and dissolution."
                },
                {
                    name: "Raúl Sancristobal",
                    role: "Associate",
                    bio: "Raúl is an expert in Dispute Resolution and Litigation. He represents clients in civil and commercial cases, bringing a strategic approach to conflict mediation and courtroom representation."
                },
                {
                    name: "Rodrigo Colmenares",
                    role: "Associate",
                    bio: "Rodrigo specializes in Public Law and Regulatory Affairs. He advises on government relations, administrative procedures, and compliance with public sector regulations."
                },
                {
                    name: "Andreína Flores",
                    role: "Associate",
                    bio: "Andreína focuses on International Business and Investment Law. She assists clients in cross-border trade, foreign investment regulations, and international commercial arbitration."
                },
                {
                    name: "Fabiola Flores",
                    role: "Associate",
                    bio: "Fabiola is a specialist in Environmental Law and Natural Resources. She guides organizations through environmental impact assessments, regulatory compliance, and sustainable resource management."
                }
            ]
        },
        {
            title: "Operations",
            members: [
                {
                    name: "Andrea Regalado",
                    role: "Office Manager",
                    bio: "Andrea oversees daily office operations and administrative functions. With a focus on organizational efficiency, she ensures that all logistical and supportive processes run smoothly to facilitate high-quality legal service delivery."
                },
                {
                    name: "Oriana Rodríguez",
                    role: "Paralegal",
                    bio: "Oriana provides essential legal support through comprehensive research, document preparation, and case management assistance. Her diligence ensures that the legal team has the foundation they need for successful outcomes."
                },
                {
                    name: "Juan Francisco Posada",
                    role: "Digital Strategy",
                    bio: "Juan Francisco leads the firm's digital presence and technological integration. He focuses on leveraging digital tools to enhance client communication, operational transparency, and the overall efficiency of legal processes."
                }
            ]
        }
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                <PageHeader
                    title="World-Class Expertise"
                    subtitle="Our People"
                    badge="Partner-Led Engagement"
                    description="A multidisciplinary team of strategic legal and investment specialists."
                />

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        {teamGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className={groupIndex > 0 ? "mt-24" : ""}>
                                <div className="border-b border-slate-100 pb-8 mb-16">
                                    <h2 className="text-3xl font-serif text-primary italic">{group.title}</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
                                    {group.members.map((member, i) => (
                                        <div key={i} className="group">
                                            <div className="aspect-[4/5] bg-slate-50 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 border border-slate-100 relative overflow-hidden">
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="font-serif text-7xl text-slate-100 italic">Á</span>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div>
                                                    <h3 className="text-2xl font-serif text-primary mb-1">{member.name}</h3>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{member.role}</p>
                                                </div>
                                                <p className="text-sm text-slate-600 leading-relaxed font-light italic">
                                                    {member.bio}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

