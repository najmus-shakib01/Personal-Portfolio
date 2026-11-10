import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'

// Pixel-perfect SVG Flags for 100% cross-platform consistency (Windows/Mac/Mobile)
const FlagUS = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '1.5px', border: '1px solid rgba(0,0,0,0.18)', display: 'block', flexShrink: 0 }}>
    <rect width="20" height="14" fill="#b22234" />
    <path d="M0,1.08h20v1.08h-20zM0,3.23h20v1.08h-20zM0,5.38h20v1.08h-20zM0,7.54h20v1.08h-20zM0,9.69h20v1.08h-20zM0,11.85h20v1.08h-20z" fill="#fff" />
    <rect width="8" height="7.5" fill="#3c3b6e" />
    <circle cx="2" cy="1.8" r="0.6" fill="#fff" />
    <circle cx="4" cy="1.8" r="0.6" fill="#fff" />
    <circle cx="6" cy="1.8" r="0.6" fill="#fff" />
    <circle cx="3" cy="3.7" r="0.6" fill="#fff" />
    <circle cx="5" cy="3.7" r="0.6" fill="#fff" />
    <circle cx="2" cy="5.6" r="0.6" fill="#fff" />
    <circle cx="4" cy="5.6" r="0.6" fill="#fff" />
    <circle cx="6" cy="5.6" r="0.6" fill="#fff" />
  </svg>
)

const FlagBD = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '1.5px', border: '1px solid rgba(0,0,0,0.18)', display: 'block', flexShrink: 0 }}>
    <rect width="20" height="14" fill="#006a4e" />
    <circle cx="9" cy="7" r="4.2" fill="#f42a41" />
  </svg>
)

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const isBn = i18n.language === 'bn'

  // Sync language and html lang attribute with URL path
  useEffect(() => {
    const isBnPath = location.pathname === '/bn' || location.pathname.startsWith('/bn/')
    const targetLang = isBnPath ? 'bn' : 'en'
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang)
    }
    document.documentElement.lang = targetLang
    if (targetLang === 'bn') {
      document.title = 'সৈয়দ নাজমুস সাকিব — ফুল-স্ট্যাক ডেভেলপার ও সফটওয়্যার ইঞ্জিনিয়ার'
    } else {
      document.title = 'Syed Najmus Shakib — Full Stack Developer & Software Engineer'
    }
  }, [location.pathname, i18n])

  const handleSelect = (langCode) => {
    if (langCode === i18n.language) return

    i18n.changeLanguage(langCode)
    localStorage.setItem('lang', langCode)

    const hash = location.hash || ''
    if (langCode === 'bn') {
      navigate(`/bn${hash}`, { replace: true })
    } else {
      navigate(`/${hash}`, { replace: true })
    }
  }

  return (
    <div
      role="group"
      aria-label="Language selection"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--white)',
        border: 'var(--border)',
        boxShadow: '2px 2px 0 var(--black)',
        padding: '3px',
        gap: '3px',
      }}
    >
      {/* English Toggle Button (Left) */}
      <button
        onClick={() => handleSelect('en')}
        aria-label="Switch to English"
        title="English"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px 8px',
          border: !isBn ? '1.5px solid var(--black)' : '1.5px solid transparent',
          background: !isBn ? 'var(--accent)' : 'transparent',
          boxShadow: !isBn ? '1px 1px 0 var(--black)' : 'none',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          borderRadius: '0',
          opacity: !isBn ? 1 : 0.45,
        }}
        onMouseEnter={e => {
          if (isBn) e.currentTarget.style.opacity = '0.85'
        }}
        onMouseLeave={e => {
          if (isBn) e.currentTarget.style.opacity = '0.45'
        }}
      >
        <FlagUS />
      </button>

      {/* Bengali Toggle Button (Right) */}
      <button
        onClick={() => handleSelect('bn')}
        aria-label="Switch to Bengali"
        title="বাংলা"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '5px 8px',
          border: isBn ? '1.5px solid var(--black)' : '1.5px solid transparent',
          background: isBn ? 'var(--accent)' : 'transparent',
          boxShadow: isBn ? '1px 1px 0 var(--black)' : 'none',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          borderRadius: '0',
          opacity: isBn ? 1 : 0.45,
        }}
        onMouseEnter={e => {
          if (!isBn) e.currentTarget.style.opacity = '0.85'
        }}
        onMouseLeave={e => {
          if (!isBn) e.currentTarget.style.opacity = '0.45'
        }}
      >
        <FlagBD />
      </button>
    </div>
  )
}

export default LanguageSwitcher
