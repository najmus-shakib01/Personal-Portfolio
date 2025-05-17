import aboutImg from "../../assets/image/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";

const About = () => {
    return (
        <div id="about" className="w-full bg-gradient-to-b from-gray-800 to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        About <span className="text-blue-400">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                        My journey from programming novice to full-stack developer
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Image Section */}
                    <div className="lg:w-1/3 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                            <img 
                                src={aboutImg} 
                                alt="About" 
                                className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-contain rounded-lg shadow-xl border-4 border-gray-800 group-hover:border-blue-400 transition duration-300"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="lg:w-2/3 space-y-8">
                        {/* Timeline Item 1 */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700">
                                <div className="absolute top-0 left-0 w-full h-4 bg-blue-500 rounded-full"></div>
                            </div>
                            <div className="absolute left-0 top-0 -ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 shadow-lg shadow-blue-500/30">
                                <FaCode className="text-white" />
                            </div>
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition duration-300 group-hover:bg-gray-800/70">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <IoArrowForward className="text-blue-400" />
                                    Frontend Development Journey
                                </h3>
                                <p className="text-gray-300">
                                    Initially intimidated by programming, I discovered my passion through building websites with <span className="text-blue-400 font-medium">HTML</span>, <span className="text-blue-400 font-medium">CSS</span>, and <span className="text-blue-400 font-medium">JavaScript</span>. My enthusiasm grew as I mastered <span className="text-blue-400 font-medium">React+Vite</span>, creating increasingly complex and interactive web applications that showcased my evolving design sensibilities and technical skills.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 2 */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700">
                                <div className="absolute top-0 left-0 w-full h-4 bg-purple-500 rounded-full"></div>
                            </div>
                            <div className="absolute left-0 top-0 -ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 shadow-lg shadow-purple-500/30">
                                <FaServer className="text-white" />
                            </div>
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition duration-300 group-hover:bg-gray-800/70">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <IoArrowForward className="text-purple-400" />
                                    Backend Development Expertise
                                </h3>
                                <p className="text-gray-300">
                                    Through structured learning in <span className="text-purple-400 font-medium">OOP</span> and <span className="text-purple-400 font-medium">Database</span> systems, I developed robust backend solutions using <span className="text-purple-400 font-medium">Python</span>, <span className="text-purple-400 font-medium">Django</span>, and <span className="text-purple-400 font-medium">Django REST framework</span>. I gained proficiency in building <span className="text-purple-400 font-medium">RESTful APIs</span> and testing them with <span className="text-purple-400 font-medium">Postman</span>, enabling seamless frontend-backend integration.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item 3 */}
                        <div className="relative pl-12 group">
                            <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-700">
                                <div className="absolute top-0 left-0 w-full h-4 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="absolute left-0 top-0 -ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30">
                                <FaLaptopCode className="text-white" />
                            </div>
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-green-400/50 transition duration-300 group-hover:bg-gray-800/70">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                                    <IoArrowForward className="text-green-400" />
                                    Programming Foundation
                                </h3>
                                <p className="text-gray-300">
                                    My technical foundation was built through rigorous problem-solving in <span className="text-green-400 font-medium">C</span> and <span className="text-green-400 font-medium">C++</span>, followed by <span className="text-green-400 font-medium">data structures</span> and <span className="text-green-400 font-medium">algorithms</span>. While I appreciated the logical training, I discovered my true passion lies in <span className="text-green-400 font-medium">application development</span>, where I can combine technical skills with creative problem-solving.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;