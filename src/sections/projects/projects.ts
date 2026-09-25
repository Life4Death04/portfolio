export type ProjectAction = "code" | "project" | "demo";

export type ProjectRecord = {
  key: "productCatalog" | "ecommerce" | "inventoryManagement";
  technologies: readonly string[];
  additionalTechnologies: number;
  actions: readonly ProjectAction[];
  image: string;
  codeUrl?: string;
  projectUrl?: string;
};

export const PROJECTS: readonly ProjectRecord[] = [
  {
    key: "productCatalog",
    technologies: ["React", "TypeScript", "TanStack Start", "Prisma"],
    additionalTechnologies: 5,
    actions: ["project"],
    image: "/images/projects/AutopartsRausseo.png",
    codeUrl: "https://github.com/Life4Death04/autoparts-rausseo",
    projectUrl: "https://autoparts-rausseo-production-ed95.up.railway.app/",
  },
  {
    key: "inventoryManagement",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
    additionalTechnologies: 5,
    actions: ["demo"],
    image: "/images/projects/PharmacyInventoryManagement.png",
    codeUrl: "https://github.com/Life4Death04/sistema-inventario-frontend",
    projectUrl:
      "https://sistema-inventario-frontend-production.up.railway.app/productos",
  },
  {
    key: "ecommerce",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
    additionalTechnologies: 5,
    actions: ["code", "demo"],
    image: "/images/projects/ArtisanalFoodMarketplace.png",
    codeUrl: "https://github.com/Life4Death04/mercado-artesanal-tesis",
    projectUrl: "https://mercado-artesanal-tesis-production.up.railway.app/",
  },
] as const;
