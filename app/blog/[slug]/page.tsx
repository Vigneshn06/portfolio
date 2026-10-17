import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="section-padding pt-32">
      <div className="container max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono mb-4">
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          {post.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>

        <div className="mt-10 prose prose-invert prose-sm md:prose-base max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            This post is a placeholder. Replace the body of{" "}
            <code className="font-mono text-primary">
              app/blog/[slug]/page.tsx
            </code>{" "}
            or wire it up to MDX / a CMS, to publish the full article.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Suggested stack: <strong>Contentlayer</strong> or{" "}
            <strong>next-mdx-remote</strong> with <code>content/blog/*.mdx</code>.
          </p>
        </div>
      </div>
    </article>
  );
}
