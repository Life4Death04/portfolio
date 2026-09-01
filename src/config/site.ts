export const SUPPORTED_LANGUAGES = ["en", "es"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const SITE_CONFIG = {
  name: "Santiago Rodríguez",
  defaultLanguage: "en" satisfies SupportedLanguage,
  links: {
    home: "#home",
    projects: "#projects",
    about: "#about",
    email: "mailto:hello@santiago.dev",
    github: "https://github.com/replace-with-santiago",
    linkedin: "https://www.linkedin.com/in/replace-with-santiago",
  },
} as const;
