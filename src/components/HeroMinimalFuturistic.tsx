"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    {children}
  </span>
);

export default function HeroMinimalFuturistic() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-12 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 backdrop-blur"
      >
        {/* background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>

        <div className="relative grid gap-8 p-6 md:grid-cols-2 md:items-center md:p-12">
          {/* LEFT */}
          <div>
            <div className="flex flex-wrap gap-2">
              <Chip>Senior AI Trainer</Chip>
              <Chip>Program Lead</Chip>
              <Chip>Enterprise Architect</Chip>
              <Chip>Full-Stack & Flutter</Chip>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Training professionals
              <span className="text-white/65"> Designing real systems.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              I deliver end-to-end training in AI, Data Science, Full-Stack Web,
              and Mobile development — grounded in enterprise architecture,
              real-world projects, and production-ready practices.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#05060a] hover:opacity-90 transition"
              >
                <Download size={18} /> Download CV
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
              >
                Let’s talk <ArrowRight size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              {[
                ["12+", "Years"],
                ["120+", "Batches"],
                ["1100+", "Learners"],
              ].map(([v, k]) => (
                <div
                  key={k}
                  className="rounded-2xl border border-white/12 bg-white/5 p-4 text-center backdrop-blur"
                >
                  <div className="text-lg font-semibold text-white/90">{v}</div>
                  <div className="text-xs text-white/60">{k}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-2 rounded-[26px] bg-gradient-to-tr from-indigo-500/30 to-cyan-400/20 blur-xl" />
              <div className="relative h-56 w-56 overflow-hidden rounded-[24px] border border-white/12 bg-white/5 md:h-64 md:w-64">
                <Image
                  src="/tausif.jpeg"
                  alt="Tausifali Saiyed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="mt-4 text-center">
                <div className="text-sm font-semibold text-white/90">
                  Tausifali Saiyed
                </div>
                <div className="text-xs text-white/60">
                  Dubai, UAE
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
