"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Upload, FileText, AlertCircle } from 'lucide-react';
import { useTranslations, useLocale } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import posthog from 'posthog-js';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ACCEPTED_FILE_TYPES = ["application/pdf"];

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    linkedin: z.string().url("Invalid LinkedIn URL").or(z.literal("")).optional(),
    cvFile: z.any()
        .refine((file) => file instanceof File, "CV/Resume is required")
        .refine((file) => !file || file.size <= MAX_FILE_SIZE, `Max file size is 10MB.`)
        .refine(
            (file) => !file || ACCEPTED_FILE_TYPES.includes(file.type),
            "Only .pdf format is supported."
        ),
});

type FormValues = z.infer<typeof formSchema>;

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle?: string;
}

export function ApplicationModal({ isOpen, onClose, jobTitle }: ApplicationModalProps) {
    const t = useTranslations("CareersPage.form");
    const locale = useLocale();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    // Reset state when opening
    useEffect(() => {
        if (isOpen) {
            setIsSubmitted(false);
            setIsSubmitting(false);
            setSelectedFile(null);
            reset();
        }
    }, [isOpen, reset]);

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
            const file = e.target.files[0];
            setSelectedFile(file);
            setValue("cvFile", file, { shouldValidate: true });
        }
    };

    const onSubmit = async (data: FormValues) => {
        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append("firstName", data.firstName);
            formData.append("lastName", data.lastName);
            formData.append("email", data.email);
            formData.append("phone", data.phone || "");
            formData.append("linkedInUrl", data.linkedin || "");
            formData.append("jobTitle", jobTitle || "General Application");
            formData.append("cvFile", data.cvFile);

            const response = await fetch(`/${locale}/api/submit-application`, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to submit application");
            }

            setIsSubmitted(true);
            toast.success("Application submitted successfully!");

            // PostHog: Track successful job application submission - careers conversion
            posthog.capture('job_application_submitted', {
                job_title: jobTitle || 'General Application',
                has_linkedin: !!data.linkedin,
                has_phone: !!data.phone,
                timestamp: new Date().toISOString(),
            });
        } catch (error: any) {
            console.error("Submission error:", error);
            toast.error(error.message || "An error occurred while submitting your application.");

            // PostHog: Track job application failure - error tracking for careers funnel
            posthog.capture('job_application_failed', {
                job_title: jobTitle || 'General Application',
                error_message: error.message || 'Unknown error',
                timestamp: new Date().toISOString(),
            });
            posthog.captureException(error);
        } finally {
            setIsSubmitting(false);
        }
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
                        className="relative w-full max-w-2xl bg-white shadow-2xl overflow-hidden rounded-sm flex flex-col max-h-[90vh]"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white shrink-0">
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
                        <div className="p-8 md:p-12 overflow-y-auto">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex justify-between">
                                                <span>{t("firstName")}</span>
                                                {errors.firstName && <span className="text-destructive lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.firstName.message}</span>}
                                            </label>
                                            <input
                                                {...register("firstName")}
                                                type="text"
                                                placeholder={t("placeholder.firstName")}
                                                className={`w-full bg-slate-50 border-b py-3 px-4 text-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic ${errors.firstName ? 'border-destructive' : 'border-slate-200 focus:border-primary'}`}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex justify-between">
                                                <span>{t("lastName")}</span>
                                                {errors.lastName && <span className="text-destructive lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.lastName.message}</span>}
                                            </label>
                                            <input
                                                {...register("lastName")}
                                                type="text"
                                                placeholder={t("placeholder.lastName")}
                                                className={`w-full bg-slate-50 border-b py-3 px-4 text-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic ${errors.lastName ? 'border-destructive' : 'border-slate-200 focus:border-primary'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex justify-between">
                                                <span>{t("email")}</span>
                                                {errors.email && <span className="text-destructive lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.email.message}</span>}
                                            </label>
                                            <input
                                                {...register("email")}
                                                type="email"
                                                placeholder={t("placeholder.email")}
                                                className={`w-full bg-slate-50 border-b py-3 px-4 text-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic ${errors.email ? 'border-destructive' : 'border-slate-200 focus:border-primary'}`}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex justify-between">
                                                <span>{t("phone")}</span>
                                                {errors.phone && <span className="text-destructive lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.phone.message}</span>}
                                            </label>
                                            <input
                                                {...register("phone")}
                                                type="tel"
                                                placeholder={t("placeholder.phone")}
                                                className={`w-full bg-slate-50 border-b py-3 px-4 text-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic ${errors.phone ? 'border-destructive' : 'border-slate-200 focus:border-primary'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex justify-between">
                                            <span>{t("linkedin")}</span>
                                            {errors.linkedin && <span className="text-destructive lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.linkedin.message}</span>}
                                        </label>
                                        <input
                                            {...register("linkedin")}
                                            type="url"
                                            placeholder={t("placeholder.linkedin")}
                                            className={`w-full bg-slate-50 border-b py-3 px-4 text-primary focus:outline-none transition-colors placeholder:text-slate-300 font-light italic ${errors.linkedin ? 'border-destructive' : 'border-slate-200 focus:border-primary'}`}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 flex justify-between">
                                            <span>{t("resume")}</span>
                                            {errors.cvFile && <span className="text-destructive lowercase tracking-normal flex items-center gap-1"><AlertCircle className="h-3 w-3" /> {errors.cvFile.message as string}</span>}
                                        </div>
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className={`group cursor-pointer border-2 border-dashed p-8 text-center transition-all duration-500 bg-slate-50 ${errors.cvFile ? 'border-destructive/30' : 'border-slate-200 hover:border-primary/30'}`}
                                        >
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                accept=".pdf"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                            {selectedFile ? (
                                                <div className="flex items-center justify-center gap-3 text-primary">
                                                    <FileText className="h-5 w-5" />
                                                    <span className="text-sm font-light italic">{selectedFile.name}</span>
                                                </div>
                                            ) : (
                                                <div className="space-y-3">
                                                    <div className="flex justify-center">
                                                        <Upload className={`h-6 w-6 transition-colors ${errors.cvFile ? 'text-destructive' : 'text-slate-400 group-hover:text-primary'}`} />
                                                    </div>
                                                    <p className={`text-sm transition-colors font-light italic ${errors.cvFile ? 'text-destructive' : 'text-slate-400 group-hover:text-primary'}`}>
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
                                            className="w-full bg-primary text-white py-5 px-8 text-xs font-bold uppercase tracking-[0.3em] hover:bg-slate-800 transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
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
