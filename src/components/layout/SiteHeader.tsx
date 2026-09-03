import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  SITE_CONFIG,
  SUPPORTED_LANGUAGES,
  type SupportedLanguage,
} from "../../config/site";
import { normalizeLanguage } from "../../i18n";

const SCROLL_JITTER_THRESHOLD = 8;
const NEAR_TOP_THRESHOLD = 24;

const navigation = [
  { key: "navigation.index", href: SITE_CONFIG.links.home },
  { key: "navigation.skills", href: SITE_CONFIG.links.skills },
  { key: "navigation.work", href: SITE_CONFIG.links.projects },
  { key: "navigation.about", href: SITE_CONFIG.links.about },
] as const;

export function SiteHeader() {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  useEffect(() => {
    let previousScrollY = Math.max(window.scrollY, 0);

    const updateHeaderVisibility = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const scrollDelta = currentScrollY - previousScrollY;

      if (currentScrollY <= NEAR_TOP_THRESHOLD) {
        setIsScrollVisible(true);
        previousScrollY = currentScrollY;
        return;
      }

      if (Math.abs(scrollDelta) < SCROLL_JITTER_THRESHOLD) return;

      setIsScrollVisible(scrollDelta < 0);
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateHeaderVisibility, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", updateHeaderVisibility);
  }, []);

  useEffect(() => {
    const sections = [
      ...navigation.map((item) => item.href.slice(1)),
      SITE_CONFIG.links.contact.slice(1),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      { rootMargin: "-28% 0px -58%", threshold: [0, 0.25, 0.5, 0.75] },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);
  const isVisible = reduceMotion || isOpen || hasFocus || isScrollVisible;
  const currentLanguage = normalizeLanguage(i18n.resolvedLanguage);

  const changeLanguage = (language: SupportedLanguage) => {
    void i18n.changeLanguage(language);
  };

  return (
    <header
      className={`site-header${isVisible ? "" : " site-header-hidden"}`}
      onFocusCapture={() => setHasFocus(true)}
      onBlurCapture={(event) =>
        setHasFocus(
          event.relatedTarget instanceof Node &&
            event.currentTarget.contains(event.relatedTarget),
        )
      }
    >
      <div className="progress-rule" aria-hidden="true">
        <motion.span style={{ scaleX: reduceMotion ? 1 : scrollYProgress }} />
      </div>
      <a className="site-name" href={SITE_CONFIG.links.home}>
        {t("site.name")}
      </a>

      <nav className="desktop-navigation" aria-label={t("navigation.label")}>
        {navigation.map((item) => {
          const isActive = activeSection === item.href.slice(1);

          return (
            <a
              className={isActive ? "active" : undefined}
              href={item.href}
              key={item.key}
              aria-current={isActive ? "location" : undefined}
            >
              {t(item.key)}
            </a>
          );
        })}
        <a
          className={activeSection === "contact" ? "active" : undefined}
          href={SITE_CONFIG.links.contact}
          aria-current={activeSection === "contact" ? "location" : undefined}
        >
          {t("navigation.contact")}
        </a>
      </nav>

      <div
        className="language-switcher"
        role="group"
        aria-label={t("language.label")}
      >
        {SUPPORTED_LANGUAGES.map((language, index) => (
          <span className="language-option" key={language}>
            {index > 0 && (
              <span className="language-separator" aria-hidden="true">
                /
              </span>
            )}
            <button
              type="button"
              className={currentLanguage === language ? "active" : undefined}
              aria-label={t(
                language === "en" ? "language.english" : "language.spanish",
              )}
              aria-pressed={currentLanguage === language}
              onClick={() => changeLanguage(language)}
            >
              {language.toUpperCase()}
            </button>
          </span>
        ))}
      </div>

      <button
        className="menu-button"
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={t(isOpen ? "navigation.closeMenu" : "navigation.openMenu")}
        onClick={() => setIsOpen((open) => !open)}
      >
        {t("navigation.menu")}
        <span className="menu-mark" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label={t("navigation.label")}
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  className={isActive ? "active" : undefined}
                  href={item.href}
                  key={item.key}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {t(item.key)}
                </a>
              );
            })}
            <a
              className={activeSection === "contact" ? "active" : undefined}
              href={SITE_CONFIG.links.contact}
              aria-current={
                activeSection === "contact" ? "location" : undefined
              }
              onClick={closeMenu}
            >
              {t("navigation.contact")}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
