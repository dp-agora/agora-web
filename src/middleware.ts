import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const response = handleI18nRouting(request);
    const pathname = request.nextUrl.pathname;
    const firstSegment = pathname.split('/').filter(Boolean)[0];
    const isUnprefixed = firstSegment && !(routing.locales as readonly string[]).includes(firstSegment);

    // For unprefixed paths (e.g. /insights/xyz), always rewrite so [locale]/insights/[slug] matches.
    // Copy i18n response headers (e.g. Set-Cookie) so locale/cookie behavior is preserved even when
    // next-intl returned a redirect (3xx).
    if (isUnprefixed) {
        const rewritePath = `/en${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
        const rewriteUrl = new URL(rewritePath, request.url);
        return NextResponse.rewrite(rewriteUrl, { headers: response.headers });
    }

    // Pass through redirects and existing rewrites when path already has a locale.
    if (response.status >= 300 && response.status < 400) return response;
    if (response.headers.get("x-middleware-rewrite")) return response;

    return response;
}

export const config = {
    // Match internationalized pathnames (root for en, /es for Spanish)
    matcher: ['/', '/(es)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
