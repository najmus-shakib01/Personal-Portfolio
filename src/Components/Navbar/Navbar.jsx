import { useEffect, useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "home", id: "home", name: "Home", href: "#home" },
  { key: "about", id: "about", name: "About", href: "#about" },
  { key: "education", id: "education", name: "Education", href: "#education" },
  { key: "certificate", id: "certificate", name: "Certificate", href: "#certificate" },
  { key: "skills", id: "skills", name: "Skills", href: "#skills" },
  { key: "projects", id: "projects", name: "Projects", href: "#projects" },
  { key: "contact", id: "contact", name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { t } = useTranslation("navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Industry-Standard Persistent Theme State (defaults to light mode)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    }
    return "light";
  });

  // Sync theme with DOM on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#0b0f17');
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f5f2eb');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#0b0f17');
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#f5f2eb');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);

      // Calculate scroll progress percentage
      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }

      // Determine active section based on scroll position
      const sections = navItems.map(link => document.getElementById(link.id));
      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--cream)",
        borderBottom: scrolled ? "var(--border)" : "2px solid transparent",
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        boxShadow: scrolled ? "0 4px 12px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
          aria-label="Najmus Shakib Home"
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              border: "var(--border)",
              overflow: "hidden",
              boxShadow: "2px 2px 0 var(--black)",
            }}
          >
            <img
              src="./image/logos.png"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </a>

        {/* Desktop links + Language Switcher + Theme Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              listStyle: "none",
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.key}>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--black)",
                      textDecoration: "none",
                      padding: "6px 12px",
                      border: isActive ? "var(--border)" : "1.5px solid transparent",
                      background: isActive ? "var(--accent)" : "transparent",
                      boxShadow: isActive ? "2px 2px 0 var(--black)" : "none",
                      transition: "all 0.15s ease",
                      display: "block",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.border = "var(--border)";
                        e.currentTarget.style.background = "var(--white)";
                        e.currentTarget.style.boxShadow = "2px 2px 0 var(--black)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.border = "1.5px solid transparent";
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.boxShadow = "none";
                      }
                    }}
                  >
                    {t(item.key, item.name)}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop Language Switcher */}
          <div className="desktop-lang-switcher">
            <LanguageSwitcher />
          </div>

          {/* Theme Toggle Button (Desktop) */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="desktop-theme-toggle"
            style={{
              background: theme === "dark" ? "var(--accent)" : "var(--white)",
              color: theme === "dark" ? "#0a0a0a" : "var(--black)",
              border: "var(--border)",
              boxShadow: "2px 2px 0 var(--black)",
              padding: "6px 11px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.74rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              transition: "all 0.15s ease",
            }}
          >
            {theme === "dark" ? <FiSun size={15} /> : <FiMoon size={15} />}
            <span>{theme === "dark" ? t("theme_light", "LIGHT") : t("theme_dark", "DARK")}</span>
          </button>
        </div>

        {/* Mobile controls (Language + Theme + Hamburger) */}
        <div className="mobile-controls" style={{ display: "none", alignItems: "center", gap: "8px" }}>
          <LanguageSwitcher />

          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
              background: theme === "dark" ? "var(--accent)" : "var(--white)",
              color: theme === "dark" ? "#0a0a0a" : "var(--black)",
              border: "var(--border)",
              padding: "6px 9px",
              cursor: "pointer",
              boxShadow: "var(--shadow)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.12s ease",
            }}
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            style={{
              background: isOpen ? "var(--accent)" : "var(--white)",
              color: isOpen ? "#0a0a0a" : "var(--black)",
              border: "var(--border)",
              padding: "6px",
              cursor: "pointer",
              boxShadow: "var(--shadow)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.12s ease",
            }}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Reading / Scroll progress bar indicator */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "3px",
          width: `${scrollProgress}%`,
          background: "var(--blue)",
          transition: "width 0.1s ease-out",
          zIndex: 101,
        }}
      />

      {/* Mobile drawer */}
      {isOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "fixed",
            inset: "64px 0 0 0",
            background: "rgba(245, 242, 235, 0.98)",
            backdropFilter: "blur(8px)",
            borderTop: "var(--border)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "1.75rem 1.5rem 3.5rem",
            gap: "0.5rem",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {navItems.map((item, i) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.35rem, 5.5vw, 1.85rem)",
                  color: isActive ? "var(--blue)" : "var(--black)",
                  textDecoration: "none",
                  padding: "0.6rem 0",
                  borderBottom:
                    i < navItems.length - 1 ? "1.5px solid #e5e5e5" : "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "color 0.1s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      color: "var(--blue)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                    }}
                  >
                    0{i + 1}
                  </span>
                  {t(item.key, item.name)}
                </div>
                {isActive && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      background: "var(--accent)",
                      color: "#0a0a0a",
                      border: "var(--border)",
                      padding: "2px 8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {t("active", "ACTIVE")}
                  </span>
                )}
              </a>
            );
          })}

          {/* Theme Switch Row inside Mobile Drawer */}
          <button
            onClick={toggleTheme}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 14px",
              background: "var(--white)",
              border: "var(--border)",
              boxShadow: "var(--shadow)",
              color: "var(--black)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              fontWeight: 700,
              cursor: "pointer",
              marginTop: "0.75rem",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
              {t("switch_theme", "Theme")}: {theme === "dark" ? t("theme_dark", "DARK") : t("theme_light", "LIGHT")}
            </span>
            <span
              style={{
                background: "var(--accent)",
                color: "#0a0a0a",
                padding: "2px 8px",
                fontSize: "0.7rem",
                border: "1px solid var(--black)",
                fontWeight: 800,
              }}
            >
              {t("toggle", "Toggle")}
            </span>
          </button>

          {/* Quick Mobile Drawer CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "1.25rem",
              paddingTop: "1rem",
              borderTop: "2px solid var(--black)",
            }}
          >
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="btn-primary"
              style={{
                flex: 1,
                fontSize: "0.78rem",
                padding: "10px",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {t("resume_short", "↓ Resume")}
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-secondary"
              style={{
                flex: 1,
                fontSize: "0.78rem",
                padding: "10px",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {t("contact_short", "Contact →")}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-lang-switcher { display: block !important; }
          .desktop-theme-toggle { display: inline-flex !important; }
          .mobile-controls { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-lang-switcher { display: none !important; }
          .desktop-theme-toggle { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
