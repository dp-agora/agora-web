"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Globe, Shield, Zap } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useBooking } from "@/context/BookingContext";
import Image from "next/image";


const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { openBooking } = useBooking();
  const t = useTranslations("HomePage");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-48 bg-white border-b overflow-hidden">
          {/* Background Image Container */}
          <div className="absolute inset-0 w-full h-full -z-0">
            <Image
              src="/assets/offices/hero-image.webp"
              alt="Ágora Institutional"
              fill
              className="object-cover opacity-60 lg:opacity-80"
              priority
            />
            {/* Gradient Overlay for Legibility - Strong on the left for text, fades out to reveal the image on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-4xl"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-3 py-1 rounded-full bg-slate-100 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
              >
                {t("hero.badge")}
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.05] mb-8 tracking-[-0.02em]"
              >
                {t("hero.line1")} <br />
                <span className="text-slate-400">{t("hero.line2")}</span> <br />
                {t("hero.line3")}
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12"
              >
                {t("hero.description")}
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-20">
                <Button
                  onClick={openBooking}
                  size="lg"
                  className="h-16 px-10 text-lg rounded-none bg-primary hover:bg-primary/90 uppercase tracking-wider font-bold shadow-lg shadow-primary/20 cursor-pointer"
                >
                  {t("hero.ctaBook")}
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg rounded-none border-slate-200 hover:bg-slate-50 uppercase tracking-wider font-bold">
                  <Link href="/services">{t("hero.ctaServices")}</Link>
                </Button>
              </motion.div>

              {/* Credibility / Trust Bar */}
              <motion.div
                variants={fadeInUp}
                className="pt-12 border-t border-slate-100 flex flex-wrap items-center gap-x-12 gap-y-8"
              >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] w-full lg:w-auto mb-2 lg:mb-0">Recognized by</span>
                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 opacity-50 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-500">
                  <a
                    href="https://chambers.com/lawyer/alvaro-posada-latin-america-9:210039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center flex-shrink-0"
                  >
                    <Image
                      src="/assets/awards/chambers.png"
                      alt="Chambers Logo"
                      width={160}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </a>
                  <Image
                    src="/assets/awards/iflr1000.png"
                    alt="IFLR1000 Logo"
                    width={160}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                  <Image
                    src="/assets/awards/itr-world-tax.png"
                    alt="ITR World Tax Logo"
                    width={160}
                    height={40}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
                  {t("methodology.title")}
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  {t("methodology.description")}
                </p>
                <ul className="space-y-6 pt-4">
                  {[
                    { icon: Shield, title: t("methodology.ethics.title"), desc: t("methodology.ethics.desc") },
                    { icon: Globe, title: t("methodology.global.title"), desc: t("methodology.global.desc") },
                    { icon: Zap, title: t("methodology.leadership.title"), desc: t("methodology.leadership.desc") }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1 h-6 w-6 text-primary"><item.icon className="h-6 w-6" /></div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square bg-slate-100 border border-slate-200 overflow-hidden group">
                <Image
                  src="/assets/team/APS & MER home.jpg"
                  alt="Ágora Strategic Solutions"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 top-[82%] bg-white/95 border-t border-slate-200 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 px-8 py-4 shadow-2xl flex flex-col justify-center">
                  <Link href="/team#partners" className="group/link flex items-center justify-between">
                    <span className="text-xl font-serif text-primary italic">{t("credibility.partners")}</span>
                    <div className="h-8 w-8 rounded-full border border-primary/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all duration-500">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Legal Expertise Section */}
        <section className="py-24 lg:py-40 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
          {/* Enhanced Architectural Texture Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(30,58,138,0.15)_0%,transparent_70%)]" />

            {/* Structural Beams / Texture */}
            <div className="absolute top-0 right-0 w-full h-full opacity-[0.15]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 h-[200%] bg-white w-[1px] lg:w-[2px]"
                  style={{
                    right: `${10 + (i * 6)}%`,
                    transform: 'rotate(25deg) translateY(-25%)',
                    opacity: 1 - (i * 0.08),
                    boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                  }}
                />
              ))}
              {/* Crossed accents */}
              <div className="absolute bottom-0 right-0 w-[60%] h-[1px] bg-white opacity-20 rotate-[-15deg] translate-y-[-100%]" />
              <div className="absolute bottom-10 right-0 w-[50%] h-[1px] bg-white opacity-10 rotate-[-15deg] translate-y-[-200%]" />
            </div>

            {/* Subtle Gradient Fade */}
            <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-transparent to-slate-900/80" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">{t("credibility.title")}</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                {t("credibility.description")}
              </p>
              <Button asChild variant="outline" size="lg" className="rounded-none border-white/20 text-primary bg-white hover:bg-white/90 h-16 px-10 uppercase tracking-widest font-bold">
                <Link href="/services">{t("credibility.cta")}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Secure AI Innovation Section */}
        <section className="py-24 lg:py-40 bg-white border-b overflow-hidden relative">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-6 space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-[1.1]">
                  {t("aiSection.headline")}
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed font-light max-w-xl">
                  {t("aiSection.body")}
                </p>
              </div>
              <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-square bg-slate-50 overflow-hidden border border-slate-100">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-75 brightness-105 contrast-105 saturate-110"
                >
                  <source src="/assets/video/ai-section.mp4" type="video/mp4" />
                </video>
                {/* Atmospheric overlays - reduced intensity */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-slate-900/[0.02] mix-blend-overlay" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Hub Preview */}
        <section className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden border-b border-slate-100">
          {/* Architectural Texture Background (Light Version) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(15,23,42,0.03)_0%,transparent_50%)]" />

            {/* Structural Beams / Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.05]">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 h-[200%] bg-primary w-[1px] lg:w-[2px]"
                  style={{
                    left: `${5 + (i * 8)}%`,
                    transform: 'rotate(-20deg) translateY(-25%)',
                    opacity: 1 - (i * 0.1),
                  }}
                />
              ))}
            </div>

            {/* Subtle Gradient Fade */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 via-transparent to-slate-50/50" />
          </div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">{t("expertise.title")}</h2>
              <p className="text-slate-500 max-w-xl text-lg">
                {t("expertise.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: t("services.corporate.title"),
                  items: [
                    t("services.corporate.items.0"),
                    t("services.corporate.items.1"),
                    t("services.corporate.items.2")
                  ]
                },
                {
                  title: t("services.banking.title"),
                  items: [
                    t("services.banking.items.0"),
                    t("services.banking.items.1"),
                    t("services.banking.items.2")
                  ]
                },
                {
                  title: t("services.capital.title"),
                  items: [
                    t("services.capital.items.0"),
                    t("services.capital.items.1"),
                    t("services.capital.items.2")
                  ]
                }
              ].map((service, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="mb-6 h-[1px] w-full bg-slate-200 group-hover:bg-primary transition-colors" />
                  <h3 className="text-2xl font-serif text-primary mb-6 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <div className="text-slate-500 text-sm leading-relaxed mb-8">
                    {/* Note: In legacy-plus, we use the translated list items. I'll maintain that logic. */}
                    <ul className="space-y-1">
                      {service.items.map((item, j) => (
                        <li key={j}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors flex items-center gap-2">
                    {t("expertise.viewAll")} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-24 lg:py-48 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-12 leading-tight">
                {t("cta.title")}
              </h2>
              <Button
                onClick={openBooking}
                size="lg"
                className="h-20 px-16 text-xl rounded-none bg-white text-primary hover:bg-slate-100 uppercase tracking-widest font-bold cursor-pointer"
              >
                {t("cta.button")}
              </Button>
            </motion.div>
          </div>

          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <span className="font-serif text-[40vw] font-bold text-white select-none translate-y-1/3">Á</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
