import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "../config/site";
import { LANGUAGE_STORAGE_KEY } from "../i18n";
import { App } from "./App";

describe("App", () => {
  it("renders the Home content and every metric", () => {
    const { container } = render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Santiago RodríguezFrontend developer",
    );
    expect(screen.getByText(/protected flows/)).toBeInTheDocument();
    expect(screen.getByText("Client engagements")).toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
    expect(screen.getByText("API-connected screens")).toBeInTheDocument();
    expect(screen.getByText("+22")).toBeInTheDocument();
    expect(screen.getByText("End-to-end tests")).toBeInTheDocument();
    expect(screen.getByText("+5")).toBeInTheDocument();
    expect(screen.getByText("Remote worldwide")).toBeInTheDocument();
    expect(screen.getByText("Elche, Spain")).toBeInTheDocument();

    const metricList = container.querySelector(".metrics");
    const animatedValue = screen.getByText("+2").previousElementSibling;

    expect(metricList?.querySelectorAll("dt .metric-copy")).toHaveLength(4);
    expect(animatedValue).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByText("+2")).toHaveClass("visually-hidden");

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

  it("uses the configured Home resume download and secure external destinations", () => {
    render(<App />);

    expect(SITE_CONFIG.links).toMatchObject({
      email: "mailto:santiagodrm@gmail.com",
      github: "https://github.com/Life4Death04",
      linkedin: "https://www.linkedin.com/in/santiagodrm-rodriguez/",
      resume: "/santiago-rodriguez-resume.pdf",
    });

    const home = screen.getByRole("region", { name: /Santiago Rodríguez/i });
    const resume = within(home).getByRole("link", {
      name: "Download resume",
    });
    const email = within(home).getByRole("link", {
      name: "Email",
    });
    const github = within(home).getByRole("link", {
      name: "GitHub (opens in a new tab)",
    });
    const linkedin = within(home).getByRole("link", {
      name: "LinkedIn (opens in a new tab)",
    });

    expect(resume).toHaveAttribute("href", SITE_CONFIG.links.resume);
    expect(resume).toHaveAttribute("download");
    expect(email).toHaveAttribute("href", SITE_CONFIG.links.email);
    expect(github).toHaveAttribute("href", SITE_CONFIG.links.github);
    expect(linkedin).toHaveAttribute("href", SITE_CONFIG.links.linkedin);

    for (const externalLink of [github, linkedin]) {
      expect(externalLink).toHaveAttribute("target", "_blank");
      expect(externalLink).toHaveAttribute("rel", "noopener noreferrer");
    }
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
    expect(screen.getByText("Proyectos con clientes")).toBeInTheDocument();
    expect(screen.getByText("Pantallas conectadas a APIs")).toBeInTheDocument();
    expect(screen.getByText("Pruebas end-to-end")).toBeInTheDocument();
    expect(screen.getByText("Elche, España")).toBeInTheDocument();
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
    const resume = within(
      screen.getByRole("region", { name: /Santiago Rodríguez/i }),
    ).getByRole("link", { name: "Descargar CV" });

    expect(resume).toHaveAttribute("href", SITE_CONFIG.links.resume);
    expect(resume).toHaveAttribute("download");
    expect(document.documentElement).toHaveAttribute("lang", "es");
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("es");
  });
});
