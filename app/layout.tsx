import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { siteConfig } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vignesh-n.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · ${siteConfig.role}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  keywords: [
    "Vignesh N",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Kafka",
    "AWS",
    "React",
    "Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.tagline,
    url: siteUrl,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans`}>
        <ThemeProvider>
          <AuroraBackground />
          <ScrollProgress />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
          <Toaster position="bottom-right" richColors />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
