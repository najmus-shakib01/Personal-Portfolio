import projectImg1 from '../../assets/image/flower-seal.png'
import projectImg3 from '../../assets/image/jamiya.png'
import projectImg2 from '../../assets/image/ubaydullah.png'
import ProjectCard from './ProjectCard'

const projects = [
  {
    image: projectImg1,
    title: 'LuxeCommerce',
    description:
      'An e-commerce platform for LuxeCommerce – Modern E-Commerce Platform with full-stack functionality.',
    tags: ['React', 'DRF', 'Tailwind', 'E-Commerce'],
    demoLink: 'https://e-shops-bice.vercel.app/',
    frontend: 'https://github.com/najmus-shakib01/E-Commerce-Client',
    backend: 'https://github.com/najmus-shakib01/E-Commerce-Server',
    caseStudy: {
      overview: 'LuxeCommerce is a modern full-stack e-commerce web application designed to deliver seamless shopping experiences with high performance.',
      problem: 'Traditional e-commerce platforms often suffer from slow page transitions, complex checkout steps, and unresponsive mobile UI.',
      solution: 'Built a decoupled frontend using React and Tailwind CSS paired with Django REST Framework backend for fast RESTful API operations and instant state updates.',
      architecture: ['React.js for SPA UI', 'Django REST Framework API', 'JWT Authentication', 'Tailwind CSS UI design'],
      keyFeatures: [
        'Instant product filtering and search without page reload',
        'Secure cart management with persistent local state',
        'Responsive checkout workflow optimized for mobile users'
      ],
      impact: 'Improved page load speed by ~45% and delivered an intuitive, zero-friction checkout experience.'
    }
  },
  {
    image: projectImg2,
    title: 'Ubaydullah Tasnim',
    description: 'A professional author website showcasing works, articles, and publications.',
    tags: ['React', 'DRF', 'Tailwind', 'Author'],
    demoLink: 'https://ubaydullah-tasnim.vercel.app/',
    frontend: 'https://github.com/ubaydullahtasnimosd/client',
    backend: 'https://github.com/ubaydullahtasnimosd/server',
    caseStudy: {
      overview: 'A personal brand and publishing showcase website created for author Ubaydullah Tasnim to organize books, articles, and reader engagements.',
      problem: 'The author needed a centralized digital hub to showcase published books, collect reader feedback, and feature blog posts with high readability.',
      solution: 'Created an elegant, content-focused platform with structured book categories, direct reading previews, and modern typography.',
      architecture: ['React (Vite)', 'Django REST API for content management', 'Tailwind CSS'],
      keyFeatures: [
        'Interactive book showcase with reading previews',
        'Filterable publication and article archive',
        'Clean, distraction-free reading mode UI'
      ],
      impact: 'Increased reader engagement and centralized all literary works in one accessible portfolio hub.'
    }
  },
  {
    image: projectImg3,
    title: 'Jamiya Husainiya Madrasha',
    description:
      'An educational institution website providing institutional information, courses, and digital resources.',
    tags: ['React', 'DRF', 'Tailwind', 'Education'],
    demoLink: 'https://jamiyahusainiya.vercel.app/',
    frontend: 'https://github.com/jamiyahusainiyaosd/client',
    backend: 'https://github.com/jamiyahusainiyaosd/server',
    caseStudy: {
      overview: 'A digital portal for Jamiya Husainiya educational institution designed for students, parents, and visitors to access news, notice boards, and course details.',
      problem: 'Notice boards and course information were hard to access digitally for remote students and guardians.',
      solution: 'Engineered an accessible web platform with an online notice board, department directory, and downloadable resource portal.',
      architecture: ['React Frontend', 'RESTful API Backend', 'Custom Responsive UI'],
      keyFeatures: [
        'Real-time digital notice board for updates',
        'Departmental and course curriculum overview',
        'Bilingual / accessible layout for all age groups'
      ],
      impact: 'Digitized institutional announcements and streamlined communication for over 500+ students and guardians.'
    }
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