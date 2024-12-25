"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const skills = [
  {
    title: "Programming Languages",
    content:
      "Proficient in multiple languages such as Java, C, Python, Go, JavaScript, and TypeScript. Well-versed in HTML, CSS, and SQL for full-stack development. Strong understanding of scripting and automation using Bash/Shell scripting.",
    icon: <FontAwesomeIcon icon={faCode} style={{ fontSize: '24px' }} className="text-primary" />,
  },
  {
    title: "Frameworks and Technologies",
    content:
      "Experienced in building robust and scalable applications with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Next.js. Skilled in RESTful APIs, WebSockets, and state management with Redux. Proficient in AWS (Amazon Web Services) for cloud-based solutions, FastAPI for building high-performance APIs, and Bootstrap for responsive design. Comfortable with Linux environments and version control with Git.",
    icon: <FontAwesomeIcon icon={faMicrochip} style={{ fontSize: '24px' }} className="text-primary" />,
  },
  {
    title: "Microservices Architecture",
    content:
      "Specializing in designing and implementing microservices using GoLang, gRPC, Docker, and Kubernetes for containerization and orchestration. I focus on creating scalable, distributed systems with efficient communication between services, leveraging the power of modern cloud-native technologies.",
    icon: <FontAwesomeIcon icon={faServer} style={{ fontSize: '24px' }} className="text-primary" />,
  },
  {
    title: "Databases",
    content:
      "Skilled in working with both relational and NoSQL databases such as PostgreSQL and MongoDB. Experienced in database design, query optimization, performance tuning, and ensuring data integrity. Familiar with complex querying and database management.",
    icon: <FontAwesomeIcon icon={faDatabase} style={{ fontSize: '24px' }} className="text-primary" />,
  },
  {
    title: "DS and Algorithms",
    content:
      "Strong foundation in Data Structures and Algorithms including Binary Trees, AVL Trees, Graph Theory, Dynamic Programming, Tries, Segment Trees, Fenwick Trees (Binary Indexed Tree), KMP Algorithm, Dijkstra's Algorithm, Disjoint Set Union (Union-Find), Topological Sort, and Suffix Arrays. Adept at solving complex problems with optimized solutions.",
    icon: <FontAwesomeIcon icon={faFileCode} style={{ fontSize: '24px' }} className="text-primary" />,
  },
  {
    title: "Blockchain Development",
    content:
      "Hands-on experience with Ethereum blockchain and smart contract development using Solidity. Proficient in deploying and testing smart contracts with frameworks like Hardhat, Ethers.js, and Thirdweb. Knowledge of Web3.js for blockchain interaction, and familiarity with building decentralized applications (dApps) and integrating with IPFS for decentralized storage.",
    icon: <FontAwesomeIcon icon={faBitcoinSign} style={{ fontSize: '24px' }} className="text-primary" />,
  },
  {
    title: "Cloud and DevOps",
    content:
      "Experience with cloud technologies such as AWS for deploying scalable web applications, and Docker for containerization. Familiar with CI/CD pipelines and Kubernetes for orchestration and automation. Aiming for streamlined, reliable, and scalable deployments.",
    icon: <FontAwesomeIcon icon={faServer} style={{ fontSize: '24px' }} className="text-primary" />,
  },
  {
    title: "Version Control and Collaboration",
    content:
      "Proficient in using Git for version control and GitHub for code hosting and collaboration. Familiar with Agile methodologies and project management tools like Jira to ensure efficient collaboration within development teams.",
    icon: <FontAwesomeIcon icon={faCode} style={{ fontSize: '24px' }} className="text-primary" />,
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id='skills' className="py-12 px-4 bg-pribg min-w-screen m-x-0 border-b-2 border-dotted border-secondary">
      <div className="transision ease-in-out delay-150 mb-[4rem] textJS flex justify-center font-bold text-[3rem] min-w-screen hover:drop-shadow-xl hover:text-primary text-transparent bg-clip-text bg-secondary text-secondary">
        Skills
      </div>
      <div className="flex flex-wrap justify-center mx-[5.5rem] bg-pribg">
        {skills.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-8 flex justify-center">
            <div
              className="transition ease-in-out delay hover:-translate-y-2 hover:-translate duration-300 bg-[#1b2d5f] p-8 rounded shadow-md hover:shadow-xl flex-grow"
            >
              <div className="text-center align-middle">
                {skill.icon}
              </div>
              <div className="text-primary text-center mt-8 text-2xl font-semibold">{skill.title}</div>
              <div className="text-secondary text-justify text-sm mt-2 font-mono">{skill.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
