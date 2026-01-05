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

export default function Home() {
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
                The Latin American On-ramp
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.05] mb-8 tracking-[-0.02em]"
              >
                Where Strategic <br />
                <span className="text-slate-400">Capital Meets</span> <br />
                Legal Excellence
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12"
              >
                Founded in Caracas, defined globally. We provide the institutional foundation for the next wave of strategic investment in Latin America.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-16 px-10 text-lg rounded-none bg-primary hover:bg-primary/90 uppercase tracking-wider font-bold shadow-lg shadow-primary/20">
                  <Link href="/contact">Execute Your Strategy</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg rounded-none border-slate-200 hover:bg-slate-50 uppercase tracking-wider font-bold">
                  <Link href="/services">Our Practice Areas</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Subtle Abstract Background Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0 skew-x-[-15deg] translate-x-12 border-l border-slate-100 hidden lg:block" />
        </section>

        {/* Global Reach / Trust Markers */}
        <section className="py-12 bg-slate-50 border-b">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Institutional Partners in</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-40 grayscale filter">
                {['London', 'New York', 'Madrid', 'Caracas'].map((city) => (
                  <div key={city} className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span className="font-serif text-lg font-semibold tracking-tighter">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Methodology / Positioning */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
                  High-Trust Advisory for High-Stakes Operations
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  Navigating Latin American markets requires more than legal counsel—it requires a strategic partner that understands the intersection of global capital and local institutional dynamics.
                </p>
                <ul className="space-y-6 pt-4">
                  {[
                    { icon: Shield, title: "Risk Mitigation", desc: "Sovereign and institutional risk assessment for strategic operators." },
                    { icon: Zap, title: "Capital Efficiency", desc: "Structuring cross-border vehicles for maximum operational clarity." },
                    { icon: Globe, title: "Local Navigation", desc: "Deep operational roots in Caracas and key Latin American hubs." }
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
                {/* Visual placeholder for an abstract image or product-like UI */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-white border-t border-slate-200 translate-y-24 group-hover:translate-y-12 transition-transform duration-1000 p-8 shadow-2xl">
                  <div className="flex gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                    <div className="h-3 w-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="h-2 w-3/4 bg-slate-100 mb-4" />
                  <div className="h-2 w-1/2 bg-slate-100" />
                </div>
                <div className="flex items-center justify-center h-full">
                  <span className="font-serif text-8xl text-slate-200 italic">01</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid (Hub Preview) */}
        <section className="py-24 lg:py-40 bg-slate-50 border-y">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Expertise at Scale</h2>
              <p className="text-slate-500 max-w-xl text-lg">
                Phase 1 structural highlight: Practice areas organized for clarity and conversion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Investment Advisory", items: ["Deal Structuring", "Due Diligence", "Local Representation"] },
                { title: "Strategic Legal", items: ["Governance", "Compliance", "Contractual Frameworks"] },
                { title: "Cross-border Operations", items: ["Tax Strategy", "Entity Management", "Regulatory Mapping"] }
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
                    Explore Focus <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Insights Mockup */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-3xl mx-auto space-y-12">
              <h2 className="text-4xl lg:text-6xl font-serif text-primary">Insights for the Strategic Operator</h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                We believe in knowledge as an asset. Access our periodic briefings on market dynamics and institutional shifts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {[1, 2].map((i) => (
                  <div key={i} className="border border-slate-100 p-8 hover:border-primary/20 transition-all rounded-none bg-slate-50 group">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 block">Market Briefing</span>
                    <h4 className="text-xl font-serif text-primary mb-4 group-hover:text-primary/70 mb-8 leading-tight">
                      Venezuela: Navigating New Capital Inflows in the Logistics Sector
                    </h4>
                    <Link href="/insights" className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                      Read Analysis <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                ))}
              </div>
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
              <Button asChild size="lg" className="h-20 px-16 text-xl rounded-none bg-white text-primary hover:bg-slate-100 uppercase tracking-widest font-bold">
                <Link href="/contact">Book a Discovery Call</Link>
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
