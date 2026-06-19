import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { cookies } from "next/headers";
import Script from "next/script";
import "./globals.css";

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
    metadataBase: new URL("https://www.agoralatam.com"),
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "en";

    return (
        <html lang={locale} className="scroll-smooth">
            <head>
                <meta
                    name="robots"
                    content="index, follow, max-snippet:-1, max-image-preview:large"
                />
                <Script
                    src="https://analytics.ahrefs.com/analytics.js"
                    data-key="xHNHBgafftXNgiHNyhfIXA"
                    strategy="afterInteractive"
                />
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-ME4CJNZ6PQ"
                    strategy="afterInteractive"
                />
                <Script
                    id="gtag-init"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ME4CJNZ6PQ');
            `,
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": ["Organization", "LegalService"],
                            "@id": "https://www.agoralatam.com/#organization",
                            name: "Ágora",
                            legalName: "Ágora Abogados",
                            url: "https://www.agoralatam.com",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.agoralatam.com/assets/brand/Logo%20Agora%20outline.png",
                                width: 240,
                                height: 48,
                            },
                            description:
                                "Boutique strategic legal and investment advisory firm specializing in cross-border transactions across Latin America and Venezuela.",
                            areaServed: [
                                { "@type": "Place", name: "Latin America" },
                                { "@type": "Country", name: "Venezuela" },
                            ],
                            knowsAbout: [
                                "Corporate Law",
                                "Mergers and Acquisitions",
                                "Banking and Finance",
                                "Tax Law",
                                "Compliance",
                                "Litigation",
                                "Investment Arbitration",
                                "Real Estate Law",
                                "Environmental Law",
                                "Labor and Employment Law",
                            ],
                            sameAs: [
                                "https://www.linkedin.com/company/agora-latam",
                                "https://chambers.com/lawyer/alvaro-posada-latin-america-9:210039",
                                "https://www.iflr1000.com/Lawyer/alvaro-j-posada/Profile/85",
                                "https://www.itrworldtax.com/Lawyer/sole-practitioner/jose-barnola-diaz/Profile/1290",
                            ],
                            award: [
                                "Chambers Global",
                                "Chambers Latin America",
                                "IFLR1000",
                                "ITR World Tax",
                            ],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "@id": "https://www.agoralatam.com/#website",
                            name: "Ágora",
                            url: "https://www.agoralatam.com",
                            publisher: { "@id": "https://www.agoralatam.com/#organization" },
                            inLanguage: ["en", "es"],
                        }),
                    }}
                />
            </head>
            <body
                className={`${inter.variable} ${libreBaskerville.variable} font-sans antialiased bg-white text-slate-900`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    );
}
