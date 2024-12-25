import React from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faListCheck, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function AboutAdi() {
    return (
        <>
            <div className='min-h-screen md:pb-16 pb-8 md:pt-16 pt-8 bg-secbg border-b-2 border-dotted border-secondary' id='aboutadi'>
                <div className="textJS flex justify-center font-bold text-3xl md:text-5xl hover:text-primary text-transparent bg-clip-text bg-secondary text-secondary">
                    About Me
                </div>

                <div className="flex flex-col gap-8 mt-12">

                    <div className="flex flex-col md:flex-row h-auto w-11/12 mx-auto justify-center">
                        <div className='flex flex-col w-full justify-center z-10'>
                            <div className="fontJS-subheading text-primary poppins text-xl md:text-2xl"><span className='text-secondary'>1. </span> Education</div>
                            <div className='roboto text-secondary text-justify text-sm md:text-base'>
                            Hi, I’m Aditya, a Junior at the National Institute of Technology Rourkela, pursuing a minor in Computer Science and Engineering alongside my major in Electrical Engineering.
                             My academic focus lies in computer science topics such as programming, algorithms, and software development, complemented by insights from electrical engineering.
                              This unique combination equips me with a versatile skill set to solve complex technical challenges and innovate in the software development landscape.
                            </div>
                        </div>

                        <div className="flex justify-center items-center h-48 md:h-full w-full md:w-1/2 mt-4 md:mt-0">
                            <div className="relative hover:cursor-pointer w-32 h-32 md:w-48 md:h-48">
                                <FontAwesomeIcon icon={faUserGraduate} style={{fontSize: '5rem' }} className='text-center text-primary'/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse md:flex-row h-auto w-11/12 mx-auto justify-center">
                        <div className="flex justify-center items-center h-48 md:h-full w-full md:w-1/2 mt-4 md:mt-0">
                            <div className="relative hover:cursor-pointer w-32 h-32 md:w-48 md:h-48">
                                <FontAwesomeIcon icon={faGears} style={{fontSize: '5rem' }} className='text-center text-primary'/>
                            </div>
                        </div>

                        <div className='flex flex-col w-full justify-center z-10'>
                            <div className="fontJS-subheading text-primary poppins text-xl md:text-2xl"><span className='text-secondary'>2. </span> Technical Expertise</div>
                            <div className='roboto text-secondary text-justify text-sm md:text-base'>
                            I am proficient in Java, GO, JavaScript, C, and Python, with a strong focus on Web Development using the MERN stack and Next.js 14 to build scalable and responsive web applications.
                             I specialize in developing GoLang-based microservices using gRPC and Docker for creating efficient, distributed systems. In addition, I have experience in blockchain development with Solidity, Hardhat, and Ethers.js, building decentralized applications.
                              I am skilled in PostgreSQL and MongoDB, and have solved 700+ problems on LeetCode along with 50+ SQL challenges, demonstrating my proficiency in Data Structures and Algorithms.
                             This combination of technical expertise enables me to tackle complex challenges and deliver impactful solutions.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row h-auto w-11/12 mx-auto justify-center">
                        <div className='flex flex-col w-full justify-center z-10'>
                            <div className="fontJS-subheading text-primary poppins text-xl md:text-2xl"><span className='text-secondary'>3. </span> Current Focus and Projects</div>
                            <div className='roboto text-secondary text-justify text-sm md:text-base'>
                            I am currently focused on developing GoLang-based microservices,
                             working on a large-scale project to implement scalable, distributed systems. 
                             My work involves leveraging tools like gRPC and Docker to create efficient, robust architectures. 
                             Additionally, I am exploring blockchain technologies, with experience in Solidity and frameworks like Hardhat and Ethers.js, particularly in building decentralized applications.
                              Alongside my technical focus, I have developed several projects using the MERN stack to enhance user experience and application efficiency.
                               As I continue to expand my knowledge in microservices and Web3, I am excited to collaborate on innovative solutions that push the boundaries of modern technology.


                            </div>
                        </div>

                        <div className="flex justify-center items-center h-48 md:h-full w-full md:w-1/2 mt-4 md:mt-0">
                            <div className="relative hover:cursor-pointer w-32 h-32 md:w-48 md:h-48">
                                <FontAwesomeIcon icon={faListCheck} style={{fontSize: '5rem' }} className='text-center text-primary'/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default AboutAdi;
