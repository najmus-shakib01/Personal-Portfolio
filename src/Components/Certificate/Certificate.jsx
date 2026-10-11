import { useState } from 'react'
import certificateImg from '/public/image/Certificate.png'
import { FaAward, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa'

const Certificate = () => {
  const [copied, setCopied] = useState(false)
  const validationId = 'PHBATCH400417101011'

  const handleCopy = () => {
    navigator.clipboard.writeText(validationId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
        <div className="section-header">
          <span className="tag">Professional Certification</span>
          <h2 className="section-title">
            Certificate of <span>Achievement</span>
          </h2>
          <p className="section-desc">
            1-Year intensive professional training program in CSE Fundamentals & Software Engineering at{' '}
            <a
              href="https://phitron.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--blue)', fontWeight: 700, textDecoration: 'underline' }}
            >
              Phitron.io
            </a>
          </p>
        </div>

        {/* Main Grid: Certificate preview + Journey details */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
          className="certificate-grid"
        >
          {/* Certificate display */}
          <div>
            <div
              style={{
                position: 'relative',
                marginBottom: '1.5rem',
              }}
            >
              {/* Decorative offset */}
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
                  alt="Certificate of Achievement — Syed Najmus Shakib"
                  style={{ width: '100%', display: 'block' }}
                  loading="lazy"
                />
              </div>

              {/* Label badge */}
              <div
                style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '20px',
                  zIndex: 2,
                  background: 'var(--black)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '4px 12px',
                  border: 'var(--border)',
                }}
              >
                Phitron • Software Engineering Track
              </div>
            </div>

            {/* Quick Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <a
                href="https://phitron.io/verification"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  padding: '10px 18px',
                }}
              >
                <FaCheckCircle /> Verify Credential <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
              </a>
              <a
                href="https://phitron.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.8rem',
                  padding: '10px 18px',
                }}
              >
                Visit Phitron <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
              </a>
            </div>
          </div>

          {/* Course Details & Track Journey */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Highlights overview cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
              }}
            >
              {[
                { label: 'Program Duration', val: '1 Year', sub: 'Comprehensive Course' },
                { label: 'Track Chosen', val: 'Software Eng.', sub: 'After 6 Months Core' },
                { label: 'Final Result', val: 'CGPA 4.0', sub: 'Spring 2024' },
                { label: 'Graduation', val: 'Bootcamp', sub: 'Completed Capstone' },
              ].map(item => (
                <div
                  key={item.label}
                  className="card"
                  style={{
                    padding: '1rem',
                    background: 'var(--white)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: '#666',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--blue)',
                    }}
                  >
                    {item.val}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#444',
                    }}
                  >
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Course Journey Timeline */}
            <div
              className="card"
              style={{
                padding: '1.75rem',
                background: 'var(--white)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  color: 'var(--black)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <FaAward color="var(--blue)" /> Course Journey & Specialization
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Step 1 */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      background: 'var(--blue-light)',
                      border: 'var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--blue)',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    01
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: 'var(--black)',
                        marginBottom: '4px',
                      }}
                    >
                      Foundation Phase (Months 1–6)
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: '#555',
                        lineHeight: 1.6,
                      }}
                    >
                      Built strong programming and analytical fundamentals through intensive problem solving with <strong>C</strong>, <strong>C++</strong>, <strong>Data Structures</strong>, and <strong>Algorithms</strong>.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#ede9fe',
                      border: 'var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: '#7c3aed',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    02
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: 'var(--black)',
                        marginBottom: '4px',
                      }}
                    >
                      Software Engineering Track (Months 7–12)
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: '#555',
                        lineHeight: 1.6,
                      }}
                    >
                      Selected the specialized <strong>Software Engineering Track</strong> (instead of the Problem Solving Club) to focus on full-stack application architecture, databases, OOP principles, and real-world backend systems.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      background: '#ecfdf5',
                      border: 'var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: '#059669',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    03
                  </div>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        color: 'var(--black)',
                        marginBottom: '4px',
                      }}
                    >
                      Graduation Bootcamp & Certification
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: '#555',
                        lineHeight: 1.6,
                      }}
                    >
                      Successfully qualified for and completed the graduation <strong>Bootcamp</strong>, earning the <strong>Certificate of Achievement</strong> with an outstanding <strong>CGPA 4.0</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Validation ID snippet */}
            <div
              style={{
                border: 'var(--border)',
                background: 'var(--white)',
                boxShadow: 'var(--shadow)',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    color: '#666',
                    letterSpacing: '0.06em',
                  }}
                >
                  Credential Validation ID
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--black)',
                    marginTop: '2px',
                  }}
                >
                  {validationId}
                </div>
              </div>

              <button
                onClick={handleCopy}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '6px 14px',
                  border: 'var(--border)',
                  background: copied ? '#22c55e' : 'var(--cream)',
                  color: copied ? '#fff' : 'var(--black)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {copied ? '✓ Copied!' : 'Copy ID'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .certificate-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Certificate