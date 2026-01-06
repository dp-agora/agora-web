import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "../globals.css";
import { BookingProvider } from "@/context/BookingContext";
import { BookingModal } from "@/components/booking/BookingModal";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

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
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${inter.variable} ${libreBaskerville.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <NextIntlClientProvider messages={messages}>
          <BookingProvider>
            {children}
            <BookingModal />
          </BookingProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

