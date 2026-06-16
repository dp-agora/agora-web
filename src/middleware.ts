import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const firstSegment = pathname.split('/').filter(Boolean)[0];
    const isInternalLocaleRewrite =
        request.headers.get("x-agora-internal-locale-rewrite") === "1";

    // Keep English canonical at the root while allowing middleware-internal /en rewrites.
    if (firstSegment === "en" && !isInternalLocaleRewrite) {
        const redirectUrl = request.nextUrl.clone();
        redirectUrl.pathname = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
        const redirectResponse = NextResponse.redirect(redirectUrl, 308);
        redirectResponse.cookies.set("NEXT_LOCALE", "en", {
            path: "/",
            sameSite: "lax",
        });
        return redirectResponse;
    }

    if (firstSegment === "en" && isInternalLocaleRewrite) {
        return NextResponse.next();
    }

    const response = handleI18nRouting(request);
    const isUnprefixed = firstSegment && !(routing.locales as readonly string[]).includes(firstSegment);

    // For unprefixed paths (e.g. /insights/xyz), always rewrite so [locale]/insights/[slug] matches.
    // Preserve the locale cookie, but do not copy redirect headers from next-intl into the rewrite.
    if (isUnprefixed) {
        const rewritePath = `/en${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
        const rewriteUrl = new URL(rewritePath, request.url);
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-agora-internal-locale-rewrite", "1");
        const rewriteResponse = NextResponse.rewrite(rewriteUrl, {
            request: { headers: requestHeaders },
        });
        const setCookie = response.headers.get("set-cookie");
        if (setCookie) rewriteResponse.headers.set("set-cookie", setCookie);
        return rewriteResponse;
    }

    // Pass through redirects when path already has a locale.
    if (response.status >= 300 && response.status < 400) return response;

    // next-intl may return a rewrite target with a redirect to the same URL (e.g. / -> /),
    // which causes ERR_TOO_MANY_REDIRECTS in the browser. Convert to an internal rewrite.
    const rewriteHeader = response.headers.get("x-middleware-rewrite");
    if (rewriteHeader) {
        const rewriteUrl = new URL(rewriteHeader);
        const requestHeaders = new Headers(request.headers);
        requestHeaders.set("x-agora-internal-locale-rewrite", "1");
        const rewriteResponse = NextResponse.rewrite(rewriteUrl, {
            request: { headers: requestHeaders },
        });
        const setCookie = response.headers.get("set-cookie");
        if (setCookie) rewriteResponse.headers.set("set-cookie", setCookie);
        return rewriteResponse;
    }

    return response;
}

export const config = {
    // Match internationalized pathnames (root for en, /es for Spanish)
    matcher: ['/', '/(es)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
