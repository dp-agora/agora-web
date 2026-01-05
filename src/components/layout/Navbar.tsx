"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
                <div className="flex items-center gap-8">
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center border-2 border-primary text-xl font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                            Á
                        </div>
                        <span className="font-serif text-2xl font-bold tracking-widest text-primary">
                            ÁGORA
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary/70",
                                    pathname === link.href ? "text-primary" : "text-slate-600"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 rounded-none h-11 px-8 text-sm font-semibold tracking-wide uppercase transition-all shadow-sm active:scale-95">
                        <Link href="/contact">Book a Discovery Call</Link>
                    </Button>

                    {/* Mobile Menu Trigger */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-[400px] border-l-0 bg-primary p-0">
                            <div className="flex flex-col h-full bg-primary text-white p-8">
                                <div className="flex items-center justify-between mb-16">
                                    <span className="font-serif text-2xl font-bold tracking-widest">ÁGORA</span>
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10">
                                        <X className="h-8 w-8" />
                                    </Button>
                                </div>
                                <div className="flex flex-col gap-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl font-serif hover:text-white/70 transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-auto pb-8">
                                    <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary rounded-none h-14 text-lg">
                                        <Link href="/contact" onClick={() => setIsOpen(false)}>Book a Discovery Call</Link>
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
