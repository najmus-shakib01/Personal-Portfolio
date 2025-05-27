import projectImg1 from '../../assets/image/flower-seal.png';
import projectImg2 from '../../assets/image/ubaydullah.png';
import projectImg3 from '../../assets/image/jamiya.png';
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Project = () => {
    const projects = [
        {
            image: projectImg1,
            title: "Flower Seal",
            description: "An e-commerce platform for flower sales management with full-stack functionality.",
            tags: ["React", "Django Rest Framework", "Tailwind", "E-Com."],
            demoLink: "https://flower-sell.vercel.app/",
            frontend: "https://github.com/najmus-shakib01/Flower-Sell-Frontend",
            backend: "https://github.com/najmus-shakib01/Flower-Sell-Backend",
        },
        {
            image: projectImg2,
            title: "Ubaydullah Tasnim",
            description: "A professional author website showcasing works and publications.",
            tags: ["React", "Django Rest Framework", "Tailwind", "Author"],
            demoLink: "https://ubaydullah-tasnim.vercel.app/",
            frontend: "https://github.com/ubaydullahtasnimosd/client",
            backend: "https://github.com/ubaydullahtasnimosd/server",
        },
        {
            image: projectImg3,
            title: "Jamiya Husainiya Madrasha",
            description: "An educational institution website with information and resources.",
            tags: ["React", "Django Rest Framework", "Tailwind", "Education"],
            demoLink: "https://jamiyahusainiya.vercel.app/",
            frontend: "https://github.com/jamiyahusainiyaosd/client",
            backend: "https://github.com/jamiyahusainiyaosd/server",
        },
    ];
    return (
        <div id="projects" className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h1 
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        My <span className="text-blue-400">Projects</span>
                    </motion.h1>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
                    <motion.p 
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        A collection of my recent work and contributions
                    </motion.p>
                </div>

                {/* Projects Grid */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};


export default Project;