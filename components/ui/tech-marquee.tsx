"use client";

const items = [
  "Java 21",
  "Spring Boot 3",
  "Kafka",
  "RabbitMQ",
  "AWS",
  "Terraform",
  "DynamoDB",
  "Aurora MySQL",
  "React",
  "React Native",
  "Angular 17",
  "TypeScript",
  "GCP",
  "Kubernetes",
  "Docker",
  "GitHub Actions",
  "Jenkins",
  "Python 3",
  "PostgreSQL",
  "Redis",
];

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-3 w-max animate-[marquee_30s_linear_infinite]">
        {[...items, ...items].map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="shrink-0 px-3 py-1.5 text-xs font-mono rounded-full border border-border bg-card text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
