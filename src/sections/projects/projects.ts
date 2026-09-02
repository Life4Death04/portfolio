export type ProjectAction = "code" | "project";

export type ProjectRecord = {
  key: "ecommerce" | "blog" | "tasks";
  technologies: readonly string[];
  additionalTechnologies: number;
  actions: readonly ProjectAction[];
  codeUrl?: string;
  projectUrl?: string;
};

export const PROJECTS: readonly ProjectRecord[] = [
  {
    key: "ecommerce",
    technologies: ["React.js", "Node.js", "TypeScript"],
    additionalTechnologies: 3,
    actions: ["code", "project"],
  },
  {
    key: "blog",
    technologies: ["React.js", "Express.js", "Node.js"],
    additionalTechnologies: 2,
    actions: ["code", "project"],
  },
  {
    key: "tasks",
    technologies: ["React.js", "Node.js", "Socket.io"],
    additionalTechnologies: 2,
    actions: ["code", "project"],
  },
] as const;
