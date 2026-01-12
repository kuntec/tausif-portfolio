"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Phone } from "lucide-react";
import OrbScene from "@/components/OrbScene";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HeroFuturistic from "@/components/HeroFuturistic";
import HeroMinimalFuturistic from "@/components/HeroMinimalFuturistic";

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="mx-auto w-full max-w-6xl px-6 py-16">
    <div className="mb-8 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-semibold tracking-tight text-white/90">
        {title}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
    {children}
  </section>
);

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
    {children}
  </span>
);

const Card = ({
  title,
  desc,
  tags,
}: {
  title: string;
  desc: string;
  tags: string[];
}) => (
  <div className="rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur">
    <h3 className="text-lg font-semibold text-white/90">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </div>
  </div>
);

export default function Page() {
  return (
    <main className="min-h-screen text-white">
      {/* Futuristic background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-35 [background:radial-gradient(ellipse_at_top,rgba(99,102,241,0.35),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.22),transparent_55%)]" />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="text-sm font-semibold tracking-wide text-white/90">
            Tausifali Saiyed
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 md:flex">
            {[
              ["about", "About"],
              ["expertise", "Expertise"],
              ["programs", "Programs"],
              ["projects", "Projects"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="hover:text-white/90 transition">
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/10 transition"
          >
            Let’s talk
          </a>
        </div>
      </header>
      <HeroMinimalFuturistic />

      <Section id="about" title="About">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm leading-relaxed text-white/70">
              Senior trainer with 12+ years across professional training,
              enterprise application development, and system architecture. I
              specialize in turning complex topics into clear, practical systems
              — from AI/ML workflows to full-stack and mobile apps.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Chip>Corporate Training</Chip>
              <Chip>Curriculum Design</Chip>
              <Chip>Program Leadership</Chip>
              <Chip>Enterprise Architecture</Chip>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur">
            <div className="text-sm text-white/60">Quick highlights</div>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• AI, DS, Full-Stack, Mobile</li>
              <li>• Enterprise patterns (RBAC, APIs)</li>
              <li>• Project-first teaching approach</li>
              <li>• Real deployment practices</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="expertise" title="Expertise">
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            title="AI & Data Science"
            desc="Python, EDA, ML/DL, NLP, GenAI, chatbots, agents, RAG concepts — taught with real business use-cases and projects."
            tags={["Python", "ML", "DL", "NLP", "GenAI", "RAG"]}
          />
          <Card
            title="Full-Stack Web"
            desc="Java Enterprise + Node/Express + React/Next.js. APIs, auth, RBAC, scalable architecture, deployment workflows."
            tags={["Java", "Node.js", "Express", "React", "Next.js", "REST"]}
          />
          <Card
            title="Mobile Development"
            desc="Flutter cross-platform apps with clean architecture, state management, API integration, and production deployment."
            tags={["Flutter", "Android", "iOS", "API"]}
          />
          <Card
            title="Enterprise Architecture"
            desc="API-first systems, RBAC, modular design, reliability, performance, and security best practices."
            tags={["System Design", "RBAC", "Microservices", "CI/CD"]}
          />
        </div>
      </Section>

      <Section id="programs" title="Programs">
        <div className="grid gap-5 md:grid-cols-3">
          <Card
            title="AI & Data Science Track"
            desc="Python → EDA → ML → DL → NLP/GenAI. Hands-on labs + capstone project."
            tags={["Beginner→Advanced", "Projects", "Capstone"]}
          />
          <Card
            title="Full-Stack Track"
            desc="Backend APIs (Java/Node) + React/Next.js + DB + auth + deployment."
            tags={["APIs", "DB", "Auth", "Deploy"]}
          />
          <Card
            title="Corporate Bootcamps"
            desc="Custom workshops designed for business outcomes and practical delivery."
            tags={["Custom", "ROI-focused", "Hands-on"]}
          />
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-5 md:grid-cols-2">
          <Card
            title="AI-enabled LMS (Case Study)"
            desc="AI-generated content, quizzes, assessments, and role-based access — used as a capstone project."
            tags={["AI", "LMS", "RBAC", "Full-stack"]}
          />
          <Card
            title="ERP + AI Copilot (Case Study)"
            desc="Natural-language actions for business workflows like invoices and reporting."
            tags={["Agents", "Automation", "Enterprise"]}
          />
          <Card
            title="Full-Stack Web Applications"
            desc="Secure web systems with scalable APIs and modern UI."
            tags={["REST", "React/Next", "Security"]}
          />
          <Card
            title="Flutter Mobile Apps"
            desc="Cross-platform apps with backend integration and deployment workflows."
            tags={["Flutter", "Mobile", "API"]}
          />
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur">
            <p className="text-sm text-white/70">
              Want corporate training, institute programs, or end-to-end
              development support? Message me and I’ll respond quickly.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <a
                className="flex items-center gap-2 text-white/80 hover:text-white/95 transition"
                href="mailto:tausifali.mhs@gmail.com"
              >
                <Mail size={16} /> tausifali.mhs@gmail.com
              </a>
              <a
                className="flex items-center gap-2 text-white/80 hover:text-white/95 transition"
                href="tel:+971XXXXXXXX"
              >
                <Phone size={16} /> +971-567860628
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur">
           
            <a
              href="https://calendly.com/tausifali-mhs/tausif-saiyed-trainer"
              target="_blank"
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#05060a] hover:opacity-90 transition"
            >
              Book a 20-min call <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </Section>

      <footer className="mx-auto max-w-6xl px-6 pb-10 text-xs text-white/40">
        © {new Date().getFullYear()} Tausifali Saiyed • Dubai, UAE
      </footer>
      <WhatsAppFloat
  phone="971567860628"
  message="Hi Tausif, I saw your portfolio. I want to discuss training/development."/>

    </main>
  );
}
