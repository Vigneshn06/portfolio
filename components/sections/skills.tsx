"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="Tech I work with"
          description="Battle-tested in production, not just resume filler."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="text-sm font-mono text-primary mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded-md bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
