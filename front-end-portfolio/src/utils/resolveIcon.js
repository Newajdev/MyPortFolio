import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
import * as HiIcons from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";

const iconLibraries = [Fa6Icons, FaIcons, SiIcons, BsIcons, MdIcons, TbIcons, HiIcons];

export const resolveIcon = (iconName) => {
  if (!iconName) return FaGlobe;

  for (const lib of iconLibraries) {
    if (lib[iconName]) return lib[iconName];
  }

  return FaGlobe;
};

export const socialIconMap = {
  github: FaIcons.FaGithub,
  linkedin: FaIcons.FaLinkedin,
  facebook: FaIcons.FaFacebook,
  twitter: BsIcons.BsTwitterX,
  instagram: FaIcons.FaInstagram,
  youtube: FaIcons.FaYoutube,
  whatsapp: FaIcons.FaWhatsapp,
  dribbble: FaIcons.FaDribbble,
  behance: FaIcons.FaBehance,
};

export const getSocialIcon = (platform) =>
  socialIconMap[platform?.toLowerCase()] || FaGlobe;

export const iconCatalog = [
  { id: "FaReact", label: "React", group: "Frontend", keywords: ["react"] },
  { id: "SiNextdotjs", label: "Next.js", group: "Frontend", keywords: ["next.js", "nextjs", "next"] },
  { id: "SiTypescript", label: "TypeScript", group: "Frontend", keywords: ["typescript", "ts"] },
  { id: "SiTailwindcss", label: "Tailwind", group: "Frontend", keywords: ["tailwind", "tailwindcss"] },
  { id: "SiJavascript", label: "JavaScript", group: "Frontend", keywords: ["javascript", "js"] },
  { id: "SiHtml5", label: "HTML5", group: "Frontend", keywords: ["html", "html5"] },
  { id: "SiCss3", label: "CSS3", group: "Frontend", keywords: ["css", "css3"] },
  { id: "SiVuedotjs", label: "Vue.js", group: "Frontend", keywords: ["vue", "vuejs"] },
  { id: "SiAngular", label: "Angular", group: "Frontend", keywords: ["angular"] },
  { id: "SiSvelte", label: "Svelte", group: "Frontend", keywords: ["svelte"] },
  { id: "SiFramer", label: "Framer Motion", group: "Frontend", keywords: ["framer", "motion"] },
  { id: "SiRedux", label: "Redux", group: "Frontend", keywords: ["redux"] },
  { id: "FaNodeJs", label: "Node.js", group: "Backend", keywords: ["node", "nodejs", "node.js"] },
  { id: "SiExpress", label: "Express", group: "Backend", keywords: ["express"] },
  { id: "SiNestjs", label: "NestJS", group: "Backend", keywords: ["nestjs", "nest"] },
  { id: "FaPython", label: "Python", group: "Backend", keywords: ["python"] },
  { id: "SiDjango", label: "Django", group: "Backend", keywords: ["django"] },
  { id: "SiFastapi", label: "FastAPI", group: "Backend", keywords: ["fastapi"] },
  { id: "SiPostgresql", label: "PostgreSQL", group: "Backend", keywords: ["postgresql", "postgres", "psql"] },
  { id: "SiMongodb", label: "MongoDB", group: "Backend", keywords: ["mongodb", "mongo"] },
  { id: "SiMysql", label: "MySQL", group: "Backend", keywords: ["mysql"] },
  { id: "SiPrisma", label: "Prisma", group: "Backend", keywords: ["prisma"] },
  { id: "SiRedis", label: "Redis", group: "Backend", keywords: ["redis"] },
  { id: "SiGraphql", label: "GraphQL", group: "Backend", keywords: ["graphql"] },
  { id: "FaDocker", label: "Docker", group: "DevOps", keywords: ["docker"] },
  { id: "SiKubernetes", label: "Kubernetes", group: "DevOps", keywords: ["kubernetes", "k8s"] },
  { id: "SiAmazonaws", label: "AWS", group: "DevOps", keywords: ["aws", "amazon"] },
  { id: "SiGooglecloud", label: "Google Cloud", group: "DevOps", keywords: ["gcp", "google cloud"] },
  { id: "SiVercel", label: "Vercel", group: "DevOps", keywords: ["vercel"] },
  { id: "SiNetlify", label: "Netlify", group: "DevOps", keywords: ["netlify"] },
  { id: "SiRailway", label: "Railway", group: "DevOps", keywords: ["railway"] },
  { id: "SiCloudflare", label: "Cloudflare", group: "DevOps", keywords: ["cloudflare"] },
  { id: "SiGithubactions", label: "GitHub Actions", group: "DevOps", keywords: ["github actions", "ci/cd", "cicd"] },
  { id: "FaGitAlt", label: "Git", group: "DevOps", keywords: ["git"] },
  { id: "FaGithub", label: "GitHub", group: "DevOps", keywords: ["github"] },
  { id: "SiFirebase", label: "Firebase", group: "DevOps", keywords: ["firebase"] },
  { id: "SiOpenai", label: "OpenAI", group: "AI", keywords: ["openai", "gpt", "ai"] },
  { id: "SiTensorflow", label: "TensorFlow", group: "AI", keywords: ["tensorflow"] },
  { id: "SiPytorch", label: "PyTorch", group: "AI", keywords: ["pytorch"] },
  { id: "FaLaptopCode", label: "Frontend Dev", group: "General", keywords: ["frontend", "web"] },
  { id: "FaServer", label: "Backend Dev", group: "General", keywords: ["backend", "api"] },
  { id: "FaCloud", label: "Cloud", group: "General", keywords: ["cloud", "devops"] },
  { id: "FaDatabase", label: "Database", group: "General", keywords: ["database", "db"] },
  { id: "FaMobile", label: "Mobile", group: "General", keywords: ["mobile", "app"] },
  { id: "FaTools", label: "Tools", group: "General", keywords: ["tools"] },
  { id: "FaCode", label: "Code", group: "General", keywords: ["code", "programming"] },
  { id: "MdSecurity", label: "Security", group: "General", keywords: ["security", "auth"] },
  { id: "FaGlobe", label: "Web", group: "General", keywords: ["web", "internet"] },
];

export const categoryIconPresets = [
  { id: "FaLaptopCode", label: "Frontend" },
  { id: "FaServer", label: "Backend" },
  { id: "FaCloud", label: "Cloud / DevOps" },
  { id: "FaDatabase", label: "Database" },
  { id: "FaMobile", label: "Mobile" },
  { id: "FaBrain", label: "AI / ML" },
];

export const iconGroups = ["All", "Frontend", "Backend", "DevOps", "AI", "General"];

export const suggestIconForSkill = (name) => {
  if (!name?.trim()) return "";

  const normalized = name.toLowerCase().trim();

  const exact = iconCatalog.find(
    (item) =>
      item.label.toLowerCase() === normalized ||
      item.keywords.some((keyword) => keyword === normalized)
  );
  if (exact) return exact.id;

  const partial = iconCatalog.find((item) =>
    item.keywords.some(
      (keyword) => normalized.includes(keyword) || keyword.includes(normalized)
    )
  );
  return partial?.id ?? "";
};

export const iconSuggestions = iconCatalog.map((item) => item.id);

export const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
