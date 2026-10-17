"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, projectCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Projects"
          description="Production systems I've designed, built and shipped."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm border transition-colors",
                filter === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative rounded-2xl p-[1px] overflow-hidden transition-transform hover:-translate-y-1"
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-border transition-opacity" />
                <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_var(--angle),transparent_0deg,hsl(var(--primary))_90deg,hsl(var(--accent))_180deg,transparent_270deg)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_6s_linear_infinite]" style={{ ["--angle" as string]: "0deg" } as React.CSSProperties} />

                <div className="relative h-full rounded-2xl bg-card p-6 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground font-mono">
                      {p.category}
                    </span>
                    {p.links?.github && (
                      <Link
                        href={p.links.github}
                        target="_blank"
                        aria-label="GitHub"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.links?.github || p.links?.demo ? (
                      <Link
                        href={(p.links.demo ?? p.links.github) as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                      >
                        {p.title}
                        <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </Link>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {p.highlights.map((h) => (
                      <li key={h} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] rounded-full bg-background border border-border text-muted-foreground font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Hover sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-accent/[0.06] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
