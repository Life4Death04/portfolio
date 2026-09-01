import { SiteHeader } from "../components/layout/SiteHeader";
import { HomeSection } from "../sections/home/HomeSection";
import { SkillsSection } from "../sections/skills/SkillsSection";

export function App() {
  return (
    <div className="portfolio-shell">
      <div className="progress-rule" aria-hidden="true">
        <span />
      </div>
      <SiteHeader />
      <main>
        <HomeSection />
        <SkillsSection />
      </main>
      <div id="projects" />
      <div id="about" />
    </div>
  );
}
