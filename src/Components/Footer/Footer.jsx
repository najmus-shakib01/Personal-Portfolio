import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaCode,
  FaLink,
  FaUser,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const programmingLinks = [
    {
      name: "CodeForces",
      url: "https://codeforces.com/profile/Shakibosd_02",
      icon: <FaCode />,
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/syednazmusshaki1",
      icon: <FaCode />,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/syednazmusshakib94/",
      icon: <FaCode />,
    },
    {
      name: "CodingNinjas",
      url: "https://www.naukri.com/code360/profile/504a45c9-7125-40a5-b87e-4a784afbc18b",
      icon: <FaCode />,
    },
    { name: "CSES", url: "https://cses.fi/user/221344", icon: <FaCode /> },
    {
      name: "Eolymp",
      url: "https://basecamp.eolymp.com/en/users/user379527",
      icon: <FaCode />,
    },
    {
      name: "GeeksForGeeks",
      url: "https://www.geeksforgeeks.org/user/syednazmus2qqv/",
      icon: <FaCode />,
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home", icon: <FaUser /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaCode /> },
    { name: "Projects", href: "#projects", icon: <FaLink /> },
    { name: "Contact", href: "#contact", icon: <FaUser /> },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/syednazmusshakib.shakib",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/syed_shaki27278",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/shakibosd/",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/syed-nazmus-shakib-686985264/",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaGithub />,
      url: "https://github.com/Shakibosd",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@syednazmusshakib1833",
      color: "hover:text-red-600",
    },
  ];

  return (
    <footer
      id="footer"
      className="w-full relative bg-gray-900 text-white pt-16 pb-8"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-gray-900/80"></div>
      <div className="absolute inset-0 bg-[url('/image/footer-bg.jpg')] bg-cover bg-center opacity-5"></div>

      {/* Footer Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Programming Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaCode className="text-blue-400" />
              <span>Coding Profiles</span>
            </h2>
            <ul className="space-y-3">
              {programmingLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FaLink className="text-blue-400" />
              <span>Quick Links</span>
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span
                    className={`text-2xl ${social.color} transition-colors duration-300`}
                  >
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Syed Najmus Shakib. All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
