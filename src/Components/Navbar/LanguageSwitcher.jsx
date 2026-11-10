import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'
import { FiChevronDown, FiCheck } from 'react-icons/fi'

// Pixel-perfect SVG Flags for 100% cross-platform consistency (Windows/Mac/Mobile)
const FlagBD = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', border: '1px solid rgba(0,0,0,0.15)', flexShrink: 0 }}>
    <rect width="20" height="14" fill="#006a4e" />
    <circle cx="9" cy="7" r="4.2" fill="#f42a41" />
  </svg>
)

const FlagUS = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: '2px', border: '1px solid rgba(0,0,0,0.15)', flexShrink: 0 }}>
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

const languages = [
  { code: 'bn', label: 'বাংলা', flag: <FlagBD /> },
  { code: 'en', label: 'Eng', flag: <FlagUS /> },
]

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

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

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const currentLang = languages.find(l => l.code === (i18n.language === 'bn' ? 'bn' : 'en')) || languages[1]

  const handleSelect = (langCode) => {
    setIsOpen(false)
    if (langCode === i18n.language) return

    i18n.changeLanguage(langCode)
    localStorage.setItem('lang', langCode)

    // Route handling: 'bn' -> '/bn', 'en' -> '/'
    const hash = location.hash || ''
    if (langCode === 'bn') {
      navigate(`/bn${hash}`, { replace: true })
    } else {
      navigate(`/${hash}`, { replace: true })
    }
  }

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        aria-expanded={isOpen}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '7px',
          padding: '6px 11px',
          background: 'var(--white)',
          color: 'var(--black)',
          border: 'var(--border)',
          boxShadow: '2px 2px 0 var(--black)',
          cursor: 'pointer',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          fontWeight: 700,
          transition: 'all 0.12s ease',
        }}
      >
        {currentLang.flag}
        <span>{currentLang.label}</span>
        <FiChevronDown
          size={14}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.15s ease',
            opacity: 0.8,
          }}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            right: 0,
            zIndex: 150,
            background: 'var(--white)',
            border: 'var(--border)',
            boxShadow: 'var(--shadow-lg)',
            minWidth: '135px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {languages.map((lang) => {
            const isSelected = currentLang.code === lang.code
            return (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px 12px',
                  background: isSelected ? 'var(--cream)' : 'transparent',
                  color: 'var(--black)',
                  border: 'none',
                  borderBottom: '1px solid var(--border)',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: isSelected ? 800 : 600,
                  transition: 'background 0.12s ease',
                  textAlign: 'left',
                  width: '100%',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.background = 'var(--accent)'
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.background = 'transparent'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {lang.flag}
                  <span>{lang.label}</span>
                </div>
                {isSelected && <FiCheck size={14} color="var(--blue)" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher

