import { useState, useMemo } from 'react'
import ExperienceData from '../../Data/Experiences'
import { FaSearch, FaTimes } from 'react-icons/fa'

const categories = ['All', 'Frontend', 'Backend', 'Programming', 'Tools']

const categoryColors = {
  All: 'var(--black)',
  Frontend: 'var(--blue)',
  Backend: '#7c3aed',
  Programming: '#059669',
  Tools: '#ea580c',
}

const Experience = () => {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  // Calculate count for each category
  const categoryCounts = useMemo(() => {
    return {
      All: ExperienceData.length,
      Frontend: ExperienceData.filter(s => s.category === 'frontend').length,
      Backend: ExperienceData.filter(s => s.category === 'backend').length,
      Programming: ExperienceData.filter(s => s.category === 'programming').length,
      Tools: ExperienceData.filter(s => s.category === 'tools').length,
    }
  }, [])

  // Filter skills based on category AND search input
  const filteredSkills = useMemo(() => {
    return ExperienceData.filter(skill => {
      const matchesCategory =
        active === 'All' || skill.category === active.toLowerCase()
      const matchesSearch =
        !search.trim() ||
        skill.name.toLowerCase().includes(search.trim().toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [active, search])

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
        <div className="section-header">
          <span className="tag">Tech Stack</span>
          <h2 className="section-title">
            My <span>Skills</span>
          </h2>
          <p className="section-desc">
            Technologies, frameworks, and developer tools I use to build scalable web applications
          </p>
        </div>

        {/* Search input for instant skill lookup */}
        <div
          style={{
            maxWidth: '460px',
            margin: '0 auto 2rem',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaSearch
              style={{
                position: 'absolute',
                left: '14px',
                color: '#888',
                fontSize: '0.85rem',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Quick search skills... (e.g. React, Python, Next.js)"
              style={{
                width: '100%',
                padding: '10px 38px 10px 38px',
                border: 'var(--border)',
                background: 'var(--cream)',
                boxShadow: '2px 2px 0 var(--black)',
                fontSize: '0.85rem',
                outline: 'none',
                transition: 'all 0.15s ease',
              }}
              onFocus={e => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.boxShadow = '4px 4px 0 var(--black)'
              }}
              onBlur={e => {
                e.currentTarget.style.background = 'var(--cream)'
                e.currentTarget.style.boxShadow = '2px 2px 0 var(--black)'
              }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: '12px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#888',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4px',
                }}
              >
                <FaTimes size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Filter buttons with category counts */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '2.5rem',
          }}
        >
          {categories.map(cat => {
            const isActive = active === cat
            const count = categoryCounts[cat]
            const isAll = cat === 'All'
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  padding: '8px 16px',
                  border: 'var(--border)',
                  background: isActive ? (isAll ? 'var(--accent)' : categoryColors[cat]) : 'transparent',
                  color: isActive ? (isAll ? '#0a0a0a' : '#fff') : 'var(--black)',
                  cursor: 'pointer',
                  boxShadow: isActive ? 'var(--shadow)' : 'none',
                  transform: isActive ? 'translate(-2px, -2px)' : 'none',
                  transition: 'all 0.12s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: '0.68rem',
                    padding: '1px 6px',
                    borderRadius: '10px',
                    background: isActive ? (isAll ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.25)') : 'rgba(128,128,128,0.2)',
                    color: isActive ? (isAll ? '#0a0a0a' : '#fff') : 'var(--black)',
                    fontWeight: 800,
                  }}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Skills grid or Empty State */}
        {filteredSkills.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: '12px',
            }}
          >
            {filteredSkills.map(skill => {
              const Icon = skill.icon
              return (
                <a
                  key={skill.id}
                  href={skill.url}
                  target={skill.target}
                  rel="noopener noreferrer"
                  aria-label={`${skill.name} - official documentation`}
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
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translate(-3px, -3px)'
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)'
                    e.currentTarget.style.background = 'var(--white)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = 'var(--shadow)'
                    e.currentTarget.style.background = 'var(--cream)'
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {Icon ? (
                      <Icon
                        color={skill.color === '#000000' || !skill.color ? 'var(--black)' : skill.color}
                        style={{ width: '100%', height: '100%' }}
                      />
                    ) : skill.img ? (
                      <img
                        src={skill.img}
                        alt={skill.alt || skill.name}
                        className={skill.name === 'DRF' ? 'drf-icon-img' : ''}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    ) : null}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
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
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem 1.5rem',
              background: 'var(--cream)',
              border: 'var(--border)',
              boxShadow: 'var(--shadow)',
              maxWidth: '460px',
              margin: '0 auto',
            }}
          >
            <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--black)', marginBottom: '0.5rem' }}>
              No skills found for &quot;{search}&quot;
            </p>
            <p style={{ fontSize: '0.82rem', color: '#666', marginBottom: '1.25rem' }}>
              Try searching for a different keyword or view all categories.
            </p>
            <button
              onClick={() => {
                setSearch('')
                setActive('All')
              }}
              className="btn-primary"
              style={{ fontSize: '0.75rem', padding: '8px 16px' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Experience;