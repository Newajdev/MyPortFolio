import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const siteSettings = {
  name: "Md Shale Newaj",
  brand: "Newaj",
  role: "Full Stack SaaS & AI Engineer",
  tagline: "Building scalable digital products that transform ideas into real business systems.",
  email: "newaj.gra@gmail.com",
  phone: "+880 1XXX-XXXXXX",
  whatsapp: "https://wa.me/8801XXXXXXXXX",
  resumeUrl: "/resume.pdf",
  heroVideoId: "ScMzIvxBSi4",
  seo: {
    title: "Md Shale Newaj | Full Stack SaaS & AI Engineer",
    description:
      "Premium portfolio of Md Shale Newaj — Full Stack Developer specializing in SaaS platforms, AI integrations, and scalable backend architecture.",
  },
};

const navLinks = [
  { label: "Home", href: "/#home", sortOrder: 0 },
  { label: "About", href: "/about", sortOrder: 1 },
  { label: "Skills", href: "/#skills", sortOrder: 2 },
  { label: "Projects", href: "/#projects", sortOrder: 3 },
  { label: "Services", href: "/#services", sortOrder: 4 },
  { label: "Workflow", href: "/#workflow", sortOrder: 5 },
  { label: "Contact", href: "/#contact", sortOrder: 6 },
];

const socialLinks = [
  { platform: "github", url: "https://github.com/Newajdev", label: "GitHub", sortOrder: 0 },
  { platform: "linkedin", url: "https://www.linkedin.com/in/muhammad-newaj", label: "LinkedIn", sortOrder: 1 },
  { platform: "facebook", url: "https://www.facebook.com/muhammadshalenewaj", label: "Facebook", sortOrder: 2 },
  { platform: "twitter", url: "https://x.com/ms_newaj", label: "X", sortOrder: 3 },
  { platform: "instagram", url: "https://www.instagram.com/_mdnewaj_", label: "Instagram", sortOrder: 4 },
];

const heroContent = {
  greeting: "Hello, I'm",
  headline: "I engineer production-grade SaaS & AI products.",
  positioning:
    "Full Stack SaaS Engineer specializing in AI-powered products, scalable backend architecture, and high-performance web applications.",
  ctas: [
    { label: "View Projects", href: "/#projects", variant: "primary" },
    { label: "Book Consultation", href: "/#contact", variant: "secondary" },
  ],
};

const aboutPreview = {
  title: "About Me",
  shortIntro:
    "I am a Full Stack Developer and SaaS-focused Product Engineer from Bangladesh, specializing in scalable web applications, AI-powered systems, and modern digital products.",
  highlights: [
    "Production-ready SaaS architecture",
    "AI integration & automation workflows",
    "End-to-end product engineering",
  ],
};

const aboutFull = {
  intro: `I am Md Shale Newaj, a Full Stack Developer and SaaS-focused Product Engineer from Bangladesh, specializing in building scalable web applications, AI-powered systems, and modern digital products.

I focus on building production-ready applications that combine strong frontend experiences with scalable backend architecture. My expertise lies in transforming raw ideas into complete digital products—from planning system architecture and designing database schemas to implementing performant user interfaces and secure backend APIs.

Over the years, I have worked extensively with modern JavaScript and TypeScript ecosystems, building end-to-end solutions using Next.js, React, Node.js, Express, PostgreSQL, Prisma, MongoDB, Redis, and cloud deployment platforms.`,
  journey: [
    {
      year: "2021–2022",
      title: "Frontend Foundations",
      description:
        "Built responsive interfaces with HTML, CSS, JavaScript, and React while mastering component-driven UI development.",
    },
    {
      year: "2022–2023",
      title: "Full Stack Expansion",
      description:
        "Moved into Node.js, Express, MongoDB, and REST API development — shipping complete MERN applications end to end.",
    },
    {
      year: "2023–2024",
      title: "SaaS Product Engineering",
      description:
        "Designed multi-feature platforms with authentication, dashboards, payment flows, and scalable database architecture.",
    },
    {
      year: "2024–Present",
      title: "AI & System Design",
      description:
        "Expanding into AI engineering, microservices, cloud-native deployment, and advanced system design for intelligent products.",
    },
  ],
  philosophy: [
    "Great software is maintainable, scalable, and measurable in business impact.",
    "Architecture decisions should serve product goals, not ego.",
    "Clean engineering and thoughtful UX are equally critical for SaaS success.",
    "Security, performance, and observability belong in the foundation — not as afterthoughts.",
  ],
};

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Premium interfaces with performance-first React ecosystems.",
    icon: "FaLaptopCode",
    technologies: [
      { name: "React", icon: "FaReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Zustand", icon: "SiZustand" },
      { name: "Framer Motion", icon: "SiFramer" },
    ],
    sortOrder: 0,
  },
  {
    id: "backend",
    title: "Backend",
    description: "Secure APIs, data modeling, and scalable service layers.",
    icon: "FaServer",
    technologies: [
      { name: "Node.js", icon: "FaNodeJs" },
      { name: "Express", icon: "SiExpress" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "Prisma", icon: "SiPrisma" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "Redis", icon: "SiRedis" },
    ],
    sortOrder: 1,
  },
  {
    id: "devops",
    title: "DevOps / Cloud",
    description: "Reliable delivery pipelines and cloud-native deployments.",
    icon: "FaCloud",
    technologies: [
      { name: "Docker", icon: "FaDocker" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "Railway", icon: "SiRailway" },
      { name: "Cloudflare", icon: "SiCloudflare" },
      { name: "CI/CD", icon: "FaGitAlt" },
      { name: "GitHub Actions", icon: "SiGithubactions" },
    ],
    sortOrder: 2,
  },
];

const skillsSection = {
  eyebrow: "Skills",
  title: "Technologies I work with",
  description: "Explore my core capabilities across frontend, backend, and cloud-native delivery.",
};

const services = [
  {
    id: "saas-mvp",
    title: "SaaS MVP Development",
    summary: "Launch validated products fast with scalable foundations.",
    description:
      "End-to-end MVP development from idea validation to production launch — including auth, billing-ready architecture, admin panels, and deployment.",
    problems: ["Slow time-to-market", "Unclear product scope", "Non-scalable prototypes"],
    role: "Product engineer owning architecture, development, and launch strategy.",
    sortOrder: 0,
  },
  {
    id: "fullstack",
    title: "Full Stack Web Development",
    summary: "Complete web applications with polished UX and robust APIs.",
    description:
      "Design and build responsive, high-performance applications with modern frontend stacks and secure backend services.",
    problems: ["Fragmented delivery", "Poor UX-performance balance", "Unmaintainable codebases"],
    role: "Lead developer across frontend, backend, and integration layers.",
    sortOrder: 1,
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    summary: "Embed intelligent features into existing or new products.",
    description:
      "Integrate LLM workflows, automation pipelines, and AI-assisted UX into SaaS platforms with guardrails and observability.",
    problems: ["Manual workflows", "Low product differentiation", "Unstructured AI adoption"],
    role: "AI feature architect and integration engineer.",
    sortOrder: 2,
  },
  {
    id: "dashboard",
    title: "Dashboard Engineering",
    summary: "Data-rich admin experiences for operators and teams.",
    description:
      "Build analytics dashboards, admin CMS panels, role-based access systems, and real-time operational interfaces.",
    problems: ["Poor internal tooling", "Data visibility gaps", "Manual operations overhead"],
    role: "Dashboard UX engineer and backend integrator.",
    sortOrder: 3,
  },
  {
    id: "api-architecture",
    title: "API Architecture",
    summary: "Design APIs built for scale, security, and clarity.",
    description:
      "RESTful and service-oriented API design with versioning, validation, caching, and documentation standards.",
    problems: ["Brittle integrations", "Performance bottlenecks", "Security gaps"],
    role: "API architect and backend lead.",
    sortOrder: 4,
  },
  {
    id: "database-design",
    title: "Database Design",
    summary: "Schema design optimized for growth and integrity.",
    description:
      "Relational and document database modeling with indexing strategy, migrations, and data lifecycle planning.",
    problems: ["Schema drift", "Query performance issues", "Data inconsistency"],
    role: "Data model architect and optimization engineer.",
    sortOrder: 5,
  },
  {
    id: "system-consulting",
    title: "System Architecture Consulting",
    summary: "Strategic guidance for scalable product systems.",
    description:
      "Architecture reviews, tech stack decisions, scalability planning, and roadmap alignment for SaaS products.",
    problems: ["Scaling uncertainty", "Technical debt", "Misaligned engineering decisions"],
    role: "Consulting engineer and system design advisor.",
    sortOrder: 6,
  },
];

const workflowSteps = [
  { step: 1, title: "Requirement Discovery", description: "Deep dive into goals, users, constraints, and success metrics.", sortOrder: 0 },
  { step: 2, title: "Project Analysis & Planning", description: "Scope definition, milestones, risk mapping, and delivery roadmap.", sortOrder: 1 },
  { step: 3, title: "Product Requirement Documentation", description: "Structured PRD with user flows, acceptance criteria, and priorities.", sortOrder: 2 },
  { step: 4, title: "UI/UX Design", description: "Wireframes, visual systems, and interaction patterns aligned to brand.", sortOrder: 3 },
  { step: 5, title: "Backend Architecture & API Development", description: "Service design, database schema, API contracts, and security model.", sortOrder: 4 },
  { step: 6, title: "Full Product Development", description: "Iterative implementation across frontend, backend, and integrations.", sortOrder: 5 },
  { step: 7, title: "Testing & QA", description: "Functional, regression, and performance validation before release.", sortOrder: 6 },
  { step: 8, title: "Deployment", description: "Production rollout with CI/CD, monitoring, and environment hardening.", sortOrder: 7 },
  { step: 9, title: "Post-launch Support & Continuous Improvement", description: "Analytics-driven iteration, optimization, and feature evolution.", sortOrder: 8 },
];

const valueBanner = {
  statement: "Building scalable digital products that transform ideas into real business systems.",
};

const projects = [
  {
    id: "order-management-platform",
    slug: "order-management-platform",
    name: "Order Management Platform",
    shortDescription: "A React-powered order management system with real-time workflow tracking and scalable UI architecture.",
    thumbnail: "https://i.ibb.co.com/8D1LCQWJ/Screenshot-2025-08-10-163635.png",
    category: "React",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    featured: true,
    liveUrl: "https://recipe-calories-zeta.vercel.app/",
    githubUrl: "https://github.com/Newajdev",
    overview:
      "A production-oriented order management platform designed to streamline operational workflows for food and service businesses.",
    caseStudy:
      "The client needed a centralized system to manage orders, reduce manual errors, and improve operational visibility across teams.",
    problem:
      "Manual order tracking created bottlenecks, inconsistent data, and poor visibility into daily operations.",
    solution:
      "Built a modular React frontend with RESTful APIs, structured data models, and an admin-friendly interface for order lifecycle management.",
    architecture:
      "Client-server architecture with React SPA, Express API layer, MongoDB persistence, and component-based UI modules for scalability.",
    keyFeatures: [
      "Order creation and status tracking",
      "Category-based menu management",
      "Responsive admin-friendly interface",
      "API-driven data layer",
      "Performance-optimized component rendering",
    ],
    challenges: [
      "Designing flexible order states without over-complicating UX",
      "Maintaining responsive performance on low-end devices",
      "Structuring API contracts for future dashboard expansion",
    ],
    results: [
      "Reduced manual order handling overhead",
      "Improved operational clarity for daily workflows",
      "Created a foundation for future analytics modules",
    ],
    gallery: [
      "https://i.ibb.co.com/8D1LCQWJ/Screenshot-2025-08-10-163635.png",
      "https://i.ibb.co.com/1YCszfY2/Screenshot-2025-08-10-164441.png",
      "https://i.ibb.co.com/23PZvZzT/Screenshot-2025-08-10-160834.png",
      "https://i.ibb.co.com/qFyTwVdc/Screenshot-2025-08-10-155953.png",
      "https://i.ibb.co.com/HDwC0tx3/Screenshot-2025-08-10-155315.png",
    ],
    sortOrder: 0,
  },
  {
    id: "bistro-restaurant-platform",
    slug: "bistro-restaurant-platform",
    name: "Bistro Restaurant Platform",
    shortDescription: "Full-stack restaurant web platform with menu browsing, ordering flows, and Firebase-backed deployment.",
    thumbnail: "https://i.ibb.co.com/1YCszfY2/Screenshot-2025-08-10-164441.png",
    category: "React",
    techStack: ["React", "Firebase", "Tailwind CSS", "REST APIs"],
    featured: true,
    liveUrl: "https://bistro-resturent-1003c.web.app",
    githubUrl: "https://github.com/Newajdev",
    overview:
      "A modern restaurant experience platform combining brand-forward UI with practical ordering and menu discovery features.",
    caseStudy:
      "Designed to help a restaurant business present its offerings professionally while supporting digital customer engagement.",
    problem:
      "The business lacked a modern digital presence and needed a scalable platform for menu presentation and customer interaction.",
    solution:
      "Delivered a responsive React application with structured content sections, optimized assets, and cloud deployment.",
    architecture:
      "SPA frontend with Firebase hosting, modular page architecture, reusable UI components, and content-driven layout system.",
    keyFeatures: [
      "Menu and category presentation",
      "Responsive multi-device layout",
      "Brand-focused visual design",
      "Fast cloud deployment pipeline",
      "Component-based maintainability",
    ],
    challenges: [
      "Balancing visual richness with load performance",
      "Designing reusable layout patterns for future menu updates",
      "Ensuring consistent UX across mobile and desktop",
    ],
    results: [
      "Professional digital brand presence",
      "Improved customer engagement touchpoints",
      "Maintainable codebase for future feature growth",
    ],
    gallery: [
      "https://i.ibb.co.com/1YCszfY2/Screenshot-2025-08-10-164441.png",
      "https://i.ibb.co.com/8D1LCQWJ/Screenshot-2025-08-10-163635.png",
      "https://i.ibb.co.com/qFyTwVdc/Screenshot-2025-08-10-155953.png",
      "https://i.ibb.co.com/RTfqK8Ty/Screenshot-2025-08-10-154016.png",
      "https://i.ibb.co.com/9khVkCFx/Screenshot-2025-08-10-154341.png",
    ],
    sortOrder: 1,
  },
  {
    id: "innovate-it-corporate-site",
    slug: "innovate-it-corporate-site",
    name: "Innovate IT Corporate Site",
    shortDescription: "Corporate technology website with structured information architecture and conversion-focused layout.",
    thumbnail: "https://i.ibb.co.com/23PZvZzT/Screenshot-2025-08-10-160834.png",
    category: "Html & CSS",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    featured: true,
    liveUrl: "https://newajdev.github.io/citfirstproject",
    githubUrl: "https://github.com/Newajdev",
    overview:
      "A corporate website project focused on clear service presentation, trust-building layout, and professional visual hierarchy.",
    caseStudy:
      "Built as an early product-style website emphasizing business credibility and structured content delivery.",
    problem:
      "Needed a professional web presence that communicates services clearly and builds trust with potential clients.",
    solution:
      "Implemented semantic HTML structure, responsive CSS systems, and conversion-oriented section flow.",
    architecture:
      "Static site architecture with modular sections, reusable layout primitives, and mobile-first responsive strategy.",
    keyFeatures: [
      "Service-focused content sections",
      "Responsive layout system",
      "Clean visual hierarchy",
      "Fast-loading static architecture",
      "Maintainable section-based structure",
    ],
    challenges: [
      "Creating premium feel within static site constraints",
      "Ensuring cross-browser consistency",
      "Structuring content for future CMS migration",
    ],
    results: [
      "Clear professional positioning",
      "Strong foundation for brand storytelling",
      "Easy-to-extend section architecture",
    ],
    gallery: [
      "https://i.ibb.co.com/23PZvZzT/Screenshot-2025-08-10-160834.png",
      "https://i.ibb.co.com/QFBgnSsw/Screenshot-2025-08-10-153852.png",
      "https://i.ibb.co.com/RTfqK8Ty/Screenshot-2025-08-10-154016.png",
      "https://i.ibb.co.com/B5h09ZSZ/Screenshot-2025-08-10-161425.png",
      "https://i.ibb.co.com/sDgJQwp/Screenshot-2025-08-10-161839.png",
    ],
    sortOrder: 2,
  },
];

async function main() {
  console.log("Seeding database...");

  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: siteSettings,
    create: { id: "default", ...siteSettings },
  });

  await prisma.heroContent.upsert({
    where: { id: "default" },
    update: heroContent,
    create: { id: "default", ...heroContent },
  });

  await prisma.aboutContent.upsert({
    where: { id: "default" },
    update: { preview: aboutPreview, full: aboutFull },
    create: { id: "default", preview: aboutPreview, full: aboutFull },
  });

  await prisma.valueBanner.upsert({
    where: { id: "default" },
    update: valueBanner,
    create: { id: "default", ...valueBanner },
  });

  await prisma.skillsSection.upsert({
    where: { id: "default" },
    update: skillsSection,
    create: { id: "default", ...skillsSection },
  });

  await prisma.navLink.deleteMany();
  await prisma.navLink.createMany({ data: navLinks });

  await prisma.socialLink.deleteMany();
  await prisma.socialLink.createMany({ data: socialLinks });

  for (const skill of skillCategories) {
    await prisma.skillCategory.upsert({
      where: { id: skill.id },
      update: skill,
      create: skill,
    });
  }

  for (const service of services) {
    await prisma.service.upsert({
      where: { id: service.id },
      update: service,
      create: service,
    });
  }

  await prisma.workflowStep.deleteMany();
  await prisma.workflowStep.createMany({ data: workflowSteps });

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: project,
      create: project,
    });
  }

  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
