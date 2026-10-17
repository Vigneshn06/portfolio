"use client";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 20%, transparent 70%)",
        }}
      />

      {/* Aurora blobs */}
      <div className="absolute -top-40 left-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/25 blur-[120px] animate-float" />
      <div
        className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[120px] animate-float"
        style={{ animationDelay: "4s" }}
      />

      {/* Noise */}
      <div className="absolute inset-0 noise opacity-[0.015] mix-blend-overlay" />
    </div>
  );
}
