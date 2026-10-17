export const siteConfig = {
  name: "Vignesh N",
  shortName: "VN",
  role: "Senior Software Engineer",
  tagline:
    "Building scalable, event-driven distributed systems at Nike. Previously shipped the Manhattan Active WMS across 200+ warehouses.",
  location: "Bangalore, India",
  email: "vignesh.nainamalai@gmail.com",
  phone: "+91 9944775518",
  resumeUrl: "/Vignesh_N_Resume.pdf",
  socials: {
    github: "https://github.com/Vigneshn06",
    linkedin: "https://www.linkedin.com/in/vignesh-n-697723226",
    email: "mailto:vignesh.nainamalai@gmail.com",
  },
  githubUsername: "Vigneshn06",
};

export const about = {
  summary:
    "Senior Software Engineer with 5+ years at Nike and Manhattan Associates, building scalable, high-throughput distributed systems and full-stack enterprise applications for global warehouse and supply-chain operations. Specialized in Java, Spring Boot, Kafka, AWS, GCP, React and Angular, delivering 50% latency reduction, 40% storage savings and 25% productivity gains across platforms serving 200+ warehouses and multiple regions.",
  highlights: [
    { value: "5+", label: "Years of Experience" },
    { value: "200+", label: "Warehouses Powered" },
    { value: "~9M", label: "Returns / Year (EMEA)" },
    { value: "50%", label: "Latency Reduction" },
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      "Java 8 / 21",
      "Python 3",
      "TypeScript",
      "JavaScript",
      "SQL",
    ],
  },
  {
    title: "Backend & Systems",
    items: [
      "Spring Boot 3",
      "Spring MVC",
      "Microservices",
      "REST APIs",
      "Kafka",
      "RabbitMQ",
      "Hibernate",
      "JPA",
      "Event-Driven Architecture",
      "Velocity Templates",
      "DSL",
    ],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "React Native",
      "Angular 17",
      "Redux",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Metadata-Driven UI",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS Lambda",
      "AWS ECS",
      "AWS SQS",
      "AWS S3",
      "Aurora",
      "DynamoDB",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
      "Nexus",
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "Aurora MySQL", "DynamoDB", "Redis"],
  },
  {
    title: "Monitoring & Tooling",
    items: [
      "Kibana",
      "OpenSearch",
      "Splunk",
      "Grafana",
      "PagerDuty",
      "JUnit",
      "Mockito",
      "Postman",
      "Swagger",
      "GitHub Copilot",
      "Cursor",
      "Cursor Bugbot",
    ],
  },
  {
    title: "Fundamentals",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Design Patterns",
      "Multithreading",
      "HLD / LLD",
      "System Design",
    ],
  },
  {
    title: "Practices",
    items: [
      "Agile",
      "Scrum",
      "TDD",
      "Code Reviews",
      "Production Support",
      "Release Management",
      "Mentorship",
      "AI-Assisted Development",
    ],
  },
];

export type ExperienceMetric = { value: string; label: string };
export type ExperienceTechGroup = { label: string; items: string[] };

export type Experience = {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  type: "Full-time" | "Internship";
  period: string;
  startYear: string;
  endYear: string;
  location: string;
  summary: string;
  bullets: string[];
  metrics: ExperienceMetric[];
  tech: ExperienceTechGroup[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    id: "nike",
    company: "Nike",
    companyUrl: "https://www.nike.com",
    role: "Software Development Engineer II",
    type: "Full-time",
    period: "Nov 2025 – Present",
    startYear: "2025",
    endYear: "Present",
    location: "Bangalore, India",
    current: true,
    summary:
      "Owning Nike's cloud-native Returns Receiving platform end-to-end, from distributed microservices to scan-driven apps running on Zebra handhelds across EMEA, APAC and NA Distribution Centers.",
    bullets: [
      "Engineered a cloud-native Returns Receiving platform using Java 21, Spring Boot 3, Kafka, AWS Lambda, SQS, DynamoDB, Aurora MySQL and S3, achieving 90-second end-to-end unit handling via fault-tolerant, event-driven pipelines that decouple inventory bookkeeping and improve scalability.",
      "Delivered end-to-end Japan DC go-live, introducing Family RSO and a new S-Grade disposition workflow across backend services and Zebra scanner UIs, enabling Nike's first APAC Returns operations with full dev-to-production ownership.",
      "Shipped the Boundless capability for the EMEA DC, eliminating a third-party reverse-logistics vendor and routing consumer returns directly to the Nike DC, removing per-unit vendor fees, compressing the returns cycle, and expanding in-house control over disposition for ~9M returned units/year. Currently owning EMEA production support.",
      "Built a scan-driven React web app and a React Native Android app for Zebra handheld scanners, cutting operator actions by 50% through guided workflows and one-tap grading.",
      "Provisioned AWS infrastructure with Terraform across 2 regions (15+ resources incl. ECS, Lambda, Aurora, DynamoDB, SQS) with SSM-based config, reducing provisioning from 2 days to 20 minutes.",
      "Established GitHub Actions CI/CD with Cursor Bugbot AI-assisted code reviews and severity-based quality gates, enabling weekly releases and reducing main-branch defects by 30%+. Led design/code reviews and mentored 3 junior engineers.",
    ],
    metrics: [
      { value: "90s", label: "end-to-end unit handling" },
      { value: "~9M", label: "returns/year via Boundless" },
      { value: "50%", label: "fewer operator actions" },
      { value: "2d → 20m", label: "infra provisioning time" },
    ],
    tech: [
      {
        label: "Backend",
        items: ["Java 21", "Spring Boot 3", "Kafka", "REST APIs"],
      },
      {
        label: "Cloud",
        items: [
          "AWS Lambda",
          "SQS",
          "DynamoDB",
          "Aurora MySQL",
          "S3",
          "Terraform",
        ],
      },
      {
        label: "Frontend",
        items: ["React", "React Native", "TypeScript"],
      },
      {
        label: "DevOps",
        items: ["GitHub Actions", "Docker", "Cursor Bugbot"],
      },
    ],
  },
  {
    id: "manhattan-se",
    company: "Manhattan Associates",
    companyUrl: "https://www.manh.com",
    role: "Software Engineer",
    type: "Full-time",
    period: "Sep 2022 – Nov 2025",
    startYear: "2022",
    endYear: "2025",
    location: "Bangalore, India",
    summary:
      "Promoted from intern to Software Engineer. Owned feature delivery and client-specific customizations on the Manhattan Active Warehouse Management (MAWM) product across 200+ enterprise warehouses, dev-to-production.",
    bullets: [
      "Architected RESTful APIs with Java 8, Spring Boot and Spring MVC for MAWM, integrating Kafka and RabbitMQ event streams and exposing Swagger-documented, paginated endpoints to web and mobile clients.",
      "Built custom Packstation and ASN Web UIs with Angular 17 + Java 8 on GCP Kubernetes (Jenkins pipelines, Kibana observability), delivering API-driven customization and a more user-friendly operator experience beyond the base product.",
      "Delivered per-client MAWM enhancements via Apache Velocity templating, Python 3 extension packs and DSL-based metadata UI configuration, enabling rapid client-specific rollouts without core product changes.",
      "Deployed and scaled 8 Spring Boot microservices on GCP Kubernetes with horizontal autoscaling and rolling deployments; managed 12+ Jenkins pipelines with Nexus for zero-downtime Docker releases.",
      "Resolved 40+ P1/P2 production incidents with sub-45-minute MTTR; optimized database performance by 40% (storage) and 20% (query latency) via JPA/Hibernate purging, Fork/Join parallelism and SQL tuning.",
      "Designed an internal code-generation tool scaffolding Spring Boot controllers, service layers and JPA repositories, reducing boilerplate by 25% and accelerating team rollouts.",
    ],
    metrics: [
      { value: "200+", label: "warehouses powered" },
      { value: "40%", label: "storage reduction" },
      { value: "20%", label: "query latency improvement" },
      { value: "25%", label: "less boilerplate" },
      { value: "<45m", label: "P1/P2 MTTR" },
    ],
    tech: [
      {
        label: "Backend",
        items: [
          "Java 8",
          "Spring Boot",
          "Spring MVC",
          "JPA",
          "Hibernate",
          "Kafka",
          "RabbitMQ",
        ],
      },
      {
        label: "Frontend",
        items: ["Angular 17", "Velocity Templates", "DSL"],
      },
      { label: "Cloud", items: ["GCP", "Kubernetes", "Docker"] },
      { label: "DevOps", items: ["Jenkins", "Nexus", "Maven"] },
    ],
  },
  {
    id: "manhattan-intern",
    company: "Manhattan Associates",
    companyUrl: "https://www.manh.com",
    role: "Software Engineering Intern",
    type: "Internship",
    period: "Jul 2022 – Aug 2022",
    startYear: "2022",
    endYear: "2022",
    location: "Bangalore, India",
    summary:
      "Converted to full-time Software Engineer after a 2-month internship on the Manhattan Active WMS mobile UI team.",
    bullets: [
      "Customized and enhanced the MAWM mobile UI using Java 17, Spring Boot, Groovy DSL and Apache Velocity templates.",
      "Built Jasper Reports and label-generation solutions used across warehouse operations, improving user engagement by 20%.",
      "Earned a full-time return offer and joined as a Software Engineer in September 2022.",
    ],
    metrics: [
      { value: "20%", label: "increase in user engagement" },
      { value: "FTE", label: "return offer earned" },
    ],
    tech: [
      {
        label: "Backend",
        items: ["Java 17", "Spring Boot", "Groovy DSL"],
      },
      {
        label: "Templating",
        items: ["Apache Velocity", "Jasper Reports"],
      },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  category: "Backend" | "Frontend" | "Cloud" | "Full-Stack";
  highlights: string[];
  links?: { github?: string; demo?: string };
};

export const projects: Project[] = [
  {
    title: "Returns Receiving Platform",
    description:
      "Cloud-native platform for Nike warehouse DCs, fault-tolerant, event-driven pipelines achieving 90-second end-to-end unit handling.",
    tags: ["Java 21", "Spring Boot 3", "Kafka", "AWS Lambda", "DynamoDB", "Aurora MySQL"],
    category: "Backend",
    highlights: [
      "Event-driven async pipelines",
      "Fault-tolerant and resilient",
      "Multi-region AWS deployment",
    ],
  },
  {
    title: "Boundless · EMEA Direct-to-DC Returns",
    description:
      "Eliminated third-party reverse-logistics vendor by routing consumer returns directly to the Nike EMEA DC, handling ~9M returned units/year.",
    tags: ["Java 21", "Spring Boot", "Kafka", "AWS", "React"],
    category: "Full-Stack",
    highlights: [
      "~9M returns/year processed",
      "Removed per-unit vendor fees",
      "Compressed returns cycle",
    ],
  },
  {
    title: "Japan DC Go-Live",
    description:
      "Nike's first APAC Returns operation, introduced Family RSO and a new S-Grade disposition workflow across backend services and Zebra UIs.",
    tags: ["Java 21", "Spring Boot", "React Native", "DynamoDB"],
    category: "Full-Stack",
    highlights: [
      "First APAC Returns go-live",
      "New S-Grade disposition flow",
      "Dev-to-production ownership",
    ],
  },
  {
    title: "Scan-Driven Warehouse Apps",
    description:
      "React web app + React Native Android app running on Zebra handheld scanners, guided workflows and one-tap grading.",
    tags: ["React", "React Native", "TypeScript", "Redux", "Zebra SDK"],
    category: "Frontend",
    highlights: [
      "50% fewer operator actions",
      "One-tap grading UX",
      "Offline-first scan workflow",
    ],
  },
  {
    title: "Packstation & ASN Web UIs",
    description:
      "Custom MAWM operator UIs built with Angular 17 and Java 8 on GCP Kubernetes, API-driven customization beyond the base Manhattan product.",
    tags: ["Angular 17", "Java 8", "Spring Boot", "GCP", "Kubernetes"],
    category: "Frontend",
    highlights: [
      "API-driven customization",
      "Jenkins CI/CD pipelines",
      "Kibana observability",
    ],
  },
  {
    title: "Terraform Infrastructure as Code",
    description:
      "Multi-region AWS infrastructure provisioning 15+ resources, ECS, Lambda, Aurora, DynamoDB, SQS, with SSM-based config.",
    tags: ["Terraform", "AWS", "ECS", "Lambda", "SSM"],
    category: "Cloud",
    highlights: [
      "2 days → 20 min provisioning",
      "SSM-based configuration",
      "GitHub Actions CI/CD",
    ],
  },
  {
    title: "Internal Code-Gen Tool",
    description:
      "Scaffolded Spring Boot controllers, service layers and JPA repositories, accelerating team rollouts and reducing boilerplate 25%.",
    tags: ["Java", "Spring Boot", "JPA", "Code Generation"],
    category: "Backend",
    highlights: [
      "25% less boilerplate",
      "Team-wide adoption",
      "Faster production rollouts",
    ],
  },
  {
    title: "Per-Client MAWM Extensions",
    description:
      "Apache Velocity templating, Python 3 extension packs and DSL-based metadata UI, enabling rapid client-specific rollouts without core changes.",
    tags: ["Apache Velocity", "Python 3", "DSL", "Metadata-Driven UI"],
    category: "Full-Stack",
    highlights: [
      "Zero core product changes",
      "Metadata-driven UI config",
      "Rapid per-client rollouts",
    ],
  },
];

export const projectCategories = [
  "All",
  "Backend",
  "Frontend",
  "Cloud",
  "Full-Stack",
] as const;

export type EducationEntry = {
  level: string;
  school: string;
  schoolUrl?: string;
  location: string;
  degree: string;
  period: string;
  score: string;
};

export const education: EducationEntry[] = [
  {
    level: "B.E.",
    school: "Anna University, MIT Campus",
    schoolUrl: "https://www.annauniv.edu/",
    location: "Chennai, Tamil Nadu, India",
    degree: "Electronics and Communication Engineering",
    period: "Aug 2018 – Jun 2022",
    score: "CGPA 8.33 / 10",
  },
  {
    level: "HSC",
    school: "Sri Vidya Mandir Matric Hr. Sec. School",
    location: "Uthangarai, Krishnagiri",
    degree: "",
    period: "2017 – 2018",
    score: "91%",
  },
  {
    level: "SSLC",
    school: "Amrutha Matric Hr. Sec. School",
    location: "Kambainallur, Dharmapuri",
    degree: "",
    period: "2015 – 2016",
    score: "97.6%",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  credential?: string;
  url?: string;
  courses?: { name: string; date: string; credits: string; url?: string }[];
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Nov 2022",
    credential: "1FDXERELYFV4QV9F",
  },
  {
    name: "Ultimate AWS Certified Cloud Practitioner CLF-C02",
    issuer: "Udemy · Stephane Maarek",
    date: "Nov 2023",
    credential: "UC-9937d97b-e074-4190-bc05-65ac9ccad2ae",
    url: "/certificates/Udemy_AWS_Cloud_Practitioner.pdf",
  },
  {
    name: "Python (Basic)",
    issuer: "HackerRank",
    date: "Nov 2022",
    url: "https://www.hackerrank.com/certificates/134d2aab7ac4",
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Nov 2022",
    url: "https://www.hackerrank.com/certificates/ef4961a8fe7d",
  },
  {
    name: "Splunk Core Fundamentals",
    issuer: "Splunk",
    date: "Nov 2025",
    courses: [
      {
        name: "Intro to Splunk",
        date: "25 Nov 2025",
        credits: "1 hr",
        url: "/certificates/Intro_to_Splunk.pdf",
      },
      {
        name: "Using Fields",
        date: "26 Nov 2025",
        credits: "1 hr",
        url: "/certificates/Using_Fields.pdf",
      },
      {
        name: "Visualizations",
        date: "26 Nov 2025",
        credits: "1 hr",
        url: "/certificates/Visualizations.pdf",
      },
      {
        name: "Introduction to Dashboards",
        date: "26 Nov 2025",
        credits: "1 hr",
        url: "/certificates/Introduction_to_Dashboards.pdf",
      },
      {
        name: "Scheduling Reports & Alerts",
        date: "26 Nov 2025",
        credits: "3 hrs",
        url: "/certificates/Scheduling_Reports___Alerts.pdf",
      },
    ],
  },
];

export const blogPosts = [
  {
    slug: "building-event-driven-pipelines-aws",
    title: "Building Resilient Event-Driven Pipelines on AWS",
    excerpt:
      "Lessons from designing a Kafka · SQS · Lambda pipeline that handles millions of warehouse events daily.",
    date: "2026-09-14",
    readTime: "8 min read",
    tags: ["AWS", "Kafka", "Event-Driven"],
  },
  {
    slug: "spring-boot-3-performance-tips",
    title: "5 Spring Boot 3 Performance Wins I've Shipped",
    excerpt:
      "From virtual threads to GraalVM, concrete optimizations that cut latency 50% in production.",
    date: "2026-07-02",
    readTime: "6 min read",
    tags: ["Java", "Spring Boot", "Performance"],
  },
  {
    slug: "terraform-at-scale",
    title: "Terraform Patterns for Multi-Region AWS",
    excerpt:
      "How we provision 15+ AWS resources across 2 regions in 20 minutes using Terraform and SSM.",
    date: "2026-05-18",
    readTime: "10 min read",
    tags: ["Terraform", "AWS", "IaC"],
  },
];
