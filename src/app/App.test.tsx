import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { i18n } from "../i18n";
import { App } from "./App";

describe("App", () => {
  it("renders the Home content and every metric", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Santiago RodríguezFrontend developer",
    );
    expect(screen.getByText(/React and TypeScript/)).toBeInTheDocument();
    expect(screen.getByText("Years shipping")).toBeInTheDocument();
    expect(screen.getByText("Interfaces built")).toBeInTheDocument();
    expect(screen.getByText("Avg. Lighthouse")).toBeInTheDocument();
    expect(screen.getByText("Remote worldwide")).toBeInTheDocument();
  });

  it("renders Home in Spanish without relying on navigator language", async () => {
    await i18n.changeLanguage("es");
    render(<App />);

    expect(screen.getByText("Desarrollador frontend")).toBeInTheDocument();
    expect(screen.getByText("Interfaces creadas")).toBeInTheDocument();
  });
});
