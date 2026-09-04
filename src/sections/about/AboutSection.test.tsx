import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "../../config/site";
import { i18n } from "../../i18n";
import { AboutSection } from "./AboutSection";

const ENGLISH_FACTS = [
  ["Education", "IT Systems Engineer · Degree issuance pending"],
  ["Current role", "Independent Frontend Developer"],
  ["Focus", "React · TypeScript · Full-stack awareness"],
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
        "I’m a 22-year-old Venezuelan who has loved building things since childhood. Whether addressing an everyday need or a complex business process, I enjoy turning ideas into clear, useful, and tangible solutions and creating interfaces that are useful, thoughtful, and reliable.",
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

  it("uses configured destinations, a CV download, and accessible external links", () => {
    render(<AboutSection />);

    const section = screen.getByRole("region", { name: "About Me" });
    const contact = within(section).getByRole("link", { name: "Get in touch" });
    const cv = within(section).getByRole("link", { name: "Download CV" });
    const github = within(section).getByRole("link", {
      name: "GitHub (opens in a new tab)",
    });
    const linkedin = within(section).getByRole("link", {
      name: "LinkedIn (opens in a new tab)",
    });

    expect(contact).toHaveAttribute("href", SITE_CONFIG.links.email);
    expect(cv).toHaveAttribute("href", SITE_CONFIG.links.resume);
    expect(cv).toHaveAttribute("download");
    expect(github).toHaveAttribute("href", SITE_CONFIG.links.github);
    expect(linkedin).toHaveAttribute("href", SITE_CONFIG.links.linkedin);

    for (const social of [github, linkedin]) {
      expect(social).toHaveAttribute("target", "_blank");
      expect(social).toHaveAttribute("rel", "noopener noreferrer");
    }

    expect(
      within(section)
        .getAllByRole("link")
        .some((link) => link.getAttribute("href") === "#7a"),
    ).toBe(false);
  });

  it("renders professional neutral Spanish while preserving technology names", async () => {
    await i18n.changeLanguage("es");
    render(<AboutSection />);

    const section = screen.getByRole("region", { name: "Acerca de mí" });

    expect(
      within(section).getByText(
        "Ingeniero de Sistemas de TI · Emisión del título pendiente",
      ),
    ).toBeInTheDocument();
    expect(
      within(section).getByText("Desarrollador frontend independiente"),
    ).toBeInTheDocument();
    expect(
      within(section).getByText(
        "React · TypeScript · Conocimientos full-stack",
      ),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("link", { name: "Descargar CV" }),
    ).toHaveAttribute("href", SITE_CONFIG.links.resume);
    expect(
      within(section).getByRole("link", { name: "Descargar CV" }),
    ).toHaveAttribute("download");
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
