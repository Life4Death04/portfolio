export type ProjectAction = "code" | "project";

export type ProjectRecord = {
  key: "productCatalog" | "ecommerce" | "inventoryManagement";
  technologies: readonly string[];
  additionalTechnologies: number;
  actions: readonly ProjectAction[];
  codeUrl?: string;
  projectUrl?: string;
};

export const PROJECTS: readonly ProjectRecord[] = [
  {
    key: "productCatalog",
    technologies: ["React.js", "Node.js", "TypeScript"],
    additionalTechnologies: 3,
    actions: ["code", "project"],
    codeUrl: "https://github.com/Life4Death04/autoparts-rausseo",
  },
  {
    key: "ecommerce",
    technologies: ["React.js", "Express.js", "Node.js"],
    additionalTechnologies: 2,
    actions: ["code", "project"],
    codeUrl: "https://github.com/Life4Death04/mercado-artesanal-tesis",
  },
  {
    key: "inventoryManagement",
    technologies: ["React.js", "Node.js", "Socket.io"],
    additionalTechnologies: 2,
    actions: ["code", "project"],
    codeUrl: "https://github.com/Life4Death04/sistema-inventario-frontend",
  },
] as const;
