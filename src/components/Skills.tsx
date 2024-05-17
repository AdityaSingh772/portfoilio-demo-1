"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faMicrochip } from '@fortawesome/free-solid-svg-icons';


const skills = [
  {
    title: "DS and Algorithms",
    content:
      "Binary Trees, AVL Trees, Graph Theory, Dynamic Programming, Trie, Segment Trees, Fenwick Trees (Binary Indexed Tree), KMP Algorithm, Dijkstra's Algorithm, Disjoint Set Union (Union-Find), Topological Sort, Tarjan's Algorithm, Suffix Arrays,",
    icon: <FontAwesomeIcon icon={faFileCode} style={{fontSize: '24px' }} className="text-primary"/>,
  },
  {
    title: "Programming languages",
    content:
      "Java, C, Python, JavaScript, TypeScript, HTML, CSS, SQL, Bash/Shell scripting",
    icon: <FontAwesomeIcon icon={faCode} style={{fontSize: '24px' }} className="text-primary"/>,
  },
  {
    title: "Frameworks and Technologies",
    content:
      "MERN Stack (MongoDB, Express.js, React, Node.js), Next js, Git, RESTful APIs, Bootstrap, Fast APIs, Firebase, WebSockets, AWS (Amazon Web Services), Redux, Linux",
    icon: <FontAwesomeIcon icon={faMicrochip} style={{fontSize: '24px' }} className="text-primary" />,
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id='skills' className="py-12 px-4 bg-pribg min-w-screen m-x-0 border-b-2 border-dotted border-secondary">
      <div className="transision ease-in-out delay-150 mb-[4rem] textJS  flex justify-center font-bold text-[3rem] min-w-screen hover:drop-shadow-xl hover:text-primary text-transparent bg-clip-text bg-secondary text-secondary" >Skills</div>
      <div className="flex flex-wrap mx-[5.5rem] bg-pribg">
        {skills.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-8 flex">
            <div
              className="transition ease-in-out delay hover:-translate-y-2 hover:-translate duration-300 bg-[#1b2d5f] p-8 rounded shadow-md hover:shadow-xl flex-grow"
              
            >
              <div className="text-center align-middle">
                {skill.icon}
              </div>
              <div className="text-primary text-center  mt-8 text-2xl font-semibold">{skill.title}</div>
              <div className="text-secondary text-justify text-sm mt-2 font-mono">{skill.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
