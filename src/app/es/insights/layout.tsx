import { SiteProviders } from "@/components/layout/SiteProviders";

export default async function SpanishInsightsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <SiteProviders locale="es">{children}</SiteProviders>;
}
