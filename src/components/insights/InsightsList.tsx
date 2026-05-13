"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import type { Insight } from "@/types/insight";

const CATEGORY_IMAGE_MAP: Record<string, string> = {
    Regulatory: "/assets/practices/banking-finance.jpeg",
    Regulatorio: "/assets/practices/banking-finance.jpeg",
    "Banking & Capital Markets": "/assets/practices/banking-finance.jpeg",
    "Banca y Mercados de Capitales": "/assets/practices/banking-finance.jpeg",
    Sanctions: "/assets/practices/international-sanctions-compliance.jpeg",
    Sanciones: "/assets/practices/international-sanctions-compliance.jpeg",
    Corporate: "/assets/practices/corporate-mergers-acquisitions.jpeg",
    Tax: "/assets/practices/tax-irs-legal.jpeg",
    Tributario: "/assets/practices/tax-irs-legal.jpeg",
};

const AVATAR_MAP: Record<string, string> = {
    "jesus-mendoza": "/assets/team/jesus-mendoza.png",
    "jose-barnola": "/assets/team/jose-barnola.webp",
    "barbara-briceno": "/assets/team/barbara-briceno.webp",
};

const DEFAULT_OG_IMAGE = "/assets/insights/insights-image.webp";

function getCardImage(insight: Insight): string {
    if (insight.listImage?.trim()) {
        return insight.listImage.trim();
    }
    if (insight.ogImage && insight.ogImage !== DEFAULT_OG_IMAGE) {
        return insight.ogImage;
    }
    return CATEGORY_IMAGE_MAP[insight.category] ?? DEFAULT_OG_IMAGE;
}

function getAuthorAvatar(authorUrl?: string): string | null {
    if (!authorUrl) return null;
    const slug = authorUrl.replace(/^\/team\//, "");
    return AVATAR_MAP[slug] ?? null;
}

function getInitials(name: string): string {
    return name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

function formatDate(dateStr: string, locale: string): string {
    const [year, month, day] = dateStr.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString(locale === "es" ? "es-VE" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

function AuthorAvatar({ insight }: { insight: Insight }) {
    const avatar = getAuthorAvatar(insight.authorUrl);
    const initials = getInitials(insight.author);
    return (
        <div className="flex items-center gap-2">
            {avatar ? (
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 border border-slate-200">
                    <Image
                        src={avatar}
                        alt={insight.author}
                        width={28}
                        height={28}
                        className="object-cover w-full h-full object-top"
                    />
                </div>
            ) : (
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-primary">{initials}</span>
                </div>
            )}
            <span className="text-sm text-slate-600">{insight.author}</span>
        </div>
    );
}

function FeaturedCard({
    insight,
    readMoreLabel,
    locale,
}: {
    insight: Insight;
    readMoreLabel: string;
    locale: string;
}) {
    const image = getCardImage(insight);
    return (
        <Link href={`/insights/${insight.slug}`} className="group block outline-none mb-10">
            <article className="grid grid-cols-1 md:grid-cols-5 border border-slate-200 overflow-hidden hover:border-primary/40 transition-colors">
                <div className="relative md:col-span-2 aspect-4/3 md:aspect-auto min-h-[240px]">
                    <Image
                        src={image}
                        alt={insight.title}
                        fill
                        quality={92}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                </div>
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between bg-white">
                    <div>
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border border-primary/30 px-2.5 py-1">
                                {insight.category}
                            </span>
                            <span className="text-xs text-slate-400">{formatDate(insight.date, locale)}</span>
                            <span className="text-xs text-slate-300">·</span>
                            <span className="text-xs text-slate-400">{insight.readingTime}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif text-primary group-hover:text-primary/80 transition-colors mb-4 leading-snug">
                            {insight.title}
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-base line-clamp-3">
                            {insight.excerpt}
                        </p>
                    </div>
                    <div className="mt-7 flex items-center justify-between">
                        <AuthorAvatar insight={insight} />
                        <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                            {readMoreLabel}
                            <ArrowRight className="h-4 w-4" />
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}

function GridCard({
    insight,
    readMoreLabel,
    locale,
}: {
    insight: Insight;
    readMoreLabel: string;
    locale: string;
}) {
    const image = getCardImage(insight);
    return (
        <Link href={`/insights/${insight.slug}`} className="group block outline-none h-full">
            <article className="border border-slate-200 overflow-hidden hover:border-primary/40 transition-colors h-full flex flex-col">
                <div className="relative aspect-video shrink-0">
                    <Image
                        src={image}
                        alt={insight.title}
                        fill
                        quality={92}
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-primary/5" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/70">
                            {insight.category}
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs text-slate-400">{formatDate(insight.date, locale)}</span>
                    </div>
                    <h3 className="text-lg font-serif text-primary group-hover:text-primary/80 transition-colors mb-3 leading-snug line-clamp-2 flex-1">
                        {insight.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-5">
                        {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <AuthorAvatar insight={insight} />
                        <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                            {readMoreLabel} <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    );
}

interface InsightsListProps {
    insights: Insight[];
    readMoreLabel: string;
    locale: string;
    filterAllLabel: string;
    filterAllAuthorsLabel: string;
    noResultsLabel: string;
}

export function InsightsList({
    insights,
    readMoreLabel,
    locale,
    filterAllLabel,
    filterAllAuthorsLabel,
    noResultsLabel,
}: InsightsListProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);

    const categories = Array.from(new Set(insights.map((i) => i.category)));
    const authors = Array.from(new Set(insights.map((i) => i.author)));

    const filtered = insights.filter((i) => {
        const catMatch = !selectedCategory || i.category === selectedCategory;
        const authorMatch = !selectedAuthor || i.author === selectedAuthor;
        return catMatch && authorMatch;
    });

    const [featured, ...rest] = filtered;

    return (
        <div>
            {/* Filter bar */}
            <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-slate-200">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border transition-colors ${
                            selectedCategory === null
                                ? "bg-primary text-white border-primary"
                                : "border-slate-300 text-slate-500 hover:border-primary hover:text-primary"
                        }`}
                    >
                        {filterAllLabel}
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() =>
                                setSelectedCategory(selectedCategory === cat ? null : cat)
                            }
                            className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border transition-colors ${
                                selectedCategory === cat
                                    ? "bg-primary text-white border-primary"
                                    : "border-slate-300 text-slate-500 hover:border-primary hover:text-primary"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                {authors.length > 1 && (
                    <div className="ml-auto">
                        <select
                            value={selectedAuthor ?? ""}
                            onChange={(e) => setSelectedAuthor(e.target.value || null)}
                            className="text-xs text-slate-600 border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:border-primary cursor-pointer"
                        >
                            <option value="">{filterAllAuthorsLabel}</option>
                            {authors.map((author) => (
                                <option key={author} value={author}>
                                    {author}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            {/* No results */}
            {filtered.length === 0 && (
                <p className="text-slate-500 text-base py-16 text-center">{noResultsLabel}</p>
            )}

            {/* Featured card */}
            {featured && (
                <FeaturedCard
                    insight={featured}
                    readMoreLabel={readMoreLabel}
                    locale={locale}
                />
            )}

            {/* Grid */}
            {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {rest.map((insight) => (
                        <GridCard
                            key={insight.slug}
                            insight={insight}
                            readMoreLabel={readMoreLabel}
                            locale={locale}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
