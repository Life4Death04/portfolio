import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "../../config/site";
import { i18n } from "../../i18n";
import { AboutSection } from "./AboutSection";

const ENGLISH_FACTS = [
  ["Education", "Systems Engineering Student"],
  ["Experience", "2+ Years Development"],
  ["Focus", "Full-stack · React · Node.js"],
] as const;

describe("AboutSection", () => {
  it("renders the named About region, selected copy, and portrait", () => {
    render(<AboutSection />);

    const section = screen.getByRole("region", { name: "About Me" });

    expect(
      within(section).getByRole("heading", { name: "About Me" }),
    ).toBeInTheDocument();
    expect(
      within(section).getByText(
        "I'm a passionate full-stack developer with experience in modern web technologies. I love creating efficient, scalable, and user-friendly applications.",
      ),
    ).toBeInTheDocument();
    const portrait = within(section).getByRole("img", {
      name: "Portrait of Santiago Rodríguez wearing a black suit and tie",
    });

    expect(portrait).toHaveAttribute("src", SITE_CONFIG.images.portrait);
    expect(portrait).toHaveAttribute("width", "795");
    expect(portrait).toHaveAttribute("height", "825");
    expect(portrait).toHaveAttribute("loading", "lazy");
    expect(portrait).toHaveAttribute("decoding", "async");
  });

  it("uses a description list with the exact fact order and values", () => {
    const { container } = render(<AboutSection />);
    const facts = container.querySelector("dl");

    expect(facts).not.toBeNull();
    expect(
      Array.from(
        facts?.querySelectorAll("dt") ?? [],
        (term) => term.textContent,
      ),
    ).toEqual(ENGLISH_FACTS.map(([label]) => label));
    expect(
      Array.from(
        facts?.querySelectorAll("dd") ?? [],
        (description) => description.textContent,
      ),
    ).toEqual(ENGLISH_FACTS.map(([, value]) => value));
  });

  it("uses configured destinations, accessible external links, and an honest disabled CV", () => {
    render(<AboutSection />);

    const section = screen.getByRole("region", { name: "About Me" });
    const contact = within(section).getByRole("link", { name: "Get in touch" });
    const cv = within(section).getByRole("button", { name: "Download CV" });
    const github = within(section).getByRole("link", {
      name: "GitHub (opens in a new tab)",
    });
    const linkedin = within(section).getByRole("link", {
      name: "LinkedIn (opens in a new tab)",
    });

    expect(contact).toHaveAttribute("href", SITE_CONFIG.links.email);
    expect(cv).toBeDisabled();
    expect(github).toHaveAttribute("href", SITE_CONFIG.links.github);
    expect(linkedin).toHaveAttribute("href", SITE_CONFIG.links.linkedin);

    for (const social of [github, linkedin]) {
      expect(social).toHaveAttribute("target", "_blank");
      expect(social).toHaveAttribute("rel", "noreferrer");
    }

    expect(
      within(section)
        .getAllByRole("link")
        .some((link) => link.getAttribute("href") === "#7a"),
    ).toBe(false);
  });

  it("renders professional neutral Spanish while preserving React and Node.js", async () => {
    await i18n.changeLanguage("es");
    render(<AboutSection />);

    const section = screen.getByRole("region", { name: "Acerca de mí" });

    expect(
      within(section).getByText("Estudiante de Ingeniería de Sistemas"),
    ).toBeInTheDocument();
    expect(
      within(section).getByText("Más de 2 años de desarrollo"),
    ).toBeInTheDocument();
    expect(
      within(section).getByText("Full-stack · React · Node.js"),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("button", { name: "Descargar CV" }),
    ).toBeDisabled();
    expect(
      within(section).getByRole("img", {
        name: "Retrato de Santiago Rodríguez con traje negro y corbata",
      }),
    ).toHaveAttribute("src", SITE_CONFIG.images.portrait);
    expect(
      within(section).getByRole("link", {
        name: "GitHub (se abre en una pestaña nueva)",
      }),
    ).toHaveAttribute("href", SITE_CONFIG.links.github);
  });
});
