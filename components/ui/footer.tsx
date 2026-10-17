import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-20">
      <div className="container py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        <p className="text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} · All rights reserved
        </p>

        <nav aria-label="Social links" className="flex items-center gap-2">
          <FooterIcon href={siteConfig.socials.github} label="GitHub">
            <Github className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href={siteConfig.socials.linkedin} label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </FooterIcon>
          <FooterIcon href={siteConfig.socials.email} label="Email">
            <Mail className="h-4 w-4" />
          </FooterIcon>
        </nav>
      </div>
    </footer>
  );
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="h-9 w-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
    >
      {children}
    </Link>
  );
}
