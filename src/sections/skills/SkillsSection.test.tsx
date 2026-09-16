import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import { i18n } from "../../i18n";
import { SkillsSection } from "./SkillsSection";

describe("SkillsSection", () => {
  beforeEach(async () => {
    await i18n.changeLanguage("en");
  });

  it("renders five skill group cards", () => {
    render(<SkillsSection />);
    const section = screen.getByRole("region", { name: "Technical Skills" });
    expect(within(section).getAllByRole("article")).toHaveLength(5);
  });

  it("renders all group headings in English", () => {
    render(<SkillsSection />);
    const headings = [
      "Frontend Technologies",
      "Testing & Integration",
      "Backend & Data Technologies",
      "Tools & Delivery",
      "Development Approaches",
    ];
    headings.forEach((heading) => {
      expect(
        screen.getByRole("heading", { name: heading }),
      ).toBeInTheDocument();
    });
  });

  it("renders primary tech badges with brand border color", () => {
    render(<SkillsSection />);
    const badges = document.querySelectorAll(".tech-badge");
    expect(badges.length).toBeGreaterThan(0);
    // React tech badge should have inline borderColor
    const reactBadge = Array.from(badges).find(
      (b) => b.textContent === "React",
    );
    expect(reactBadge).toBeDefined();
    expect((reactBadge as HTMLElement).style.borderColor).toBe(
      "rgb(97, 218, 251)",
    );
  });

  it("renders 'Also working with' label only in groups that have primary items", () => {
    render(<SkillsSection />);
    const labels = screen.getAllByText("Also working with");
    // Groups with primary items: frontend, testingAndIntegration, backendAndData, toolsAndDelivery → 4 labels
    // developmentApproach has no primary → no label
    expect(labels).toHaveLength(4);
  });

  it("secondary skills appear as plain text chips", () => {
    render(<SkillsSection />);
    expect(screen.getByText("Zustand")).toBeInTheDocument();
    expect(screen.getByText("Zod")).toBeInTheDocument();
    expect(screen.getByText("Playwright")).toBeInTheDocument();
    expect(screen.getByText("JWT Authentication")).toBeInTheDocument();
  });

  it("developmentApproach renders all items without an also-working-with label", () => {
    render(<SkillsSection />);
    const section = screen.getByRole("region", { name: "Technical Skills" });
    const approachCard = within(section)
      .getByRole("heading", { name: "Development Approaches" })
      .closest("article");
    expect(approachCard).not.toBeNull();
    expect(
      within(approachCard!).queryByText("Also working with"),
    ).not.toBeInTheDocument();
    expect(
      within(approachCard!).getByText("Agile Methodologies"),
    ).toBeInTheDocument();
  });

  it("localizes section and group titles in Spanish", async () => {
    await i18n.changeLanguage("es");
    render(<SkillsSection />);
    expect(
      screen.getByRole("region", { name: "Habilidades técnicas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Tecnologías Frontend" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Metodologías de desarrollo"),
    ).toBeInTheDocument();
    // Tech names stay in English
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});
