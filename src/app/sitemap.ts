import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://agoralatam.com'

    // Static pages
    const staticPages = [
        '',           // Home
        '/about',
        '/services',
        '/team',
        '/careers',
        '/contact',
    ]

    // Team member slugs
    const teamMembers = [
        'alvaro-posada',
        'maria-eugenia-reyes',
        'jose-barnola',
        'ariana-cabrera',
        'lizeth-reyes',
        'marco-gomez',
        'barbara-briceno',
        'manuel-domingo',
        'dayana-veliz',
        'raul-sancristobal',
        'rodrigo-colmenares',
        'andreina-flores',
        'fabiola-flores',
        'andrea-regalado',
        'oriana-rodriguez',
        'juan-posada',
    ]

    const currentDate = new Date().toISOString()

    // Generate sitemap entries for both locales
    const entries: MetadataRoute.Sitemap = []

    // English pages (at root)
    staticPages.forEach((page) => {
        entries.push({
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
        entries.push({
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

    // Team member pages (English)
    teamMembers.forEach((member) => {
        entries.push({
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
        entries.push({
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

    return entries
}
