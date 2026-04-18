import { useState } from 'react'
import ExperienceData from '../../Data/Experiences'

const categories = ['All', 'Frontend', 'Backend', 'Programming', 'Tools']

const categoryMap = {
  All: ExperienceData,
  Frontend: ExperienceData.filter(s => s.category === 'frontend'),
  Backend: ExperienceData.filter(s => s.category === 'backend'),
  Tools: ExperienceData.filter(s => s.category === 'tools'),
  Programming: ExperienceData.filter(s => s.category === 'programming'),
}

const categoryColors = {
  All: 'var(--black)',
  Frontend: 'var(--blue)',
  Backend: '#7c3aed',
  Programming: '#059669',
  Tools: '#ea580c',
}

const Experience = () => {
  const [active, setActive] = useState('All')
  const skills = categoryMap[active]

  return (
    <section
      id="skills"
      style={{
        padding: '6rem 0',
        background: 'var(--white)',
        borderBottom: 'var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="tag">Tech Stack</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            My <span>Skills</span>
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
            Technologies and tools I work with to create exceptional digital experiences
          </p>
        </div>

        {/* Filter buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map(cat => {
            const isActive = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '8px 18px',
                  border: 'var(--border)',
                  background: isActive ? categoryColors[cat] : 'transparent',
                  color: isActive ? '#fff' : 'var(--black)',
                  cursor: 'pointer',
                  boxShadow: isActive ? 'var(--shadow)' : 'none',
                  transform: isActive ? 'translate(-2px, -2px)' : 'none',
                  transition: 'all 0.12s ease',
                }}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Skills grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '12px',
          }}
        >
          {skills.map(skill => {
            const Icon = skill.icon
            return (
              <a
                key={skill.id}
                href={skill.url}
                target={skill.target}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '1.25rem 0.75rem',
                  background: 'var(--cream)',
                  border: 'var(--border)',
                  boxShadow: 'var(--shadow)',
                  textDecoration: 'none',
                  transition: 'transform 0.12s ease, box-shadow 0.12s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                  e.currentTarget.style.background = 'var(--white)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.boxShadow = 'var(--shadow)'
                  e.currentTarget.style.background = 'var(--cream)'
                }}
              >
                <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {Icon ? (
                    <Icon color={skill.color} style={{ width: '100%', height: '100%' }} />
                  ) : skill.img ? (
                    <img
                      src={skill.img}
                      alt={skill.alt || skill.name}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  ) : null}
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: 'var(--black)',
                    textAlign: 'center',
                  }}
                >
                  {skill.name}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience;