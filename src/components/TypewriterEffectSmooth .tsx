"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons'

const roboto_s = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700','900'],
});
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi,",
      className: "text-secondary text-7xl font-roboto_s ",
    },
    {
      text: "I'm",
      className: "text-secondary text-7xl font-roboto_s",
    },
    
    {
      text: "Aditya.",
      className: "text-primary dark:text-primary text-7xl font-roboto_s",
    },
  ];
  const desc = [
    {
      text: "Crafting",
      className: "text-secd text-4xl ",
    },
    {
      text: "Scalable",
      className: "text-secd text-4xl ",
    },
    {
      text: "Solutions",
      className: "text-secd text-4xl "
    },
    {
      text: "for",
      className: "text-secd text-4xl ",
    },
    {
      text: "the",
      className: "text-secd text-4xl ",
    },
    {
      text: "Modern",
      className: "text-secd text-4xl",
    },
    {
      text: "web",
      className: "text-secd text-4xl",
    },
  ];
  return (
    <>
    <div className="flex flex-col items-left justify-center mb-0 pb-0 space-y-0 h-5/6 w-full">
      <div className="mb-10">
      <p className="text-primary dark:text-primary text-lg sm:text-base mb-0 pb-0">
      Securing Blockchains, Scaling Microservices, Crafting Code
      </p>
      </div>
      <TypewriterEffectSmooth words={words} />
      <TypewriterEffectSmooth words={desc} />

      <p className="text-secondary text-lg sm:text-base mb-0 pb-0 pt-10 w-1/2">
      
      I’m a software developer passionate about building decentralized apps, microservices, and scalable solutions, blending creativity with code to deliver impactful digital experiences.
      
      </p>
      
    </div>
    <div className="flex flex-col md:flex-row space-y-0 md:space-y-0 space-x-0 md:space-x-4 mt-0 pt-0 ">
      <Link href="https://drive.google.com/drive/folders/1cQqn9BDp96XjK-xny1NYBLYGoSoSlZYg" target="_blank">
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500 w-60 rounded-l-lg border-2 hover:drop-shadow-xl bg-butcol border-secondary hover:border-primary text-secondary hover:text-primary text-sm py-4">
            Download CV <span><FontAwesomeIcon icon={faFile} /></span>
          </button>
      </Link>
      <Link href="mailto:workwithracian@gmail.com?" target="_blank">
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500 w-60 rounded-r-lg border-2 hover:drop-shadow-xl bg-pribg border-primary hover:border-secondary hover:bg-butcol text-primary hover:text-secondary text-sm py-4">
        Contact Me <span><FontAwesomeIcon icon={faEnvelope} /></span>
      </button>
      </Link>
  </div>
  </>
  );
}