import { useTranslation } from 'react-i18next'
import { FaAward, FaExternalLinkAlt, FaGraduationCap, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa'

const defaultSubjects = [
  'Data Structures & Algorithms',
  'Object-Oriented Programming (OOP)',
  'Database Management Systems (DBMS)',
  'Web Development',
  'Operating Systems',
  'Computer Networks',
  'Software Engineering',
  'Microprocessor & Interfacing',
]

const Education = () => {
  const { t, i18n } = useTranslation('education')
  const isBn = i18n.language === 'bn'

  const rawSubjects = isBn ? t('subjects', { returnObjects: true }) : defaultSubjects
  const subjects = Array.isArray(rawSubjects) ? rawSubjects : defaultSubjects

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
          <span className="tag">{t('tag', 'Academic Background')}</span>
          <h2 className="section-title">
            {t('title_prefix', 'My')} <span>{t('title_highlight', 'Education')}</span>
          </h2>
          <p className="section-desc">
            {t('subtitle', 'Formal computer science education and foundational engineering training')}
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
                <FaUniversity size={11} /> {t('badge_bteb', 'BTEB Affiliated Govt. Polytechnic')}
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
                {t('status_graduated', 'Graduated • 2026')}
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
              {t('institute_name', 'Habiganj Polytechnic Institute')}
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
                {t('degree_name', 'Diploma in Computer Science & Technology')}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <FaMapMarkerAlt color="#dc2626" /> {t('location', 'Habiganj, Sylhet, Bangladesh')}
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
                  {t('metric_cgpa_label', 'Cumulative GPA')}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--blue)', marginTop: '2px' }}>
                  {t('metric_cgpa_val', '3.17')} <span style={{ fontSize: '0.75rem', color: '#666' }}>{t('metric_cgpa_max', '/ 4.00')}</span>
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
                  {t('metric_session_label', 'Academic Session')}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--black)', marginTop: '2px' }}>
                  {t('metric_session_val', '2021–2022')}
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
                  {t('metric_graduation_label', 'Passing Year')}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--black)', marginTop: '2px' }}>
                  {t('metric_graduation_val', '2026')}
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
                  {t('metric_curriculum_label', 'Curriculum')}
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--black)', marginTop: '2px' }}>
                  {t('metric_curriculum_val', '4 Years CST')}
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
              {t('description', 'Completed a comprehensive 4-year engineering curriculum focused on modern computer technology, algorithm design, software architecture, relational databases, computer networks, and practical laboratory projects.')}
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
                {t('subjects_title', 'Key Courses & Core Engineering Subjects')}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {subjects.map(subject => (
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
              {t('btn_visit_website', 'Visit Institute Portal')} <FaExternalLinkAlt size={11} />
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
                <FaGraduationCap color="var(--blue)" size={20} /> {t('timeline_title', 'Full Educational Timeline')}
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
                    {t('timeline_academic_badge', 'Diploma in Engineering (2021–2026)')}
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
                    {t('degree_name', 'Diploma in Computer Science & Technology')}
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
                    {t('timeline_academic_desc', 'Habiganj Polytechnic Institute — Achieved CGPA 3.17 / 4.00.')}
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
                    {t('timeline_training_badge', 'Specialized Professional Program (2023–2024)')}
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
                    {t('timeline_training_title', 'Phitron — Software Engineering Track')}
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
                    {t('timeline_training_desc', '1-year intensive training covering C, C++, Data Structures, Algorithms, Python, Django, REST APIs, and modern web application development with CGPA 4.0.')}
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
                <FaAward color="#ea580c" /> {t('academic_verification_title', 'Academic Verification')}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: '#555',
                  lineHeight: 1.6,
                }}
              >
                {t('academic_verification_desc', 'All institutional records and transcripts are registered under the Bangladesh Technical Education Board (BTEB) and Habiganj Polytechnic Institute. Official certificates are processed and verified.')}
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
