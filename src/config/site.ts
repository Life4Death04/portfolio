export const SUPPORTED_LANGUAGES = ["en", "es"] as const;

export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const SITE_CONFIG = {
  name: "Santiago Rodríguez",
  defaultLanguage: "en" satisfies SupportedLanguage,
  images: {
    portrait: "/images/profile/ProfilePicture-IA-v1-Edited.png",
  },
  links: {
    home: "#home",
    skills: "#skills",
    projects: "#projects",
    about: "#about",
    contact: "#contact",
    resume: "/santiago-rodriguez-resume.pdf",
    email: "mailto:santiagodrm@gmail.com",
    github: "https://github.com/Life4Death04",
    linkedin: "https://www.linkedin.com/in/santiagodrm-rodriguez/",
  },
} as const;
