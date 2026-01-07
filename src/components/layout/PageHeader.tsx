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
    variant = 'default'
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
                        <span className={`inline-block px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-primary'} text-[10px] font-bold uppercase tracking-[0.2em] mb-8`}>
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
                        <p className={`text-xl md:text-2xl ${isDark ? 'text-white/70' : 'text-slate-500'} max-w-3xl leading-relaxed font-light`}>
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

