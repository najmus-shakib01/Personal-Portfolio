import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaGlobeAmericas,
  FaLaptopCode,
  FaCode,
  FaEye,
  FaExternalLinkAlt,
  FaTimes,
  FaAward,
} from 'react-icons/fa'

const internshipCertImg = '/internship.webp'

const WorkExperience = () => {
  const { t, i18n } = useTranslation('experience')
  const isBn = i18n.language === 'bn'
  const [isModalOpen, setIsModalOpen] = useState(false)

  // ESC key listener for modal
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  // Mavin metrics
  const mavinMetrics = [
    {
      label: t('metric_duration_label', 'Tenure'),
      val: t('metric_duration_val', '11 Months'),
      sub: t('metric_duration_sub', 'Dec 2025 – Oct 2026'),
    },
    {
      label: t('metric_role_label', 'Role Level'),
      val: t('metric_role_val', 'Junior Engineer'),
      sub: t('metric_role_sub', 'Full-Stack Scope'),
    },
    {
      label: t('metric_type_label', 'Work Model'),
      val: t('metric_type_val', '100% Remote'),
      sub: t('metric_type_sub', 'US Timezone Alignment'),
    },
    {
      label: t('metric_team_label', 'Collaboration'),
      val: t('metric_team_val', 'Agile / Scrum'),
      sub: t('metric_team_sub', 'International Team'),
    },
  ]

  const mavinResponsibilities = [
    t('resp_1', 'Engineered and shipped production-ready web features using modern frontend (React, Tailwind CSS) and robust backend architecture.'),
    t('resp_2', 'Designed and integrated secure RESTful APIs, optimized database queries, and streamlined backend data workflows.'),
    t('resp_3', 'Collaborated with international engineering teams through git-based workflows, sprint planning, and daily remote agile standups.'),
    t('resp_4', 'Enhanced client-facing interface responsiveness, handled state management, and ensured cross-device cross-browser reliability.'),
  ]

  const mavinTechBadges = [
    'React',
    'Python',
    'Django',
    'Django REST Framework',
    'PostgreSQL',
    'Tailwind CSS',
    'Git & GitHub',
    'Remote Agile',
  ]

  // Bdtask Internship metrics
  const internMetrics = [
    {
      label: t('intern_metric_duration_label', 'Duration'),
      val: t('intern_metric_duration_val', '3 Months'),
      sub: t('intern_metric_duration_sub', '8th Sem Attachment'),
    },
    {
      label: t('intern_metric_role_label', 'Focus Track'),
      val: t('intern_metric_role_val', 'Python Dev'),
      sub: t('intern_metric_role_sub', 'Backend Engineering'),
    },
    {
      label: t('intern_metric_type_label', 'Environment'),
      val: t('intern_metric_type_val', 'On-Site IT'),
      sub: t('intern_metric_type_sub', 'Commercial Software'),
    },
    {
      label: t('intern_metric_team_label', 'Credential'),
      val: t('intern_metric_team_val', 'Certified'),
      sub: t('intern_metric_team_sub', 'Reg: BDTA-1156'),
    },
  ]

  const internResponsibilities = [
    t('intern_resp_1', 'Completed 3-month intensive industrial attachment at leading software company Bdtask as part of 8th semester Diploma curriculum.'),
    t('intern_resp_2', 'Practiced real-world commercial software development with Python programming, database modeling, and backend architectural standards.'),
    t('intern_resp_3', 'Collaborated with senior software engineers on project modules, adopting industry best practices in Git version control and clean code principles.'),
    t('intern_resp_4', 'Successfully completed and defended industrial projects, earning official certification from Bdtask Academy (Reg No: BDTA-1156).'),
  ]

  const internTechBadges = [
    'Python',
    'Django',
    'Database Architecture',
    'Git & GitHub',
    'Software Lifecycle',
    'Code Optimization',
  ]

  return (
    <section
      id="experience"
      style={{
        padding: '6rem 0',
        background: 'var(--cream)',
        borderBottom: 'var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">{t('tag', 'Work Experience')}</span>
          <h2 className="section-title">
            {t('title_prefix', 'Professional')} <span>{t('title_highlight', 'Experience')}</span>
          </h2>
          <p className="section-desc">
            {t('subtitle', 'Software engineering contributions in commercial and international production environments')}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {/* Card 1: Mavin (Junior Full-Stack Developer) */}
          <div
            className="card"
            style={{
              padding: '2.5rem',
              background: 'var(--white)',
              border: 'var(--border)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Bar: Company info & badges */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--blue)',
                    color: 'var(--white)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '5px 12px',
                    border: 'var(--border)',
                  }}
                >
                  <FaBuilding size={12} /> {t('company_name', 'Mavin')}
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--cream)',
                    color: 'var(--black)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '5px 12px',
                    border: 'var(--border)',
                  }}
                >
                  <FaGlobeAmericas size={12} color="#2563eb" /> {t('location', 'Wyoming, United States (Remote)')}
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#fef3c7',
                    color: '#92400e',
                    border: '1.5px solid #d97706',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    textTransform: 'uppercase',
                  }}
                >
                  <FaLaptopCode size={11} /> {t('employment_type', 'Remote Employment')}
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#16a34a',
                  background: '#dcfce7',
                  border: '1.5px solid #16a34a',
                  padding: '4px 12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <FaCheckCircle size={11} /> {t('badge_status', 'Completed')}
              </span>
            </div>

            {/* Job Title & Subheading */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                  color: 'var(--black)',
                  lineHeight: 1.25,
                  marginBottom: '0.35rem',
                }}
              >
                {t('role_title', 'Junior Full-Stack Developer')}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: '#555',
                }}
              >
                <span style={{ fontWeight: 700, color: 'var(--blue)' }}>Mavin</span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <FaCalendarAlt size={12} color="#666" />
                  {t('duration', 'Dec 01, 2025 – Oct 2026 • 11 Months')}
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
                marginBottom: '2rem',
              }}
            >
              {mavinMetrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    background: 'var(--cream)',
                    border: 'var(--border)',
                    padding: '1rem',
                    boxShadow: '2px 2px 0 var(--black)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: '#666',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {metric.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--black)',
                      marginTop: '2px',
                    }}
                  >
                    {metric.val}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: '#71717a',
                      marginTop: '2px',
                    }}
                  >
                    {metric.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Responsibilities list */}
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#555',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <FaCode color="var(--blue)" size={14} />
                {t('overview_title', 'Key Responsibilities & Engineering Contributions:')}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {mavinResponsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '0.85rem 1rem',
                      background: 'var(--cream)',
                      border: '1.5px solid #e5e5e5',
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'var(--blue)',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {isBn ? ['১', '২', '৩', '৪'][idx] : idx + 1}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: '#333',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div style={{ marginBottom: '1.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#666',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                {t('skills_title', 'Technologies & Tools Utilized:')}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {mavinTechBadges.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      background: 'var(--cream)',
                      border: 'var(--border)',
                      padding: '4px 10px',
                      color: 'var(--black)',
                      boxShadow: '1.5px 1.5px 0 var(--black)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlight Summary Banner */}
            <div className="exp-highlight-banner exp-highlight-blue">
              <div
                className="exp-highlight-icon"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FaBriefcase size={16} />
              </div>
              <p
                className="exp-highlight-text"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {t(
                  'summary_highlight',
                  'Successfully delivered features in an international US company environment, adhering to global software engineering standards, agile sprint cycles, and scalable production codebases.'
                )}
              </p>
            </div>
          </div>

          {/* Card 2: Bdtask (Industrial Attachment / Software Engineering Intern) */}
          <div
            className="card"
            style={{
              padding: '2.5rem',
              background: 'var(--white)',
              border: 'var(--border)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#047857',
                    color: 'var(--white)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    padding: '5px 12px',
                    border: 'var(--border)',
                  }}
                >
                  <FaBuilding size={12} /> {t('intern_company_name', 'Bdtask Limited')}
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--cream)',
                    color: 'var(--black)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '5px 12px',
                    border: 'var(--border)',
                  }}
                >
                  <FaGlobeAmericas size={12} color="#047857" /> {t('intern_location', 'Dhaka, Bangladesh')}
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    background: '#e0e7ff',
                    color: '#3730a3',
                    border: '1.5px solid #4338ca',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    textTransform: 'uppercase',
                  }}
                >
                  <FaLaptopCode size={11} /> {t('intern_employment_type', 'Industrial Attachment')}
                </span>
              </div>

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#16a34a',
                  background: '#dcfce7',
                  border: '1.5px solid #16a34a',
                  padding: '4px 12px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <FaCheckCircle size={11} /> {t('intern_badge_status', 'Completed (Reg: BDTA-1156)')}
              </span>
            </div>

            {/* Title & Dates */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.4rem, 3vw, 1.9rem)',
                  color: 'var(--black)',
                  lineHeight: 1.25,
                  marginBottom: '0.35rem',
                }}
              >
                {t('intern_role_title', 'Software Engineering Intern (Industrial Attachment)')}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: '#555',
                }}
              >
                <span style={{ fontWeight: 700, color: '#047857' }}>Bdtask Limited</span>
                <span>•</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <FaCalendarAlt size={12} color="#666" />
                  {t('intern_duration', 'Sep 02, 2025 – Nov 25, 2025 • 3 Months')}
                </span>
              </div>
            </div>

            {/* Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '12px',
                marginBottom: '2rem',
              }}
            >
              {internMetrics.map((metric) => (
                <div
                  key={metric.label}
                  style={{
                    background: 'var(--cream)',
                    border: 'var(--border)',
                    padding: '1rem',
                    boxShadow: '2px 2px 0 var(--black)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: '#666',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {metric.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: 'var(--black)',
                      marginTop: '2px',
                    }}
                  >
                    {metric.val}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: '#71717a',
                      marginTop: '2px',
                    }}
                  >
                    {metric.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Responsibilities */}
            <div style={{ marginBottom: '2rem' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#555',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <FaCode color="#047857" size={14} />
                {t('intern_overview_title', 'Key Industrial Attachment Responsibilities & Learnings:')}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {internResponsibilities.map((resp, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      padding: '0.85rem 1rem',
                      background: 'var(--cream)',
                      border: '1.5px solid #e5e5e5',
                    }}
                  >
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#047857',
                        color: 'var(--white)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      {isBn ? ['১', '২', '৩', '৪'][idx] : idx + 1}
                    </div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.85rem',
                        color: '#333',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Badges & View Certificate Button */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.75rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#666',
                    display: 'block',
                    marginBottom: '8px',
                  }}
                >
                  {t('intern_skills_title', 'Core Competencies & Technologies:')}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {internTechBadges.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        background: 'var(--cream)',
                        border: 'var(--border)',
                        padding: '4px 10px',
                        color: 'var(--black)',
                        boxShadow: '1.5px 1.5px 0 var(--black)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  background: '#047857',
                  borderColor: 'var(--black)',
                }}
              >
                <FaAward size={14} /> {t('intern_btn_view_cert', 'View Internship Certificate')}
              </button>
            </div>

            {/* Bottom Highlight */}
            <div className="exp-highlight-banner exp-highlight-emerald">
              <div
                className="exp-highlight-icon"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <FaBriefcase size={16} />
              </div>
              <p
                className="exp-highlight-text"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                {t(
                  'intern_summary_highlight',
                  'Gained hands-on commercial IT company exposure, bridging academic computer science concepts with commercial software engineering workflows.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Certificate Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(10, 10, 10, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '920px',
              maxHeight: '92vh',
              background: 'var(--white)',
              border: 'var(--border)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '10px 16px',
                borderBottom: 'var(--border)',
                background: 'var(--cream)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '3px 8px',
                    background: '#047857',
                    color: 'var(--white)',
                    border: '1.5px solid var(--black)',
                  }}
                >
                  BDTA-1156
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    color: 'var(--black)',
                    margin: 0,
                  }}
                >
                  Bdtask Limited — Industrial Attachment Certificate
                </h4>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <a
                  href={internshipCertImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.72rem',
                    padding: '5px 10px',
                    textDecoration: 'none',
                  }}
                >
                  <FaExternalLinkAlt size={10} /> Open Original
                </a>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                  style={{
                    background: '#ef4444',
                    color: '#fff',
                    border: 'var(--border)',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontWeight: 800,
                  }}
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div
              style={{
                padding: '1rem',
                background: 'var(--cream)',
                overflowY: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={internshipCertImg}
                alt="Bdtask Internship Certificate"
                style={{
                  maxWidth: '100%',
                  maxHeight: 'calc(88vh - 80px)',
                  objectFit: 'contain',
                  border: 'var(--border)',
                  boxShadow: 'var(--shadow)',
                  background: '#fff',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default WorkExperience
