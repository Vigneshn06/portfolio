import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on distributed systems, Java, AWS and more.",
};

export default function BlogIndex() {
  return (
    <section className="section-padding pt-32">
      <div className="container">
        <SectionHeading
          eyebrow="writing"
          title="Blog"
          description="Short posts on systems I build and lessons I learn."
        />

        <div className="space-y-5">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono mb-3">
                <time>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-[11px] rounded-full bg-background border border-border text-muted-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
