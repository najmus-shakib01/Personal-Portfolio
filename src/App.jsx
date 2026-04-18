import { Toaster } from 'react-hot-toast'
import './App.css'
import About from './Components/About/About'
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
            border: '2px solid #0a0a0a',
            boxShadow: '4px 4px 0px #0a0a0a',
            borderRadius: '0',
            background: '#fafaf8',
            color: '#0a0a0a',
          },
        }}
      />
      <Navbar />
      <main>
        <Home />
        <About />
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