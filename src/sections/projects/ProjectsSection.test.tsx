import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { i18n } from "../../i18n";
import { PROJECTS } from "./projects";
import { ProjectsSection } from "./ProjectsSection";

const EXPECTED_PROJECTS = [
  {
    title: "Autoparts Rausseo",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Start",
      "Prisma",
      "+5 more",
    ],
    actions: ["View project"],
  },
  {
    title: "Pharmacy Inventory Management",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "+5 more"],
    actions: ["Live demo"],
  },
  {
    title: "Artisanal Food Marketplace",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "+5 more"],
    actions: ["View code", "Live demo"],
  },
] as const;

describe("ProjectsSection", () => {
  it("renders the named section and exact three-record DOM order", () => {
    render(<ProjectsSection />);

    const section = screen.getByRole("region", { name: "My Projects" });
    const projects = within(section).getAllByRole("article");

    expect(PROJECTS).toHaveLength(3);
    expect(projects).toHaveLength(3);
    expect(
      projects.map(
        (project) => within(project).getByRole("heading").textContent,
      ),
    ).toEqual(EXPECTED_PROJECTS.map((project) => project.title));
  });

  it("preserves technology order and reflects action availability", () => {
    render(<ProjectsSection />);

    const section = screen.getByRole("region", { name: "My Projects" });
    const projects = within(section).getAllByRole("article");

    EXPECTED_PROJECTS.forEach((expected, index) => {
      const project = projects[index];
      const technologies = within(project).getByRole("list", {
        name: `Technologies used in ${expected.title}`,
      });

      expect(
        within(technologies)
          .getAllByRole("listitem")
          .map((item) => item.textContent),
      ).toEqual(expected.technologies);

      const demoLabel = (expected.actions as readonly string[]).includes(
        "Live demo",
      )
        ? "Live demo"
        : "View project";
      const demoAction = within(project).getByRole("link", {
        name: demoLabel,
      });
      expect(demoAction).toHaveAttribute("href", PROJECTS[index].projectUrl);
      expect(demoAction).toHaveAttribute("target", "_blank");
      expect(demoAction).toHaveAttribute("rel", "noopener noreferrer");

      if ((expected.actions as readonly string[]).includes("View code")) {
        const code = within(project).getByRole("link", { name: "View code" });
        expect(code).toHaveAttribute("href", PROJECTS[index].codeUrl);
        expect(code).toHaveAttribute("target", "_blank");
        expect(code).toHaveAttribute("rel", "noopener noreferrer");
      } else {
        expect(
          within(project).queryByRole("link", { name: "View code" }),
        ).not.toBeInTheDocument();
      }
    });
  });

  it("uses localized media labels without unsupported metrics", () => {
    render(<ProjectsSection />);

    const section = screen.getByRole("region", { name: "My Projects" });

    EXPECTED_PROJECTS.forEach(({ title }) => {
      expect(
        within(section).getByRole("img", {
          name: `Screenshot of ${title}`,
        }),
      ).toBeInTheDocument();
    });
    expect(
      within(section).getAllByRole("link", { name: "View code" }),
    ).toHaveLength(1);
    expect(
      within(section).getAllByRole("link", { name: "Live demo" }),
    ).toHaveLength(2);
    expect(
      within(section).getAllByRole("link", { name: "View project" }),
    ).toHaveLength(1);
    expect(within(section).queryByRole("progressbar")).not.toBeInTheDocument();
    expect(
      within(section).queryByText(/Lighthouse|%/i),
    ).not.toBeInTheDocument();
  });

  it("renders each project screenshot in DOM order with the matching image source", () => {
    render(<ProjectsSection />);

    const section = screen.getByRole("region", { name: "My Projects" });
    const images = within(section).getAllByRole("img");

    expect(images).toHaveLength(3);
    images.forEach((image, index) => {
      expect(image).toHaveAttribute("src", PROJECTS[index].image);
    });
  });

  it("renders professional neutral Spanish while preserving technology names", async () => {
    await i18n.changeLanguage("es");
    render(<ProjectsSection />);

    const section = screen.getByRole("region", { name: "Mis proyectos" });

    expect(
      within(section).getByRole("heading", {
        name: "Autopartes Rausseo",
      }),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("img", {
        name: "Captura de pantalla de Autopartes Rausseo",
      }),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", {
        name: "Gestión de Inventario Farmacéutico",
      }),
    ).toBeInTheDocument();
    expect(within(section).getAllByText("React")).toHaveLength(3);
    expect(
      within(section).getAllByRole("link", { name: "Ver código" }),
    ).toHaveLength(1);
    expect(
      within(section).getAllByRole("link", { name: "Demo en vivo" }),
    ).toHaveLength(2);
    expect(
      within(section).getAllByRole("link", { name: "Ver proyecto" }),
    ).toHaveLength(1);
  });
});
