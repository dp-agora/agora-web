"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useTranslations } from "next-intl";
import Script from "next/script";

export default function PrivacyPolicyPage() {
    const t = useTranslations("PrivacyPolicy");

    const sections = [
        "introduction",
        "informationCollected",
        "useOfInformation",
        "dataSharing",
        "dataSecurity",
        "internationalTransfers",
        "userRights",
        "cookies",
        "updates",
        "contact",
    ];

    // WebPage Schema
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.agoralatam.com/privacy-policy#webpage",
        "name": "Privacy Policy",
        "description": "Privacy Policy for Ágora Abogados - Information Collection and Use practices.",
        "isPartOf": {
            "@id": "https://www.agoralatam.com/#website"
        },
        "publisher": {
            "@id": "https://www.agoralatam.com/#organization"
        },
        "inLanguage": ["en", "es"]
    };

    return (
        <>
            <Script
                id="privacy-policy-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <div className="flex min-h-screen flex-col">
                <Navbar />
            <main className="flex-1">
                {/* Header */}
                <section className="bg-primary text-white py-24">
                    <div className="container mx-auto px-6 lg:px-12">
                        <h1 className="text-4xl md:text-5xl font-serif mb-4">
                            {t("header.title")}
                        </h1>
                        <p className="text-white/60 text-lg">
                            {t("header.subtitle")}
                        </p>
                        <p className="text-white/40 text-sm mt-4">
                            {t("header.lastUpdated")}
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl">
                            {sections.map((section, index) => (
                                <div key={section} className={index > 0 ? "mt-12" : ""}>
                                    <h2 className="text-2xl font-serif text-primary mb-4">
                                        {t(`sections.${section}.title`)}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        {t(`sections.${section}.content`)}
                                    </p>

                                    {/* Render list items for sections that have them */}
                                    {(section === "informationCollected" || section === "useOfInformation") && (
                                        <ul className="mt-4 space-y-3">
                                            {section === "informationCollected" && (
                                                <>
                                                    <li className="text-slate-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                                                        {t("sections.informationCollected.items.contact")}
                                                    </li>
                                                    <li className="text-slate-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                                                        {t("sections.informationCollected.items.correspondence")}
                                                    </li>
                                                    <li className="text-slate-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                                                        {t("sections.informationCollected.items.usage")}
                                                    </li>
                                                </>
                                            )}
                                            {section === "useOfInformation" && (
                                                <>
                                                    <li className="text-slate-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                                                        {t("sections.useOfInformation.items.respond")}
                                                    </li>
                                                    <li className="text-slate-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                                                        {t("sections.useOfInformation.items.communicate")}
                                                    </li>
                                                    <li className="text-slate-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                                                        {t("sections.useOfInformation.items.improve")}
                                                    </li>
                                                    <li className="text-slate-600 leading-relaxed pl-4 border-l-2 border-primary/20">
                                                        {t("sections.useOfInformation.items.comply")}
                                                    </li>
                                                </>
                                            )}
                                        </ul>
                                    )}

                                    {/* Contact email */}
                                    {section === "contact" && (
                                        <p className="mt-4 text-primary font-medium">
                                            {t("sections.contact.email")}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            </div>
        </>
    );
}
