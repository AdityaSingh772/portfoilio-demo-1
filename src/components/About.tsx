import React from 'react';
import Image from 'next/image';




function AboutAdi() {
    return (
        <>

            <div className='aboutus-bg h-full pb-[4rem] pt-[4rem] bg-secbg' id='aboutadi'>

                <div className=" textJS  flex justify-center font-bold text-[3rem] text-transparent bg-clip-text bg-secondary text-secondary" >About Me</div>

                <div className=" flex flex-col gap-8 mt-[3rem]  ">

                    <div className="flex  md:flex-row flex-col h-[15rem] w-[85%] mx-auto  justify-center">

                        <div className=' flex flex-col w-full justify-center z-10'>
                            <div className="div fontJS-subheading text-primary poppins md:text-[2rem] text-[1rem]"><span className='text-secondary'>1. </span> Education</div>
                            <div className='roboto text-secondary text-justify'>Hi, I am Aditya. I am currently a sophomore at the National Institute of Technology Rourkela,
                             where I am pursuing a major degree in Electrical Engineering and a minor degree in Computer Science and Engineering. My academic journey 
                             encompasses a wide array of subjects, from
                              computer science to electrical and electronics engineering. This diverse background has equipped me
                               with a broad understanding of technologys various facets, laying a solid foundation for my future endeavors.
                            </div>
                        </div>

                        <div className=" h-full w-full align-center  flex justify-center ">

                            <div className="relative hover:cursor-pointer md:w-[45%] sm:w-[50%] w-[50%]    md:h-[100%] h-[0%] my-auto justify-center m-auto">
                                <div className="w-fit bg-primary rounded-lg">
                                    <Image className="transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-500 rounded-lg border-2 border-secondary hover:border-primary drop-shadow-xl hover:filter-none"
                                        src="/1.gif"
                                        layout='fill'
                                        
                                        alt="learner"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="flex  md:flex-row flex-col-reverse h-[15rem] w-[85%] mx-auto  justify-center">
                        <div className=" h-full w-full align-center  flex justify-center ">

                            <div className="relative hover:cursor-pointer md:w-[45%] sm:w-[50%] w-[50%]    md:h-[100%] h-[0%] my-auto justify-center m-auto">
                                <div className="w-fit bg-primary rounded-lg">
                                    <Image className="transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-500 rounded-lg border-2 border-secondary hover:border-primary drop-shadow-xl hover:filter-none"
                                        src="/2.png"
                                        layout='fill'
                                        
                                        alt="developer"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className=' flex flex-col w-full justify-center z-10'>
                        <div className="div fontJS-subheading text-primary poppins md:text-[2rem] text-[1rem]"><span className='text-secondary'>2. </span>Technical Expertise</div>
                            <div className='roboto text-secondary text-justify'> Proficient in Java, C, and Python, I specialize
                             in the MERN stack. Through hands-on experience, I have mastered MongoDB, Express.js, Node.js, React js, Next js, Rest Apis , etc., enabling me to build robust 
                             and responsive web applications. 
                             This technical expertise allows me to tackle complex challenges with confidence and deliver innovative solutions to real-world problems. I have
                             proficiency in problem solving also. I have solved more than 400 problems of Data Structures and algorithms and over 50 problems of SQL throughout
                             different coding platforms.
                            </div>
                        </div>


                    </div>



                    <div className="flex  md:flex-row flex-col h-[15rem] w-[85%] mx-auto  justify-center">

                    <div className=' flex flex-col w-full justify-center z-10'>
                        <div className="div fontJS-subheading text-primary poppins md:text-[2rem] text-[1rem]"><span className='text-secondary'>3. </span>Current Focus and projects</div>
                            <div className='roboto text-secondary text-justify'>Lately, I have been delving into the emerging field of Web3, intrigued by its decentralized
                             framework and potential to revolutionize digital platforms. Concurrently, I am engaging in self-paced learning to deepen my understanding of
                              blockchain technologies. Alongside my exploration of new technologies, I have developed several projects using the MERN stack. These projects
                               prioritize user experience and application efficiency, showcasing my dedication to delivering high-quality software solutions.
                             As I continue to expand my technical skills, I am excited about the opportunities to collaborate and innovate in the ever-evolving landscape of technology.
                            </div>
                        </div>

                        <div className=" h-full w-full align-center  flex justify-center ">

                            <div className="relative hover:cursor-pointer md:w-[45%] sm:w-[50%] w-[50%]    md:h-[100%] h-[0%] my-auto justify-center m-auto">
                                <div className="w-fit bg-primary rounded-lg">
                                    <Image className="transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-500 rounded-lg border-2 border-secondary hover:border-primary drop-shadow-xl hover:filter-none"
                                        src="/3.png"
                                        layout='fill'
                                        
                                        alt="future"
                                        />
                                </div>
                            </div>
                        </div>
                    </div>



                </div>


            </div>

        </>
    );
}

export default AboutAdi;