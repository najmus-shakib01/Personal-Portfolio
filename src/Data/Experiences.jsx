import {
    FaBootstrap,
    FaCss3,
    FaFigma,
    FaGithub,
    FaHtml5,
    FaJs,
    FaPython,
    FaReact,
} from 'react-icons/fa'
import {
    SiAstro,
    SiC,
    SiCanva,
    SiCplusplus,
    SiDjango,
    SiMysql,
    SiNextdotjs,
    SiPayloadcms,
    SiPostgresql,
    SiSupabase,
    SiTailwindcss,
    SiVite,
} from 'react-icons/si'

// local images
const dsa = './image/dsa.png'
const alg = './image/alg.png'
const drf = './image/drf.png'
const postmen = './image/postmen.png'
const sslcommerz = './image/sslcommerz.png'
const vs_code = './image/vs-code.png'
const git = './image/git.png'
const oop = './image/oop.png'

const ExperienceData = [
    // Frontend
    { id: 1, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: FaHtml5, color: '#E34F26', target: '_blank', category: 'frontend', name: 'HTML' },
    { id: 2, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: FaCss3, color: '#1572b6', target: '_blank', category: 'frontend', name: 'CSS' },
    { id: 3, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: FaJs, color: '#F7DF1E', target: '_blank', category: 'frontend', name: 'JavaScript' },
    { id: 4, url: 'https://getbootstrap.com/', icon: FaBootstrap, color: '#7952B3', target: '_blank', category: 'frontend', name: 'Bootstrap' },
    { id: 5, url: 'https://react.dev/', icon: FaReact, color: '#61DAFB', target: '_blank', category: 'frontend', name: 'React' },
    { id: 6, url: 'https://nextjs.org/', icon: SiNextdotjs, color: '#000000', target: '_blank', category: 'frontend', name: 'Next.js' },
    { id: 7, url: 'https://tailwindcss.com/', icon: SiTailwindcss, color: '#38B2AC', target: '_blank', category: 'frontend', name: 'Tailwind CSS' },
    { id: 8, url: 'https://vitejs.dev/', icon: SiVite, color: '#646CFF', target: '_blank', category: 'frontend', name: 'Vite' },
    { id: 9, url: 'https://astro.build/', icon: SiAstro, color: '#FF5D01', target: '_blank', category: 'frontend', name: 'Astro' },

    // Backend
    { id: 10, url: 'https://www.python.org/', icon: FaPython, color: '#306998', target: '_blank', category: 'backend', name: 'Python' },
    { id: 11, url: 'https://www.djangoproject.com/', icon: SiDjango, color: '#0c4b33', target: '_blank', category: 'backend', name: 'Django' },
    { id: 12, url: 'https://www.mysql.com/', icon: SiMysql, color: '#4479A1', target: '_blank', category: 'backend', name: 'MySQL' },
    { id: 13, url: 'https://www.postgresql.org/', icon: SiPostgresql, color: '#336791', target: '_blank', category: 'backend', name: 'PostgreSQL' },
    { id: 14, url: 'https://supabase.com/', icon: SiSupabase, color: '#3ECF8E', target: '_blank', category: 'backend', name: 'Supabase' },
    { id: 15, url: 'https://payloadcms.com/', icon: SiPayloadcms, color: '#000000', target: '_blank', category: 'backend', name: 'Payload CMS' },
    { id: 16, img: drf, alt: 'drf', url: 'https://www.django-rest-framework.org/', width: 100, target: '_blank', category: 'backend', name: 'DRF' },
    { id: 17, img: sslcommerz, alt: 'sslcommerz', url: 'https://sslcommerz.com/', width: 100, target: '_blank', category: 'backend', name: 'Payment Gateway' },

    // Programming
    { id: 18, img: dsa, alt: 'dsa', url: 'https://www.geeksforgeeks.org/data-structures/', width: 50, target: '_blank', category: 'programming', name: 'Data Structures' },
    { id: 19, img: alg, alt: 'alg', url: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/', width: 100, target: '_blank', category: 'programming', name: 'Algorithms' },
    { id: 20, url: 'https://en.cppreference.com/w/c', icon: SiC, color: '#A8B9CC', target: '_blank', category: 'programming', name: 'C' },
    { id: 21, url: 'https://en.cppreference.com/w/cpp', icon: SiCplusplus, color: '#00599C', target: '_blank', category: 'programming', name: 'C++' },
    { id: 22, img: oop, alt: 'oop', url: 'https://www.geeksforgeeks.org/java/object-oriented-programming-oops-concept-in-java/', width: 80, target: '_blank', category: 'programming', name: 'OOP' },

    // Tools
    { id: 23, url: 'https://www.figma.com/', icon: FaFigma, color: 'rgb(181,125,171)', target: '_blank', category: 'tools', name: 'Figma' },
    { id: 24, url: 'https://github.com/', icon: FaGithub, color: '#181717', target: '_blank', category: 'tools', name: 'GitHub' },
    { id: 25, img: git, alt: 'git', url: 'https://git-scm.com/', width: 100, target: '_blank', category: 'tools', name: 'Git' },
    { id: 26, url: 'https://www.canva.com/', icon: SiCanva, color: '#00C4CC', target: '_blank', category: 'tools', name: 'Canva' },
    { id: 27, img: postmen, alt: 'postman', url: 'https://www.postman.com/', width: 50, target: '_blank', category: 'tools', name: 'Postman' },
    { id: 28, img: vs_code, alt: 'vscode', url: 'https://code.visualstudio.com/', width: 100, target: '_blank', category: 'tools', name: 'VS Code' },
]

export default ExperienceData;