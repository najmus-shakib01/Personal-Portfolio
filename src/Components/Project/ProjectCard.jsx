import { useState } from 'react'
import { FiCode, FiExternalLink, FiGithub, FiX } from 'react-icons/fi'

/* eslint-disable react/prop-types */
const ProjectCard = ({ title, description, image, demoLink, frontend, backend, tags }) => {
  const [isOpen, setIsOpen] = useState(false)

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
          <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '0.5rem' }}>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '9px 0',
                background: 'var(--blue)',
                color: 'var(--white)',
                border: 'var(--border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                textDecoration: 'none',
                transition: 'background 0.12s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-dark)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
            >
              <FiExternalLink size={14} />
              Live Demo
            </a>
            <button
              onClick={() => setIsOpen(true)}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '9px 0',
                background: 'var(--cream)',
                color: 'var(--black)',
                border: 'var(--border)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                cursor: 'pointer',
                transition: 'background 0.12s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--cream)'}
            >
              <FiCode size={14} />
              Code
            </button>
          </div>
        </div>
      </article>

      {/* Modal */}
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
    </>
  )
}

export default ProjectCard;