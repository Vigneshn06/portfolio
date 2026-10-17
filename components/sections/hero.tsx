"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/lib/data";
import { TechMarquee } from "@/components/ui/tech-marquee";

const roles = [
  "Senior Software Engineer",
  "Backend & Distributed Systems",
  "Cloud-Native Developer",
  "Full-Stack @ Scale",
  "SDE II @ Nike",
];

const liveStats = [
  { value: "~9M", label: "returned units / yr @ Nike EMEA" },
  { value: "50%", label: "faster unit handling" },
  { value: "200+", label: "warehouses powered" },
  { value: "5+", label: "years shipping to prod" },
];

function RoleRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block min-h-[1.4em] align-top">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-block"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-24 pb-16">
      <div className="container">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/70 backdrop-blur text-xs mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="font-medium text-muted-foreground">
              Open to new opportunities
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="inline-flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3 w-3" /> Bangalore, IN
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-[-0.03em] leading-[0.95]"
          >
            Hi, I&apos;m <br className="md:hidden" />
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-xl md:text-3xl text-muted-foreground font-medium"
          >
            <RoleRotator />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Currently at <span className="text-foreground font-semibold">Nike</span>,
            owning the Returns Receiving platform: a cloud-native, event-driven system
            built on Java 21, Spring Boot 3, Kafka and AWS that handles{" "}
            <span className="text-foreground font-semibold">
              ~9M returned units/year
            </span>{" "}
            across Nike EMEA. Previously shipped the Manhattan Active WMS across{" "}
            <span className="text-foreground font-semibold">200+ warehouses</span>.
          </motion.p>

          {/* Live impact strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl"
          >
            {liveStats.map((s, i) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-xl border border-border bg-card/70 backdrop-blur p-3.5 transition-all hover:border-primary/40"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="text-xl md:text-2xl font-bold tracking-tight gradient-text">
                  {s.value}
                </p>
                <p className="mt-0.5 text-[10.5px] md:text-xs text-muted-foreground leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
            >
              <Sparkles className="h-4 w-4" />
              Let&apos;s build together
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/70 backdrop-blur hover:border-primary/50 font-medium transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <div className="flex items-center gap-2 ml-1">
              <SocialIcon href={siteConfig.socials.github} label="GitHub">
                <Github className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={siteConfig.socials.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialIcon>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24"
        >
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Tech stack
          </p>
          <TechMarquee />
        </motion.div>
      </div>

    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-11 w-11 rounded-full border border-border bg-card/70 backdrop-blur flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
    >
      {children}
    </Link>
  );
}
