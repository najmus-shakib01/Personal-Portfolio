import aboutImg from '../../assets/image/7358653-removebg-preview.png'

const cards = [
  {
    num: '01',
    title: 'Frontend Development Journey',
    color: 'var(--blue)',
    bg: 'var(--blue-light)',
    body: (
      <>
        Initially intimidated by programming, I discovered my passion through building
        websites with{' '}
        <mark>HTML</mark>, <mark>CSS</mark>, <mark>JavaScript</mark> and <mark>Tailwind</mark>.
        My enthusiasm grew as I mastered{' '}
        <mark>React + Vite</mark>, creating increasingly complex and interactive web
        applications that showcased my evolving design sensibilities and technical skills.
      </>
    ),
  },
  {
    num: '02',
    title: 'Backend Development Expertise',
    color: '#7c3aed',
    bg: '#f5f3ff',
    body: (
      <>
        Through structured learning in <mark style={{ background: '#ede9fe' }}>OOP</mark> and{' '}
        <mark style={{ background: '#ede9fe' }}>Database</mark> systems, I developed robust
        backend solutions using{' '}
        <mark style={{ background: '#ede9fe' }}>Python</mark>,{' '}
        <mark style={{ background: '#ede9fe' }}>Django</mark>, and{' '}
        <mark style={{ background: '#ede9fe' }}>Django REST Framework</mark>. I gained
        proficiency in building{' '}
        <mark style={{ background: '#ede9fe' }}>RESTful APIs</mark> and testing them with{' '}
        <mark style={{ background: '#ede9fe' }}>Postman</mark>.
      </>
    ),
  },
  {
    num: '03',
    title: 'Programming Foundation',
    color: '#059669',
    bg: '#ecfdf5',
    body: (
      <>
        My technical foundation was built through rigorous problem-solving in{' '}
        <mark style={{ background: '#d1fae5' }}>C</mark> and{' '}
        <mark style={{ background: '#d1fae5' }}>C++</mark>, followed by{' '}
        <mark style={{ background: '#d1fae5' }}>data structures</mark> and{' '}
        <mark style={{ background: '#d1fae5' }}>algorithms</mark>. While I appreciated the
        logical training, I discovered my true passion lies in{' '}
        <mark style={{ background: '#d1fae5' }}>application development</mark>, where I can
        combine technical skills with creative problem-solving.
      </>
    ),
  },
]

const About = () => {
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
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="tag">About Me</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            My <span>Journey</span>
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
            From programming novice to full-stack developer
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
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                aspectRatio: '4/3',
                overflow: 'hidden',
              }}
            >
              <img
                src={aboutImg}
                alt="About"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
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
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--blue)',
                  marginBottom: '0.75rem',
                }}
              >
              </p>
              {[
                ['Location', 'Habiganj, Sylhet, Bangladesh'],
                ['Education', 'CSE Fundamentals — Phitron'],
                ['Focus', 'Full Stack Web Development'],
                ['Status', 'Open to opportunities'],
              ].map(([k, v]) => (
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
            {cards.map(card => (
              <div
                key={card.num}
                className="card"
                style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
              >
                {/* Number watermark */}
                <span
                  aria-hidden
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