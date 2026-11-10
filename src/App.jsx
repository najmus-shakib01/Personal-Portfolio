import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Certificate from './Components/Certificate/Certificate'
import Contact from './Components/Contact/Contact'
import Experience from './Components/Experience/Experience'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Project from './Components/Project/Project'
import './index.css'

const App = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            border: 'var(--border)',
            boxShadow: 'var(--shadow)',
            borderRadius: '0',
            background: 'var(--white)',
            color: 'var(--black)',
          },
        }}
      />
      <Navbar />
      <main>
        <Home />
        <About />
        <Education />
        <Certificate />
        <Experience />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App