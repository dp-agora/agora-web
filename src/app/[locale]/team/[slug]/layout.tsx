import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string; slug: string }>;
};

const teamMembers: Record<string, {
    name: string;
    roleEn: string;
    roleEs: string;
    email: string;
    linkedin: string;
    image: string;
}> = {
    "alvaro-posada": { name: "Álvaro Posada", roleEn: "Managing Partner", roleEs: "Socio Director", email: "aposada@agoralatam.com", linkedin: "https://www.linkedin.com/in/%C3%A1lvaro-posada-328156a4/", image: "/assets/team/alvaro-posada.webp" },
    "maria-eugenia-reyes": { name: "María Eugenia Reyes", roleEn: "Partner", roleEs: "Socia", email: "mreyes@agoralatam.com", linkedin: "https://www.linkedin.com/in/maria-eugenia-reyes-feo-40410624/", image: "/assets/team/maria-eugenia.webp" },
    "jose-barnola": { name: "José P. Barnola Jr.", roleEn: "Partner", roleEs: "Socio", email: "jbarnola@agoralatam.com", linkedin: "https://mx.linkedin.com/in/josepbarnolajr", image: "/assets/team/jose-barnola.webp" },
    "ariana-cabrera": { name: "Ariana Cabrera", roleEn: "Senior Associate", roleEs: "Asociada Senior", email: "acabrera@agoralatam.com", linkedin: "https://ve.linkedin.com/in/ariana-cabrera-acevedo", image: "/assets/team/ariana-cabrera.webp" },
    "lizeth-reyes": { name: "Lizeth Reyes", roleEn: "Senior Associate", roleEs: "Asociada Senior", email: "lreyes@agoralatam.com", linkedin: "https://www.linkedin.com/in/lizeth-reyesb", image: "/assets/team/lizeth-reyes.webp" },
    "jesus-garcia": { name: "Jesús García Arenas", roleEn: "Practice Lead", roleEs: "Líder de Práctica", email: "jgarcia@agoralatam.com", linkedin: "https://www.linkedin.com/in/jesus-garcia-arenas-b23205151/", image: "/assets/team/jesus-garcia.webp" },
    "marco-gomez": { name: "Marco Gómez", roleEn: "Senior Associate", roleEs: "Asociado Senior", email: "mgomez@agoralatam.com", linkedin: "https://www.linkedin.com/in/marcoantoniogomez/", image: "/assets/team/marco-gomez.webp" },
    "barbara-briceno": { name: "Bárbara Briceño", roleEn: "Senior Associate", roleEs: "Asociada Senior", email: "bbriceno@agoralatam.com", linkedin: "https://www.linkedin.com/in/barbara-briceño-7a1b9b53", image: "/assets/team/barbara-briceno.webp" },
    "raul-sancristobal": { name: "Raúl Sancristobal", roleEn: "Associate", roleEs: "Asociado", email: "rsancristobal@agoralatam.com", linkedin: "https://www.linkedin.com/in/raul-eduardo-sancristobal-444a44139/", image: "/assets/team/raul-sancristobal.webp" },
    "rodrigo-colmenares": { name: "Rodrigo Colmenares", roleEn: "Associate", roleEs: "Asociado", email: "rcolmenares@agoralatam.com", linkedin: "https://www.linkedin.com/in/rodrigo-colmenares-fernández-144b03200/", image: "/assets/team/rodrigo-colmenares.webp" },
    "andreina-flores": { name: "Andreína Flores", roleEn: "Associate", roleEs: "Asociada", email: "aflores@agoralatam.com", linkedin: "http://www.linkedin.com/in/andreina-floresr", image: "/assets/team/andreina-flores.webp" },
    "fabiola-flores": { name: "Fabiola Flores", roleEn: "Associate", roleEs: "Asociada", email: "fflores@agoralatam.com", linkedin: "https://www.linkedin.com/in/fabiola-floresr", image: "/assets/team/fabiola-flores.webp" },
    "jesus-mendoza": { name: "Jesús Mendoza", roleEn: "Associate", roleEs: "Asociado", email: "jmendoza@agoralatam.com", linkedin: "https://www.linkedin.com/in/jesus-mendoza-7b707322a/", image: "/assets/team/jesus-mendoza.png" },
    "andrea-regalado": { name: "Andrea Regalado", roleEn: "Operations", roleEs: "Operaciones", email: "aregalado@agoralatam.com", linkedin: "https://www.linkedin.com/in/andrea-victoria-regalado-reyes-7073141a6/", image: "/assets/team/andrea-regalado.webp" },
    "oriana-rodriguez": { name: "Oriana Rodríguez", roleEn: "Operations", roleEs: "Operaciones", email: "orodriguez@agoralatam.com", linkedin: "https://www.linkedin.com/in/oriana-rodriguez-6b4b7453/", image: "/assets/team/oriana-rodriguez.webp" },
    "juan-posada": { name: "Juan Francisco Posada", roleEn: "Operations", roleEs: "Operaciones", email: "jposada@agoralatam.com", linkedin: "https://www.linkedin.com/in/juanfposada/", image: "/assets/team/juan-posada.webp" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const isSpanish = locale === "es";
    const member = teamMembers[slug];

    const baseUrl = "https://www.agoralatam.com";
    const enPath = `/team/${slug}`;
    const esPath = `/es/team/${slug}`;
    const currentPath = isSpanish ? esPath : enPath;

    if (!member) {
        return { title: "Team Member | Ágora" };
    }

    const role = isSpanish ? member.roleEs : member.roleEn;

    return {
        title: isSpanish
            ? `${member.name} | ${role} | Ágora Abogados`
            : `${member.name} | ${role} | Ágora`,
        description: isSpanish
            ? `Perfil de ${member.name}, ${role} en Ágora Abogados. Asesoría legal especializada en América Latina y Venezuela.`
            : `Profile of ${member.name}, ${role} at Ágora. Specialized legal counsel across Latin America and Venezuela.`,
        alternates: {
            canonical: currentPath,
            languages: {
                en: enPath,
                es: esPath,
                "x-default": enPath,
            },
        },
        openGraph: {
            title: isSpanish
                ? `${member.name} | ${role} | Ágora Abogados`
                : `${member.name} | ${role} | Ágora`,
            description: isSpanish
                ? `Perfil de ${member.name}, ${role} en Ágora Abogados.`
                : `Profile of ${member.name}, ${role} at Ágora.`,
            url: `${baseUrl}${currentPath}`,
            type: "profile",
        },
    };
}

export default async function TeamMemberLayout({ children, params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);

    const member = teamMembers[slug];
    const baseUrl = "https://www.agoralatam.com";

    if (!member) return <>{children}</>;

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${baseUrl}/team/${slug}#person`,
        "name": member.name,
        "jobTitle": member.roleEn,
        "email": `mailto:${member.email}`,
        "url": `${baseUrl}/team/${slug}`,
        "image": `${baseUrl}${member.image}`,
        "sameAs": [member.linkedin],
        "worksFor": {
            "@id": `${baseUrl}/#organization`,
        },
        "memberOf": {
            "@type": "Organization",
            "@id": `${baseUrl}/#organization`,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />
            {children}
        </>
    );
}
