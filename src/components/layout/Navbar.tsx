"use client";

import { Link, usePathname } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { openBooking } = useBooking();
    const t = useTranslations("Navbar");

    const navLinks = [
        { name: t("about"), href: "/about" },
        { name: t("services"), href: "/practices" },
        { name: t("team"), href: "/team" },
        { name: t("careers"), href: "/careers" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-primary shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-12">
                <div className="flex items-center gap-8">
                    <Link href="/" className="group flex items-center">
                        <div className="relative h-12 w-56">
                            <Image
                                src="/assets/brand/Logo Agora outline.png"
                                alt="Ágora Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>





                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href as any}
                                className={cn(
                                    "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-white/70",
                                    pathname === link.href ? "text-white" : "text-white/80"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4 border-r border-white/10 pr-4 mr-2">
                        <LanguageSwitcher />
                    </div>

                    <Button
                        onClick={openBooking}
                        variant="outline"
                        className="hidden sm:inline-flex bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-none h-10 px-8 text-xs font-bold tracking-[0.2em] uppercase transition-all active:scale-95 cursor-pointer"
                    >
                        {t("bookCall")}
                    </Button>

                    {/* Mobile Menu Trigger */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[400px] border-l-0 bg-primary p-0">
                            <div className="flex flex-col h-full bg-primary text-white p-8">
                                <div className="flex items-center justify-between mb-16">
                                    <div className="relative h-12 w-60">
                                        <Image
                                            src="/assets/brand/Logo Agora outline.png"
                                            alt="Ágora Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>


                                    <div className="flex items-center gap-4">
                                        <LanguageSwitcher />
                                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10">
                                            <X className="h-8 w-8" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href as any}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl font-serif hover:text-white/70 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-auto pb-8">
                                    <Button
                                        variant="outline"
                                        className="w-full border-white text-white hover:bg-white hover:text-primary rounded-none h-14 text-lg cursor-pointer"
                                        onClick={() => {
                                            setIsOpen(false);
                                            openBooking();
                                        }}
                                    >
                                        {t("bookCall")}
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>

    );
}

