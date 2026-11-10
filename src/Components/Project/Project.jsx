import { useTranslation } from 'react-i18next'
import projectImg1 from '../../assets/image/flower-seal.png'
import projectImg3 from '../../assets/image/jamiya.png'
import projectImg2 from '../../assets/image/ubaydullah.png'
import ProjectCard from './ProjectCard'

const defaultProjects = {
  luxecommerce: {
    title: 'LuxeCommerce',
    description: 'An e-commerce platform for LuxeCommerce – Modern E-Commerce Platform with full-stack functionality.',
    overview: 'LuxeCommerce is a modern full-stack e-commerce web application designed to deliver seamless shopping experiences with high performance.',
    problem: 'Traditional e-commerce platforms often suffer from slow page transitions, complex checkout steps, and unresponsive mobile UI.',
    solution: 'Built a decoupled frontend using React and Tailwind CSS paired with Django REST Framework backend for fast RESTful API operations and instant state updates.',
    keyFeatures: [
      'Instant product filtering and search without page reload',
      'Secure cart management with persistent local state',
      'Responsive checkout workflow optimized for mobile users',
    ],
    impact: 'Improved page load speed by ~45% and delivered an intuitive, zero-friction checkout experience.',
  },
  ubaydullah: {
    title: 'Ubaydullah Tasnim',
    description: 'A professional author website showcasing works, articles, and publications.',
    overview: 'A personal brand and publishing showcase website created for author Ubaydullah Tasnim to organize books, articles, and reader engagements.',
    problem: 'The author needed a centralized digital hub to showcase published books, collect reader feedback, and feature blog posts with high readability.',
    solution: 'Created an elegant, content-focused platform with structured book categories, direct reading previews, and modern typography.',
    keyFeatures: [
      'Interactive book showcase with reading previews',
      'Filterable publication and article archive',
      'Clean, distraction-free reading mode UI',
    ],
    impact: 'Increased reader engagement and centralized all literary works in one accessible portfolio hub.',
  },
  jamiya: {
    title: 'Jamiya Husainiya Madrasha',
    description: 'An educational institution website providing institutional information, courses, and digital resources.',
    overview: 'A digital portal for Jamiya Husainiya educational institution designed for students, parents, and visitors to access news, notice boards, and course details.',
    problem: 'Notice boards and course information were hard to access digitally for remote students and guardians.',
    solution: 'Engineered an accessible web platform with an online notice board, department directory, and downloadable resource portal.',
    keyFeatures: [
      'Real-time digital notice board for updates',
      'Departmental and course curriculum overview',
      'Bilingual / accessible layout for all age groups',
    ],
    impact: 'Digitized institutional announcements and streamlined communication for over 500+ students and guardians.',
  },
}

const projectConfigs = [
  {
    id: 'luxecommerce',
    image: projectImg1,
    tags: ['React', 'DRF', 'Tailwind', 'E-Commerce'],
    demoLink: 'https://e-shops-bice.vercel.app/',
    frontend: 'https://github.com/najmus-shakib01/E-Commerce-Client',
    backend: 'https://github.com/najmus-shakib01/E-Commerce-Server',
    architecture: ['React.js for SPA UI', 'Django REST Framework API', 'JWT Authentication', 'Tailwind CSS UI design'],
  },
  {
    id: 'ubaydullah',
    image: projectImg2,
    tags: ['React', 'DRF', 'Tailwind', 'Author'],
    demoLink: 'https://ubaydullah-tasnim.vercel.app/',
    frontend: 'https://github.com/ubaydullahtasnimosd/client',
    backend: 'https://github.com/ubaydullahtasnimosd/server',
    architecture: ['React (Vite)', 'Django REST API for content management', 'Tailwind CSS'],
  },
  {
    id: 'jamiya',
    image: projectImg3,
    tags: ['React', 'DRF', 'Tailwind', 'Education'],
    demoLink: 'https://jamiyahusainiya.vercel.app/',
    frontend: 'https://github.com/jamiyahusainiyaosd/client',
    backend: 'https://github.com/jamiyahusainiyaosd/server',
    architecture: ['React Frontend', 'RESTful API Backend', 'Custom Responsive UI'],
  },
]

const Project = () => {
  const { t, i18n } = useTranslation('projects')
  const isBn = i18n.language === 'bn'

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
        <div className="section-header">
          <span className="tag">{t('tag', 'Work')}</span>
          <h2 className="section-title">
            {t('title_prefix', 'My')} <span>{t('title_highlight', 'Projects')}</span>
          </h2>
          <p className="section-desc">
            {t('subtitle', 'A collection of my recent work and full-stack contributions')}
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
          {projectConfigs.map(item => {
            const def = defaultProjects[item.id]
            const rawFeatures = isBn ? t(`items.${item.id}.keyFeatures`, { returnObjects: true }) : def.keyFeatures
            const keyFeatures = Array.isArray(rawFeatures) ? rawFeatures : def.keyFeatures

            const rawTags = isBn ? t(`items.${item.id}.tags`, { returnObjects: true }) : item.tags
            const tags = Array.isArray(rawTags) ? rawTags : item.tags

            const rawArch = isBn ? t(`items.${item.id}.architecture`, { returnObjects: true }) : item.architecture
            const architecture = Array.isArray(rawArch) ? rawArch : item.architecture

            const caseStudy = {
              overview: isBn ? t(`items.${item.id}.overview`, def.overview) : def.overview,
              problem: isBn ? t(`items.${item.id}.problem`, def.problem) : def.problem,
              solution: isBn ? t(`items.${item.id}.solution`, def.solution) : def.solution,
              architecture,
              keyFeatures,
              impact: isBn ? t(`items.${item.id}.impact`, def.impact) : def.impact,
            }

            return (
              <ProjectCard
                key={item.id}
                title={isBn ? t(`items.${item.id}.title`, def.title) : def.title}
                description={isBn ? t(`items.${item.id}.description`, def.description) : def.description}
                image={item.image}
                tags={tags}
                demoLink={item.demoLink}
                frontend={item.frontend}
                backend={item.backend}
                caseStudy={caseStudy}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Project
