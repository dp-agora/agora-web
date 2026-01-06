"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    const toggleLocale = () => {
        const nextLocale = locale === 'en' ? 'es' : 'en';
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <button
            onClick={toggleLocale}
            className="text-[10px] font-bold uppercase tracking-widest border border-slate-200 px-3 py-1 hover:bg-slate-50 transition-all text-primary"
        >
            {locale === 'en' ? 'ES' : 'EN'}
        </button>
    );
}
