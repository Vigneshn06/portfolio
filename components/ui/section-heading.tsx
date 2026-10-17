"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mb-12"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-primary to-accent"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-lg">{description}</p>
      )}
    </motion.div>
  );
}
