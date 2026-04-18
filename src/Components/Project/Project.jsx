import projectImg1 from '../../assets/image/flower-seal.png'
import projectImg3 from '../../assets/image/jamiya.png'
import projectImg2 from '../../assets/image/ubaydullah.png'
import ProjectCard from './ProjectCard'

const projects = [
  {
    image: projectImg1,
    title: 'Flower Seal',
    description:
      'An e-commerce platform for flower sales management with full-stack functionality.',
    tags: ['React', 'DRF', 'Tailwind', 'E-Commerce'],
    demoLink: 'https://flower-sell.vercel.app/',
    frontend: 'https://github.com/najmus-shakib01/Flower-Sell-Frontend',
    backend: 'https://github.com/najmus-shakib01/Flower-Sell-Backend',
  },
  {
    image: projectImg2,
    title: 'Ubaydullah Tasnim',
    description: 'A professional author website showcasing works and publications.',
    tags: ['React', 'DRF', 'Tailwind', 'Author'],
    demoLink: 'https://ubaydullah-tasnim.vercel.app/',
    frontend: 'https://github.com/ubaydullahtasnimosd/client',
    backend: 'https://github.com/ubaydullahtasnimosd/server',
  },
  {
    image: projectImg3,
    title: 'Jamiya Husainiya Madrasha',
    description:
      'An educational institution website with information and resources.',
    tags: ['React', 'DRF', 'Tailwind', 'Education'],
    demoLink: 'https://jamiyahusainiya.vercel.app/',
    frontend: 'https://github.com/jamiyahusainiyaosd/client',
    backend: 'https://github.com/jamiyahusainiyaosd/server',
  },
]

const Project = () => {
  return (
    <section
      id="projects"
      style={{
        padding: '6rem 0',
        background: 'var(--cream)',
        borderBottom: 'var(--border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <span className="tag">Work</span>
          <h2 className="section-title" style={{ marginTop: '1rem' }}>
            My <span>Projects</span>
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
            A collection of my recent work and contributions
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;