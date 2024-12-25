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
  deploymentLink: string;  
}

const skills: Skill[] = [
  {
    title: "FundChain",
    content: (
      <p>Built a decentralized crowdfunding platform for Indian startups using Solidity and Ethers.js. Verified startups with Startup India certification. Automated secure transactions using smart contracts and ensured transparent on-chain funding to reduce fraud. Integrated a chatbot using the Gemini API for real-time Web3 and funding education.
        <br /><br /><b>↳</b> Solidity, Hardhat, Ethers.js, Next.js, Tailwind CSS, Vercel.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: (
      <a href="https://github.com/AdityaSingh772/FundChain" target="_blank">
        <FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" />
      </a>
    ),
    deploymentLink: "https://fund-raise-tau.vercel.app/",  
  },
  {
    title: "RentKaro",
    content: (
      <p>Developed a marketplace web application to facilitate renting, selling, and buying items on college campuses. Implemented secure authentication and integrated a clean user interface. Hosted on Vercel for production deployment.
        <br /><br /><b>↳</b> Next.js, Express.js, MongoDB, Tailwind CSS, Auth0, Railway, Vercel.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/RentKaro1.0" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
    deploymentLink: "https://rent-karo.vercel.app/",  
  },
  {
    title: "SheGuide",
    content: (
      <p>Created a gender-inclusive mentorship platform aimed at supporting women in tech. The application connects mentees and mentors to bridge the gender gap in the tech industry, leveraging a modern stack for full-stack development.
        <br /><br /><b>↳</b> TypeScript, Node.js, Express.js, Next.js, MongoDB, Auth0, Rapid API, Gemini API.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/SHE-GUIDE-2" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
    deploymentLink: "https://sheguide.vercel.app/",
  },
  {
    title: "BestRozgar",
    content: (
      <p>Developed a mobile application for discovering the best job opportunities nearby. Integrated job filters to personalize job search and implemented Firebase for real-time data synchronization.
        <br /><br /><b>↳</b> React Native, Expo, Firebase.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/BestRozgar" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
    deploymentLink: "https://bestrozgar.app",  
  },
  {
    title: "vCall",
    content: (
      <p>A real-time video calling application built with WebRTC and WebSockets to allow secure video communication between users. The minimalistic UI ensures a smooth experience even on slower networks.
        <br /><br /><b>↳</b> Node.js, Express.js, WebSockets, WebRTC, socket.io.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/VIDEO-CALLING-ROOMS" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
    deploymentLink: "https://vcall-app.vercel.app/",  
  },
  {
    title: "Portfolio Website",
    content: (
      <p>Developed a dynamic and responsive portfolio website to showcase personal projects and skills. Focused on clean design, smooth animations, and optimized performance across various devices.
        <br /><br /><b>↳</b> Figma, Next.js, Tailwind CSS, framer-motion, Font Awesome, Google Fonts.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/portfoilio-demo-1" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
    deploymentLink: "https://aditya-portfolio-singh.vercel.app/", 
  },
  {
    title: "focusMonk",
    content: (
      <p>This Google Chrome extension helps users avoid distractions by blocking websites like Facebook, Instagram, and Twitter while a focus timer is active, improving productivity.
        <br /><br /><b>↳</b> JavaScript, Google Chrome Extensions API.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/focusMonk" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
    deploymentLink: "https://chrome.google.com/webstore/detail/focusmonk",  
  },
  {
    title: "brushyy",
    content: (
      <p>A collaborative whiteboard for teaching and learning. This canvas-based application allows multiple users to draw and collaborate on shared boards in real-time.
        <br /><br /><b>↳</b> React, Node.js, Socket.io, HTML5 Canvas.
      </p>
    ),
    icon: <FontAwesomeIcon icon={faFolderClosed} style={{ fontSize: '2rem' }} className="text-primary" />,
    icon2: <a href="https://github.com/AdityaSingh772/brushyy" target="_blank"><FontAwesomeIcon icon={faCodeBranch} style={{ fontSize: '1.25rem' }} className="text-primary" /></a>,
    deploymentLink: "https://brushyy.vercel.app",  
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
          <div key={chunkIndex} className="flex flex-wrap w-full justify-center">
            {chunk.map((skill, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-8 flex justify-center">
                <div className="transition ease-in-out delay hover:-translate-y-2 hover:-translate duration-300 bg-[#1b2d5f] p-8 rounded shadow-md hover:shadow-xl flex-grow">
                  <div className="flex flex-row justify-between">
                    {skill.icon}
                    {skill.icon2}
                  </div>
                  <div className="text-primary text-center mt-8 text-2xl font-semibold">{skill.title}</div>
                  <div className="text-secondary text-justify mt-2 font-mono">{skill.content}</div>
                  {/* Add deployment link button */}
                  <div className="text-center mt-4">
                    <a href={skill.deploymentLink} target="_blank" className="text-primary font-semibold underline">
                      View Deployment
                    </a>
                  </div>
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
