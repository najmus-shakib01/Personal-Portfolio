import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Certificate', href: '#certificate' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'var(--cream)',
        borderBottom: scrolled ? 'var(--border)' : '2px solid transparent',
        transition: 'border-color 0.2s ease',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              border: 'var(--border)',
              overflow: 'hidden',
              boxShadow: '2px 2px 0 var(--black)',
            }}
          >
            <img
              src="./image/logos.png"
              alt="Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: 'var(--black)',
              letterSpacing: '-0.02em',
            }}
          >
            Najmus<span style={{ color: 'var(--blue)' }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            listStyle: 'none',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--black)',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  border: '1.5px solid transparent',
                  transition: 'all 0.12s ease',
                  display: 'block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = 'var(--border)'
                  e.currentTarget.style.background = 'var(--accent)'
                  e.currentTarget.style.boxShadow = '2px 2px 0 var(--black)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1.5px solid transparent'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'var(--border)',
            padding: '6px',
            cursor: 'pointer',
            boxShadow: 'var(--shadow)',
            color: 'var(--black)',
          }}
          className="mobile-toggle"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: '64px 0 0 0',
            background: 'var(--cream)',
            borderTop: 'var(--border)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: '0.5rem',
          }}
        >
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                color: 'var(--black)',
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: i < navLinks.length - 1 ? '1.5px solid #e5e5e5' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                transition: 'color 0.1s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--blue)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--black)'}
            >
              <span style={{ color: 'var(--blue)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                0{i + 1}
              </span>
              {link.name}
            </a>
          ))}
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
  )
}

export default Navbar;