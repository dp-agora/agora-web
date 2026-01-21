import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ágora | Strategic Advisory & Legal Excellence",
    description: "Boutique strategic legal and investment advisory firm in Latin America and Venezuela.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

