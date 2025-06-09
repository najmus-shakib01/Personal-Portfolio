import { Toaster } from "react-hot-toast";
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from "./Components/Experience/Experience";
import Footer from './Components/Footer/Footer';
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Project/Project";
import './index.css';

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-auto w-full overflow-hidden">
      <Toaster position="top-right" />
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