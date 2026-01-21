import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Standard crawlers - full access
            {
                userAgent: '*',
                allow: '/',
            },
            // AI crawlers - explicitly allowed for indexing and retrieval
            // These are allowed to crawl for search/answer purposes
            {
                userAgent: 'GPTBot',
                allow: '/',
            },
            {
                userAgent: 'Google-Extended',
                allow: '/',
            },
            {
                userAgent: 'Applebot-Extended',
                allow: '/',
            },
            {
                userAgent: 'ClaudeBot',
                allow: '/',
            },
            {
                userAgent: 'anthropic-ai',
                allow: '/',
            },
            {
                userAgent: 'CCBot',
                allow: '/',
            },
        ],
        sitemap: 'https://www.agoralatam.com/sitemap.xml',
    }
}
