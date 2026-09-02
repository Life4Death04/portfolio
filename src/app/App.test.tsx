import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { i18n } from "../i18n";
import { App } from "./App";

describe("App", () => {
  it("renders the Home content and every metric", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Santiago RodríguezFrontend developer",
    );
    expect(screen.getByText(/React and TypeScript/)).toBeInTheDocument();
    expect(screen.getByText("Years shipping")).toBeInTheDocument();
    expect(screen.getByText("Interfaces built")).toBeInTheDocument();
    expect(screen.getByText("Avg. Lighthouse")).toBeInTheDocument();
    expect(screen.getByText("Remote worldwide")).toBeInTheDocument();
  });

  it("composes Home, Skills, Projects, and About in immediate order", () => {
    render(<App />);

    const sections = within(screen.getByRole("main")).getAllByRole("region");

    expect(sections).toHaveLength(4);
    expect(sections[0]).toHaveAttribute("id", "home");
    expect(sections[1]).toHaveAttribute("id", "skills");
    expect(sections[2]).toHaveAttribute("id", "projects");
    expect(sections[3]).toHaveAttribute("id", "about");
    expect(sections[2].nextElementSibling).toBe(sections[3]);
  });

  it("renders Home in Spanish without relying on navigator language", async () => {
    await i18n.changeLanguage("es");
    render(<App />);

    expect(screen.getByText("Desarrollador frontend")).toBeInTheDocument();
    expect(screen.getByText("Interfaces creadas")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Habilidades técnicas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Mis proyectos" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Acerca de mí" }),
    ).toBeInTheDocument();
  });
});
