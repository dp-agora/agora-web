"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./commercial-arbitration-infographic.module.css";
import { COMMERCIAL_ARBITRATION_INFOGRAPHIC_LOGO_SRC } from "./commercial-arbitration-infographic-logo";

const DESIGN = 1080;

const copy = {
    es: {
        tag: "Arbitraje Comercial · Venezuela",
        eyebrow: "Ejecutabilidad global del laudo arbitral",
        heroLine1: "países reconocen y ejecutan laudos arbitrales",
        heroLine2Before: "bajo la ",
        heroLine2Strong: "Convención de Nueva York de 1958.",
        metaLeft: "Ágora Abogados S.C. · Arbitraje Comercial y de Inversiones",
        pillars: [
            {
                year: "1958",
                title: "Convención de Nueva York",
                desc: "Venezuela la ratificó. Ejecutabilidad internacional del laudo.",
            },
            {
                year: "1975",
                title: "Convención de Panamá",
                desc: "Arbitraje comercial internacional en el ámbito interamericano.",
            },
            {
                year: "1998",
                title: "Ley de Arbitraje Comercial",
                desc: "Regula el arbitraje doméstico e internacional en Venezuela.",
            },
            {
                year: "Art. 258",
                title: "Constitución 1999",
                desc: "El arbitraje tiene rango constitucional en Venezuela.",
            },
        ],
    },
    en: {
        tag: "Commercial Arbitration · Venezuela",
        eyebrow: "Global enforceability of arbitral awards",
        heroLine1: "countries recognize and enforce arbitral awards",
        heroLine2Before: "under the ",
        heroLine2Strong: "New York Convention of 1958.",
        metaLeft: "Ágora Abogados S.C. · Commercial and Investment Arbitration",
        pillars: [
            {
                year: "1958",
                title: "New York Convention",
                desc: "Ratified by Venezuela. International enforceability of the award.",
            },
            {
                year: "1975",
                title: "Panama Convention",
                desc: "International commercial arbitration in the Inter-American sphere.",
            },
            {
                year: "1998",
                title: "Commercial Arbitration Law",
                desc: "Governs domestic and international arbitration in Venezuela.",
            },
            {
                year: "Art. 258",
                title: "1999 Constitution",
                desc: "Arbitration has constitutional status in Venezuela.",
            },
        ],
    },
} as const;

type Locale = "en" | "es";

export function CommercialArbitrationInfographic({
    locale,
    ariaLabel,
    title,
}: {
    locale: Locale;
    ariaLabel: string;
    /** Preserved from markdown image syntax when present. */
    title?: string;
}) {
    const outerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        const el = outerRef.current;
        if (!el) return;

        const update = () => {
            const w = el.getBoundingClientRect().width;
            if (w > 0) setScale(w / DESIGN);
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    const t = copy[locale];

    return (
        <div
            className="not-prose my-8 w-full max-w-[1080px] mx-auto"
            role="group"
            aria-label={ariaLabel}
            title={title}
        >
            <div
                ref={outerRef}
                className="relative w-full aspect-square overflow-hidden rounded-sm bg-[#1c3054]"
            >
                <div
                    className="absolute left-0 top-0 origin-top-left"
                    style={{
                        width: DESIGN,
                        height: DESIGN,
                        transform: `scale(${scale})`,
                    }}
                >
                    <div className={styles.frame}>
                        <div className={styles.bgNum} aria-hidden>
                            170
                        </div>

                        <div className={styles.header}>
                            <span className={styles.tag}>{t.tag}</span>
                            <img
                                className={styles.logoImg}
                                src={COMMERCIAL_ARBITRATION_INFOGRAPHIC_LOGO_SRC}
                                alt=""
                                decoding="async"
                            />
                        </div>

                        <div className={styles.hero}>
                            <div className={styles.heroEyebrow}>{t.eyebrow}</div>
                            <div className={styles.heroStat}>
                                <span className={styles.plus}>+</span>170
                            </div>
                            <div className={styles.heroCopy}>
                                {t.heroLine1}
                                <br />
                                {t.heroLine2Before}
                                <strong>{t.heroLine2Strong}</strong>
                            </div>
                        </div>

                        <div className={styles.meta}>
                            <span className={styles.metaLeft}>{t.metaLeft}</span>
                            <span className={styles.metaRight}>agoralatam.com</span>
                        </div>

                        <div className={styles.pillars}>
                            {t.pillars.map((p) => (
                                <div key={p.year} className={styles.pillar}>
                                    <div className={styles.pillarYear}>{p.year}</div>
                                    <div className={styles.pillarTitle}>{p.title}</div>
                                    <div className={styles.pillarDesc}>{p.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
