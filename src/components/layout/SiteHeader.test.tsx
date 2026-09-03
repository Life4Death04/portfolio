import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { LANGUAGE_STORAGE_KEY } from "../../i18n";
import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
  const scrollTo = (scrollY: number) => {
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: scrollY,
    });
    fireEvent.scroll(window);
  };

  it("renders independently with primary navigation", () => {
    render(<SiteHeader />);

    expect(
      screen.getByRole("link", { name: "Santiago Rodríguez" }),
    ).toHaveAttribute("href", "#home");
    expect(
      screen.getAllByRole("navigation", { name: "Primary navigation" }),
    ).toHaveLength(1);
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(screen.getByRole("link", { name: "Skills" })).toHaveAttribute(
      "href",
      "#skills",
    );
    expect(screen.getByRole("link", { name: "Get in touch" })).toHaveAttribute(
      "href",
      "#contact",
    );
    expect(screen.getByRole("group", { name: "Language" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Switch to English" }),
    ).toHaveAttribute("aria-pressed", "true");
  });

  it("switches language accessibly and persists the selection", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: "Switch to Spanish" }));

    expect(
      screen.getByRole("navigation", { name: "Navegación principal" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Proyectos" })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(
      screen.getByRole("button", { name: "Cambiar a español" }),
    ).toHaveAttribute("aria-pressed", "true");
    expect(document.documentElement).toHaveAttribute("lang", "es");
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe("es");
  });

  it("opens and closes the accessible mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const button = screen.getByRole("button", {
      name: "Open navigation menu",
    });

    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getAllByRole("navigation", { name: "Primary navigation" }),
    ).toHaveLength(2);

    await user.keyboard("{Escape}");
    expect(button).toHaveAttribute("aria-expanded", "false");
    await waitFor(() =>
      expect(
        screen.getAllByRole("navigation", { name: "Primary navigation" }),
      ).toHaveLength(1),
    );
  });

  it("hides on meaningful downward scrolling and reveals upward or near the top", () => {
    render(<SiteHeader />);
    const header = screen.getByRole("banner");

    scrollTo(4);
    expect(header).not.toHaveClass("site-header-hidden");

    scrollTo(40);
    expect(header).toHaveClass("site-header-hidden");

    scrollTo(28);
    expect(header).not.toHaveClass("site-header-hidden");

    scrollTo(60);
    expect(header).toHaveClass("site-header-hidden");

    scrollTo(20);
    expect(header).not.toHaveClass("site-header-hidden");
  });

  it("stays visible while its menu is open or keyboard focus is within it", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);
    const header = screen.getByRole("banner");
    const menuButton = screen.getByRole("button", {
      name: "Open navigation menu",
    });

    scrollTo(80);
    expect(header).toHaveClass("site-header-hidden");

    await user.click(menuButton);
    expect(header).not.toHaveClass("site-header-hidden");

    await user.click(menuButton);
    fireEvent.blur(menuButton, { relatedTarget: document.body });
    expect(header).toHaveClass("site-header-hidden");

    fireEvent.focus(screen.getByRole("link", { name: "Santiago Rodríguez" }));
    expect(header).not.toHaveClass("site-header-hidden");
  });
});
