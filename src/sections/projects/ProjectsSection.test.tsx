import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { i18n } from "../../i18n";
import { PROJECTS } from "./projects";
import { ProjectsSection } from "./ProjectsSection";

const EXPECTED_PROJECTS = [
  {
    title: "E-commerce Platform with Stripe",
    technologies: ["React.js", "Node.js", "TypeScript", "+3 more"],
    actions: ["View code", "View project"],
  },
  {
    title: "Dynamic Content Blog",
    technologies: ["React.js", "Express.js", "Node.js", "+2 more"],
    actions: ["View code", "View project"],
  },
  {
    title: "Task Management App",
    technologies: ["React.js", "Node.js", "Socket.io", "+2 more"],
    actions: ["View code", "View project"],
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

  it("preserves technology order and honest disabled action availability", () => {
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
      expect(
        within(project)
          .getAllByRole("button")
          .map((button) => button.getAttribute("aria-label")),
      ).toEqual(expected.actions);
      within(project)
        .getAllByRole("button")
        .forEach((button) => expect(button).toBeDisabled());
    });
  });

  it("uses localized media labels without fake links or unsupported metrics", () => {
    render(<ProjectsSection />);

    const section = screen.getByRole("region", { name: "My Projects" });

    EXPECTED_PROJECTS.forEach(({ title }) => {
      expect(
        within(section).getByRole("img", {
          name: `Decorative case-study plate for ${title}`,
        }),
      ).toBeInTheDocument();
    });
    expect(within(section).queryByRole("link")).not.toBeInTheDocument();
    expect(within(section).queryByRole("progressbar")).not.toBeInTheDocument();
    expect(
      within(section).queryByText(/Lighthouse|%/i),
    ).not.toBeInTheDocument();
  });

  it("renders three distinct decorative case-study plates", () => {
    const { container } = render(<ProjectsSection />);
    const visuals = Array.from(
      container.querySelectorAll("[data-project-visual]"),
    );

    expect(
      visuals.map((visual) => visual.getAttribute("data-project-visual")),
    ).toEqual(["ecommerce", "blog", "tasks"]);
    visuals.forEach((visual) =>
      expect(visual).toHaveAttribute("aria-hidden", "true"),
    );
  });

  it("renders professional neutral Spanish while preserving technology names", async () => {
    await i18n.changeLanguage("es");
    render(<ProjectsSection />);

    const section = screen.getByRole("region", { name: "Mis proyectos" });

    expect(
      within(section).getByRole("heading", {
        name: "Plataforma de comercio electrónico con Stripe",
      }),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("img", {
        name: "Lámina decorativa del proyecto Plataforma de comercio electrónico con Stripe",
      }),
    ).toBeInTheDocument();
    expect(within(section).getAllByText("React.js")).toHaveLength(3);
    expect(
      within(section).getAllByRole("button", { name: "Ver código" }),
    ).toHaveLength(3);
    const projectActions = within(section).getAllByRole("button", {
      name: "Ver proyecto",
    });
    expect(projectActions).toHaveLength(3);
    projectActions.forEach((action) => expect(action).toBeDisabled());
  });
});
