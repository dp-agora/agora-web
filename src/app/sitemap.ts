import { MetadataRoute } from 'next'
import { getAllInsights } from '@/lib/insights'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.agoralatam.com'

    // Static pages (excluding practice pages which are handled separately)
    const staticPages = [
        '',           // Home
        '/about',
        '/practices', // Practice hub (canonical, replaces /services)
        '/team',
        '/careers',
        '/contact',
        '/privacy-policy',
        '/legal-terms',
        '/disclaimers',
    ]

    // Practice area slugs
    const practiceAreas = [
        'corporate-ma',
        'banking-finance',
        'tax',
        'compliance-sanctions',
        'litigation-disputes',
        'investment-arbitration',
        'real-estate',
        'environmental',
        'labor-employment',
    ]

    // Team member slugs
    const teamMembers = [
        'alvaro-posada',
        'maria-eugenia-reyes',
        'jose-barnola',
        'lizeth-reyes',
        'jesus-garcia',
        'marco-gomez',
        'barbara-briceno',
        'raul-sancristobal',
        'rodrigo-colmenares',
        'andreina-flores',
        'fabiola-flores',
        'jesus-mendoza',
        'valentina-rivero',
        'maria-laura-armas',
        'andrea-regalado',
        'oriana-rodriguez',
        'juan-posada',
    ]

    const currentDate = new Date().toISOString()

    // Generate sitemap entries for both locales
    // Use a URL-keyed map to avoid duplicates (e.g. bilingual insights sharing the same slug).
    const entryMap = new Map<string, MetadataRoute.Sitemap[number]>()

    const addEntry = (entry: MetadataRoute.Sitemap[number]) => {
        entryMap.set(entry.url, entry)
    }

    // English pages (at root)
    staticPages.forEach((page) => {
        addEntry({
            url: `${baseUrl}${page}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: page === '' ? 1.0 : 0.8,
            alternates: {
                languages: {
                    en: `${baseUrl}${page}`,
                    es: `${baseUrl}/es${page}`,
                },
            },
        })
    })

    // Spanish pages
    staticPages.forEach((page) => {
        addEntry({
            url: `${baseUrl}/es${page}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: page === '' ? 1.0 : 0.8,
            alternates: {
                languages: {
                    en: `${baseUrl}${page}`,
                    es: `${baseUrl}/es${page}`,
                },
            },
        })
    })

    // Practice area pages (English)
    practiceAreas.forEach((practice) => {
        addEntry({
            url: `${baseUrl}/practices/${practice}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates: {
                languages: {
                    en: `${baseUrl}/practices/${practice}`,
                    es: `${baseUrl}/es/practices/${practice}`,
                },
            },
        })
    })

    // Practice area pages (Spanish)
    practiceAreas.forEach((practice) => {
        addEntry({
            url: `${baseUrl}/es/practices/${practice}`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
            alternates: {
                languages: {
                    en: `${baseUrl}/practices/${practice}`,
                    es: `${baseUrl}/es/practices/${practice}`,
                },
            },
        })
    })

    // Team member pages (English)
    teamMembers.forEach((member) => {
        addEntry({
            url: `${baseUrl}/team/${member}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
                languages: {
                    en: `${baseUrl}/team/${member}`,
                    es: `${baseUrl}/es/team/${member}`,
                },
            },
        })
    })

    // Team member pages (Spanish)
    teamMembers.forEach((member) => {
        addEntry({
            url: `${baseUrl}/es/team/${member}`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
                languages: {
                    en: `${baseUrl}/team/${member}`,
                    es: `${baseUrl}/es/team/${member}`,
                },
            },
        })
    })

    // Insights index (EN + ES)
    addEntry({
        url: `${baseUrl}/insights`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
            languages: {
                en: `${baseUrl}/insights`,
                es: `${baseUrl}/es/insights`,
            },
        },
    })
    addEntry({
        url: `${baseUrl}/es/insights`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
            languages: {
                en: `${baseUrl}/insights`,
                es: `${baseUrl}/es/insights`,
            },
        },
    })

    // Individual insight articles
    const allInsights = getAllInsights()
    allInsights.forEach((insight) => {
        const isEs = insight.lang === 'es'
        const enSlug = isEs ? insight.translationSlug : insight.slug
        const esSlug = isEs ? insight.slug : insight.translationSlug

        const enPath = enSlug ? `/insights/${enSlug}` : null
        const esPath = esSlug ? `/insights/${esSlug}` : null

        const languages: Record<string, string> = {}
        if (enPath) languages['en'] = `${baseUrl}${enPath}`
        if (esPath) languages['es'] = `${baseUrl}/es${esPath}`

        const canonicalPath = isEs ? (esPath ? `/es${esPath}` : null) : enPath

        if (canonicalPath) {
            addEntry({
                url: `${baseUrl}${canonicalPath}`,
                lastModified: insight.lastUpdated || insight.date || currentDate,
                changeFrequency: 'monthly',
                priority: 0.7,
                alternates: { languages },
            })
        }
    })

    return Array.from(entryMap.values())
}
