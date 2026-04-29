"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./ofac-april-2026-infographic.module.css";
import { OFAC_APRIL_2026_INFOGRAPHIC_LOGO_SRC } from "./ofac-april-2026-infographic-logo";

const DESIGN = 1080;

const copy = {
    es: {
        tag: "Sanciones OFAC · Venezuela · Abril 2026",
        title: "GL56 y GL57: El nuevo marco para operar con Venezuela",
        subtitle:
            "Dos licencias que resuelven los cuellos de botella del comercio autorizado.",
        headA: "GL 56",
        headB: "GL 57",
        rows: [
            [
                "Objeto",
                "Negociar contratos con el Gobierno de Venezuela",
                "Servicios financieros con 4 bancos del Estado",
            ],
            [
                "Base legal",
                "Orden Ejecutiva 13884",
                "Reglamento VSR · 31 CFR Parte 591",
            ],
            [
                "Alcance",
                "Cualquier entidad del Gobierno venezolano",
                "BCV, Bco. Venezuela, BDT, Banco del Tesoro",
            ],
            [
                "Qué habilita",
                "Fase precontractual y negociación",
                "Pagos, corresponsalía y flujos financieros",
            ],
            [
                "Límite clave",
                "No cubre la ejecución del contrato",
                "No es licencia de propósito general",
            ],
        ],
        footLeft: "Ágora Abogados S.C. · Compliance & Sanctions",
    },
    en: {
        tag: "OFAC Sanctions · Venezuela · April 2026",
        title: "GL 56 and GL 57: The New Framework for Operating in Venezuela",
        subtitle:
            "Two licenses that unblock authorized trade with Venezuela.",
        headA: "GL 56",
        headB: "GL 57",
        rows: [
            [
                "Purpose",
                "Negotiate contracts with the Government of Venezuela",
                "Financial services with four state-owned banks",
            ],
            [
                "Legal basis",
                "Executive Order 13884",
                "Venezuela Sanctions Regulations · 31 CFR Part 591",
            ],
            [
                "Scope",
                "Any Government of Venezuela entity",
                "BCV, Banco de Venezuela, BDT, Banco del Tesoro",
            ],
            [
                "What it enables",
                "Pre-contractual phase and negotiation",
                "Payments, correspondent banking, financial flows",
            ],
            [
                "Key limit",
                "Does not cover contract performance",
                "Not a general-purpose license",
            ],
        ],
        footLeft: "Ágora Abogados S.C. · Compliance & Sanctions",
    },
} as const;

type Locale = "en" | "es";

export function OfacApril2026Infographic({
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
                        <div className={styles.top}>
                            <span className={styles.tag}>{t.tag}</span>
                            <img
                                className={styles.logoImg}
                                src={OFAC_APRIL_2026_INFOGRAPHIC_LOGO_SRC}
                                alt=""
                                decoding="async"
                            />
                        </div>

                        <div className={styles.title}>{t.title}</div>
                        <div className={styles.sub}>{t.subtitle}</div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th className={styles.thBlank}></th>
                                    <th className={styles.thA}>{t.headA}</th>
                                    <th className={styles.thB}>{t.headB}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.rows.map(([label, a, b]) => (
                                    <tr key={label}>
                                        <td className={styles.tdLbl}>{label}</td>
                                        <td className={styles.tdA}>{a}</td>
                                        <td className={styles.tdB}>{b}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className={styles.foot}>
                            <span className={styles.footLeft}>{t.footLeft}</span>
                            <span className={styles.footRight}>agoralatam.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
