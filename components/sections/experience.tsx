"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Download,
  ExternalLink,
  GraduationCap,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  certifications,
  education,
  experiences,
  siteConfig,
  type Experience as ExperienceT,
} from "@/lib/data";
import { cn } from "@/lib/utils";

export function Experience() {
  const [activeId, setActiveId] = useState<string>(experiences[0].id);
  const active = experiences.find((e) => e.id === activeId) ?? experiences[0];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Experience"
          title="Experience"
          description="5+ years shipping production systems: from Nike's cloud-native Returns platform (~9M units/year) to Manhattan's MAWM powering 200+ warehouses globally."
        />

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Left: company tabs */}
          <CompanyTabs
            experiences={experiences}
            activeId={activeId}
            onSelect={setActiveId}
          />

          {/* Right: active experience detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <ExperienceDetail exp={active} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Education + Certifications */}
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          <EducationCard />
          <CertificationsCard />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6"
        >
          <div>
            <p className="font-semibold">Want the full story?</p>
            <p className="text-sm text-muted-foreground">
              Download the complete resume with all projects and achievements.
            </p>
          </div>
          <a
            href={siteConfig.resumeUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function CompanyTabs({
  experiences,
  activeId,
  onSelect,
}: {
  experiences: ExperienceT[];
  activeId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="lg:sticky lg:top-24 lg:self-start">
      {/* Mobile: horizontal scroll */}
      <div className="lg:hidden -mx-6 px-6 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-2">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => onSelect(exp.id)}
              className={cn(
                "shrink-0 px-4 py-2 rounded-full text-sm border transition-colors whitespace-nowrap",
                exp.id === activeId
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {exp.company}
              {exp.type === "Internship" && (
                <span className="ml-1 opacity-70">(Intern)</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Desktop: vertical timeline */}
      <div className="hidden lg:block relative">
        <div className="absolute left-[14px] top-2 bottom-2 w-px bg-border" />
        <ul className="space-y-1">
          {experiences.map((exp) => {
            const isActive = exp.id === activeId;
            return (
              <li key={exp.id}>
                <button
                  onClick={() => onSelect(exp.id)}
                  className={cn(
                    "group relative w-full text-left pl-10 pr-4 py-3 rounded-xl transition-colors",
                    isActive ? "bg-card" : "hover:bg-card/50"
                  )}
                >
                  <span
                    className={cn(
                      "absolute left-[9px] top-5 h-3 w-3 rounded-full border-2 transition-colors",
                      isActive
                        ? "bg-primary border-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.15)]"
                        : "bg-background border-border group-hover:border-primary/50"
                    )}
                  />
                  <p
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {exp.company}
                    {exp.current && (
                      <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-mono text-green-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        NOW
                      </span>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {exp.startYear} – {exp.endYear}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function ExperienceDetail({ exp }: { exp: ExperienceT }) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="p-6 md:p-8 border-b border-border bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">
                {exp.type}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              {exp.role}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
                >
                  {exp.company}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ) : (
                <span className="font-medium">{exp.company}</span>
              )}
              <span className="text-muted-foreground">{exp.period}</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-3 w-3" /> {exp.location}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-muted-foreground leading-relaxed">
          {exp.summary}
        </p>
      </div>

      {/* Metrics */}
      {exp.metrics.length > 0 && (
        <div className="px-6 md:px-8 pt-6">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-4 w-4 text-primary" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Impact
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {exp.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-border bg-background p-4"
              >
                <p className="text-xl md:text-2xl font-bold gradient-text">
                  {m.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground leading-tight">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bullets */}
      <div className="p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Highlights
        </p>
        <ul className="space-y-3">
          {exp.bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="text-sm text-muted-foreground leading-relaxed flex gap-3"
            >
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span>{b}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Tech groups */}
      <div className="p-6 md:p-8 pt-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          Tech Stack
        </p>
        <div className="space-y-3">
          {exp.tech.map((group) => (
            <div key={group.label} className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground w-20 shrink-0">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-xs rounded-md bg-background border border-border text-muted-foreground font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EducationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-border bg-card p-6"
    >
      <div className="flex items-center gap-2 mb-5">
        <GraduationCap className="h-4 w-4 text-primary" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Education
        </p>
      </div>

      <ol className="relative space-y-5">
        <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
        {education.map((e) => (
          <li key={`${e.level}-${e.school}`} className="relative pl-7">
            <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary">
                {e.level}
              </span>
              {e.score && (
                <span className="text-[11px] font-mono text-muted-foreground">
                  · {e.score}
                </span>
              )}
            </div>
            {e.degree && (
              <p className="mt-0.5 text-sm font-semibold leading-tight">
                {e.degree}
              </p>
            )}
            <p
              className={`${
                e.degree ? "mt-0.5 text-xs text-muted-foreground" : "mt-0.5 text-sm font-semibold"
              } leading-tight`}
            >
              {e.schoolUrl ? (
                <a
                  href={e.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                >
                  {e.school}
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              ) : (
                e.school
              )}
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground font-mono">
              {e.location} · {e.period}
            </p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}

function CertificationsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="rounded-2xl border border-border bg-card p-6"
    >
      <div className="flex items-center gap-2 mb-5">
        <Award className="h-4 w-4 text-primary" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Certifications
        </p>
      </div>

      <ul className="space-y-5">
        {certifications.map((cert) => (
          <li key={cert.name}>
            <div className="flex flex-wrap items-baseline gap-2">
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold hover:text-primary transition-colors"
                >
                  {cert.name}
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              ) : (
                <span className="text-sm font-semibold">{cert.name}</span>
              )}
              {cert.date && (
                <span className="text-[11px] text-muted-foreground font-mono">
                  · {cert.date}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">
              {cert.issuer}
            </p>
            {cert.credential && (
              <p className="text-[11px] text-muted-foreground font-mono mt-1">
                Credential ID: {cert.credential}
              </p>
            )}

            {cert.courses && cert.courses.length > 0 && (
              <ul className="mt-3 space-y-1.5 border-l border-border pl-4">
                {cert.courses.map((c) => (
                  <li key={c.name} className="text-xs">
                    {c.url ? (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {c.name}
                        <ExternalLink className="h-2.5 w-2.5 opacity-60 shrink-0" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{c.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
