/**
 * Root Layout (src/app/layout.tsx)
 * 
 * IMPORTANT: This layout MUST NOT render <html> or <body> tags.
 * The [locale]/layout.tsx handles the complete document structure.
 * 
 * In Next.js App Router with next-intl:
 * - Root layout = pass-through only (no document tags)
 * - [locale]/layout.tsx = full document structure (<html>, <head>, <body>)
 * 
 * Adding <html>/<body> here will cause hydration errors due to nested documents.
 */
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

