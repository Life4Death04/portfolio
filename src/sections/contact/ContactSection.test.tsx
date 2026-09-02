import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "../../config/site";
import { i18n } from "../../i18n";
import { ContactSection } from "./ContactSection";

describe("ContactSection", () => {
  it("renders the three panels in semantic order without a portrait", () => {
    render(<ContactSection />);

    const section = screen.getByRole("region", {
      name: "Get in Touch",
    });
    const panels = section.querySelectorAll(":scope > .contact-panel");

    expect(panels).toHaveLength(3);
    expect(
      Array.from(panels, (panel) =>
        panel.querySelector(".contact-panel-heading")?.textContent?.trim(),
      ),
    ).toEqual(["A bit about me", "Elsewhere", "Send me a message"]);
    expect(section.querySelector("img")).not.toBeInTheDocument();
    expect(
      within(section).getByText(/full-stack developer based in Madrid/),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("link", { name: "hello@santiago.dev" }),
    ).toHaveAttribute("href", SITE_CONFIG.links.email);
  });

  it("keeps unavailable controls honest and non-interactive", () => {
    render(<ContactSection />);

    const form = screen.getByRole("form", { name: "Send me a message" });

    expect(within(form).getByRole("group")).toBeDisabled();
    expect(screen.getByRole("button", { name: "Send message" })).toBeDisabled();
    expect(
      screen.getByText(/Contact form unavailable\. Email me directly at/),
    ).toBeInTheDocument();

    for (const label of [
      "GitHub unavailable",
      "LinkedIn unavailable",
      "Download CV unavailable",
    ]) {
      expect(screen.getByRole("button", { name: label })).toBeDisabled();
    }

    expect(
      screen.queryByRole("link", { name: /GitHub/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /LinkedIn/i }),
    ).not.toBeInTheDocument();
    expect(within(form).getByLabelText("Company / role")).toBeDisabled();
  });

  it("renders neutral professional Spanish", async () => {
    await i18n.changeLanguage("es");
    render(<ContactSection />);

    const section = screen.getByRole("region", { name: "Ponte en contacto" });

    expect(
      within(section).getByRole("heading", { name: "Un poco sobre mí" }),
    ).toBeInTheDocument();
    expect(
      within(section).getByText(/Actualmente estoy terminando la carrera/),
    ).toBeInTheDocument();
    expect(
      within(section).getByLabelText("Correo electrónico"),
    ).toHaveAttribute("placeholder", "ana@empresa.com");
    expect(
      within(section).getByRole("button", {
        name: "Descargar CV no disponible",
      }),
    ).toBeDisabled();
  });
});
