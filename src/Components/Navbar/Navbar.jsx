import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Certificate", href: "#certificate", id: "certificate" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

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
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
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
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.1rem",
              color: "var(--black)",
              letterSpacing: "-0.02em",
            }}
          >
            Najmus<span style={{ color: "var(--blue)" }}>.</span>
          </span>
        </a>

        {/* Desktop links with Active Scrollspy state */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            listStyle: "none",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
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
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          style={{
            display: "none",
            background: isOpen ? "var(--accent)" : "var(--white)",
            border: "var(--border)",
            padding: "6px",
            cursor: "pointer",
            boxShadow: "var(--shadow)",
            color: "var(--black)",
            transition: "all 0.12s ease",
          }}
          className="mobile-toggle"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
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
          style={{
            position: "fixed",
            inset: "64px 0 0 0",
            background: "rgba(245, 242, 235, 0.98)",
            backdropFilter: "blur(8px)",
            borderTop: "var(--border)",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "2rem 1.5rem",
            gap: "0.5rem",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 6vw, 2rem)",
                  color: isActive ? "var(--blue)" : "var(--black)",
                  textDecoration: "none",
                  padding: "0.5rem 0",
                  borderBottom:
                    i < navLinks.length - 1 ? "1.5px solid #e5e5e5" : "none",
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
                  {link.name}
                </div>
                {isActive && (
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      background: "var(--accent)",
                      color: "var(--black)",
                      border: "var(--border)",
                      padding: "2px 8px",
                      textTransform: "uppercase",
                    }}
                  >
                    Active
                  </span>
                )}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
