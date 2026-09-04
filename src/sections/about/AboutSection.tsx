import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { useTranslation } from "react-i18next";
import { SITE_CONFIG } from "../../config/site";
import { SCROLL_REVEAL_VIEWPORT } from "../../lib/motion";

const ABOUT_EASING = [0.2, 0.7, 0.2, 1] as const;
const FACTS = ["education", "experience", "focus"] as const;

function createFadeUpVariants(reduceMotion: boolean, delay = 0): Variants {
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
        : { duration: 1, ease: ABOUT_EASING, delay },
    },
  };
}

function createPortraitVariants(reduceMotion: boolean): Variants {
  return {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 24,
      clipPath: reduceMotion ? "inset(0 0 0 0)" : "inset(100% 0 0 0)",
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0 0 0 0)",
      transition: reduceMotion
        ? { duration: 0, delay: 0 }
        : { duration: 1.1, ease: ABOUT_EASING, delay: 0.24 },
    },
  };
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.9 5.34.9 11.6c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53v-1.9c-3.08.67-3.73-1.32-3.73-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.6 1.21 3.24.93.1-.72.39-1.21.7-1.49-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.14-2.98-.11-.28-.5-1.41.11-2.94 0 0 .93-.3 3.05 1.14a10.5 10.5 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.22 2.66.11 2.94.71.78 1.14 1.77 1.14 2.98 0 4.26-2.6 5.2-5.07 5.47.4.35.76 1.03.76 2.08v3.08c0 .3.2.64.76.53 4.4-1.47 7.56-5.63 7.56-10.53C23.1 5.34 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 9.75h4.16V21H2.9V9.75Zm6.77 0h3.99v1.54h.06c.56-1.02 1.92-2.1 3.95-2.1 4.22 0 5 2.66 5 6.12V21h-4.16v-4.98c0-1.19-.02-2.72-1.71-2.72-1.72 0-1.98 1.3-1.98 2.64V21H9.67V9.75Z" />
    </svg>
  );
}

export function AboutSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;

  const socialLinks = [
    {
      key: "github",
      href: SITE_CONFIG.links.github,
      icon: <GitHubIcon />,
    },
    {
      key: "linkedin",
      href: SITE_CONFIG.links.linkedin,
      icon: <LinkedInIcon />,
    },
  ] as const;

  return (
    <motion.section
      id="about"
      className="about-section"
      aria-labelledby="about-title"
      initial="hidden"
      whileInView="visible"
      viewport={SCROLL_REVEAL_VIEWPORT}
    >
      <motion.header
        className="about-heading"
        variants={createFadeUpVariants(reduceMotion, 0.14)}
      >
        <h2
          id="about-title"
          className="about-title"
          aria-label={t("about.title")}
        >
          <span>{t("about.titleLead")}</span>{" "}
          <span>{t("about.titleAccent")}</span>
        </h2>
      </motion.header>

      <motion.div
        className="about-portrait-group"
        variants={createPortraitVariants(reduceMotion)}
      >
        <div className="about-portrait">
          <img
            src={SITE_CONFIG.images.portrait}
            alt={t("about.portraitDescription")}
            width={795}
            height={825}
            loading="lazy"
            decoding="async"
          />
        </div>
      </motion.div>

      <motion.p
        className="about-description"
        variants={createFadeUpVariants(reduceMotion, 0.34)}
      >
        {t("about.description")}
      </motion.p>

      <motion.dl
        className="about-facts"
        variants={createFadeUpVariants(reduceMotion, 0.44)}
      >
        {FACTS.map((fact) => (
          <div key={fact}>
            <dt>{t(`about.facts.${fact}.label`)}</dt>
            <dd>{t(`about.facts.${fact}.value`)}</dd>
          </div>
        ))}
      </motion.dl>

      <motion.div
        className="about-actions"
        variants={createFadeUpVariants(reduceMotion, 0.54)}
      >
        <a className="about-contact" href={SITE_CONFIG.links.email}>
          {t("about.actions.contact")}
        </a>
        <a className="about-cv" href={SITE_CONFIG.links.resume} download>
          {t("about.actions.downloadCv")}
        </a>
        <div className="about-socials">
          {socialLinks.map((link) => {
            const name = t(`about.actions.${link.key}`);

            return (
              <a
                href={link.href}
                key={link.key}
                aria-label={t("about.actions.external", { name })}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
}
