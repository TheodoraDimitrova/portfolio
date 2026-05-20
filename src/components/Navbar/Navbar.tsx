import { useEffect, useState } from "react";
import { navSections } from "../../data/site";
import { getActiveSectionId } from "../../utils/getActiveSectionId";
import {
  scrollToSection,
  scrollToSectionFromHash,
} from "../../utils/scrollToSection";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    scrollToSectionFromHash();

    const onHashChange = () => {
      scrollToSectionFromHash();
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    let ticking = false;

    const updateActive = () => setActive(getActiveSectionId());

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const navigate = (id: string) => {
    const menuWasOpen = open;
    setOpen(false);
    setActive(id);
    window.setTimeout(() => scrollToSection(id), menuWasOpen ? 300 : 0);
  };

  const navToggleClass = open
    ? `${styles.navToggle} ${styles.navToggleOpen}`
    : styles.navToggle;

  const navLinksClass = open
    ? `${styles.navLinks} ${styles.navLinksOpen}`
    : styles.navLinks;

  return (
    <header className={styles.siteHeader}>
      <nav className={styles.siteNav} aria-label="Primary">
        <a
          href="#hero"
          className={styles.siteLogo}
          onClick={(e) => {
            e.preventDefault();
            navigate("hero");
          }}
        >
          TD<span className="text-accent">.</span>
        </a>

        <button
          type="button"
          className={navToggleClass}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="nav-links" className={navLinksClass}>
          {navSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={
                  active === section.id
                    ? `${styles.linkActive}`
                    : undefined
                }
                onClick={(e) => {
                  e.preventDefault();
                  navigate(section.id);
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
