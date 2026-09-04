import { useEffect } from "react";
import type { CSSProperties } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { useTranslation } from "react-i18next";
import { SITE_CONFIG } from "../../config/site";
import { createRevealVariants, createStaggerVariants } from "../../lib/motion";

const metrics = ["clients", "screens", "tests", "location"] as const;

function AnimatedMetricValue({
  value,
  reduceMotion,
  delay,
}: {
  value: string;
  reduceMotion: boolean;
  delay: number;
}) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const isNumeric = match !== null;
  const prefix = match?.[1] ?? "";
  const target = Number(match?.[2] ?? 0);
  const suffix = match?.[3] ?? "";
  const count = useMotionValue(reduceMotion ? target : 0);
  const displayedCount = useTransform(
    count,
    (current) => `${prefix}${Math.round(current)}${suffix}`,
  );

  useEffect(() => {
    count.set(reduceMotion ? target : 0);

    if (reduceMotion || !isNumeric) {
      return;
    }

    const controls = animate(count, target, {
      delay,
      duration: 1.5,
      ease: [0.2, 0.7, 0.2, 1],
    });

    return () => controls.stop();
  }, [count, delay, isNumeric, reduceMotion, target]);

  if (!isNumeric) {
    return <span className="metric-copy">{value}</span>;
  }

  return (
    <>
      <motion.span aria-hidden="true">{displayedCount}</motion.span>
      <span className="visually-hidden">{value}</span>
    </>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
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

export function HomeSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const itemVariants = createRevealVariants(reduceMotion);

  const socialLinks = [
    {
      key: "email",
      href: SITE_CONFIG.links.email,
      icon: <EmailIcon />,
      external: false,
    },
    {
      key: "github",
      href: SITE_CONFIG.links.github,
      icon: <GitHubIcon />,
      external: true,
    },
    {
      key: "linkedin",
      href: SITE_CONFIG.links.linkedin,
      icon: <LinkedInIcon />,
      external: true,
    },
  ] as const;

  return (
    <motion.section
      id="home"
      className="home-section"
      aria-labelledby="home-title"
      variants={createStaggerVariants(reduceMotion)}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 id="home-title" className="home-title" variants={itemVariants}>
        <span>{t("home.name")}</span>
        <span>{t("home.role")}</span>
      </motion.h1>

      <motion.p className="home-description" variants={itemVariants}>
        {t("home.description")}
      </motion.p>

      <motion.figure className="portrait-figure" variants={itemVariants}>
        <div className="portrait-placeholder">
          <img
            src={SITE_CONFIG.images.portrait}
            alt={t("home.portraitDescription")}
            width={795}
            height={825}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </motion.figure>

      <motion.dl className="metrics" variants={itemVariants}>
        {metrics.map((metric, index) => {
          const delay = 0.7 + index * 0.12;
          const revealStyle = {
            "--metric-reveal-delay": `${delay}s`,
          } as CSSProperties;

          return (
            <div key={metric} style={revealStyle}>
              <dt>
                <span className="metric-copy">
                  {t(`home.metrics.${metric}.label`)}
                </span>
              </dt>
              <dd>
                <AnimatedMetricValue
                  value={t(`home.metrics.${metric}.value`)}
                  reduceMotion={reduceMotion}
                  delay={delay}
                />
              </dd>
            </div>
          );
        })}
      </motion.dl>

      <motion.div className="home-actions" variants={itemVariants}>
        <a className="primary-action" href={SITE_CONFIG.links.resume} download>
          {t("home.cta")}
        </a>
        <div className="social-links">
          {socialLinks.map((link) => {
            const name = t(`home.actions.${link.key}`);
            return (
              <a
                href={link.href}
                key={link.key}
                aria-label={
                  link.external ? t("home.actions.external", { name }) : name
                }
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
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
