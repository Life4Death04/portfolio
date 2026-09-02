import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutSection } from "../sections/about/AboutSection";
import { HomeSection } from "../sections/home/HomeSection";
import { ProjectsSection } from "../sections/projects/ProjectsSection";
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
        <ProjectsSection />
        <AboutSection />
      </main>
    </div>
  );
}
