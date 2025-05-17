// recct icon
import { FaBootstrap, FaCss3, FaFigma, FaGithub, FaHtml5, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import { SiC, SiCanva, SiCplusplus, SiDjango, SiMysql, SiPhp, SiPostgresql, SiTailwindcss, SiVite } from "react-icons/si";

// local img
const dsa = './image/dsa.png';
const alg = './image/alg.png';
const drf = './image/drf.png';
const postmen = './image/postmen.png';

const ExperienceData = [
    // react icon
    {
        id: 1, url: "https://developer.mozilla.org/en-US/docs/Web/HTML", icon: FaHtml5, color: "#E34F26", target: "_blank",
    },
    {
        id: 2, url: "https://developer.mozilla.org/en-US/docs/Web/CSS", icon: FaCss3, color: "#1572b6", target: "_blank",
    },
    {
        id: 3, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: FaJs, color: "#F7DF1E", target: "_blank",
    },
    {
        id: 4, url: "https://getbootstrap.com/", icon: FaBootstrap, color: "#7952B3", target: "_blank",
    },
    {
        id: 5, url: "https://react.dev/", icon: FaReact, color: "#61DAFB", target: "_blank",
    },
    {
        id: 6, url: "https://www.figma.com/", icon: FaFigma, color: "rgb(181,125,171)", target: "_blank",
    },
    {
        id: 7, url: "https://www.python.org/", icon: FaPython, color: "#306998", target: "_blank",
    },
    {
        id: 8, url: "https://github.com/", icon: FaGithub, color: "#ddd", target: "_blank",
    },
    {
        id: 9, url: "https://www.java.com/", icon: FaJava, color: "#007396", target: "_blank",
    },
    {
        id: 10, url: "https://tailwindcss.com/", icon: SiTailwindcss, color: "#38B2AC", target: "_blank",
    },
    {
        id: 11, url: "https://vitejs.dev/", icon: SiVite, color: "#646CFF", target: "_blank",
    },
    {
        id: 12, url: "https://www.canva.com/", icon: SiCanva, color: "#00C4CC", target: "_blank",
    },
    {
        id: 13, url: "https://www.djangoproject.com/", icon: SiDjango, color: "#1f4", target: "_blank",
    },
    {
        id: 14, url: "https://www.mysql.com/", icon: SiMysql, color: "#4479A1", target: "_blank",
    },
    {
        id: 15, url: "https://www.postgresql.org/", icon: SiPostgresql, color: "#336791", target: "_blank",
    },
    {
        id: 16, url: "https://en.cppreference.com/w/c", icon: SiC, color: "#A8B9CC", target: "_blank",
    },
    {
        id: 17, url: "https://en.cppreference.com/w/cpp", icon: SiCplusplus, color: "#00599C", target: "_blank",
    },
    {
        id: 18, url: "https://www.php.net/", icon: SiPhp, color: "#777BB4", target: "_blank",
    },
    // local img
    {
        id: 19, img: dsa, alt:"dsa", url:"https://www.geeksforgeeks.org/data-structures/", width: 50, extraClass: "", target: "_blank",
    }, 
    {
        id: 20, img: alg, alt:"alg", url:"https://www.geeksforgeeks.org/fundamentals-of-algorithms/", width: 50, extraClass: "filter brightness-1 invert", target: "_blank",
    }, 
    {
        id: 21, img: drf, alt:"drf", url:"https://www.django-rest-framework.org/", width: 100, extraClass: "filter brightness-1 invert", target: "_blank",
    }, 
    {
        id: 22, img: postmen, alt:"postmen", url:"https://www.postman.com/", width: 50, extraClass: "", target: "_blank",
    },
];

export default ExperienceData;