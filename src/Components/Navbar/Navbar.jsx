import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaCode,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaUser,
  FaRegCopyright
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
    { name: "Footer", href: "#footer", icon: <FaRegCopyright /> },  
    
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="#home" className="flex items-center gap-2">
            <img
              className="w-12 h-12 rounded-full border-2 border-blue-500 object-cover hover:border-blue-400 transition-all duration-300"
              src="./image/logos.png"
              alt="Website Logo"
            />
            <span className="text-xl font-bold text-white hidden md:block">
              Najmus Shakib
            </span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <motion.a
                href={link.href}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                whileHover={{ y: -2 }}
              >
                <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {link.icon}
                </span>
                <span>{link.name}</span>
                <FaArrowDown className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-gray-900/95 backdrop-blur-lg md:hidden z-40 flex items-center justify-center"
            >
              <motion.ul
                className="flex flex-col items-center gap-8 text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-blue-400">{link.icon}</span>
                      <span>{link.name}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
