import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
    const response = handleI18nRouting(request);

    // With localePrefix 'as-needed', unprefixed paths (e.g. /insights/xyz) have only two segments,
    // but the app route is [locale]/insights/[slug] which needs three. Rewrite so the default
    // locale is the first segment and the route matches.
    const pathname = request.nextUrl.pathname;
    const firstSegment = pathname.split('/').filter(Boolean)[0];
    if (firstSegment && !(routing.locales as readonly string[]).includes(firstSegment)) {
        const rewritePath = `/en${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
        const rewriteUrl = new URL(rewritePath, request.url);
        return NextResponse.rewrite(rewriteUrl, { headers: response.headers });
    }

    return response;
}

export const config = {
    // Match internationalized pathnames (root for en, /es for Spanish)
    matcher: ['/', '/(es)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
