"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

interface NavItem {
    id: number;
    title: string;
    path: string;
    cName: string;
}

const Navbar1: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavData: NavItem[] = [
        {
            id: 1,
            title: "About Me",
            path: "aboutadi",
            cName: "nav-text",
        },
        {
            id: 2,
            title: "Skills",
            path: "skills",
            cName: "nav-text",
        },
        {
            id: 3,
            title: "Projects",
            path: "projects",
            cName: "nav-text",
        },
        {
            id: 4,
            title: "Download CV",
            path: "https://drive.google.com/drive/folders/1cQqn9BDp96XjK-xny1NYBLYGoSoSlZYg",
            cName: "nav-text",
        },
    ];

    return (
        <>
            <nav
                className={
                    "bg-[#0b0b0b] bg-opacity-5 backdrop-blur-md border-b-[0.1px] border-secondary mx-auto shadow-lg fixed z-50 sm-0 w-full flex text-secondary hero-txt"
                }
            >
                <div className="mx-auto md:flex hidden min-h-fit">
                    <div className="flex items-center justify-items-start mr-10"> {/* Added more space */}
                        <Link href="/">
                            <Image
                                src="/A.png"
                                alt="logo"
                                className="cursor-pointer ml-2 mt-2"
                                width={54}
                                height={54}
                            />
                        </Link>
                    </div>
                    <div className="flex flex-row justify-items-end space-x-8"> {/* Added space-x-8 for horizontal spacing */}
                        {NavData.map((item) => (
                            <div
                                key={item.id}
                                className="justify-between items-center md:text-xl content hover:text-primary py-4"
                            >
                                <div className="w-fit">
                                    {item.path.startsWith("http") ? (
                                        <a
                                            href={item.path}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-500"
                                        >
                                            {item.title}
                                        </a>
                                    ) : (
                                        <ScrollLink
                                            to={item.path}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            className="font-bold transition ease-in-out delay-150 hover:-translate-y-1 hover:-translate-x-1 duration-500 cursor-pointer"
                                            onClick={toggleMenu}
                                        >
                                            {item.title}
                                        </ScrollLink>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="w-full md:hidden flex flex-col ">
                    <div className="flex justify-between m-2 md:hidden">
                        <Link href="/">
                            <Image
                                src="/A.png"
                                alt="logo"
                                className="cursor-pointer ml-2 mt-2"
                                width={54}
                                height={54}
                            />
                        </Link>
                        <button
                            aria-label="Menu toggle"
                            onClick={toggleMenu}
                            className="p-2"
                        >
                            <svg
                                className={`transform transition-transform ease-in-out duration-300 relative ${
                                    isMenuOpen ? "scale-0 w-0 h-0" : ""
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
                                />
                            </svg>
                            <svg
                                className={`transform transition-transform ease-in-out duration-300 ${
                                    isMenuOpen ? "" : "scale-0 w-0 h-0"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <div className="flex md:hidden w-screen absolute bg-secondary roboto bg-opacity-50 backdrop-blur-sm">
                            {isMenuOpen ? (
                                <div className="flex flex-col justify-center gap-8 items-center text-center w-full h-screen">
                                    {NavData.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className={`justify-between cursor-pointer roboto items-center py-4 transform transition-transform ease-in-out ${
                                                isMenuOpen ? `w-fit` : "w-0 self-end"
                                            } `}
                                            style={{ transitionDuration: `${400 + index * 100}ms` }}
                                        >
                                            {item.path.startsWith("http") ? (
                                                <a
                                                    href={item.path}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-bold text-butcol roboto text-3xl border-b-2  hover:border-primary"
                                                >
                                                    {item.title}
                                                </a>
                                            ) : (
                                                <ScrollLink
                                                    to={item.path}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                    className="font-bold text-butcol roboto text-3xl border-b-2  hover:border-primary"
                                                    onClick={toggleMenu}
                                                >
                                                    {item.title}
                                                </ScrollLink>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar1;
