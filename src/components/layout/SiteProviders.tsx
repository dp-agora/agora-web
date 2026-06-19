import { BookingProvider } from "@/context/BookingContext";
import { BookingModal } from "@/components/booking/BookingModal";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Toaster } from "sonner";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type SiteProvidersProps = {
    locale: string;
    children: React.ReactNode;
};

export async function SiteProviders({ locale, children }: SiteProvidersProps) {
    if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages} locale={locale}>
            <BookingProvider>
                {children}
                <BookingModal />
                <Toaster position="top-center" richColors />
            </BookingProvider>
        </NextIntlClientProvider>
    );
}
