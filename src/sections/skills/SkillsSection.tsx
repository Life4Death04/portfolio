import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { SCROLL_REVEAL_VIEWPORT } from "../../lib/motion";
import { SKILL_GROUPS } from "./skills";

const SKILLS_EASING = [0.2, 0.7, 0.2, 1] as const;
const CARD_DELAYS = [0.24, 0.34, 0.44, 0.54, 0.64] as const;

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
      viewport={SCROLL_REVEAL_VIEWPORT}
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
                <h3>{t(`skills.groups.${group.key}.title`)}</h3>
              </header>

              {group.primary.length > 0 && (
                <ul
                  className="technology-list"
                  aria-label={t("skills.toolsLabel")}
                >
                  {group.primary.map((tech) => (
                    <li
                      key={tech.name}
                      className="tech-badge"
                      style={{ borderColor: tech.color }}
                    >
                      <tech.icon aria-hidden="true" />
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
              )}

              {(() => {
                const items = group.secondaryI18nKey
                  ? (t(group.secondaryI18nKey, { returnObjects: true }) as string[])
                  : group.secondary;
                return items.length > 0 ? (
                  <div
                    className={
                      group.primary.length > 0 ? "skills-also-with" : undefined
                    }
                  >
                    {group.primary.length > 0 && (
                      <span className="skills-also-with-label">
                        {t("skills.alsoWorkingWith")}
                      </span>
                    )}
                    <ul
                      className="technology-list"
                      aria-label={t("skills.toolsLabel")}
                    >
                      {items.map((name) => (
                        <li key={name}>{name}</li>
                      ))}
                    </ul>
                  </div>
                ) : null;
              })()}
            </article>
          </motion.li>
        ))}
      </ol>
    </motion.section>
  );
}
