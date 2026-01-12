"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import OrbScene from "@/components/OrbScene";

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
    {children}
  </span>
);

export default function HeroFuturistic() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pt-10 pb-12 md:pt-14 md:pb-16">
      <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 backdrop-blur">
        {/* subtle inner glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-indigo-500/18 blur-3xl" />
          <div className="absolute -right-20 -bottom-24 h-80 w-80 rounded-full bg-cyan-400/12 blur-3xl" />
          <div className="absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] [background-image:linear-gradient(rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:56px_56px]" />
        </div>

        <div className="relative grid gap-8 p-6 md:grid-cols-2 md:items-center md:p-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2">
              <Chip>Senior AI Trainer</Chip>
              <Chip>Program Lead</Chip>
              <Chip>Enterprise Architect</Chip>
              <Chip>Full-Stack + Flutter</Chip>
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              Train teams. Build systems.
              <span className="text-white/65"> Ship outcomes.</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70">
              I deliver premium AI & Data Science training, Full-Stack Web and
              Mobile programs — designed with enterprise architecture, hands-on
              projects, and real deployment practices.
            </p>

            {/* Profile row */}
            <div className="mt-6 flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-white/12 bg-white/5">
                <Image
                  src="/profile.jpg"
                  alt="Tausifali Saiyed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="text-sm font-semibold text-white/90">
                  Tausifali Saiyed
                </div>
                <div className="text-sm text-white/60">
                  Dubai, UAE • AI / Full-Stack Training • Architecture
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/cv.pdf"
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
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                ["12+", "Years"],
                ["30+", "Batches"],
                ["400+", "Learners"],
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
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="relative"
          >
            <OrbScene />
            <div className="mt-4 grid gap-3">
              <div className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur">
                <div className="text-sm font-semibold text-white/85">
                  What I’m best at
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "AI/ML/GenAI",
                    "Python",
                    "SQL & Data",
                    "React/Next.js",
                    "Node.js",
                    "Java Enterprise",
                    "Flutter",
                    "System Design",
                  ].map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
