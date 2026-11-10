import { useTranslation } from 'react-i18next'
import aboutImg from '../../assets/image/7358653-removebg-preview.png'

const About = () => {
  const { t, i18n } = useTranslation('about')
  const isBn = i18n.language === 'bn'

  const facts = [
    [t('fact_location_label', 'Location'), t('fact_location_val', 'Sylhet, Bangladesh')],
    [t('fact_education_label', 'Education'), t('fact_education_val', 'Diploma in CST')],
    [t('fact_training_label', 'Training'), t('fact_training_val', 'Phitron (1 Year SE)')],
    [t('fact_focus_label', 'Focus'), t('fact_focus_val', 'Full Stack / Django + React')],
    [t('fact_status_label', 'Status'), t('fact_status_val', 'Open to Work')],
  ]

  const journeyCards = [
    {
      num: isBn ? '০১' : '01',
      title: t('card1_title', 'How I Got Into Tech'),
      color: 'var(--blue)',
      bg: 'var(--blue-light)',
      body: t('card1_body', 'Started with a passion for logic and problem-solving, exploring programming languages like C and C++, and building algorithms on competitive coding platforms.'),
    },
    {
      num: isBn ? '০২' : '02',
      title: t('card2_title', 'What Drives My Work'),
      color: '#7c3aed',
      bg: '#f5f3ff',
      body: t('card2_body', 'I love bridging robust backends with beautiful, responsive interfaces. Designing scalable architectures and writing clean code motivates me every day.'),
    },
    {
      num: isBn ? '০৩' : '03',
      title: t('card3_title', 'Beyond the Screen'),
      color: '#059669',
      bg: '#ecfdf5',
      body: t('card3_body', 'When not coding, I enjoy reading, exploring tech communities, mentoring aspiring programmers, and learning new tools in modern web development.'),
    },
  ]

  return (
    <section
      id="about"
      style={{
        padding: '6rem 0',
        background: 'var(--white)',
        borderTop: 'var(--border)',
        borderBottom: 'var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="section-header">
          <span className="tag">{t('tag', 'About Me')}</span>
          <h2 className="section-title">
            {t('title_prefix', 'My')} <span>{t('title_highlight', 'Journey')}</span>
          </h2>
          <p className="section-desc">
            {t('subtitle', 'From problem solver to full stack engineer')}
          </p>
        </div>

        {/* Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Image */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                border: 'var(--border)',
                boxShadow: 'var(--shadow-lg)',
                background: '#e0f2fe',
                overflow: 'hidden',
              }}
            >
              {/* Retro brutalist terminal window bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 12px',
                  background: 'var(--black)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                }}
              >
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                </div>
                <span>{t('terminal_title', 'about-me.sh — bash')}</span>
                <span style={{ opacity: 0.6 }}>{isBn ? 'v২০২৬' : 'v2026'}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem',
                  aspectRatio: '4/3',
                }}
              >
                <img
                  src={aboutImg}
                  alt="About"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Quick facts */}
            <div
              style={{
                border: 'var(--border)',
                padding: '1.25rem',
                boxShadow: 'var(--shadow)',
                background: 'var(--cream)',
              }}
            >
              {facts.map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '6px 0',
                    borderBottom: '1px solid #e5e5e5',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                  }}
                >
                  <span style={{ color: '#666', flexShrink: 0 }}>{k}</span>
                  <span style={{ color: 'var(--black)', fontWeight: 700, textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {journeyCards.map(card => (
              <div
                key={card.num}
                className="card"
                style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
              >
                {/* Number watermark */}
                <span
                  aria-hidden
                  className="journey-watermark"
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '12px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '5rem',
                    color: card.bg,
                    lineHeight: 1,
                    userSelect: 'none',
                    zIndex: 0,
                  }}
                >
                  {card.num}
                </span>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div
                    style={{
                      display: 'inline-block',
                      background: card.color,
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      padding: '2px 8px',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {card.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      color: 'var(--black)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: '#444',
                      lineHeight: 1.8,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        mark {
          background: var(--accent);
          color: var(--black);
          padding: 0 3px;
          border-radius: 2px;
        }
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 340px 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About;