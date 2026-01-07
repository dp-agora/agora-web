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
}

export function PageHeader({
    title,
    subtitle,
    description,
    badge,
    videoSrc,
    videoOpacity = 0.5,
    imageSrc,
    imageOpacity = 0.5
}: PageHeaderProps) {
    const isDark = !!videoSrc || !!imageSrc;

    return (
        <section className={`relative pt-20 pb-16 lg:pt-32 lg:pb-24 border-b overflow-hidden ${isDark ? 'min-h-[60vh] flex items-center bg-primary' : 'bg-white'}`}>
            {videoSrc && (
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

            {imageSrc && !videoSrc && (
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
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl"
                >
                    {badge && (
                        <span className={`inline-block px-3 py-1 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-primary'} text-[10px] font-bold uppercase tracking-[0.2em] mb-8`}>
                            {badge}
                        </span>
                    )}
                    {subtitle && (
                        <h2 className={`${isDark ? 'text-white/60' : 'text-primary/60'} text-lg md:text-xl font-medium mb-4 uppercase tracking-widest`}>{subtitle}</h2>
                    )}
                    <h1 className={`text-5xl md:text-7xl font-serif ${isDark ? 'text-white' : 'text-primary'} leading-tight mb-8 tracking-tight`}>
                        {title}
                    </h1>
                    {description && (
                        <p className={`text-xl ${isDark ? 'text-white/70' : 'text-slate-500'} max-w-2xl leading-relaxed`}>
                            {description}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

