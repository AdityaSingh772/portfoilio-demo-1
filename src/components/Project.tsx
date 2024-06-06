"use client";
import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faFileCode, faFolderClosed, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';

interface Skill {
  title: string;
  content: JSX.Element;
  icon: JSX.Element;
  icon2: JSX.Element;
}

const skills: Skill[] = [
  {
    title: "RentKaro",
    content: (
      <p>Group project. Developed a marketplace app for college campuses to rent, sell, and buy items.
        <br/><br/><b>↳</b> Next.js, Express.js, MongoDB, Tailwind CSS, Auth0, Railway, Vercel.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/RentKaro1.0" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
  },
  {
    title: "SheGuide",
    content: (
      <p>Hackathon project. Created a gender-inclusive free tech mentorship platform to tackle women s underrepresentation in tech.
        <br/><br/><b>↳</b> TypeScript, Node.js, Express.js, Next.js, MongoDB, Auth0, Rapid API, Gemini API.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/SHE-GUIDE-2" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
  },
  {
    title: "vCall",
    content: (
      <p>A video calling chat application with a minimal UI. A beginner project to understand various concepts of web development.
        <br/><br/><b>↳</b> Node.js, Express.js, WebSockets, WebRTC, socket.io.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/VIDEO-CALLING-ROOMS" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
  },
  {
    title: "Portfolio Website",
    content: (
      <p>Crafted a dynamic portfolio website showcasing projects and skills. Demonstrates proficiency in frontend development, including layout design, styling, and interactivity.
        <br/><br/><b>↳</b> Figma, Next.js, Tailwind CSS, framer-motion, Font Awesome, Google Fonts.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/portfoilio-demo-1" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to split the array into chunks
  const chunkArray = (array: Skill[], chunkSize: number): Skill[][] => {
    const chunks: Skill[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Split the skills array into chunks of 3
  const skillChunks = chunkArray(skills, 3);

  return (
    <div id='projects' className="py-12 px-4 bg-secbg min-w-screen mx-0 border-b-2 border-dotted border-secondary">
      <div className="flex justify-center py-[2.0rem] pb-[4rem] font-bold text-3xl md:text-5xl hover:text-primary text-transparent bg-clip-text bg-secondary text-secondary">Projects</div>
      <div className="flex flex-wrap mx-14 bg-secbg">
        {skillChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="flex flex-wrap w-full">
            {chunk.map((skill, index) => (
              <div key={index} className={`w-full sm:w-1/2 md:w-1/3 px-2 mb-8 flex justify-center ${index === 1 ? 'order-first sm:order-none' : ''}`}>
                <div className="transition ease-in-out delay hover:-translate-y-2 hover:-translate duration-300 bg-[#1b2d5f] p-8 rounded shadow-md hover:shadow-xl flex-grow">
                  <div className="flex flex-row justify-between">
                    {skill.icon}
                    {skill.icon2}
                  </div>
                  <div className="text-primary text-center mt-8 text-2xl font-semibold">{skill.title}</div>
                  <div className="text-secondary text-justify mt-2 font-mono">{skill.content}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-secondary mt-8 text-center">For more projects please visit my GitHub <a href="https://github.com/AdityaSingh772" target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} style={{ fontSize: '1.25rem' }} className="text-primary" /></a></div>
    </div>
  );
}

export default Projects;
