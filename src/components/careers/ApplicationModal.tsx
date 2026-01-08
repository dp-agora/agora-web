"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Upload, FileText } from 'lucide-react';
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle?: string;
}

export function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
    const t = useTranslations("CareersPage.form");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Reset state when opening
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setIsSubmitting(false);
            setSelectedFile(null);
        }
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
                    />

                    {/* Modal */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 30 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden rounded-sm"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white">
                            <div className="space-y-1">
                                <h3 className="text-xl font-serif text-primary italic leading-none">
                                    {t("title")}
                                </h3>
                                {jobTitle && (
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                                        {jobTitle}
                                    </p>
                                )}
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 text-slate-400 hover:text-primary transition-colors focus:outline-none"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 overflow-y-auto max-h-[70vh]">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                                {t("firstName")}
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder={t("placeholder.firstName")}
                                                className="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                                {t("lastName")}
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                placeholder={t("placeholder.lastName")}
                                                className="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                                {t("email")}
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                placeholder={t("placeholder.email")}
                                                className="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                                {t("phone")}
                                            </label>
                                            <input
                                                required
                                                type="tel"
                                                placeholder={t("placeholder.phone")}
                                                className="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                            {t("linkedin")}
                                        </label>
                                        <input
                                            required
                                            type="url"
                                            placeholder={t("placeholder.linkedin")}
                                            className="w-full bg-slate-50 border-b border-slate-200 py-3 px-4 text-primary focus:border-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                            {t("resume")}
                                        </label>
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className="group cursor-pointer border-2 border-dashed border-slate-200 hover:border-primary/30 bg-slate-50 p-8 text-center transition-all duration-500"
                                        >
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleFileChange}
                                                className="hidden"
                                                required
                                            />
                                            {selectedFile ? (
                                                <div className="flex items-center justify-center gap-3 text-primary">
                                                    <FileText className="h-5 w-5" />
                                                    <span className="text-sm font-light italic">{selectedFile.name}</span>
                                                </div>
                                            ) : (
                                                <div className="space-y-3">
                                                    <div className="flex justify-center">
                                                        <Upload className="h-6 w-6 text-slate-400 group-hover:text-primary transition-colors" />
                                                    </div>
                                                    <p className="text-sm text-slate-400 group-hover:text-primary transition-colors font-light italic">
                                                        {t("placeholder.resume")}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary text-white py-5 px-8 text-xs font-bold uppercase tracking-[0.3em] hover:bg-slate-800 transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    {t("submitting")}
                                                </>
                                            ) : (
                                                t("submit")
                                            )}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-12 space-y-8"
                                >
                                    <div className="flex justify-center">
                                        <div className="h-20 w-20 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                                            <CheckCircle2 className="h-10 w-10" />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-3xl font-serif text-primary italic leading-tight">
                                            {t("success.title")}
                                        </h4>
                                        <p className="text-slate-500 font-light italic max-w-sm mx-auto leading-relaxed">
                                            {t("success.message")}
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="inline-block text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 hover:text-primary transition-colors pt-8 border-t border-slate-100 w-full"
                                    >
                                        {t("close")}
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {/* Decoration */}
                        <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none select-none">
                            <span className="text-[12rem] font-serif italic text-primary">Á</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
