import './App.css';
import './index.css';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from './Components/About/About';
import Experience from "./Components/Experience/Experience";
import Project from "./Components/Project/Project";
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;