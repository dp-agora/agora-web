import { SiteProviders } from "@/components/layout/SiteProviders";

export default async function EnglishInsightsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <SiteProviders locale="en">{children}</SiteProviders>;
}
