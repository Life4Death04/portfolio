import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "../../config/site";
import { i18n } from "../../i18n";
import { ContactSection } from "./ContactSection";

describe("ContactSection", () => {
  it("renders the selected Contact design and the configured direct email", () => {
    render(<ContactSection />);

    const section = screen.getByRole("region", {
      name: "Get in Touch",
    });

    expect(
      within(section).getByRole("img", {
        name: "Portrait placeholder for Santiago Rodríguez",
      }),
    ).toBeInTheDocument();
    expect(within(section).getByText("Portrait / 4:5")).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", { name: "Send me a message" }),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("heading", { name: "Elsewhere" }),
    ).toBeInTheDocument();
    expect(
      within(section).getByRole("link", { name: "hello@santiago.dev" }),
    ).toHaveAttribute("href", SITE_CONFIG.links.email);
  });

  it("keeps unavailable controls honest and non-interactive", () => {
    render(<ContactSection />);

    expect(screen.getByRole("group")).toBeDisabled();
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
  });

  it("renders neutral professional Spanish", async () => {
    await i18n.changeLanguage("es");
    render(<ContactSection />);

    const section = screen.getByRole("region", { name: "Ponte en contacto" });

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
