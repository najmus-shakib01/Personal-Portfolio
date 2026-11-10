import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Bengali translations only (English is the codebase default)
import commonBn from './bn/common.json'
import navbarBn from './bn/navbar.json'
import homeBn from './bn/home.json'
import aboutBn from './bn/about.json'
import educationBn from './bn/education.json'
import certificateBn from './bn/certificate.json'
import skillsBn from './bn/skills.json'
import projectsBn from './bn/projects.json'
import contactBn from './bn/contact.json'
import footerBn from './bn/footer.json'

// Determine initial language: URL path takes precedence ('/bn' => 'bn', otherwise 'en')
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const path = window.location.pathname
    if (path === '/bn' || path.startsWith('/bn/')) {
      return 'bn'
    }
  }
  return 'en'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      bn: {
        common: commonBn,
        navbar: navbarBn,
        home: homeBn,
        about: aboutBn,
        education: educationBn,
        certificate: certificateBn,
        skills: skillsBn,
        projects: projectsBn,
        contact: contactBn,
        footer: footerBn,
      },
    },
    lng: getInitialLanguage(),
    fallbackLng: false, // Default is plain English in the code
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
