"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap, TrendingUp, Award } from "lucide-react";
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
        <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 bg-white border-b overflow-hidden">
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
                The primary on-ramp for Venezuela
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary leading-[1.05] mb-8 tracking-[-0.02em]"
              >
                Capital Entry <br />
                <span className="text-slate-400">& Strategic</span> <br />
                Implementation
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed mb-12"
              >
                Navigate the complexities of Venezuelan and Latin American markets with precision. We facilitate the full lifecycle of your investment—from entry strategy to operational execution.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-20">
                <Button asChild size="lg" className="h-16 px-10 text-lg rounded-none bg-primary hover:bg-primary/90 uppercase tracking-wider font-bold shadow-lg shadow-primary/20">
                  <Link href="/contact">Book a Discovery Call</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 text-lg rounded-none border-slate-200 hover:bg-slate-50 uppercase tracking-wider font-bold text-primary">
                  <Link href="/services">View Practice Areas</Link>
                </Button>
              </motion.div>

              {/* Credibility / Trust Bar */}
              <motion.div
                variants={fadeInUp}
                className="pt-12 border-t border-slate-100 flex flex-wrap items-center gap-x-12 gap-y-8"
              >
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] w-full lg:w-auto mb-2 lg:mb-0">Recognized by</span>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-6 grayscale opacity-60">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold tracking-tight text-primary">CHAMBERS GLOBAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold tracking-tight text-primary">CHAMBERS LATIN AMERICA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-bold tracking-tight text-primary">ITR WORLD TAX</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0 skew-x-[-15deg] translate-x-12 border-l border-slate-100 hidden lg:block" />
        </section>

        {/* Global Reach / Trust Markers */}
        <section className="py-12 bg-slate-50 border-b">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">Network Presence in</span>
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

        {/* Who We Serve */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
                  The Primary On-Ramp for Strategic Capital
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  We facilitate the entry and operationalization of global capital into Venezuela and the wider Latin American region. We are not just advisors; we are the foundation of your execution strategy.
                </p>
                <ul className="space-y-6 pt-4">
                  {[
                    { icon: Shield, title: "Capital Entry", desc: "Structuring secure entry vehicles and multi-jurisdictional capital flows." },
                    { icon: Zap, title: "Strategic Structuring", desc: "Legal and institutional frameworks designed for operational clarity." },
                    { icon: TrendingUp, title: "Market Implementation", desc: "Facilitating on-the-ground execution and ongoing regional operations." }
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
                  <span className="font-serif text-[12vw] text-slate-200 italic font-bold">Á</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Expertise Section */}
        <section className="py-24 lg:py-40 bg-slate-900 text-white overflow-hidden relative border-y border-white/5">
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">Credibility Rooted in Legal Excellence</h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-12">
                Our founders are recognized globally for their expertise in banking, finance, and M&A. We provide the institutional governance required to protect Interests where clarity is paramount.
              </p>
              <Button asChild variant="outline" size="lg" className="rounded-none border-white/20 text-white hover:bg-white hover:text-slate-900 h-16 px-10 uppercase tracking-widest font-bold">
                <Link href="/services">Our Practice Areas</Link>
              </Button>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-primary/20 skew-x-[-15deg] translate-x-32 hidden lg:block" />
        </section>

        {/* Services Hub Preview */}
        <section className="py-24 lg:py-40 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="mb-20">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary mb-6">Strategic Command</h2>
              <p className="text-slate-500 max-w-xl text-lg">
                Integrated advisory focused on the entry, execution, and long-term management of strategic capital in the region.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Capital Entry & Deal Structuring", desc: "Establishing the jurisdictional and financial vehicles required for regional market entry." },
                { title: "High-Stakes Implementation", desc: "Facilitating the legal and operational groundwork for mergers, acquisitions, and joint ventures." },
                { title: "Ongoing Operations", desc: "Providing the continuous governance, tax, and regulatory support required for regional scale." }
              ].map((service, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="mb-6 h-[1px] w-full bg-slate-200 group-hover:bg-primary transition-colors" />
                  <h3 className="text-2xl font-serif text-primary mb-6 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <Link href="/services" className="text-xs font-bold uppercase tracking-widest text-primary/60 group-hover:text-primary transition-colors flex items-center gap-2">
                    Explore Focus <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Venezuela Section */}
        <section className="py-24 lg:py-40 bg-white">
          <div className="container mx-auto px-6 lg:px-12 border-t border-slate-100">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl lg:text-6xl font-serif text-primary">The Venezuelan Wedge</h2>
              <p className="text-xl text-slate-500 leading-relaxed">
                As the Venezuelan market re-opens, the requirement for institutional-grade advice is critical. We provide the local master and global perspective needed to capture opportunity while mitigating jurisdictional risk.
              </p>
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
                Secure Your Entry. <br /> Execute Your Strategy.
              </h2>
              <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto italic">
                Discovery calls are strictly confidential and focused on institutional alignment.
              </p>
              <Button asChild size="lg" className="h-20 px-16 text-xl rounded-none bg-white text-primary hover:bg-slate-100 uppercase tracking-widest font-bold">
                <Link href="/contact">Book a Discovery Call</Link>
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
