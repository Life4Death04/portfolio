import { motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { SITE_CONFIG } from "../../config/site";
import { createRevealVariants } from "../../lib/motion";

const CONTACT_ACTIONS = [
  { key: "github", direction: "external" },
  { key: "linkedin", direction: "external" },
  { key: "downloadCv", direction: "download" },
] as const;

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

function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M12 3.5v12" />
      <path d="m7.5 11 4.5 4.5 4.5-4.5" />
      <path d="M4.5 19.5h15" />
    </svg>
  );
}

const ACTION_ICONS = {
  github: <GitHubIcon />,
  linkedin: <LinkedInIcon />,
  downloadCv: <DownloadIcon />,
} as const;

export function ContactSection() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion() ?? false;
  const emailAddress = SITE_CONFIG.links.email.replace("mailto:", "");

  return (
    <motion.section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      <motion.header
        className="contact-heading"
        variants={createRevealVariants(reduceMotion, 0.14)}
      >
        <h2
          id="contact-title"
          className="contact-title"
          aria-label={t("contact.title")}
        >
          <span>{t("contact.titleLead")}</span>
          <span>{t("contact.titleAccent")}</span>
        </h2>
      </motion.header>

      <motion.article
        className="contact-panel contact-about"
        aria-labelledby="contact-about-title"
        variants={createRevealVariants(reduceMotion, 0.24)}
      >
        <div className="contact-panel-heading">
          <h3 id="contact-about-title">{t("contact.about.title")}</h3>
        </div>
        <p>{t("contact.about.biography")}</p>
        <p>{t("contact.about.invitation")}</p>
        <p className="contact-availability">
          <span aria-hidden="true" />
          {t("contact.availability")}
        </p>
      </motion.article>

      <motion.aside
        className="contact-panel contact-connections"
        aria-labelledby="contact-elsewhere-title"
        variants={createRevealVariants(reduceMotion, 0.34)}
      >
        <div className="contact-panel-heading">
          <h3 id="contact-elsewhere-title">{t("contact.elsewhere")}</h3>
        </div>
        <div className="contact-action-list">
          {CONTACT_ACTIONS.map((action) => {
            const label = t(`contact.actions.${action.key}`);

            return (
              <button
                className="contact-action"
                type="button"
                disabled
                key={action.key}
                aria-label={t("contact.actions.unavailable", { name: label })}
              >
                <span className="contact-action-label">
                  {ACTION_ICONS[action.key]}
                  <span>
                    <strong>{label}</strong>
                    <small>{t("contact.actions.pending")}</small>
                  </span>
                </span>
                <span className="contact-action-direction" aria-hidden="true">
                  {action.direction === "download" ? "↓" : "↗"}
                </span>
              </button>
            );
          })}
        </div>
      </motion.aside>

      <motion.form
        className="contact-panel contact-form"
        aria-labelledby="contact-form-title"
        aria-describedby="contact-form-status"
        variants={createRevealVariants(reduceMotion, 0.44)}
      >
        <div className="contact-panel-heading">
          <h3 id="contact-form-title">{t("contact.form.title")}</h3>
        </div>
        <fieldset disabled>
          <label>
            <span>{t("contact.form.name")}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder={t("contact.form.namePlaceholder")}
            />
          </label>
          <label>
            <span>{t("contact.form.email")}</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder={t("contact.form.emailPlaceholder")}
            />
          </label>
          <label>
            <span>{t("contact.form.company")}</span>
            <input
              type="text"
              name="company"
              autoComplete="organization-title"
              placeholder={t("contact.form.companyPlaceholder")}
            />
          </label>
          <label>
            <span>{t("contact.form.message")}</span>
            <textarea
              name="message"
              rows={4}
              placeholder={t("contact.form.messagePlaceholder")}
            />
          </label>
          <div className="contact-submit-row">
            <button type="submit">{t("contact.form.submit")}</button>
          </div>
        </fieldset>
        <p id="contact-form-status" className="contact-form-status">
          {t("contact.form.unavailable")} {t("contact.form.emailInstead")}{" "}
          <a href={SITE_CONFIG.links.email}>{emailAddress}</a>
        </p>
      </motion.form>
    </motion.section>
  );
}
