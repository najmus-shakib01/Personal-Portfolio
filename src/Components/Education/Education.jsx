import { FaAward, FaExternalLinkAlt, FaGraduationCap, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa'

const Education = () => {
  return (
    <section
      id="education"
      style={{
        padding: '6rem 0',
        background: 'var(--white)',
        borderBottom: 'var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div className="section-header">
          <span className="tag">Academic Background</span>
          <h2 className="section-title">
            My <span>Education</span>
          </h2>
          <p className="section-desc">
            Formal technical education and continuous learning that shaped my engineering foundation
          </p>
        </div>

        {/* Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
          className="education-grid"
        >
          {/* Main Card: Habiganj Polytechnic Institute */}
          <div
            className="card"
            style={{
              padding: '2.25rem',
              background: 'var(--cream)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Tag & Status */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--blue)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '4px 10px',
                  border: 'var(--border)',
                }}
              >
                <FaUniversity size={11} /> BTEB Affiliated Govt. Institute
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#16a34a',
                  background: '#dcfce7',
                  border: '1.5px solid #16a34a',
                  padding: '3px 10px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                }}
              >
                ● Class of 2026 (Graduated)
              </span>
            </div>

            {/* Institution Name */}
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1.4rem, 3vw, 1.85rem)',
                color: 'var(--black)',
                lineHeight: 1.25,
                marginBottom: '0.5rem',
              }}
            >
              Habiganj Polytechnic Institute
            </h3>

            {/* Degree & Location */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginBottom: '1.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#555',
              }}
            >
              <span style={{ fontWeight: 700, color: 'var(--black)' }}>
                Diploma in Engineering — Computer Science & Technology (CST)
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <FaMapMarkerAlt color="#dc2626" /> Habiganj, Sylhet, Bangladesh
              </span>
            </div>

            {/* Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '12px',
                marginBottom: '1.75rem',
              }}
            >
              <div
                style={{
                  background: 'var(--white)',
                  border: 'var(--border)',
                  padding: '0.85rem',
                  boxShadow: '2px 2px 0 var(--black)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', textTransform: 'uppercase' }}>
                  Cumulative CGPA
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--blue)', marginTop: '2px' }}>
                  3.17 <span style={{ fontSize: '0.75rem', color: '#666' }}>/ 4.00</span>
                </div>
              </div>

              <div
                style={{
                  background: 'var(--white)',
                  border: 'var(--border)',
                  padding: '0.85rem',
                  boxShadow: '2px 2px 0 var(--black)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', textTransform: 'uppercase' }}>
                  Academic Session
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--black)', marginTop: '2px' }}>
                  2021–2022
                </div>
              </div>

              <div
                style={{
                  background: 'var(--white)',
                  border: 'var(--border)',
                  padding: '0.85rem',
                  boxShadow: '2px 2px 0 var(--black)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', textTransform: 'uppercase' }}>
                  Graduation Year
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--black)', marginTop: '2px' }}>
                  2026
                </div>
              </div>

              <div
                style={{
                  background: 'var(--white)',
                  border: 'var(--border)',
                  padding: '0.85rem',
                  boxShadow: '2px 2px 0 var(--black)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#666', textTransform: 'uppercase' }}>
                  Curriculum
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--black)', marginTop: '2px' }}>
                  4 Years CST
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: '#444',
                lineHeight: 1.8,
                marginBottom: '1.5rem',
              }}
            >
              Completed 4-year technical diploma program focused on core computer science foundations,
              system architecture, and modern programming. Developed hands-on laboratory experience,
              software project implementation, and problem-solving methodologies under the Bangladesh Technical
              Education Board (BTEB) curriculum.
            </p>

            {/* Core Coursework Badges */}
            <div style={{ marginBottom: '1.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#666',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Key Subject Areas Studied:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  'Data Structures & Algorithms',
                  'Object-Oriented Programming (OOP)',
                  'Database Management Systems (DBMS)',
                  'Web Development',
                  'Operating Systems',
                  'Computer Networks',
                  'Software Engineering',
                  'Microprocessor & Interfacing',
                ].map(subject => (
                  <span
                    key={subject}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      background: 'var(--white)',
                      border: 'var(--border)',
                      padding: '4px 10px',
                      color: 'var(--black)',
                    }}
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Link to Official Website */}
            <a
              href="https://habiganj.polytech.gov.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                textDecoration: 'none',
              }}
            >
              Visit Institute Website <FaExternalLinkAlt size={11} />
            </a>
          </div>

          {/* Side Card: Complete Learning Journey Overview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              className="card"
              style={{
                padding: '1.75rem',
                background: 'var(--white)',
              }}
            >
              <h4
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
                <FaGraduationCap color="var(--blue)" size={20} /> Educational Timeline
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Academic Item */}
                <div
                  style={{
                    borderLeft: '3px solid var(--blue)',
                    paddingLeft: '1rem',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: 'var(--blue)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    2021 – 2026 • Academic Degree
                  </span>
                  <h5
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--black)',
                      marginTop: '4px',
                    }}
                  >
                    Diploma in Computer Science & Technology
                  </h5>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#555',
                      marginTop: '4px',
                      lineHeight: 1.6,
                    }}
                  >
                    Habiganj Polytechnic Institute (BTEB) — Achieved <strong>CGPA 3.17 / 4.00</strong> with a strong foundation in core computer science.
                  </p>
                </div>

                {/* Professional Training Item */}
                <div
                  style={{
                    borderLeft: '3px solid #7c3aed',
                    paddingLeft: '1rem',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#7c3aed',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    2023 – 2024 • Professional Certification
                  </span>
                  <h5
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--black)',
                      marginTop: '4px',
                    }}
                  >
                    CSE Fundamentals & Software Engineering Track
                  </h5>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: '#555',
                      marginTop: '4px',
                      lineHeight: 1.6,
                    }}
                  >
                    Phitron.io (1-Year Intensive Program) — Specialized in Software Engineering & completed Graduation Bootcamp with <strong>CGPA 4.0 / 4.0</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Summary Box */}
            <div
              style={{
                border: 'var(--border)',
                background: 'var(--cream)',
                boxShadow: 'var(--shadow)',
                padding: '1.25rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  color: 'var(--black)',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <FaAward color="#ea580c" /> Academic Verification
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: '#555',
                  lineHeight: 1.6,
                }}
              >
                All institutional records and transcripts are registered under the <strong>Bangladesh Technical Education Board (BTEB)</strong> and <strong>Habiganj Polytechnic Institute</strong>. Official certificates are processed and verified.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .education-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Education
