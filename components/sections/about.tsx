"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionHeading eyebrow="About" title="About me" />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 text-lg text-muted-foreground leading-relaxed"
          >
            {about.summary}
          </motion.p>

          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {about.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <p className="text-3xl md:text-4xl font-bold gradient-text">{h.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
