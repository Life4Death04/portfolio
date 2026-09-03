import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "../config/site";
import { LANGUAGE_STORAGE_KEY } from "../i18n";
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

    const portrait = screen.getByRole("img", {
      name: "Santiago Rodríguez wearing a black suit and tie",
    });

    expect(portrait).toHaveAttribute("src", SITE_CONFIG.images.portrait);
    expect(portrait).toHaveAttribute("width", "795");
    expect(portrait).toHaveAttribute("height", "825");
    expect(portrait).toHaveAttribute("loading", "eager");
    expect(portrait).toHaveAttribute("fetchpriority", "high");
    expect(portrait).toHaveAttribute("decoding", "async");
  });

  it("composes Home, Skills, Projects, About, and Contact in immediate order", () => {
    render(<App />);

    const sections = within(screen.getByRole("main")).getAllByRole("region");

    expect(sections).toHaveLength(5);
    expect(sections[0]).toHaveAttribute("id", "home");
    expect(sections[1]).toHaveAttribute("id", "skills");
    expect(sections[2]).toHaveAttribute("id", "projects");
    expect(sections[3]).toHaveAttribute("id", "about");
    expect(sections[4]).toHaveAttribute("id", "contact");
    expect(sections[2].nextElementSibling).toBe(sections[3]);
    expect(sections[3].nextElementSibling).toBe(sections[4]);
  });

  it("switches the entire localized site to Spanish and retains the choice", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: "Switch to Spanish" }));

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
    expect(
      screen.getByRole("heading", { name: "Ponte en contacto" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Santiago Rodríguez con traje negro y corbata",
      }),
    ).toHaveAttribute("src", SITE_CONFIG.images.portrait);
    expect(
      screen.getByRole("navigation", { name: "Navegación principal" }),
    ).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("lang", "es");
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("es");
  });
});
