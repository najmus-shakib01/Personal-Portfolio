import profileImg from '../../assets/image/photo_2025-01-04_23-53-48 (2).jpg'
import TextChange from '../TextChange/TextChange'

const Home = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        background: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background grid pattern */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--black) 1px, transparent 1px), linear-gradient(90deg, var(--black) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      />

      {/* Large background number */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          right: '-2rem',
          bottom: '-2rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: 'clamp(8rem, 20vw, 18rem)',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(37,99,235,0.08)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        DEV
      </span>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="home-grid"
      >
        {/* Text side */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Status badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
                display: 'inline-block',
                animation: 'blink 2s ease infinite',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#16a34a',
              }}
            >
              Available for work
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--black)',
              minHeight: '4rem',
            }}
          >
            <TextChange />
          </h1>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '3px', background: 'var(--blue)' }} />
            <div style={{ width: '8px', height: '3px', background: 'var(--accent)' }} />
          </div>

          {/* Subheading */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              color: '#444',
              lineHeight: 1.8,
              maxWidth: '520px',
            }}
          >
            Full Stack Developer specializing in modern web technologies and
            creating seamless user experiences.
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '0.5rem' }}>
            <a
              href="https://drive.google.com/file/d/12j3pKafAFE42aA9KYj3j64pXWlr9hOWM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              ↓ Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me →
            </a>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              marginTop: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '3+', label: 'Projects Built' },
              { value: '2+', label: 'Years Learning' },
              { value: '20+', label: 'Technologies' },
            ].map(stat => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.8rem',
                    color: 'var(--blue)',
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#666',
                    marginTop: '4px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          className="home-img-side"
        >
          <div style={{ position: 'relative', width: 'min(320px, 80vw)' }}>
            {/* Offset box (decorative) */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: '12px -12px -12px 12px',
                border: 'var(--border)',
                background: 'var(--accent)',
                zIndex: 0,
              }}
            />
            {/* Main image frame */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                border: 'var(--border)',
                overflow: 'hidden',
                aspectRatio: '1 / 1',
              }}
            >
              <img
                src={profileImg}
                alt="Najmus Shakib"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(15%)',
                }}
                loading="eager"
              />
            </div>
            {/* Corner label */}
            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                left: '-8px',
                zIndex: 2,
                background: 'var(--blue)',
                color: 'var(--white)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                padding: '4px 10px',
                border: 'var(--border)',
              }}
            >
              Full Stack Dev
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .home-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .home-img-side {
            order: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default Home;