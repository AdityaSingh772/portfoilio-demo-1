"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useUser } from "@auth0/nextjs-auth0/client";


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
            title: "About us",
            path: "/#aboutus",
            cName: "nav-text",
        },
        {
            id: 2,
            title: "Job Postings ",
            path: "/jobs",
            cName: "nav-text",
        },
        {
            id: 3,
            title: "Contact",
            path: "/#contact",
            cName: "nav-text",
        },
        {
            id: 4,
            title: "Logout",
            path: "/api/auth/logout",
            cName: "nav-text",

        },


    ];

    // const { user, error, isLoading } = useUser();

    return (
        <>
            <nav
                className={
                    " bg-[#0b0b0b] bg-opacity-5 backdrop-blur-md  border-b-[0.1px] border-gray-600 mx-auto shadow-lg fixed z-50 sm-0 w-full flex   text-gray-400 hero-txt"

                }
            >
                {/* <div className="m-3 hidden md:flex">
          <Link href="/">
            <img
              src="/logo1.png"
              alt="logo"
              className="w-4 h-1 md:w-36 md:h-10 cursor-pointer"
            />
          </Link>
        </div> */}
                <div className="mx-auto md:flex hidden justify-center min-h-fit">
                    {NavData.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className="justify-between items-center md:text-xl content hover:text-violet-400  py-4"
                            >
                                <Link className="md:px-7 hidden md:flex " href={item.path} >
                                    {item.title}
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="w-screen md:hidden flex flex-col ">
                    <div className="flex  justify-between m-2  md:hidden">
                        <Link href="/">
                            <Image
                                src="/logo1.png"
                                alt="logo"
                                className=" cursor-pointer ml-2 mt-2"
                                width={54}
                                height={54}
                            />
                        </Link>
                        <button
                            aria-label="Menu toggle"
                            onClick={toggleMenu}
                            className=" p-2 "
                        >
                            {/* Close Button X */}
                            <svg
                                className={`transform transition-transform ease-in-out duration-300 relative ${isMenuOpen ? "scale-0 w-0 h-0" : ""
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

                                {/* Hamburger Button  */}
                            </svg>
                            <svg
                                className={`transform transition-transform ease-in-out duration-300  ${isMenuOpen ? "" : "scale-0 w-0 h-0"
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
                        <div className="flex md:hidden w-screen absolute bg-[#FFD1E3] roboto bg-opacity-70 ">
                            {isMenuOpen ? (
                                <div className="flex flex-col justify-center  gap-8 items-center text-center w-full h-screen  ">
                                    {NavData.map((item, index) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className={`justify-between cursor-pointer roboto items-center  py-4 transform transition-transform ease-in-out ${isMenuOpen ? `w-fit` : "w-0 self-end"
                                                    } `}
                                                style={{ transitionDuration: `${400 + index * 100}ms` }}
                                            >
                                                <Link
                                                    className=" text-[#392467] roboto text-3xl"
                                                    onClick={toggleMenu}
                                                    href={item.path}
                                                >
                                                    {item.title}
                                                </Link>
                                            </div>
                                        );
                                    })}
                                    {/* <div className="mt-32">
                    <button
                      type="button"
                      className="text-white bg-red-700 hover:bg-red-800 
                      focus:outline-none focus:ring-4 focus:ring-red-300 
                      font-medium rounded-full text-2xl px-10 py-4 text-center
                       me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
                        dark:focus:ring-red-900"
                    >
                      Login
                    </button>
                  </div> */}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                {/* <div className="hidden p-3 md:flex">
          <button
            type="button"
            onClick={() => alert("Login")}
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Login
          </button>
        </div> */}
            </nav>
        </>
    );
};

export default Navbar1;
