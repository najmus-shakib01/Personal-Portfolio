import certificateImg from '/public/image/Certificate.png';

const Certificate = () => {
  return (
    <section
      id="certificate"
      style={{
        padding: '6rem 0',
        background: 'var(--cream)',
        borderBottom: 'var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="tag">Achievement</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            Certificate of <span>Excellence</span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: '#555',
              marginTop: '0.75rem',
              maxWidth: '480px',
            }}
          >
            Academic excellence in CSE Fundamentals with Phitron
          </p>
        </div>

        {/* Certificate display */}
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Decorative offset */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: '16px -16px -16px 16px',
              border: 'var(--border)',
              background: 'var(--accent)',
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 1,
              border: 'var(--border)',
              boxShadow: 'var(--shadow-lg)',
              overflow: 'hidden',
              background: 'var(--white)',
            }}
          >
            <img
              src={certificateImg}
              alt="Certificate of Achievement"
              style={{ width: '100%', display: 'block' }}
              loading="lazy"
            />
          </div>

          {/* Label badge */}
          <div
            style={{
              position: 'absolute',
              top: '-16px',
              left: '24px',
              zIndex: 2,
              background: 'var(--black)',
              color: 'var(--white)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '4px 12px',
            }}
          >
            Phitron • CSE Fundamentals
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate;