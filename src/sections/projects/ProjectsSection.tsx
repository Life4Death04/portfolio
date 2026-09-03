import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { SCROLL_REVEAL_VIEWPORT } from "../../lib/motion";
import { ProjectVisual } from "./ProjectVisual";
import { PROJECTS, type ProjectAction, type ProjectRecord } from "./projects";

const PROJECTS_EASING = [0.2, 0.7, 0.2, 1] as const;
const CARD_DELAYS = [0.24, 0.34, 0.44] as const;

function createProjectsRevealVariants(
  reduceMotion: boolean,
  delay = 0,
): Variants {
  return {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 18,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion
        ? { duration: 0, delay: 0 }
        : { duration: 1, ease: PROJECTS_EASING, delay },
    },
  };
}

function getActionUrl(project: ProjectRecord, action: ProjectAction) {
  return action === "code" ? project.codeUrl : project.projectUrl;
}

export function ProjectsSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_REVEAL_VIEWPORT}
    >
      <motion.header
        className="projects-intro"
        variants={createProjectsRevealVariants(reduceMotion, 0.14)}
      >
        <h2
          id="projects-title"
          className="projects-title"
          aria-label={t("projects.title")}
        >
          <span>{t("projects.titleLead")}</span>{" "}
          <span>{t("projects.titleAccent")}</span>
        </h2>
        <p className="projects-description">
          {t("projects.descriptionLead")}
          <span className="projects-description-detail">
            {t("projects.descriptionDetail")}
          </span>
        </p>
      </motion.header>

      <ol className="projects-grid">
        {PROJECTS.map((project, index) => {
          const title = t(`projects.items.${project.key}.title`);

          return (
            <motion.li
              className={`project-card project-card-${project.key}`}
              key={project.key}
              variants={createProjectsRevealVariants(
                reduceMotion,
                CARD_DELAYS[index],
              )}
            >
              <div
                className="project-media"
                role="img"
                aria-label={t("projects.mediaLabel", { title })}
              >
                <ProjectVisual kind={project.key} />
              </div>

              <article className="project-content">
                <header className="project-heading">
                  <h3>{title}</h3>
                </header>
                <p className="project-description">
                  {t(`projects.items.${project.key}.description`)}
                </p>
                <ul
                  className="project-technologies"
                  aria-label={t("projects.technologiesLabel", { title })}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                  <li className="project-more">
                    {t("projects.more", {
                      count: project.additionalTechnologies,
                    })}
                  </li>
                </ul>
                <div className="project-actions">
                  {project.actions.map((action) => {
                    const url = getActionUrl(project, action);
                    const label = t(`projects.actions.${action}`);
                    const content = (
                      <span aria-hidden="true">
                        <span className="project-action-long">{label}</span>
                        {action === "project" && (
                          <span className="project-action-short">
                            {t("projects.actions.projectShort")}
                          </span>
                        )}
                      </span>
                    );

                    if (url) {
                      return (
                        <a
                          className={`project-action project-action-${action}`}
                          href={url}
                          key={action}
                          aria-label={label}
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <button
                        className={`project-action project-action-${action}`}
                        type="button"
                        disabled
                        key={action}
                        aria-label={label}
                      >
                        {content}
                      </button>
                    );
                  })}
                </div>
              </article>
            </motion.li>
          );
        })}
      </ol>
    </motion.section>
  );
}
