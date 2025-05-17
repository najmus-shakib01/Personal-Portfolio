import ExperienceData from "../../Data/Experiences";
import { motion } from "framer-motion";

const Experience = () => {
    const skillCategories = {
        "Frontend": ExperienceData.filter(skill => skill.category === "frontend"),
        "Backend": ExperienceData.filter(skill => skill.category === "backend"),
        "Tools": ExperienceData.filter(skill => skill.category === "tools"),
        "Other": ExperienceData.filter(skill => !skill.category)
    };

    return (
        <div id="skills" className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-blue-400">Skills</span>
                    </h1>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Technologies and tools I work with to create exceptional digital experiences
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="space-y-16">
                    {Object.entries(skillCategories).map(([category, skills]) => (
                        <div key={category} className="space-y-8">
                            <h2 className="text-xl md:text-2xl font-semibold text-white border-b border-gray-700 pb-2">
                                {category}
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                                {skills.map((data) => {
                                    const IconComponent = data.icon;
                                    return (
                                        <motion.a
                                            key={data.id}
                                            href={data.url}
                                            target={data.target}
                                            rel="noopener noreferrer"
                                            whileHover={{ y: -5 }}
                                            className="group relative p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 flex flex-col items-center"
                                        >
                                            <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-all duration-300 mb-3">
                                                {IconComponent ? (
                                                    <IconComponent 
                                                        color={data.color} 
                                                        className="w-8 h-8 md:w-10 md:h-10" 
                                                    />
                                                ) : null}
                                                {data.img ? (
                                                    <img 
                                                        src={data.img} 
                                                        width={data.width} 
                                                        className={`${data.extraClass} w-8 h-8 md:w-10 md:h-10`} 
                                                        alt={data.alt} 
                                                    />
                                                ) : null}
                                            </div>
                                            <span className="text-sm md:text-base font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                                                {data.name}
                                            </span>
                                            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-400/30 pointer-events-none transition-all duration-300"></div>
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Proficiency Indicator */}
                <div className="mt-16 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-lg font-semibold text-white mb-4">Proficiency Scale</h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                            <span className="text-gray-300">Advanced - Comfortable with production-level work</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></div>
                            <span className="text-gray-300">Intermediate - Can build features independently</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                            <span className="text-gray-300">Basic - Familiar and learning</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;