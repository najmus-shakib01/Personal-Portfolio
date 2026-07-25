import { useState } from 'react'
import { FiCode, FiExternalLink, FiGithub, FiX, FiBookOpen, FiCheckCircle, FiTarget, FiLayers, FiTrendingUp } from 'react-icons/fi'

/* eslint-disable react/prop-types */
const ProjectCard = ({ title, description, image, demoLink, frontend, backend, tags, caseStudy }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)

  return (
    <>
      <article
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: 'var(--border)',
          boxShadow: 'var(--shadow)',
          background: 'var(--white)',
          transition: 'transform 0.12s ease, box-shadow 0.12s ease',
          overflow: 'hidden',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translate(-3px, -3px)'
          e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = 'var(--shadow)'
        }}
      >
        {/* Image */}
        <div style={{ height: '200px', overflow: 'hidden', borderBottom: 'var(--border)', position: 'relative' }}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Tags overlay */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
            }}
          >
            {tags.map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '2px 7px',
                  background: 'var(--black)',
                  color: 'var(--white)',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--black)',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: '#555',
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            {description}
          </p>

          {/* Actions */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: 'auto', paddingTop: '0.5rem' }}>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                padding: '9px 0',
                background: 'var(--blue)',
                color: 'var(--white)',
                border: 'var(--border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                textDecoration: 'none',
                transition: 'background 0.12s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-dark)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
            >
              <FiExternalLink size={13} />
              Live Demo
            </a>

            {caseStudy ? (
              <button
                onClick={() => setIsCaseStudyOpen(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  padding: '9px 0',
                  background: 'var(--accent)',
                  color: 'var(--black)',
                  border: 'var(--border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  cursor: 'pointer',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#eab308'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >
                <FiBookOpen size={13} />
                Case Study
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  padding: '9px 0',
                  background: 'var(--cream)',
                  color: 'var(--black)',
                  border: 'var(--border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  cursor: 'pointer',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--cream)'}
              >
                <FiCode size={13} />
                Code
              </button>
            )}

            {caseStudy && (
              <button
                onClick={() => setIsOpen(true)}
                style={{
                  gridColumn: 'span 2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '7px 0',
                  background: 'var(--cream)',
                  color: 'var(--black)',
                  border: 'var(--border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'background 0.12s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#e5e2d9'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--cream)'}
              >
                <FiCode size={13} />
                View Source Code
              </button>
            )}
          </div>
        </div>
      </article>

      {/* Code Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10,10,10,0.75)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={e => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div
            style={{
              background: 'var(--white)',
              border: 'var(--border)',
              boxShadow: '8px 8px 0 var(--black)',
              width: '100%',
              maxWidth: '420px',
              overflow: 'hidden',
            }}
          >
            {/* Modal header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 1.25rem',
                borderBottom: 'var(--border)',
                background: 'var(--cream)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                }}
              >
                View Source Code
              </span>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'var(--border)',
                  padding: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Modal body */}
            <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={frontend}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: 'var(--cream)',
                  border: 'var(--border)',
                  textDecoration: 'none',
                  color: 'var(--black)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  transition: 'background 0.12s, transform 0.12s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translate(-2px,-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.transform = 'none' }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FiGithub size={18} /> Frontend Code
                </span>
                <FiExternalLink size={14} style={{ opacity: 0.5 }} />
              </a>

              {backend && (
                <a
                  href={backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    background: 'var(--cream)',
                    border: 'var(--border)',
                    textDecoration: 'none',
                    color: 'var(--black)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    transition: 'background 0.12s, transform 0.12s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'translate(-2px,-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'var(--cream)'; e.currentTarget.style.transform = 'none' }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FiGithub size={18} /> Backend Code
                  </span>
                  <FiExternalLink size={14} style={{ opacity: 0.5 }} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Case Study Modal */}
      {isCaseStudyOpen && caseStudy && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10,10,10,0.8)',
            backdropFilter: 'blur(4px)',
            zIndex: 250,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={e => e.target === e.currentTarget && setIsCaseStudyOpen(false)}
        >
          <div
            style={{
              background: 'var(--white)',
              border: 'var(--border)',
              boxShadow: '10px 10px 0 var(--black)',
              width: '100%',
              maxWidth: '680px',
              maxHeight: '88vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.25rem 1.5rem',
                borderBottom: 'var(--border)',
                background: 'var(--accent)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    background: 'var(--black)',
                    color: 'var(--white)',
                    padding: '2px 8px',
                    display: 'inline-block',
                    marginBottom: '4px',
                  }}
                >
                  Project Case Study
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.35rem',
                    color: 'var(--black)',
                    lineHeight: 1.2,
                  }}
                >
                  {title}
                </h2>
              </div>
              <button
                onClick={() => setIsCaseStudyOpen(false)}
                style={{
                  background: 'var(--white)',
                  border: 'var(--border)',
                  padding: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '2px 2px 0 var(--black)',
                }}
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div
              style={{
                padding: '1.5rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              {/* Overview */}
              {caseStudy.overview && (
                <div style={{ background: 'var(--cream)', padding: '1rem 1.25rem', border: 'var(--border)' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#222', lineHeight: 1.7 }}>
                    {caseStudy.overview}
                  </p>
                </div>
              )}

              {/* Problem & Solution Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                <div style={{ border: 'var(--border)', padding: '1rem', background: '#fff1f2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                    <FiTarget color="#e11d48" size={18} />
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#be123c' }}>
                      The Problem
                    </h4>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#444', lineHeight: 1.6 }}>
                    {caseStudy.problem}
                  </p>
                </div>

                <div style={{ border: 'var(--border)', padding: '1rem', background: '#f0fdf4' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
                    <FiCheckCircle color="#16a34a" size={18} />
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: '#15803d' }}>
                      The Solution
                    </h4>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#444', lineHeight: 1.6 }}>
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Architecture & Tech Stack */}
              {caseStudy.architecture && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
                    <FiLayers size={18} />
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>
                      Architecture & Stack
                    </h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {caseStudy.architecture.map((item, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '6px 12px',
                          background: 'var(--white)',
                          border: 'var(--border)',
                          boxShadow: '2px 2px 0 var(--black)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {caseStudy.keyFeatures && (
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.75rem' }}>
                    Key UX & Technical Highlights
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {caseStudy.keyFeatures.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          color: '#333',
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            background: 'var(--accent)',
                            border: '1px solid #000',
                            padding: '2px 6px',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            marginTop: '2px',
                          }}
                        >
                          0{idx + 1}
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact / Results */}
              {caseStudy.impact && (
                <div
                  style={{
                    background: 'var(--blue-light)',
                    border: 'var(--border)',
                    boxShadow: '4px 4px 0 var(--blue)',
                    padding: '1rem 1.25rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
                    <FiTrendingUp color="var(--blue-dark)" size={18} />
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--blue-dark)' }}>
                      Results & Impact
                    </h4>
                  </div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#1e3a8a', fontWeight: 700, lineHeight: 1.6 }}>
                    {caseStudy.impact}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer Links */}
            <div
              style={{
                padding: '1rem 1.5rem',
                borderTop: 'var(--border)',
                background: 'var(--cream)',
                display: 'flex',
                gap: '10px',
                justifyContent: 'flex-end',
              }}
            >
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  background: 'var(--blue)',
                  color: 'var(--white)',
                  border: 'var(--border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                <FiExternalLink size={14} /> Live Demo
              </a>
              <button
                onClick={() => {
                  setIsCaseStudyOpen(false)
                  setIsOpen(true)
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  background: 'var(--white)',
                  color: 'var(--black)',
                  border: 'var(--border)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <FiCode size={14} /> Source Code
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard