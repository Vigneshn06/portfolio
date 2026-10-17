"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="group inline-flex items-center gap-2"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
            {siteConfig.shortName}
          </span>
          <span className="hidden sm:inline text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/60 backdrop-blur px-1.5 py-1.5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-3.5 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-background/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-9 w-9 rounded-full border border-border bg-card flex items-center justify-center"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border">
          <nav className="container py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
