/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiExternalLink, FiGithub, FiCode, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  image,
  demoLink,
  frontend,
  backend,
  tags,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-400 transition-all duration-300"
        whileHover={{ y: -5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-105" : "scale-100"
            }`}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-70"
            }`}
          ></div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-full bg-blue-900/50 text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>

          {/* Project Links */}
          <div className="flex items-center gap-3">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors duration-300"
            >
              <FiExternalLink size={16} />
              <span>Live Demo</span>
            </a>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-300"
            >
              <FiCode size={16} />
              <span>Code</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative bg-gray-800 rounded-xl max-w-md w-full border border-gray-700 shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">View Code</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <a
                  href={frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <FiGithub size={20} />
                    <span>Frontend Code</span>
                  </div>
                  <FiExternalLink size={16} className="text-gray-400" />
                </a>

                {backend && (
                  <a
                    href={backend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition-colors duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <FiGithub size={20} />
                      <span>Backend Code</span>
                    </div>
                    <FiExternalLink size={16} className="text-gray-400" />
                  </a>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg text-white transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;