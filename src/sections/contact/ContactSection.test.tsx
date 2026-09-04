import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
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
        name: /Email|santiagodrm@gmail.com/,
      })[0],
    ).toHaveAttribute("href", SITE_CONFIG.links.email);
  });

  it("activates contact destinations and the configured CV download", () => {
    render(<ContactSection />);

    const form = screen.getByRole("form", { name: "Send me a message" });
    const github = screen.getByRole("link", {
      name: "GitHub (opens in a new tab)",
    });
    const linkedin = screen.getByRole("link", {
      name: "LinkedIn (opens in a new tab)",
    });
    const cv = screen.getByRole("link", { name: "Download CV" });

    expect(within(form).getByRole("group")).toBeEnabled();
    expect(form).toHaveAttribute("action", SITE_CONFIG.links.email);
    expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
    expect(
      screen.getByText(/Submitting opens your email app to write to/),
    ).toBeInTheDocument();
    expect(
      screen.getByText("This site does not store the information you enter."),
    ).toBeInTheDocument();

    expect(github).toHaveAttribute("href", SITE_CONFIG.links.github);
    expect(linkedin).toHaveAttribute("href", SITE_CONFIG.links.linkedin);

    for (const externalLink of [github, linkedin]) {
      expect(externalLink).toHaveAttribute("target", "_blank");
      expect(externalLink).toHaveAttribute("rel", "noopener noreferrer");
    }

    expect(cv).toHaveAttribute("href", SITE_CONFIG.links.resume);
    expect(cv).toHaveAttribute("download");
    expect(screen.getByText("Download PDF")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Email/i })).toHaveAttribute(
      "href",
      SITE_CONFIG.links.email,
    );
    expect(within(form).getByLabelText("Company / role")).toBeEnabled();
  });

  it("validates required fields and composes a localized mailto draft", async () => {
    const user = userEvent.setup();
    const open = vi.spyOn(window, "open").mockImplementation(() => null);
    render(<ContactSection />);

    const form = screen.getByRole("form", { name: "Send me a message" });
    const submit = within(form).getByRole("button", { name: "Send message" });

    await user.click(submit);
    expect(open).not.toHaveBeenCalled();

    await user.type(within(form).getByLabelText("Your name"), "Jane Doe");
    await user.type(within(form).getByLabelText("Email"), "jane@company.com");
    await user.type(
      within(form).getByLabelText("Company / role"),
      "Acme / Frontend Lead",
    );
    await user.type(
      within(form).getByLabelText("Message"),
      "Let's discuss the role.",
    );
    await user.click(submit);

    expect(open).toHaveBeenCalledOnce();
    const [mailto, target] = open.mock.calls[0];
    const url = new URL(String(mailto));

    expect(`${url.protocol}${url.pathname}`).toBe(SITE_CONFIG.links.email);
    expect(url.searchParams.get("subject")).toBe("Portfolio inquiry");
    expect(url.searchParams.get("body")).toContain("Your name: Jane Doe");
    expect(url.searchParams.get("body")).toContain("Email: jane@company.com");
    expect(url.searchParams.get("body")).toContain("Let's discuss the role.");
    expect(target).toBe("_self");
    open.mockRestore();
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
      within(section).getByRole("link", { name: "Descargar CV" }),
    ).toHaveAttribute("href", SITE_CONFIG.links.resume);
    expect(
      within(section).getByRole("link", { name: "Descargar CV" }),
    ).toHaveAttribute("download");
    expect(within(section).getByText("Descargar PDF")).toBeInTheDocument();
    expect(
      within(section).getByRole("link", { name: /Correo electrónico/i }),
    ).toHaveAttribute("href", SITE_CONFIG.links.email);
  });
});
