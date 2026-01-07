"use client";

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import { useTranslations } from "next-intl";

export function BookingModal() {
    const { isOpen, closeBooking } = useBooking();
    const modalRef = useRef<HTMLDivElement>(null);
    const t = useTranslations("Booking");

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeBooking();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, closeBooking]);

    // Focus trap
    useEffect(() => {
        if (isOpen && modalRef.current) {
            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

            const handleTabKey = (e: KeyboardEvent) => {
                if (e.key === 'Tab') {
                    if (e.shiftKey) {
                        if (document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        }
                    } else {
                        if (document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            };

            window.addEventListener('keydown', handleTabKey);
            firstElement?.focus();

            return () => {
                window.removeEventListener('keydown', handleTabKey);
            };
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeBooking}
                        className="absolute inset-0 bg-primary/90 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl h-[90vh] bg-white shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white z-10">
                            <div className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center border-2 border-primary text-sm font-bold text-primary">
                                    Á
                                </div>
                                <span className="font-serif text-lg font-bold tracking-widest text-primary uppercase">
                                    {t("title")}
                                </span>
                            </div>
                            <button
                                onClick={closeBooking}
                                className="p-2 text-slate-400 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
                                aria-label="Close modal"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Content - Calendly Embed */}
                        <div className="flex-1 w-full bg-slate-50 overflow-y-auto">
                            <iframe
                                src="https://calendly.com/dposada-agoralatam/30min?embed_domain=agoralatam.com&embed_type=Inline"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Calendly Booking"
                                className="min-h-[600px] md:min-h-full"
                            />
                        </div>

                        {/* Footer / Mobile Hint */}
                        <div className="md:hidden py-4 px-6 bg-white border-t border-slate-100 text-center">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                                Scroll to explore available times
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
