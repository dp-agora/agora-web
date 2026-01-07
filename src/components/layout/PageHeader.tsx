"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    badge?: string;
    videoSrc?: string;
    videoOpacity?: number;
    imageSrc?: string;
    imageOpacity?: number;
    variant?: 'default' | 'institutional';
    cta?: {
        label: string;
        onClick: () => void;
    };
}

export function PageHeader({
    title,
    subtitle,
    description,
    badge,
    videoSrc,
    videoOpacity = 0.5,
    imageSrc,
    imageOpacity = 0.5,
    variant = 'default',
    cta
}: PageHeaderProps) {
    const isInstitutional = variant === 'institutional';
    const isDark = !!videoSrc || !!imageSrc || isInstitutional;

    return (
        <section className={`relative pt-24 pb-20 lg:pt-40 lg:pb-32 border-b overflow-hidden ${isDark ? 'min-h-[50vh] flex items-center bg-primary' : 'bg-white'}`}>
            {/* Elite Typographic Background Layer */}
            {isInstitutional && (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
                    <span
                        className="absolute -bottom-[15%] -left-[5%] text-[40vw] font-serif font-bold text-white/[0.06] whitespace-nowrap leading-none tracking-tighter"
                        aria-hidden="true"
                    >
                        {title.split(' ')[0]}
                    </span>
                </div>
            )}

            {videoSrc && !isInstitutional && (
                <>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ opacity: videoOpacity }}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                </>
            )}

            {imageSrc && !videoSrc && !isInstitutional && (
                <>
                    <Image
                        src={imageSrc}
                        alt=""
                        fill
                        className="object-cover"
                        style={{ opacity: imageOpacity }}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                </>
            )}

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-5xl"
                >
                    {badge && (
                        <span className={`inline-block px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-primary'} text-[10px] font-bold uppercase tracking-[0.3em] mb-8`}>
                            {badge}
                        </span>
                    )}

                    {subtitle && (
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`h-[1px] w-8 ${isDark ? 'bg-white/30' : 'bg-primary/30'}`} />
                            <h2 className={`${isDark ? 'text-white/60' : 'text-primary/60'} text-xs font-bold uppercase tracking-[0.3em]`}>
                                {subtitle}
                            </h2>
                        </div>
                    )}

                    <h1 className={`text-6xl md:text-8xl lg:text-9xl font-serif ${isDark ? 'text-white' : 'text-primary'} leading-[1.1] mb-10 tracking-tight`}>
                        {title}
                    </h1>

                    {description && (
                        <p className={`text-xl md:text-2xl ${isDark ? 'text-white/70' : 'text-slate-500'} max-w-3xl leading-relaxed font-light mb-12`}>
                            {description}
                        </p>
                    )}

                    {cta && (
                        <button
                            onClick={cta.onClick}
                            className={`inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] transition-all active:scale-95 ${isDark ? 'bg-white text-primary hover:bg-white/90' : 'bg-primary text-white hover:bg-primary/90'}`}
                        >
                            {cta.label}
                        </button>
                    )}
                </motion.div>

                {cta && (
                    <div className="absolute top-12 right-6 lg:right-12 hidden lg:block">
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            onClick={cta.onClick}
                            className={`group relative flex items-center gap-4 px-8 py-4 border transition-all ${isDark ? 'border-white/20 text-white hover:bg-white hover:text-primary hover:border-white' : 'border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary'}`}
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{cta.label}</span>
                            <div className={`h-[1px] w-6 transition-all group-hover:w-10 ${isDark ? 'bg-white/50 group-hover:bg-primary' : 'bg-primary/50 group-hover:bg-white'}`} />
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
}

