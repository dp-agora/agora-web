"use client";

import { useLayoutEffect, useRef, useState } from "react";
import styles from "./ofac-gl58-debt-restructuring-infographic.module.css";

const DESIGN_WIDTH = 1080;
const DESIGN_HEIGHT = 760;

const copy = {
    es: {
        tag: "Sanciones OFAC · Venezuela · Mayo 2026",
        headline:
            "GL 58: la OFAC abre la asesoría para una reestructuración de la deuda venezolana",
        sub:
            "Emitida el 5 de mayo de 2026 · Licencia General N° 58 bajo las Regulaciones de Sanciones de Venezuela (31 CFR parte 591)",
        yesLabel: "Lo que autoriza",
        yesItems: [
            {
                title: "Servicios legales",
                desc:
                    "Opiniones legales, memorandos preparatorios y asesoría jurídica al Gobierno de Venezuela en conexión con una potencial reestructuración.",
            },
            {
                title: "Asesoría financiera",
                desc:
                    "Diagnósticos, modelos financieros, hojas de términos, análisis de cascada de pagos y materiales de soporte.",
            },
            {
                title: "Consultoría preparatoria",
                desc:
                    "Evaluación, desarrollo y preparación de opciones de reestructuración. Incluye a PdVSA y Entidades PdVSA.",
            },
        ],
        alertLabel: "Obligación de reporte",
        alertTitle: "Contrato firmado en 10 días hábiles",
        alertDesc:
            "Copia a Sanctions_inbox@state.gov (Dpto. de Estado) y VZReporting@doe.gov (Dpto. de Energía). La omisión convierte la operación en transacción no autorizada.",
        noLabel: "Lo que NO autoriza · 6 exclusiones expresas",
        noItems: [
            [
                "Reestructuración y negociación directa.",
                "No cubre la reestructuración, transferencia o acuerdo de deuda, ni las negociaciones directas con acreedores.",
            ],
            [
                "Honorarios no comerciales.",
                "Excluye permutas de deuda, pagos en oro y pagos en criptomonedas emitidas por el Gobierno venezolano (incl. el Petro).",
            ],
            [
                "Acuerdos transaccionales y ejecución.",
                "No cubre ejecución de gravámenes, laudos arbitrales o sentencias contra bienes bloqueados.",
            ],
            [
                "Nexo con Rusia, Irán, Corea del Norte, Cuba o China.",
                "Excluye transacciones de personas ubicadas en esos países o entidades bajo su control.",
            ],
            [
                "Lista SDN.",
                "No autoriza transacciones con personas o entidades en la Lista SDN de la OFAC, ni con entidades donde posean >= 50% de interés.",
            ],
            [
                "Desbloqueo de bienes.",
                "No autoriza el desbloqueo de ningún bien bloqueado bajo el Capítulo V del Título 31 del CFR.",
            ],
        ],
        author: "Barnola & Sancristóbal · Ágora Abogados SC",
    },
    en: {
        tag: "OFAC Sanctions · Venezuela · May 2026",
        headline:
            "GL 58: OFAC opens the door to advisory services for a Venezuelan debt restructuring",
        sub:
            "Issued May 5, 2026 · General License No. 58 under the Venezuela Sanctions Regulations (31 CFR part 591)",
        yesLabel: "What it authorizes",
        yesItems: [
            {
                title: "Legal services",
                desc:
                    "Legal opinions, preparatory memoranda, and legal advice to the Government of Venezuela in connection with a potential debt restructuring.",
            },
            {
                title: "Financial advisory services",
                desc:
                    "Diagnostic memoranda, financial models, term sheets, payment-waterfall analyses, and supporting materials.",
            },
            {
                title: "Consulting services",
                desc:
                    "Assessment, development, and preparation of restructuring options. Covers PdVSA and PdVSA Entities.",
            },
        ],
        alertLabel: "Reporting obligation",
        alertTitle: "Signed contract within 10 business days",
        alertDesc:
            "Copy to Sanctions_inbox@state.gov (Dept. of State) and VZReporting@doe.gov (Dept. of Energy). Failure to report renders the transaction unauthorized under the VSR.",
        noLabel: "What it does NOT authorize · 6 express carve-outs",
        noItems: [
            [
                "Restructuring and direct negotiations.",
                "Does not cover the restructuring, transfer, or settlement of debt, nor direct negotiations between Venezuela and its creditors.",
            ],
            [
                "Non-commercial payment terms.",
                "Excludes debt swaps, payments in gold, and payments in digital currency or tokens issued by the Venezuelan Government (incl. the petro).",
            ],
            [
                "Settlement agreements and enforcement.",
                "Does not cover enforcement of liens, arbitral awards, or judgments against property blocked under the VSR.",
            ],
            [
                "Russia, Iran, North Korea, Cuba, or China nexus.",
                "Excludes transactions by persons in those jurisdictions or entities under their control.",
            ],
            [
                "SDN List.",
                "Does not authorize transactions with any person or entity on OFAC's SDN List, nor entities in which SDN-listed persons hold >= 50% interest.",
            ],
            [
                "Unblocking of property.",
                "Does not authorize the unblocking of any property blocked pursuant to 31 CFR Chapter V.",
            ],
        ],
        author: "Barnola & Sancristóbal · Ágora Abogados SC",
    },
} as const;

type Locale = "en" | "es";

export function OfacGl58DebtRestructuringInfographic({
    locale,
    ariaLabel,
    title,
}: {
    locale: Locale;
    ariaLabel: string;
    title?: string;
}) {
    const outerRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);

    useLayoutEffect(() => {
        const el = outerRef.current;
        if (!el) return;

        const update = () => {
            const width = el.getBoundingClientRect().width;
            if (width > 0) setScale(width / DESIGN_WIDTH);
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
                className="relative w-full overflow-hidden rounded-sm bg-[#1c3054]"
                style={{ aspectRatio: `${DESIGN_WIDTH} / ${DESIGN_HEIGHT}` }}
            >
                <div
                    className="absolute left-0 top-0 origin-top-left"
                    style={{
                        width: DESIGN_WIDTH,
                        height: DESIGN_HEIGHT,
                        transform: `scale(${scale})`,
                    }}
                >
                    <div className={styles.frame}>
                        <div className={styles.topBand}>
                            <div className={styles.topbar}>
                                <div className={styles.tag}>{t.tag}</div>
                                <div className={styles.wordmark} aria-hidden="true">
                                    ÁGORA
                                </div>
                            </div>
                            <div className={styles.headline}>{t.headline}</div>
                            <div className={styles.sub}>{t.sub}</div>
                        </div>

                        <div className={styles.cols}>
                            <div className={styles.colYes}>
                                <div className={`${styles.colLabel} ${styles.yesLabel}`}>
                                    {t.yesLabel}
                                </div>

                                {t.yesItems.map((item) => (
                                    <div className={styles.yesItem} key={item.title}>
                                        <div className={styles.yesTitle}>{item.title}</div>
                                        <div className={styles.yesDesc}>{item.desc}</div>
                                    </div>
                                ))}

                                <div className={styles.alert}>
                                    <div className={styles.alertLabel}>{t.alertLabel}</div>
                                    <div className={styles.alertTitle}>{t.alertTitle}</div>
                                    <div className={styles.alertDesc}>{t.alertDesc}</div>
                                </div>
                            </div>

                            <div className={styles.colNo}>
                                <div className={styles.colLabel}>{t.noLabel}</div>

                                {t.noItems.map(([strong, text], index) => (
                                    <div className={styles.noItem} key={strong}>
                                        <div className={styles.noNum}>
                                            {String(index + 1).padStart(2, "0")}
                                        </div>
                                        <div className={styles.noText}>
                                            <strong>{strong}</strong> {text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.footer}>
                            <div className={styles.author}>{t.author}</div>
                            <div className={styles.site}>agoralatam.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
