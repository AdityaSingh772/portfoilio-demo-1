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

// const link1 = <Link href="www.google.com"><FontAwesomeIcon icon={faFolderClosed} style={{fontSize: '2rem' }} className="text-primary"/></Link>


const skills = [
  {
    title: "SheGuide",
    content:
      <p>Hackathon project. Created a gender-inclusive free tech mentorship platform to tackle women s underrepresentation in tech. For more description please take a look at project.
        <br/><br/><b>↳</b>TypeScript, Node.js, Express.js, Next.js, MongoDB, Auth0, Gender detection Rapid Api, gemini pro model from Google`s gemini api.
      </p>,
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{fontSize: '2rem' }} className="text-primary"/>,
    icon2: <a href="https://github.com/AdityaSingh772/SHE-GUIDE-2" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{fontSize: '1.25rem' }} className="text-primary"/></a>,
  },
  {
    title: "Portfolio Website",
    content:
      <p>Crafted a dynamic and visually appealing portfolio website showcasing projects and skills. This project demonstrates proficiency in frontend development, including layout design, styling, and interactivity,
         showcasing expertise in web development technologies.
        <br/><br/><b>↳</b> Figma, Next.js, tailwind CSS, framer-motion, font awesome, google fonts.
      </p>,
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{fontSize: '2rem' }} className="text-primary"/>,
    icon2: <a href="https://github.com/AdityaSingh772/portfoilio-demo-1" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{fontSize: '1.25rem' }} className="text-primary"/></a>,
  },
  {
    title: "vCall",
    content:
      <p>It is a video calling chat application with minimal ui. A beginner project for me to understand various concepts of web development.
        <br/><br/><b>↳</b> Node.js, express.js, WebSockets, WebRTC, socket.io .
      </p>,
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{fontSize: '2rem' }} className="text-primary"/>,
    icon2: <a href="https://github.com/AdityaSingh772/VIDEO-CALLING-ROOMS" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{fontSize: '1.25rem' }} className="text-primary"/></a>,
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id='projects' className="py-12 px-4 bg-secbg min-w-screen m-x-0 border-b-2 border-dotted border-secondary">
      <div className="transision ease-in-out delay-150 mb-[4rem] textJS  flex justify-center font-bold text-[3rem] min-w-screen hover:drop-shadow-xl hover:text-primary text-transparent bg-clip-text bg-secondary text-secondary" >Projects</div>
      <div className="flex flex-wrap mx-[5.5rem] bg-secbg">
        {skills.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-8 flex">
            <div
              className="transition ease-in-out delay hover:-translate-y-2 hover:-translate duration-300 bg-[#1b2d5f] p-8 rounded shadow-md hover:shadow-xl flex-grow"
              
            >
              <div className="flex flex-row justify-between">
                {skill.icon}
                {skill.icon2}
              </div>
              <div className="text-primary text-center  mt-8 text-2xl font-semibold">{skill.title}</div>
              <div className="text-secondary text-justify mt-2 font-mono">{skill.content}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-secondary mt-[2rem] text-center">For more projects please visit my github <a href="https://github.com/AdityaSingh772" target="_blank"><FontAwesomeIcon icon={faUpRightFromSquare} style={{fontSize: '1.25rem' }} className="text-primary"/></a></div>
    </div>
  );
}

export default Projects;
