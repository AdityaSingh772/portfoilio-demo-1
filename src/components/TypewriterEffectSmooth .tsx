"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Roboto_Slab } from "next/font/google";
import Link from "next/link";

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
      text: "I",
      className: "text-secd text-6xl ",
    },
    {
      text: "build",
      className: "text-secd text-6xl ",
    },
    {
      text: "things",
      className: "text-secd text-6xl "
    },
    {
      text: "for",
      className: "text-secd text-6xl ",
    },
    {
      text: "the",
      className: "text-secd text-6xl ",
    },
    {
      text: "WEB",
      className: "text-secd text-6xl",
    },
  ];
  return (
    <>
    <div className="flex flex-col items-left justify-center mb-0 pb-0 space-y-0 h-5/6 w-full">
      <div className="mb-10">
      <p className="text-primary dark:text-primary text-lg sm:text-base mb-0 pb-0">
      Mastering Code Alchemy & DSA Wizardry
      </p>
      </div>
      <TypewriterEffectSmooth words={words} />
      <TypewriterEffectSmooth words={desc} />

      <p className="text-secondary text-lg sm:text-base mb-0 pb-0 pt-10 w-1/2">
      
      Venturing through the labyrinth of backend development, I am Aditya, a software engineering student conjuring digital realms within the vast landscape of web projects.
      
      </p>
      
    </div>
    <div className="flex flex-col md:flex-row space-y-0 md:space-y-0 space-x-0 md:space-x-4 mt-0 pt-0 ">
      <Link href="https://drive.google.com/drive/folders/1cQqn9BDp96XjK-xny1NYBLYGoSoSlZYg" target="_blank">
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500 w-60 rounded-l-lg border-2 hover:drop-shadow-xl bg-butcol border-secondary hover:border-primary text-secondary hover:text-primary text-sm py-4">
        Download CV
      </button>
      </Link>
      <Link href="mailto:workwithracian@gmail.com?" target="_blank">
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500 w-60 rounded-r-lg border-2 hover:drop-shadow-xl bg-pribg border-primary hover:border-secondary hover:bg-butcol text-primary hover:text-secondary text-sm py-4">
        email
      </button>
      </Link>
  </div>
  </>
  );
}