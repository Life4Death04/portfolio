import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SITE_CONFIG } from "../../config/site";

const SCROLL_JITTER_THRESHOLD = 8;
const NEAR_TOP_THRESHOLD = 24;

const navigation = [
  { key: "navigation.index", href: SITE_CONFIG.links.home },
  { key: "navigation.skills", href: SITE_CONFIG.links.skills },
  { key: "navigation.work", href: SITE_CONFIG.links.projects },
  { key: "navigation.about", href: SITE_CONFIG.links.about },
] as const;

export function SiteHeader() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isScrollVisible, setIsScrollVisible] = useState(true);
  const reduceMotion = useReducedMotion();

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

  const closeMenu = () => setIsOpen(false);
  const isVisible = reduceMotion || isOpen || hasFocus || isScrollVisible;

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
        <span />
      </div>
      <a className="site-name" href={SITE_CONFIG.links.home}>
        {t("site.name")}
      </a>

      <nav className="desktop-navigation" aria-label={t("navigation.label")}>
        {navigation.map((item, index) => (
          <a
            className={index === 0 ? "active" : undefined}
            href={item.href}
            key={item.key}
          >
            {t(item.key)}
          </a>
        ))}
        <a className="header-contact" href={SITE_CONFIG.links.contact}>
          {t("navigation.contact")}
        </a>
      </nav>

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
            {navigation.map((item) => (
              <a href={item.href} key={item.key} onClick={closeMenu}>
                {t(item.key)}
              </a>
            ))}
            <a href={SITE_CONFIG.links.contact} onClick={closeMenu}>
              {t("navigation.contact")}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
