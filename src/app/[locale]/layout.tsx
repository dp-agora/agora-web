import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "../globals.css";
import { BookingProvider } from "@/context/BookingContext";
import { BookingModal } from "@/components/booking/BookingModal";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-serif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ágora | Strategic Advisory & Legal Excellence",
  description: "Boutique strategic legal and investment advisory firm in Latin America and Venezuela.",
  metadataBase: new URL('https://www.agoralatam.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es': '/es',
      'x-default': '/',
    },
  },
};

import { setRequestLocale } from 'next-intl/server';
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="xHNHBgafftXNgiHNyhfIXA"
          async
        />
      </head>
      <body
        className={`${inter.variable} ${libreBaskerville.variable} font-sans antialiased bg-white text-slate-900`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <BookingProvider>
            {children}
            <BookingModal />
            <Toaster position="top-center" richColors />
          </BookingProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


