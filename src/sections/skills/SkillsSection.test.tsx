import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { i18n } from "../../i18n";
import { SkillsSection } from "./SkillsSection";

describe("SkillsSection", () => {
  it("renders the exact skill categories and technology order", () => {
    render(<SkillsSection />);

    const section = screen.getByRole("region", { name: "Technical Skills" });
    const groups = within(section).getAllByRole("article");
    const expectedGroups = [
      {
        title: "Frontend Technologies",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React.js",
          "React Router",
          "TanStack Query",
          "Redux Toolkit",
          "Zustand",
          "Next.js",
          "React Hook Form",
          "Zod",
          "Vite",
          "TanStack Start",
          "Tailwind CSS",
          "MUI Components",
          "Framer Motion",
          "React Testing Library",
          "Axios",
          "Auth0",
          "Better Auth",
        ],
      },
      {
        title: "Backend Technologies",
        technologies: [
          "Node.js",
          "Express.js",
          "Prisma ORM",
          "MySQL",
          "PostgreSQL",
          "REST APIs",
          "GraphQL",
          "JWT Authentication",
          "Vitest",
        ],
      },
      {
        title: "Tools & Software",
        technologies: [
          "VSCode",
          "Git",
          "GitHub",
          "Insomnia",
          "Postman",
          "Notion",
          "Docker",
          "AWS S3",
          "AWS EC2",
          "AWS SES",
        ],
      },
    ];

    expect(groups).toHaveLength(3);
    expectedGroups.forEach((expected, index) => {
      expect(
        within(groups[index]).getByRole("heading", { name: expected.title }),
      ).toBeInTheDocument();
      expect(
        within(groups[index])
          .getAllByRole("listitem")
          .map((item) => item.textContent),
      ).toEqual(expected.technologies);
    });
  });

  it("keeps the learning status inside the Tools card without proficiency UI", () => {
    render(<SkillsSection />);

    const section = screen.getByRole("region", { name: "Technical Skills" });
    const toolsCard = within(section)
      .getByRole("heading", { name: "Tools & Software" })
      .closest("article");

    expect(toolsCard).not.toBeNull();
    expect(
      within(toolsCard!).getByText("Currently learning"),
    ).toBeInTheDocument();
    expect(
      within(toolsCard!).getByText("Exploring new technologies…"),
    ).toBeInTheDocument();
    expect(within(section).queryByRole("progressbar")).not.toBeInTheDocument();
    expect(
      within(section).queryByText(/proficien|expert|%/i),
    ).not.toBeInTheDocument();
  });

  it("localizes section content in Spanish while preserving technology names", async () => {
    await i18n.changeLanguage("es");
    render(<SkillsSection />);

    expect(
      screen.getByRole("region", { name: "Habilidades técnicas" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Tecnologías frontend" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Herramientas y software")).toBeInTheDocument();
    expect(screen.getByText("Actualmente aprendiendo")).toBeInTheDocument();
    expect(
      screen.getByText("Explorando nuevas tecnologías…"),
    ).toBeInTheDocument();
    expect(screen.getByText("React Hook Form")).toBeInTheDocument();
    expect(screen.getByText("TanStack Query")).toBeInTheDocument();
    expect(screen.getByText("Better Auth")).toBeInTheDocument();
  });
});
