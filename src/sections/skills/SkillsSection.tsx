import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { SKILL_GROUPS } from "./skills";

const SKILLS_EASING = [0.2, 0.7, 0.2, 1] as const;
const CARD_DELAYS = [0.24, 0.34, 0.44] as const;

function createSkillsRevealVariants(
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
        : { duration: 1, ease: SKILLS_EASING, delay },
    },
  };
}

export function SkillsSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const introVariants = createSkillsRevealVariants(reduceMotion, 0.14);

  return (
    <motion.section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <motion.header className="skills-intro" variants={introVariants}>
        <h2
          id="skills-title"
          className="skills-title"
          aria-label={t("skills.title")}
        >
          <span>{t("skills.titleLead")}</span>{" "}
          <span>{t("skills.titleAccent")}</span>
        </h2>
        <p className="skills-description">{t("skills.description")}</p>
      </motion.header>

      <ol className="skills-grid">
        {SKILL_GROUPS.map((group, index) => (
          <motion.li
            className={`skill-group skill-group-${group.key}`}
            key={group.key}
            variants={createSkillsRevealVariants(
              reduceMotion,
              CARD_DELAYS[index],
            )}
          >
            <article>
              <header className="skill-group-header">
                <span className="skill-number" aria-hidden="true">
                  {group.number}
                </span>
                <h3>{t(`skills.groups.${group.key}.title`)}</h3>
              </header>
              <ul
                className="technology-list"
                aria-label={t("skills.toolsLabel")}
              >
                {group.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              {group.key === "tools" && (
                <footer className="skills-learning">
                  <span className="skills-learning-label">
                    {t("skills.learning.label")}
                  </span>
                  <p>
                    <span aria-hidden="true" />
                    {t("skills.learning.description")}
                  </p>
                </footer>
              )}
            </article>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}
