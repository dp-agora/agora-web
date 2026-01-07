"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Linkedin, Mail, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function TeamMemberPage() {
    const t = useTranslations("TeamPage");
    const params = useParams();
    const slug = params.slug as string;

    const teamGroups = [
        {
            members: [
                { id: "alvaro-posada", name: "Álvaro Posada", role: t("members.alvaro.role"), bio: t("members.alvaro.bio"), image: "/assets/team/alvaro-posada.webp", email: "alvaro.posada@agoralatam.com", linkedin: "#" },
                { id: "maria-eugenia-reyes", name: "María Eugenia Reyes", role: t("members.maria.role"), bio: t("members.maria.bio"), image: "/assets/team/maria-eugenia.webp", email: "maria.reyes@agoralatam.com", linkedin: "#" },
                { id: "jose-barnola", name: "José P. Barnola Jr.", role: t("members.jose.role"), bio: t("members.jose.bio"), image: "/assets/team/jose-barnola.webp", email: "jose.barnola@agoralatam.com", linkedin: "#" },
                { id: "ariana-cabrera", name: "Ariana Cabrera", role: t("members.ariana.role"), bio: t("members.ariana.bio"), image: "/assets/team/ariana-cabrera.webp", email: "ariana.cabrera@agoralatam.com", linkedin: "#" },
                { id: "lizeth-reyes", name: "Lizeth Reyes", role: t("members.lizeth.role"), bio: t("members.lizeth.bio"), image: "/assets/team/lizeth-reyes.webp", email: "lizeth.reyes@agoralatam.com", linkedin: "#" },
                { id: "marco-gomez", name: "Marco Gómez", role: t("members.marco.role"), bio: t("members.marco.bio"), image: "/assets/team/marco-gomez.webp", email: "marco.gomez@agoralatam.com", linkedin: "#" },
                { id: "barbara-briceno", name: "Bárbara Briceño", role: t("members.barbara.role"), bio: t("members.barbara.bio"), image: "/assets/team/barbara-briceno.webp", email: "barbara.briceno@agoralatam.com", linkedin: "#" },
                { id: "manuel-domingo", name: "Manuel Domingo", role: t("members.manuel.role"), bio: t("members.manuel.bio"), image: "/assets/team/manuel-domingo.webp", email: "manuel.domingo@agoralatam.com", linkedin: "#" },
                { id: "dayana-veliz", name: "Dayana Velíz", role: t("members.dayana.role"), bio: t("members.dayana.bio"), image: "/assets/team/dayana-veliz.webp", email: "dayana.veliz@agoralatam.com", linkedin: "#" },
                { id: "raul-sancristobal", name: "Raúl Sancristobal", role: t("members.raul.role"), bio: t("members.raul.bio"), image: "/assets/team/raul-sancristobal.webp", email: "raul.sancristobal@agoralatam.com", linkedin: "#" },
                { id: "rodrigo-colmenares", name: "Rodrigo Colmenares", role: t("members.rodrigo.role"), bio: t("members.rodrigo.bio"), image: "/assets/team/rodrigo-colmenares.webp", email: "rodrigo.colmenares@agoralatam.com", linkedin: "#" },
                { id: "andreina-flores", name: "Andreína Flores", role: t("members.andreina.role"), bio: t("members.andreina.bio"), image: "/assets/team/andreina-flores.webp", email: "andreina.flores@agoralatam.com", linkedin: "#" },
                { id: "fabiola-flores", name: "Fabiola Flores", role: t("members.fabiola.role"), bio: t("members.fabiola.bio"), image: "/assets/team/fabiola-flores.webp", email: "fabiola.flores@agoralatam.com", linkedin: "#" },
                { id: "andrea-regalado", name: "Andrea Regalado", role: t("members.andrea.role"), bio: t("members.andrea.bio"), image: "/assets/team/andrea-regalado.webp", email: "andrea.regalado@agoralatam.com", linkedin: "#" },
                { id: "oriana-rodriguez", name: "Oriana Rodríguez", role: t("members.oriana.role"), bio: t("members.oriana.bio"), image: "/assets/team/oriana-rodriguez.webp", email: "oriana.rodriguez@agoralatam.com", linkedin: "#" },
                { id: "juan-posada", name: "Juan Francisco Posada", role: t("members.juan.role"), bio: t("members.juan.bio"), image: "/assets/team/juan-posada.webp", email: "juan.posada@agoralatam.com", linkedin: "#" }
            ]
        }
    ];

    const member = teamGroups.flatMap(g => g.members).find(m => m.id === slug);

    // Verbatim Legacy Content for Team Members
    const legacyData: Record<string, any> = {
        "alvaro-posada": {
            overview: [
                "Álvaro J. Posada Sessarego, an expert lawyer in banking, corporate finance, and capital markets, has over 30 years of experience advising multinational companies on successfully navigating the complex Venezuelan legal environment and designing strategies and structures for the expansion of local companies into other countries. He is recognized for his practicality and creativity, as well as his unique commercial approach that goes beyond strictly legal matters.",
                "He is positioned as the trusted strategic advisor for several international business groups in handling sensitive and complex issues. His advisory expertise spans financing, acquisitions, multijurisdictional corporate reorganizations, insolvency, and debt restructuring."
            ],
            experience: [
                "Álvaro is currently the Founding Partner of Ágora Abogados and leads the Banking, Finance, Capital Markets, Private Equity, and Debt Restructuring practice areas. He developed a distinguished career at the international law firm Baker McKenzie, where he held various positions:",
                {
                    type: "list",
                    items: [
                        "Managing Partner of the Venezuela offices",
                        "Member of the Latin American Management Council",
                        "Chairman of the Latin America Banking and Finance Practice Group",
                        "Member of the Global Banking and Finance Practice Group Steering Committee",
                        "Member of Baker McKenzie’s Global Policy Committee"
                    ]
                },
                "Álvaro’s professional affiliations include his role as Vice President and later President of the Corporate Finance Committee of Venamcham (Venezuelan-American Chamber of Commerce) and other trade chambers, as well as his active participation in The American Bar Association and the New York State Bar Association. He has contributed to publications and has been a speaker and moderator at national and international events."
            ],
            education: [
                "Lawyer, Universidad Católica Andrés Bello (1988)",
                "Financial Management Programa, Instituto de Estudios Superiores de Administración (IESA) (1989)",
                "Master in International Banking Law (LLM), Boston University (1992)",
                "Master in comparative Jurisprudence, New York University (1993)"
            ],
            publications: [
                "Co-author of “Commercial Space Securization in Latin America“, Global Securization Review 2004/2005, EuroMoney Year Books, January 1, 2004"
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish and English",
            affiliations: "Venezuelan-American Chamber of Commerce and Industry (Venamcham)"
        },
        "maria-eugenia-reyes": {
            overview: [
                "María Eugenia Reyes, lawyer with over 30 years of experience in corporate, real estate, environmental law, and sustainability, with a strong focus on the design and implementation of asset structures, shareholder agreement negotiations, foreign investments, mergers, and acquisitions.",
                "María Eugenia Reyes is a Founding Partner of Ágora Abogados and leads the Mergers, Acquisitions, and Corporate Law practice areas. She had a distinguished career as a partner at Baker & McKenzie and local firms, holding leadership positions that brought her practice areas to international standards. She was also a pioneer and leader of sustainability committees.",
                "Throughout her professional career, she has demonstrated exceptional ability to understand clients beyond their obvious needs, diving deep into matters and successfully closing the projects and cases she has handled."
            ],
            experience: [
                "María Eugenia’s leading expertise includes:",
                {
                    type: "list",
                    items: [
                        "Founding Partner of Ágora Abogados.",
                        "Lead of Mergers, Acquisitions, and Corporate Law practice areas.",
                        "Experience in corporate, real estate, environmental law, and sustainability.",
                        "Focus on the design and implementation of asset structures, shareholder agreement negotiations, foreign investments, mergers, and acquisitions.",
                        "Pioneer and leader of sustainability committees."
                    ]
                }
            ],
            education: [
                "Lawyer, Universidad Católica Andrés Bello, 1988",
                "Specialization in Procedural Law, Universidad Católica Andrés Bello, 1993"
            ],
            publications: [
                "“Hazardous Substances, Materials and Waste Handling” Latin American Law & Business Report, No. 5, June 1, 2003",
                "“Daños al Ambiente” El Universal, Caracas, Venezuela, February 19, 2003",
                "“Desechos Peligrosos” El Universal, December 23, 2002",
                "“Ley de Tierras y Desarrollo Agrario” El Universal, Caracas, Venezuela, December 26, 2001",
                "“Environmental Policy and Law in Latin America” Baker & McKenzie, January 1, 1998",
                "“La Ley Penal del Ambiente y las Normas Complementarias” Revista Número, March 1992 edition, September 1, 1992",
                "“La Ley Penal del Ambiente and los Estudios de Impacto Ambiental” Revista Barriles, May 1, 1992",
                "“El Amparo Constitucional” Revista de la Facultad de Derecho de la Universidad Católica Andrés Bello, No. 37, January 8, 1987. Awarded in the Student Competition Commemorating the 25th Anniversary of the 1961 Constitution."
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish and English"
        },
        "jose-barnola": {
            overview: [
                "José P. Barnola Jr. is a lawyer with extensive experience in areas such as taxation, mergers and acquisitions, contract and corporate law, as well as serving as an arbitrator. He is licensed to practice in Mexico and Venezuela. Throughout his career of over 25 years, he has led local and regional projects across Latin America.",
                "José P.’s distinguished career is marked by his role as a professor of Tax Law for over 17 years in several universities.",
                "Currently, he serves as Practice Leader at Ágora in Mexico City and Caracas. Before joining Ágora, he was a partner at one of the leading international law firms in Venezuela and Mexico, where he held various leadership and management positions, including that Professional Development and Knowledge Management Leader. His role extended to global leadership, and he was representative for Latin America on the Global Consumer Products and Retail Committee and the Global Committee on Tax Dispute Resolution.",
                "Additionally, he has practiced law independently in Venezuela and Mexico and has acted as an arbitrator in commercial disputes. His contributions in these fields, especially in complex tax litigation, international taxation and arbitration, have earned him recognition in various legal circles."
            ],
            experience: [
                "José's professional focus includes taxation, M&A, contract/corporate law, and arbitration. He has managed complex multi-jurisdictional matters and held numerous leadership roles in the global legal community."
            ],
            education: [
                "Law Degree, Universidad Católica Andrés Bello, cum laude, 1993",
                "Tax Law LLM, Universidad Central de Venezuela, cum laude, 2000",
                "General Exam for the Law Degree, Centro Nacional de Evaluación para la Educación Superior (Mexico, 2020)",
                "Law Degree Revalidation and Professional License, Secretaría de Educación Pública (Mexico, 2021)",
                "Advanced Studies Program in Arbitration, Universidad Monteávila, 2022"
            ],
            publications: [
                "«Lo que no se enseña en las facultades de derecho», in FORO JURÍDICO N° 262, julio 2025, Ciudad de México",
                "«Apuntes sobre los límites de las reorganizaciones corporativas y el arbitraje de inversión desde la perspectiva mexicana», in XX JORNADAS VENEZOLANAS DE DERECHO TRIBUTARIO 2023, Asociación Venezolana de Derecho Tributario, Caracas, 2024",
                "«La mediación arrendaticia en el Estado de Jalisco, una nueva tendencia del mercado inmobiliario», in REVISTA PREÁMBULO N° 1, Centro de Investigación y Estudios para la Resolución de Controversias de la Universidad Monteávila (CIERC), Caracas, 2023",
                "«Principles of investment arbitration planning in Latin America», in WORLD ARBITRATION AND MEDIATION REVIEW (WAMR+2020), Vol. 14 No. 1, Dec 31, 2022",
                "«Comentarios al Artículo 8 de la Ley de Arbitraje Comercial Venezolana», in COMENTARIOS A LA LEY DE ARBITRAJE COMERCIAL VENEZOLANA, CIERC, with V. Falcón, Caracas, 2022",
                "«Aspectos prácticos de la ratificación del Convenio CIADI por México, un avance alentador para los inversionistas mexicanos y extranjeros», in BOLETÍN IBEROAMERICANO DE ARBITRAJE Y MEDIACIÓN N° 1, Centro de Arbitraje de la Cámara de Caracas, Caracas, 2022",
                "«Nuevo estudio sobre los efectos de los diseños de los sistemas tributarios en el desarrollo de Latinoamérica», bibliographic review, in TAXLATAM (https://taxlatam.com/) 13.9.22",
                "«Aspectos prácticos de la primera audiencia de organización del procedimiento arbitral», in PRINCIPIA N° 6, CIERC, Caracas, 2022",
                "«Principios de Planificación de Arbitraje de Inversión en Latinoamérica», trabajo ganador del premio Rodger Farrel 2021, in REVISTA DE MEDIOS ALTERNATIVOS DE RESOLUCIÓN DE CONFLICTOS, BOLETÍN ESPECIAL, Comité de Arbitraje de Venamcham and CEDCA, Caracas, 2022",
                "«Los nuevos supuestos del impuesto venezolano a las grandes transacciones financieras sobre pagos en moneda extranjera, criptomonedas y criptoactivos y las tribulaciones de los sujetos pasivos», in TAXLATAM 23.5.22",
                "«La tributación de los servicios digitales en Venezuela», in TAXLATAM 1.8.21",
                "«¿Por qué los abogados fiscales deben estudiar los tratados de protección de inversiones?», in TAXLATAM 12.5.21",
                "«El sistema venezolano de retención del impuesto al valor agregado, otro caso para la teratología jurídica», in LIBRO HOMENAJE AL PROFESOR EUGENIO HERNÁNDEZ-BRETÓN, Editorial Jurídica Venezolana-Baker McKenzie, Tomo III, Caracas, 2019"
            ],
            office: "Caracas, Venezuela and Mexico City",
            languages: "Spanish and English",
            affiliations: "Member of the Caracas Bar Association; Member of the Venezuelan Association of Procedural Law; Member of the Venezuelan Association of Tax Law; Member of the International Fiscal Association; Member of the Legal Committee of the Association of Venezuelan Businessmen in Mexico; Arbitrator member of the Arbitration Center of the Caracas Chamber"
        },
        "ariana-cabrera": {
            overview: [
                "Ariana Cabrera Acevedo, a lawyer with more than 10 years of experience, has built a solid career in labor law. While she focuses her practice on labor law, her versatility allows her to successfully navigate other areas of law, such as civil, administrative, and regulatory compliance law.",
                "She currently serves as the Labor Law Area Leader at Ágora Abogados and also works in the areas of Administrative Law, Regulatory Law, and Compliance.",
                "Her recent appointment as Full Member No. 12 of the Venezuelan Institute of Social Law is a clear recognition of her professional career and her commitment to defending her clients' rights.",
                "Ariana Cabrera stands out for her legal logic, her ability to listen attentively to her clients' needs, and her skill in finding innovative solutions to their problems. Her commitment to excellence makes her an invaluable ally for those seeking high-quality legal advice."
            ],
            experience: [
                "Ariana's expertise spans:",
                {
                    type: "list",
                    items: [
                        "Labor Law (Area Leader)",
                        "Administrative Law",
                        "Regulatory Law",
                        "Compliance"
                    ]
                }
            ],
            education: [
                "Lawyer, Summa Cum Laude, Universidad Católica Andrés Bello (2014)",
                "Advanced Studies Program in Arbitration, Universidad Monteávila (2020)",
                "Master's in Business Management and Administration, Universidad Carlos III de Madrid (2022)",
                "Certified Anti-Money Laundering Specialist, Association of Certified Anti-Money Laundering Specialists (ACAMS) (2024)",
                "Master of Laws (LLM) in Dispute Resolution, University of Missouri-Columbia (2025)"
            ],
            publications: [
                "\"Ejecución de la sentencia: intereses de mora e indexación”, Derecho Procesal del Trabajo y Contencioso Administrativo Laboral, Ensayos, Academia de Ciencias Políticas y Sociales; Universidad Católica Andrés Bello, November 2023."
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish, English and French",
            affiliations: "Full Member No. 12, Venezuelan Institute of Social Law, Interim Secretary; Member, Venezuelan Arbitration Association"
        },
        "lizeth-reyes": {
            overview: [
                "Lizeth Reyes holds dual degrees in Business Administration and Law, with over 25 years of professional experience in civil and commercial litigation, as well as legal advisory in judicial procedures.",
                "She is currently the Regional Leader of Ágora Abogados for the Central-Western region.",
                "Lizeth has obtained specializations and master's degrees in procedural law, is a Doctor of Legal Sciences, and is currently pursuing a Higher Specialization in Immigration Law."
            ],
            experience: [
                "Lizeth's professional experience spans more than 25 years, focusing on:",
                {
                    type: "list",
                    items: [
                        "Civil and Commercial Litigation",
                        "Legal Advisory in Judicial Procedures",
                        "Regional Leadership (Central-Western region)"
                    ]
                }
            ],
            education: [
                "Business Administration, Universidad Bicentenaria de Aragua (1995)",
                "Lawyer, Universidad Bicentenaria de Aragua (2015)",
                "Specialization in Civil Procedural Law, Universidad Bicentenaria de Aragua (2017)",
                "Master's in Civil Procedural Law, Universidad Bicentenaria de Aragua (2023)",
                "Doctorate in Legal Sciences, Universidad Bicentenaria de Aragua (2024)",
                "Higher Specialization in U.S. Immigration Law with special mention: Expert in U.S. Immigration and Nationality Law, Instituto Iberoamericano de Leyes y Economía [in progress]"
            ],
            office: "Aragua, Venezuela",
            languages: "Spanish"
        },
        "marco-gomez": {
            overview: [
                "Marco Gómez is a lawyer with 6 years of experience in the corporate and financial areas. His expertise includes a deep understanding of regulatory matters, including the acquisition of securities, the marketing of new products, foreign exchange control for exports and international transactions, as well as international arbitration.",
                "He has experience in the design, execution, and optimization of asset holding structures, processes for the acquisition and merger of companies, the formation, liquidation, and updating of companies, the design and implementation of compliance programs and OFAC sanctions, and general corporate and regulatory matters across various sectors such as telecommunications, agribusiness, and financial services."
            ],
            experience: [
                "Marco is currently an Associate at Ágora Abogados in the areas of:",
                {
                    type: "list",
                    items: [
                        "M&A / Corporate Law",
                        "Banking and Finance",
                        "Capital Markets",
                        "Administrative Law",
                        "Regulatory Law and Compliance",
                        "Debt Restructuring"
                    ]
                },
                "Specializing in marine insurance, Marco has extensive knowledge of the maritime industry and is dedicated to continuously updating and developing his skills in this field. He is currently an Associate of the UK Association of Average Adjusters, which reinforces his experience and commitment in the maritime sector."
            ],
            education: [
                "Lawyer, Universidad Católica Andrés Bello (2017)"
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish and English",
            affiliations: "Associate Member of the UK Association of Average Adjusters"
        },
        "barbara-briceno": {
            overview: [
                "Barbara Briceño, lawyer with more than 8 years of experience, has developed her career in corporate law, international taxation, estate planning, and regulatory compliance. Her professional path has allowed her to support the structuring and administration of trusts, private foundations, and offshore companies, as well as corporate governance and due diligence processes across multiple jurisdictions.",
                "She currently continues to expand her expertise in international tax advisory and wealth planning, working in close collaboration with partners and multidisciplinary teams to deliver efficient legal and organizational solutions.",
                "Barbara stands out for her attention to detail and her ability to coordinate complex projects with precision and commitment. She also excels at managing client relationships and building long-lasting bonds of trust."
            ],
            experience: [
                "Barbara’s professional focus includes corporate law, international taxation, estate planning, and regulatory compliance. Her specialized experience includes:",
                {
                    type: "list",
                    items: [
                        "Trust Structuring and Administration",
                        "Private Foundations",
                        "Offshore Companies",
                        "Corporate Governance",
                        "Due Diligence Processes",
                        "International Tax Advisory",
                        "Wealth Planning"
                    ]
                }
            ],
            education: [
                "Lawyer, Universidad Católica Andrés Bello, Caracas (2016)",
                "Diploma in International Taxation, Universidad de Montevideo (2017)",
                "Diploma in International Taxation, Universidad Católica Andrés Bello, Caracas (2022)",
                "Diploma in Estate Planning and International Taxation, Universidad del CEMA, Buenos Aires (2023)"
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish and English",
            affiliations: "Anti-Money Laundering Regime in Uruguay, CADE (2018); Introduction to American Law, University of Pennsylvania (Coursera, 2021)"
        },
        "manuel-domingo": {
            overview: [
                "Manuel Domingo is a lawyer with experience in mergers and acquisitions. His fluency in English, German, and French enables him to navigate cross-border transactions with ease.",
                "Manuel is currently an Associate at Ágora Abogados, working in the areas of M&A / Corporate Law, Banking and Finance and Capital Markets.",
                "Demonstrating his commitment to continuous learning, Manuel is currently pursuing an MBA at IESA. This pursuit of business knowledge, combined with his legal acumen, positions him for exceptional success in the ever-evolving business landscape."
            ],
            experience: [
                "Manuel's professional focus includes:",
                {
                    type: "list",
                    items: [
                        "M&A / Corporate Law",
                        "Banking and Finance",
                        "Capital Markets"
                    ]
                }
            ],
            education: [
                "Lawyer, Universidad Católica Andrés Bello (2022)",
                "Exchange Program, Universität St. Gallen (HSG) (2021)",
                "MBA, Instituto de Estudios Superiores de Administración (IESA) (2025)"
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish, English, German, and French"
        },
        "dayana-veliz": {
            overview: [
                "Dayana Véliz is a distinguished lawyer who combines skills in law and finance to offer comprehensive solutions in the corporate sphere, including mergers and acquisitions, the design and optimization of asset-holding structures, shareholder agreements, entity incorporation, and foreign investment management.",
                "With a degree in Law and a Master’s in Finance, Dayana is positioned as a key expert in corporate law in Venezuela. Her ability to understand and apply complex legal issues to financial contexts makes her an invaluable resource for her clients."
            ],
            experience: [
                "Dayana is currently an Associate at Ágora Abogados, working in the areas of:",
                {
                    type: "list",
                    items: [
                        "M&A / Corporate Law",
                        "Banking and Finance",
                        "Capital Markets"
                    ]
                }
            ],
            education: [
                "Lawyer, Universidad Católica Andrés Bello (2022)",
                "Master’s in Finance, Instituto de Estudios Superiores de Administración (IESA) (2023)",
                "Exchange Program, COPPEAD Graduate School of Business, Federal University of Rio de Janeiro (2023)"
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish, English and Portuguese"
        },
        "raul-sancristobal": {
            overview: [
                "Raúl Eduardo Sancristobal is a lawyer with experience advising on complex financial disputes, matters involving cross-border securities, custodian liability, and capital markets regulation.",
                "Raúl is currently an Associate at Ágora Abogados, specializing in the areas of Banking, Finance, and Capital Markets. His meticulous approach and ability to provide innovative legal solutions distinguish him as a versatile and highly competent professional in the financial sector."
            ],
            experience: [
                "Raúl is currently an Associate at Ágora Abogados, specializing in the areas of:",
                {
                    type: "list",
                    items: [
                        "Banking, Finance, and Capital Markets"
                    ]
                },
                "His notable experience includes advising on complex financial disputes, cross-border securities, custodian liability, and capital markets regulation."
            ],
            education: [
                "Lawyer, Universidad Católica Andrés Bello (2022)"
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish and English"
        },
        "rodrigo-colmenares": {
            overview: [
                "Rodrigo Colmenares is a lawyer with experience in commercial law, complex litigation, and the application of emerging technologies in the legal field.",
                "He is currently an Associate at Ágora Abogados, working in the areas of Banking, Finance, and Capital Markets.",
                "His strong background in commercial law and his interest in the impact of technology position him as a versatile professional, well-equipped to face contemporary legal challenges, including areas such as Fintech, Blockchain, and Smart Contracts."
            ],
            experience: [
                "Rodrigo is currently an Associate at Ágora Abogados, specializing in the areas of:",
                {
                    type: "list",
                    items: [
                        "Banking, Finance, and Capital Markets",
                        "Fintech, Blockchain, and Smart Contracts"
                    ]
                }
            ],
            education: [
                "Specialization in Commercial Law, Universidad Católica Andrés Bello (2025)",
                "Advanced Diploma in Entrepreneurship and Business Management, Universidad Metropolitana (2022)",
                "Lawyer, Universidad Metropolitana (2022)"
            ],
            publications: [
                "Compatibility of Smart Contracts with the Venezuelan Legal Framework (Honorable Mention and Publication). Universidad Metropolitana (2021)"
            ],
            affiliations: [
                "Student Representative – Board of Directors, Asociación Venezolana de Arbitraje"
            ],
            office: "Caracas, Venezuela",
            languages: "Spanish and English"
        },
        "andreina-flores": {
            overview: [
                "Andreina Flores is a practicing lawyer with 9 years of experience in the areas of civil, commercial, real estate, family, and inheritance law.",
                "She currently works as an associate at Ágora Abogados in the area of Corporate Law.",
                "Andreina is complementing her academic background by pursuing a Bachelor's Degree in Psychology at Universidad Bicentenaria de Aragua, with the goal of integrating a more human and multidisciplinary perspective into her legal practice."
            ],
            experience: [
                "Andreina currently works as an associate at Ágora Abogados, specializing in:",
                {
                    type: "list",
                    items: [
                        "Corporate Law",
                        "Civil Law",
                        "Commercial Law",
                        "Real Estate Law",
                        "Family Law",
                        "Inheritance Law"
                    ]
                },
                "She has 9 years of professional experience."
            ],
            education: [
                "Lawyer, Universidad de Carabobo (2015)",
                "Bachelor's Degree in Psychology, Universidad Bicentenaria de Aragua (In progress)"
            ],
            publications: [],
            affiliations: [],
            office: "Aragua, Venezuela",
            languages: "Spanish and English"
        },
        "fabiola-flores": {
            overview: [
                "Fabiola Flores Reyes is a lawyer with 9 years of experience in the areas of civil, commercial, real estate, family, and inheritance law.",
                "Currently, Fabiola works as an associate at Ágora Abogados in the area of Corporate Law.",
                "With a solid track record in advising and representing clients, Fabiola focuses on providing practical and effective legal solutions that meet the current demands of the market. Her personalized approach and ability to anticipate legal challenges make her a strategic ally for companies and individuals seeking reliable and efficient results."
            ],
            experience: [
                "Fabiola currently works as an associate at Ágora Abogados, specializing in:",
                {
                    type: "list",
                    items: [
                        "Corporate Law",
                        "Civil Law",
                        "Commercial Law",
                        "Real Estate Law",
                        "Family Law",
                        "Inheritance Law"
                    ]
                },
                "She has 9 years of professional experience."
            ],
            education: [
                "Lawyer, Universidad de Carabobo (2015)."
            ],
            publications: [],
            affiliations: [],
            office: "Aragua, Venezuela",
            languages: "Spanish and English"
        },
        "andrea-regalado": {
            overview: [
                "Andrea Regalado is an emerging professional in the field of operations with a strong background in business administration and growing experience in project management and process optimization.",
                "She currently serves as the Business Leader at Ágora Abogados.",
                "Her focus is on improving operational efficiency and supporting the implementation of effective strategies to achieve business objectives. Her proactive attitude and ability to adapt to dynamic environments make her a valuable addition to any operations team."
            ],
            experience: [
                "Andrea serves as the Business Leader at Ágora Abogados, where she focuses on:",
                {
                    type: "list",
                    items: [
                        "Improving operational efficiency",
                        "Supporting the implementation of effective strategies to achieve business objectives"
                    ]
                }
            ],
            education: [
                "Chemical Engineering, Universidad Metropolitana (2021)",
                "MBA, Instituto de Estudios Superiores de Administración (IESA) [2025]"
            ],
            publications: [],
            affiliations: [],
            office: "Caracas, Venezuela",
            languages: "Spanish, English and German"
        },
        "oriana-rodriguez": {
            overview: [
                "Oriana Rodríguez is a professional with an extensive administrative background and over 13 years of solid experience in operations management, coordination, support, and process optimization.",
                "She currently serves as the Administration Manager at Ágora Abogados.",
                "Oriana is distinguished by her ability to maintain the efficient flow of daily activities and ensure that the team's objectives are met. Her capacity for organizing and managing tasks, along with her attention to detail, allows her to provide comprehensive support in the planning and execution of projects."
            ],
            experience: [
                "Oriana currently serves as the Administration Manager at Ágora Abogados, specializing in:",
                {
                    type: "list",
                    items: [
                        "Operations management",
                        "Coordination",
                        "Support",
                        "Process optimization"
                    ]
                },
                "She has over 13 years of professional experience."
            ],
            education: [
                "Higher University Technician in Business Administration, Instituto Universitario de Tecnología de Administración Industrial (2011)"
            ],
            publications: [],
            affiliations: [],
            office: "Caracas, Venezuela",
            languages: "Spanish"
        },
        "juan-posada": {
            overview: [
                "Juan Posada leverages a unique blend of business acumen and data-driven insights to optimize financial performance and operational efficiency at Àgora Abogados.",
                "Drawing from a strong background in Business Management and Data Analytics, Juan delivers solutions that empower the firm's leadership with strategic insights. He focuses on designing and implementing analytical tools that modernize legacy processes and streamline financial workflows, enabling the firm to make more informed decisions and realize tangible value.",
                "Juan is currently advancing his capabilities by pursuing a master’s degree in Finance at IESA, further strengthening his commitment to driving the firm's growth and success."
            ],
            experience: [
                "Juan specializes in Operations, with a focus on:",
                {
                    type: "list",
                    items: [
                        "Optimizing financial performance",
                        "Operational efficiency",
                        "Data analytics",
                        "Strategic insights",
                        "Streamlining financial workflows"
                    ]
                }
            ],
            education: [
                "Bachelor of Science in Business Management, Minor in Business Analytics, Concentration in Entrepreneurship, Wentworth Institute of Technology (2024)",
                "Master in Finance Candidate, Instituto de Estudios Superiores de Administración (IESA) [in progress]"
            ],
            publications: [],
            affiliations: [],
            office: "Caracas, Venezuela",
            languages: "Spanish and English"
        }
    };

    const currentLegacyData = legacyData[slug] || null;

    if (!member) {
        return (
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-serif text-primary mb-4">Member Not Found</h1>
                        <Link href="/team" className="text-primary hover:underline flex items-center gap-2">
                            <ArrowLeft className="h-4 w-4" /> Back to Team
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
                {/* Hero / Profile Header */}
                <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-slate-50 border-b">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                            <div className="md:col-span-4 lg:col-span-3">
                                <div className="aspect-[4/5] bg-white border border-slate-100 relative overflow-hidden shadow-xl">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-8 lg:col-span-9 space-y-8">
                                <Link href="/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors text-sm uppercase tracking-widest font-bold mb-4">
                                    <ArrowLeft className="h-4 w-4" /> Back to Team
                                </Link>
                                <div>
                                    <h1 className="text-5xl md:text-7xl font-serif text-primary mb-4">{member.name}</h1>
                                    <p className="text-xl text-primary/60 font-serif italic uppercase tracking-widest">{member.role}</p>
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-12 w-12 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="h-12 w-12 rounded-full border border-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Sections */}
                <div className="container mx-auto px-6 lg:px-12 py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        <div className="lg:col-span-8 space-y-20">
                            {/* Overview Section */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-serif text-primary italic border-b border-slate-100 pb-4">Overview</h2>
                                <div className="prose prose-slate prose-lg max-w-none space-y-6">
                                    {currentLegacyData?.overview ? (
                                        currentLegacyData.overview.map((para: string, i: number) => (
                                            <p key={i} className="text-slate-600 leading-relaxed font-light italic">
                                                {para}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-slate-600 leading-relaxed font-light italic">
                                            [Placeholder Overview: Detailed introduction and professional summary for {member.name} to be added soon.]
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Experience / Focus Areas */}
                            <div className="space-y-8">
                                <h2 className="text-3xl font-serif text-primary italic border-b border-slate-100 pb-4">Experience & Focus</h2>
                                <div className="prose prose-slate prose-lg max-w-none space-y-6">
                                    {currentLegacyData?.experience ? (
                                        currentLegacyData.experience.map((content: any, i: number) => (
                                            typeof content === 'string' ? (
                                                <p key={i} className="text-slate-600 leading-relaxed font-light italic">{content}</p>
                                            ) : (
                                                <ul key={i} className="space-y-4 text-slate-600 font-light list-disc pl-6">
                                                    {content.items.map((item: string, j: number) => (
                                                        <li key={j} className="italic">{item}</li>
                                                    ))}
                                                </ul>
                                            )
                                        ))
                                    ) : (
                                        <ul className="space-y-4 text-slate-600 font-light">
                                            <li>[Placeholder Experience: Key practice areas and industry expertise.]</li>
                                            <li>[Placeholder Experience: Notable transactions and representative matters.]</li>
                                            <li>[Placeholder Experience: Strategic counseling and client advisory roles.]</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-20">
                            {/* Credentials / Education */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-serif text-primary italic border-b border-slate-100 pb-4">Credentials & Education</h2>
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Education</span>
                                        <div className="space-y-3">
                                            {currentLegacyData?.education ? (
                                                currentLegacyData.education.map((edu: string, i: number) => (
                                                    <p key={i} className="text-sm text-primary font-medium leading-relaxed italic">{edu}</p>
                                                ))
                                            ) : (
                                                <p className="text-sm text-primary font-medium">[Placeholder: Law School / University Degree]</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Office</span>
                                        <p className="text-sm text-primary font-medium italic">
                                            {currentLegacyData ? currentLegacyData.office : "[Placeholder: City, Country]"}
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Languages</span>
                                        <p className="text-sm text-primary font-medium italic">
                                            {currentLegacyData ? currentLegacyData.languages : "[Placeholder: Spanish, English, etc.]"}
                                        </p>
                                    </div>

                                    {currentLegacyData?.affiliations && (
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Affiliations</span>
                                            <p className="text-sm text-primary font-medium leading-relaxed italic">
                                                {currentLegacyData.affiliations}
                                            </p>
                                        </div>
                                    )}

                                    {!currentLegacyData && (
                                        <div className="space-y-2">
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Admissions</span>
                                            <p className="text-sm text-primary font-medium">[Placeholder: Bar Admissions / Professional Certifications]</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Optional Publications */}
                            <div className="space-y-8">
                                <h2 className="text-2xl font-serif text-primary italic border-b border-slate-100 pb-4">Selected Publications</h2>
                                <div className="space-y-6">
                                    {currentLegacyData?.publications && currentLegacyData.publications.length > 0 ? (
                                        currentLegacyData.publications.map((pub: string, i: number) => (
                                            <p key={i} className="text-sm text-slate-600 leading-relaxed italic">
                                                {pub}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="text-sm text-slate-400 italic">No publications listed at this time.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
