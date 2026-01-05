import Link from "next/link";

const footerLinks = [
    {
        title: "Firm",
        links: [
            { name: "About", href: "/about" },
            { name: "Team", href: "/team" },
            { name: "Careers", href: "/careers" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Investment Advisory", href: "/services" },
            { name: "Strategic Legal", href: "/services" },
            { name: "Cross-border Strategy", href: "/services" },
        ],
    },
    {
        title: "Insights",
        links: [
            { name: "Thought Leadership", href: "/insights" },
            { name: "Market Briefings", href: "/insights" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center border-2 border-primary text-xl font-bold text-primary">
                                Á
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-widest text-primary">
                                ÁGORA
                            </span>
                        </Link>
                        <p className="text-slate-500 max-w-sm leading-relaxed">
                            Leading strategic on-ramp for global investors and strategic operators in Latin America.
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="space-y-4">
                                <h4 className="font-bold text-primary text-sm uppercase tracking-wider">{section.title}</h4>
                                <div className="flex flex-col gap-3">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-slate-500 hover:text-primary transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-slate-200 flex flex-col md:row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400 font-medium tracking-wide">
                        © {new Date().getFullYear()} ÁGORA. ALL RIGHTS RESERVED. STRATEGIC LEGAL & INVESTMENT ADVISORY.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-400 font-medium">
                        <Link href="/privacy" className="hover:text-primary transition-colors uppercase tracking-wider">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors uppercase tracking-wider">Legal Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
