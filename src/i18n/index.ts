import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  SITE_CONFIG,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from "../config/site";
import { en } from "./locales/en/common";
import { es } from "./locales/es/common";

export function normalizeLanguage(language?: string): SupportedLanguage {
  const normalized = language?.toLowerCase().split("-")[0];

  return SUPPORTED_LANGUAGES.includes(normalized as SupportedLanguage)
    ? (normalized as SupportedLanguage)
    : SITE_CONFIG.defaultLanguage;
}

function getInitialLanguage(): SupportedLanguage {
  if (import.meta.env.MODE === "test" || typeof navigator === "undefined") {
    return SITE_CONFIG.defaultLanguage;
  }

  const preferredLanguage = navigator.languages
    .map((language) => language.toLowerCase().split("-")[0])
    .find((language) =>
      SUPPORTED_LANGUAGES.includes(language as SupportedLanguage),
    );

  return normalizeLanguage(preferredLanguage ?? navigator.language);
}

const initialLanguage = getInitialLanguage();

if (typeof document !== "undefined") {
  document.documentElement.lang = initialLanguage;
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: initialLanguage,
  fallbackLng: SITE_CONFIG.defaultLanguage,
  supportedLngs: SUPPORTED_LANGUAGES,
  load: "languageOnly",
  nonExplicitSupportedLngs: true,
  interpolation: {
    escapeValue: false,
  },
});

i18n.on("languageChanged", (language) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = normalizeLanguage(language);
  }
});

export { i18n };
