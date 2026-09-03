import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SITE_CONFIG } from "../../config/site";
import { i18n } from "../../i18n";
import { ContactSection } from "./ContactSection";

describe("ContactSection", () => {
  it("renders the form before the contact rail in semantic source order", () => {
    render(<ContactSection />);

    const section = screen.getByRole("region", {
      name: "Get in touch",
    });
    const form = within(section).getByRole("form", {
      name: "Send me a message",
    });
    const rail = within(section).getByRole("complementary").parentElement;

    expect(rail).not.toBeNull();
    expect(form.compareDocumentPosition(rail!)).toBe(
      Node.DOCUMENT_POSITION_FOLLOWING,
    );
    expect(
      within(section).queryByText("Open to offers · Remote or Madrid"),
    ).not.toBeInTheDocument();
    expect(section.querySelector("img")).not.toBeInTheDocument();
    expect(
      within(section).getByText(/Great products come from collaboration/),
    ).toBeInTheDocument();
    expect(
      within(section).queryByText(/If you’re hiring a frontend developer/),
    ).not.toBeInTheDocument();
    expect(
      within(section).getAllByRole("link", {
        name: /Email|hello@santiago.dev/,
      })[0],
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
    expect(
      screen.getByText("Nothing entered here is stored or sent."),
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
    expect(screen.getByRole("link", { name: /Email/i })).toHaveAttribute(
      "href",
      SITE_CONFIG.links.email,
    );
    expect(within(form).getByLabelText("Company / role")).toBeDisabled();
  });

  it("renders neutral professional Spanish", async () => {
    await i18n.changeLanguage("es");
    render(<ContactSection />);

    const section = screen.getByRole("region", { name: "Ponte en contacto" });

    expect(
      within(section).getByRole("heading", { name: "Envíame un mensaje" }),
    ).toBeInTheDocument();
    expect(
      within(section).getByText(
        /Los grandes productos surgen de la colaboración/,
      ),
    ).toBeInTheDocument();
    expect(
      within(section).getByLabelText("Correo electrónico"),
    ).toHaveAttribute("placeholder", "ana@empresa.com");
    expect(
      within(section).getByRole("button", {
        name: "Descargar CV no disponible",
      }),
    ).toBeDisabled();
    expect(
      within(section).getByRole("link", { name: /Correo electrónico/i }),
    ).toHaveAttribute("href", SITE_CONFIG.links.email);
  });
});
