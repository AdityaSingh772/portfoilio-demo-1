"use client";
import React from "react";

import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-pribg w-full" id="/contact">
            <div className="md:h-[20rem] sm:h-[15rem] h-[10rem] bg-pribg flex flex-col w-[80%] m-auto pt-8">

                <div className="flex flex-row h-2/3 w-full bg-green border-b-[0.09rem] border-b-secondary ">
                    <div className="logo w-1/3 ">
                        <div className="relative  lg:w-[55%] md:w-[55%] sm:w-[40%] w-[48%]  lg:h-[80%]  h-[65%] my-auto justify-center m-auto mt-[1rem]">
                            <Image
                                src="/A.png"
                                alt="GIF"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="text w-2/3 bg-pribg flex flex-row text-primary justify-between flex-wrap sm:gap-8 gap-3 text-[1rem] sm:font-bold font-semibold ">
                        <span className="sm:translate-y-[40%]">
                            <Link href="https://www.linkedin.com/in/aditya-singh-dsa/" passHref target="_blank">
                              <div className="relative w-[3rem] h-[3rem]">
                                <Image
                                  src="/f1.png"
                                  alt="linkedIn"
                                  layout="fill"
                                  objectFit="contain"
                                  className=""
                                />
                              </div>
                            </Link>
                        </span>
                        <span className="sm:translate-y-[40%]">
                            <Link href="https://www.instagram.com/ft.adityas/" passHref target="_blank">
                              <div className="relative w-[3rem] h-[3rem]">
                                <Image
                                  src="/f2.png"
                                  alt="Instagram"
                                  layout="fill"
                                  objectFit="contain"
                                  className=""
                                />
                              </div>
                            </Link>
                        </span>
                        <span className="sm:translate-y-[40%]">
                            <Link href="https://github.com/AdityaSingh772" passHref target="_blank">
                              <div className="relative w-[3rem] h-[3rem]">
                                <Image
                                  src="/f3.png"
                                  alt="Github"
                                  layout="fill"
                                  objectFit="contain"
                                  className=""
                                />
                              </div>
                            </Link>
                        </span>
                        <span className="sm:translate-y-[40%]">
                            <Link href="mailto:workwithracian@gmail.com?" passHref target="_blank">
                              <div className="relative w-[3rem] h-[3rem]">
                                <Image
                                  src="/f4.png"
                                  alt="email"
                                  layout="fill"
                                  objectFit="contain"
                                  className=""
                                />
                              </div>
                            </Link>
                        </span>
                        <span className="sm:translate-y-[40%]">
                            <Link href="https://medium.com/@workwithracian" passHref target="_blank">
                              <div className="relative w-[3rem] h-[3rem]">
                                <Image
                                  src="/f5.png"
                                  alt="Medium"
                                  layout="fill"
                                  objectFit="contain"
                                  className=""
                                />
                              </div>
                            </Link>
                        </span>
                    </div>
                </div>

                <div className="h-1/3">
                    <div className="  flex flex-row justify-between  w-full h-full  ">
                        <span className="text-primary font-extralight  md:text-[1rem] text-[0.8rem]   md:mt-[3rem] sm:mt-[2rem] mt-[1rem]"> <span className="text-secondary">Aditya Singh❤️</span> &#169; Designed and built by Aditya.</span>




                    </div>
                </div>

            </div>
        </div>
    );
}
