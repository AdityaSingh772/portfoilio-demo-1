"use client";
import React from "react";

import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-pribg w-full" id="contact">
            <div className="md:h-[20rem] sm:h-[15rem] h-[12rem] bg-pribg flex flex-col w-[90%] md:w-[80%] m-auto pt-8">

                <div className="flex flex-col sm:flex-row h-2/3 w-full bg-green border-b-[0.09rem] border-b-secondary pb-4 sm:pb-0">
                    <div className="logo sm:w-1/3 w-full flex justify-center sm:justify-start">
                        <div className="relative lg:w-[55%] md:w-[55%] sm:w-[40%] w-[48%] lg:h-[80%] h-[65%] my-auto">
                            <Image
                                src="/A.png"
                                alt="GIF"
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="text sm:w-2/3 w-full bg-pribg flex flex-row justify-center sm:justify-between flex-wrap gap-3 text-primary text-[1rem] font-semibold mt-4 sm:mt-0">
                        <span className="transform sm:translate-y-[40%]">
                            <Link href="https://www.linkedin.com/in/aditya-singh-dsa/" passHref target="_blank">
                                <div className="relative w-[3rem] h-[3rem]">
                                    <Image
                                        src="/f1.png"
                                        alt="LinkedIn"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </Link>
                        </span>
                        <span className="transform sm:translate-y-[40%]">
                            <Link href="https://www.instagram.com/ft.adityas/" passHref target="_blank">
                                <div className="relative w-[3rem] h-[3rem]">
                                    <Image
                                        src="/f2.png"
                                        alt="Instagram"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </Link>
                        </span>
                        <span className="transform sm:translate-y-[40%]">
                            <Link href="https://github.com/AdityaSingh772" passHref target="_blank">
                                <div className="relative w-[3rem] h-[3rem]">
                                    <Image
                                        src="/f3.png"
                                        alt="Github"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </Link>
                        </span>
                        <span className="transform sm:translate-y-[40%]">
                            <Link href="mailto:workwithracian@gmail.com?" passHref target="_blank">
                                <div className="relative w-[3rem] h-[3rem]">
                                    <Image
                                        src="/f4.png"
                                        alt="Email"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </Link>
                        </span>
                        <span className="transform sm:translate-y-[40%]">
                            <Link href="https://medium.com/@workwithracian" passHref target="_blank">
                                <div className="relative w-[3rem] h-[3rem]">
                                    <Image
                                        src="/f5.png"
                                        alt="Medium"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>

                <div className="h-1/3 flex justify-center sm:justify-between items-center w-full mt-4 sm:mt-0">
                    <span className="text-primary font-extralight text-center md:text-[1rem] text-[0.8rem]">
                        <span className="text-secondary">2024❤️</span> &#169; Aditya Singh. Designed and built by Aditya.
                    </span>
                </div>

            </div>
        </div>
    );
}
