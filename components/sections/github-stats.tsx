"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/data";

export function GithubStats() {
  const user = siteConfig.githubUsername;
  const cards = [
    {
      alt: "GitHub stats",
      light: `https://github-readme-stats.vercel.app/api?username=${user}&show_icons=true&hide_border=true&bg_color=00000000&title_color=8b5cf6&icon_color=38bdf8&text_color=94a3b8`,
    },
    {
      alt: "Top languages",
      light: `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&hide_border=true&bg_color=00000000&title_color=8b5cf6&text_color=94a3b8`,
    },
    {
      alt: "GitHub streak",
      light: `https://github-readme-streak-stats.herokuapp.com/?user=${user}&hide_border=true&background=00000000&stroke=1f2937&ring=8b5cf6&fire=38bdf8&currStreakLabel=8b5cf6&sideLabels=94a3b8&currStreakNum=e5e7eb&sideNums=e5e7eb&dates=94a3b8`,
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub"
          title="Live from GitHub"
          description="Public contributions and stats, updated in real time."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 flex items-center justify-center min-h-[180px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.light} alt={c.alt} className="max-w-full" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mt-5 rounded-2xl border border-border bg-card p-6"
        >
          <p className="text-sm font-mono text-primary mb-4">
            Contribution graph
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://ghchart.rshah.org/8b5cf6/${user}`}
            alt="GitHub contribution graph"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
