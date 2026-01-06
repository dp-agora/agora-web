"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Globe, Shield, Zap } from "lucide-react";
import Link from "next/link";

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

import { useBooking } from "@/context/BookingContext";

export default function Home() {
  const { openBooking } = useBooking();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-48 bg-white border-b overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="max-w-4xl"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-3 py-1 rounded-full bg-slate-100 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
              >
                Agora Abogados
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.05] mb-8 tracking-[-0.02em]"
              >
                Legal Boutique <br />
                <span className="text-slate-400">Services With</span> <br />
                Global Reach
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12"
              >
                We provide the personalized service of a legal boutique with global reach, capabilities, and vision. Defined by experience, innovation, and leadership.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={openBooking}
                  size="lg"
                  className="h-16 px-10 text-lg rounded-none bg-primary hover:bg-primary/90 uppercase tracking-wider font-bold shadow-lg shadow-primary/20 cursor-pointer"
                >
                  Book a Discovery Call
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg rounded-none border-slate-200 hover:bg-slate-50 uppercase tracking-wider font-bold">
                  <Link href="/services">Practice Areas</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Subtle Abstract Background Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0 skew-x-[-15deg] translate-x-12 border-l border-slate-100 hidden lg:block" />
        </section>

        {/* Core Methodology / Positioning */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
                  Strategic Solutions Across Sectors
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  Ágora Abogados specializes in providing strategic legal solutions that address the specific challenges and opportunities of each client and industry.
                </p>
                <ul className="space-y-6 pt-4">
                  {[
                    { icon: Shield, title: "Ethics and Commitment", desc: "Creation of strategic partnerships built on trust to tackle complex legal challenges." },
                    { icon: Globe, title: "Global Reach", desc: "Highly recognized professionals with extensive experience in international firms." },
                    { icon: Zap, title: "Modern Leadership", desc: "Combining dynamism and innovation with the vast experience of our partners." }
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
              <div className="relative aspect-square bg-slate-100 border border-slate-200 p-12 overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-white border-t border-slate-200 translate-y-24 group-hover:translate-y-12 transition-transform duration-1000 p-8 shadow-2xl">
                  <div className="flex gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-2 w-3/4 bg-slate-100 mb-4" />
                  <div className="h-2 w-1/2 bg-slate-100" />
                </div>
                <div className="flex items-center justify-center h-full">
                  <span className="font-serif text-8xl text-slate-200 italic">Á</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid (Hub Preview) */}
        <section className="py-24 lg:py-40 bg-slate-50 border-y">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Areas of Expertise</h2>
              <p className="text-slate-500 max-w-xl text-lg">
                Comprehensive legal advisory with specialized focus across core practice areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Corporate and M&A", items: ["Global Reorganizations", "Mergers & Acquisitions", "Joint Ventures"] },
                { title: "Banking & Finance", items: ["Regulatory Advice", "Lending & Credit", "Financial Products"] },
                { title: "Capital Markets", items: ["Securities Issuances", "Capital Strategies", "Private Equity Funds"] }
              ].map((service, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="mb-6 h-[1px] w-full bg-slate-200 group-hover:bg-primary transition-colors" />
                  <h3 className="text-2xl font-serif text-primary mb-6 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, j) => (
                      <li key={j} className="text-slate-500 text-sm flex items-center gap-2">
                        <ChevronRight className="h-3 w-3 text-slate-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors flex items-center gap-2">
                    View Practice Area <ArrowRight className="h-3 w-3" />
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
                Ready to Establish Your <br /> Latin American Presence?
              </h2>
              <Button
                onClick={openBooking}
                size="lg"
                className="h-20 px-16 text-xl rounded-none bg-white text-primary hover:bg-slate-100 uppercase tracking-widest font-bold cursor-pointer"
              >
                Book a Discovery Call
              </Button>
            </motion.div>
          </div>

          {/* Background Decorative Element */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <span className="font-serif text-[40vw] font-bold text-white select-none translate-y-1/3">Á</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
