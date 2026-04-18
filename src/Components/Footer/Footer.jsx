import {
  FaArrowUp,
  FaCode,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

const codingProfiles = [
  { name: 'CodeForces', url: 'https://codeforces.com/profile/Shakibosd_02' },
  { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/syednazmusshaki1' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/syednazmusshakib94/' },
  { name: 'CodingNinjas', url: 'https://www.naukri.com/code360/profile/504a45c9-7125-40a5-b87e-4a784afbc18b' },
  { name: 'CSES', url: 'https://cses.fi/user/221344' },
  { name: 'Eolymp', url: 'https://basecamp.eolymp.com/en/users/user379527' },
  { name: 'GeeksForGeeks', url: 'https://www.geeksforgeeks.org/user/syednazmus2qqv/' },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  { icon: <FaFacebook size={16} />, url: 'https://www.facebook.com/syednazmusshakib.shakib', bg: '#1877f2', label: 'Facebook' },
  { icon: <FaTwitter size={16} />, url: 'https://x.com/syed_shaki27278', bg: '#1da1f2', label: 'Twitter' },
  { icon: <FaInstagram size={16} />, url: 'https://www.instagram.com/shakibosd/', bg: '#e1306c', label: 'Instagram' },
  { icon: <FaLinkedin size={16} />, url: 'https://www.linkedin.com/in/syed-nazmus-shakib-686985264/', bg: '#0a66c2', label: 'LinkedIn' },
  { icon: <FaGithub size={16} />, url: 'https://github.com/najmus-shakib01', bg: '#181717', label: 'GitHub' },
  { icon: <FaYoutube size={16} />, url: 'https://www.youtube.com/@syednazmusshakib1833', bg: '#ff0000', label: 'YouTube' },
]

const Footer = () => {
  const year = new Date().getFullYear()
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer
      id="footer"
      style={{
        background: 'var(--black)',
        color: 'var(--white)',
        borderTop: '3px solid var(--black)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <a
              href="#home"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.75rem',
                color: 'var(--white)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                display: 'inline-block',
                marginBottom: '1rem',
              }}
            >
              Najmus<span style={{ color: 'var(--accent)' }}>.</span>
            </a>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#aaa',
                lineHeight: 1.8,
                maxWidth: '280px',
              }}
            >
              Full Stack Developer building modern web experiences with React &
              Django.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '1.5rem' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    background: s.bg,
                    border: '1.5px solid rgba(255,255,255,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    transition: 'transform 0.12s ease, box-shadow 0.12s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translate(-2px,-2px)'
                    e.currentTarget.style.boxShadow = '3px 3px 0 rgba(255,255,255,0.2)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                marginBottom: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <FaCode size={12} /> Coding Profiles
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {codingProfiles.map(link => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: '#ccc',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.12s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
                  >
                    <span style={{ color: 'var(--blue)', fontSize: '0.6rem' }}>▶</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                marginBottom: '1.25rem',
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: '#ccc',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'color 0.12s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#ccc'}
                  >
                    <span style={{ color: 'var(--blue)', fontSize: '0.6rem' }}>▶</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: '#888',
            }}
          >
            © {year} Syed Najmus Shakib. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: '#555',
            }}
          >
            Built with React + Vite + Tailwind + Django REST Framework
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollTop}
        aria-label="Scroll to top"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '44px',
          height: '44px',
          background: 'var(--accent)',
          color: 'var(--black)',
          border: 'var(--border)',
          boxShadow: 'var(--shadow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 50,
          transition: 'transform 0.12s ease, box-shadow 0.12s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translate(-2px,-2px)'
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = 'var(--shadow)'
        }}
      >
        <FaArrowUp size={16} />
      </button>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1.5fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer;