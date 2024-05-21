import React from 'react';
import Image from 'next/image';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faListCheck, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function AboutAdi() {
    return (
        <>
            <div className='aboutus-bg min-h-screen md:pb-16 pb-8 md:pt-16 pt-8 bg-secbg border-b-2 border-dotted border-secondary' id='aboutadi'>
                <div className="textJS flex justify-center font-bold text-3xl md:text-5xl hover:text-primary text-transparent bg-clip-text bg-secondary text-secondary">
                    About Me
                </div>

                <div className="flex flex-col gap-8 mt-12">

                    <div className="flex flex-col md:flex-row h-auto w-11/12 mx-auto justify-center">
                        <div className='flex flex-col w-full justify-center z-10'>
                            <div className="fontJS-subheading text-primary poppins text-xl md:text-2xl"><span className='text-secondary'>1. </span> Education</div>
                            <div className='roboto text-secondary text-justify text-sm md:text-base'>
                                Hi, I am Aditya. I am currently a sophomore at the National Institute of Technology Rourkela,
                                where I am pursuing a major degree in Electrical Engineering and a minor degree in Computer Science and Engineering. My academic journey 
                                encompasses a wide array of subjects, from computer science to electrical and electronics engineering. This diverse background has equipped me
                                with a broad understanding of technology s various facets, laying a solid foundation for my future endeavors.
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
                                Proficient in Java, C, and Python, I specialize in the MERN stack. Through hands-on experience, I have mastered MongoDB, Express.js, Node.js, React.js, Next.js, Rest APIs, etc., enabling me to build robust 
                                and responsive web applications. This technical expertise allows me to tackle complex challenges with confidence and deliver innovative solutions to real-world problems. I have
                                proficiency in problem-solving also. I have solved more than 400 problems of Data Structures and algorithms and over 50 problems of SQL throughout different coding platforms.
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row h-auto w-11/12 mx-auto justify-center">
                        <div className='flex flex-col w-full justify-center z-10'>
                            <div className="fontJS-subheading text-primary poppins text-xl md:text-2xl"><span className='text-secondary'>3. </span> Current Focus and Projects</div>
                            <div className='roboto text-secondary text-justify text-sm md:text-base'>
                                Lately, I have been delving into the emerging field of Web3, intrigued by its decentralized framework and potential to revolutionize digital platforms. Concurrently, I am engaging in self-paced learning to deepen my understanding of
                                blockchain technologies. Alongside my exploration of new technologies, I have developed several projects using the MERN stack. These projects
                                prioritize user experience and application efficiency, showcasing my dedication to delivering high-quality software solutions.
                                As I continue to expand my technical skills, I am excited about the opportunities to collaborate and innovate in the ever-evolving landscape of technology.
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
