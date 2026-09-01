import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "./SiteHeader";

describe("SiteHeader", () => {
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
});
