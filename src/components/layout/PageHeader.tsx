"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    badge?: string;
}

export function PageHeader({ title, subtitle, description, badge }: PageHeaderProps) {
    return (
        <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-white border-b">
            <div className="container mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    {badge && (
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                            {badge}
                        </span>
                    )}
                    {subtitle && (
                        <h2 className="text-primary/60 text-lg md:text-xl font-medium mb-4 uppercase tracking-widest">{subtitle}</h2>
                    )}
                    <h1 className="text-5xl md:text-7xl font-serif text-primary leading-tight mb-8 tracking-tight">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
