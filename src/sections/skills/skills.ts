import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiReactquery,
  SiRedux,
  SiNextdotjs,
  SiReacthookform,
  SiVite,
  SiTailwindcss,
  SiMui,
  SiVitest,
  SiAuth0,
  SiStripe,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiPostman,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

export interface TechBadge {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillGroup {
  key: string;
  primary: TechBadge[];
  secondary: string[];
  secondaryI18nKey?: string;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    key: "frontend",
    primary: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
      { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
      { name: "Next.js", icon: SiNextdotjs, color: "#E6E6E6" },
      { name: "React Hook Form", icon: SiReacthookform, color: "#EC5990" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "MUI Components", icon: SiMui, color: "#007FFF" },
    ],
    secondary: ["Zustand", "Zod", "TanStack Start", "Motion"],
  },
  {
    key: "backendAndData",
    primary: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#A0A0A0" },
      { name: "Prisma ORM", icon: SiPrisma, color: "#5B4FD0" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    ],
    secondary: ["JWT Authentication", "OAuth 2.0", "REST APIs"],
  },
  {
    key: "toolsAndDelivery",
    primary: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#E6E6E6" },
      { name: "GitHub Actions (CI)", icon: SiGithubactions, color: "#2088FF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "AWS (S3, EC2, SES)", icon: FaAws, color: "#FF9900" },
    ],
    secondary: ["CI/CD Pipelines"],
  },
  {
    key: "testingAndIntegration",
    primary: [
      { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
      { name: "Auth0", icon: SiAuth0, color: "#EB5424" },
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
    ],
    secondary: [
      "Playwright",
      "React Testing Library",
      "REST APIs",
      "Axios",
      "Better Auth",
    ],
  },
  {
    key: "developmentApproach",
    primary: [],
    secondary: [],
    secondaryI18nKey: "skills.groups.developmentApproach.items",
  },
];
