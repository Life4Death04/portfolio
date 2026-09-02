export type ProjectAction = "code" | "project";

export type ProjectRecord = {
  key: "ecommerce" | "blog" | "tasks";
  number: string;
  technologies: readonly string[];
  additionalTechnologies: number;
  actions: readonly ProjectAction[];
  codeUrl?: string;
  projectUrl?: string;
};

export const PROJECTS: readonly ProjectRecord[] = [
  {
    key: "ecommerce",
    number: "01",
    technologies: ["React.js", "Node.js", "TypeScript"],
    additionalTechnologies: 3,
    actions: ["code", "project"],
  },
  {
    key: "blog",
    number: "02",
    technologies: ["React.js", "Express.js", "Node.js"],
    additionalTechnologies: 2,
    actions: ["code", "project"],
  },
  {
    key: "tasks",
    number: "03",
    technologies: ["React.js", "Node.js", "Socket.io"],
    additionalTechnologies: 2,
    actions: ["code", "project"],
  },
] as const;
