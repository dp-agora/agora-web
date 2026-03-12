"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { insightsLocaleMap } from '@/lib/insights-locale-map';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'es' : 'en';

        // On an insights article, switch to the translated article URL (different slug per locale).
        const insightsMatch = pathname.match(/^\/?insights\/([^/]+)$/);
        if (insightsMatch) {
            const slug = insightsMatch[1];
            const entry = insightsLocaleMap[slug];
            if (entry) {
                const targetSlug = nextLocale === 'en' ? entry.en : entry.es;
                const pathnameForLocale = `/insights/${targetSlug}`;
                router.replace(pathnameForLocale, { locale: nextLocale });
                return;
            }
        }

        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            onClick={toggleLocale}
            className="text-[10px] font-bold uppercase tracking-widest border border-white/20 px-3 py-1 hover:bg-white/10 transition-all text-white cursor-pointer"
        >
            {locale === 'en' ? 'ES' : 'EN'}
        </button>
    );
}
