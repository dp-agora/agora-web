"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';
import posthog from 'posthog-js';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'es' : 'en';

        // PostHog: Track language switch - user preference tracking
        posthog.capture('language_switched', {
            from_locale: locale,
            to_locale: nextLocale,
            current_page: pathname,
        });

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
