import type { Metadata } from "next";
import { SiteProviders } from "@/components/layout/SiteProviders";
import { routing } from "@/i18n/routing";

type LayoutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const isSpanish = locale === "es";
  const baseUrl = "https://www.agoralatam.com";
  const enPath = "/";
  const esPath = "/es";
  const currentPath = isSpanish ? esPath : enPath;

  return {
    title: isSpanish
      ? "Ágora Abogados | Asesoría Legal Estratégica en América Latina"
      : "Ágora | Strategic Advisory & Legal Excellence",
    description: isSpanish
      ? "Firma legal boutique especializada en asesoría estratégica y transaccional transfronteriza en América Latina y Venezuela. Derecho corporativo, bancario, tributario y arbitraje."
      : "Boutique strategic legal and investment advisory firm in Latin America and Venezuela. Cross-border M&A, banking, tax, compliance, litigation, and investment arbitration.",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentPath,
      languages: {
        en: enPath,
        es: esPath,
        "x-default": enPath,
      },
    },
  };
}

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

  return <SiteProviders locale={locale}>{children}</SiteProviders>;
}
