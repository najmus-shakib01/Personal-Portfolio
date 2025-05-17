import profileimg from "../../assets/image/photo_2025-01-04_23-53-48 (2).jpg";
import TextChange from "../TextChange/TextChange";
import "./Home.css";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="text-white flex flex-col md:flex-row max-w-[1144px] p-10 pt-32 mx-auto items-center px-5 sm:px-10">
        {/* Text Section */}
        <div className="w-full sm:w-[80%] md:w-[60%] text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-normal tracking-tighter">
            <TextChange />
          </h1>
          <p className="text-md sm:text-sm md:text-xl tracking-tight mt-5 sm:mt-6 text-gray-300">
            Full Stack Developer specializing in modern web technologies and
            creating seamless user experiences.
          </p>
          <div className="flex gap-4 mt-8 justify-center sm:justify-start">
            <a
              href="https://drive.google.com/file/d/12j3pKafAFE42aA9KYj3j64pXWlr9hOWM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white py-3 px-6 text-lg font-semibold rounded-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="text-white py-3 px-6 text-lg font-semibold rounded-full border-2 border-blue-400 hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[80%] md:w-[40%] flex justify-center mt-10 md:mt-0 relative">
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]">
            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
            <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-spin-slow"></div>
            <img
              src={profileimg}
              alt="Profile Image"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/50"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
