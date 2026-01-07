import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Footer() {
    const t = useTranslations("Footer");

    const footerLinks = [
        {
            title: t("firm"),
            links: [
                { name: t("about"), href: "/about" },
                { name: t("team"), href: "/team" },
                { name: t("careers"), href: "/careers" },
                { name: t("contact"), href: "/contact" },
            ],
        },
        {
            title: t("practiceAreas"),
            links: [
                { name: t("corporate"), href: "/services" },
                { name: t("banking"), href: "/services" },
                { name: t("tax"), href: "/services" },
                { name: t("regulatory"), href: "/services" },
            ],
        },
    ];

    return (
        <footer className="bg-primary text-white border-t border-white/10">
            <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block outline-none">
                            <div className="relative h-12 w-60">
                                <Image
                                    src="/assets/brand/Logo Agora outline.png"
                                    alt="Ágora Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-white/50 max-w-sm leading-relaxed text-sm">
                            {t("description")}
                        </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="space-y-6">
                                <h4 className="font-bold text-white text-[10px] uppercase tracking-[0.2em]">{section.title}</h4>
                                <div className="flex flex-col gap-4">
                                    {section.links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href as any}
                                            className="text-white/40 hover:text-white transition-colors text-sm font-medium"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">
                        {t("rights", { year: new Date().getFullYear() })}
                    </p>
                    <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
                        <Link href="/privacy" className="text-white/30 hover:text-white transition-colors">{t("privacy")}</Link>
                        <Link href="/terms" className="text-white/30 hover:text-white transition-colors">{t("terms")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

