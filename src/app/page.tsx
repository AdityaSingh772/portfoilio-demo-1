import HeroSection from "@/components/HeroSection";
import FloatingNavDemo from "@/components/FloatingNavDemo";
import { Roboto_Mono } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto_mono',
  weight: ['400', '700'],
});

const roboto_s = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700','900'],
});

export default function Home() {
  return (
    <main className={`${roboto.variable} font-sans`}>

    <FloatingNavDemo/> 
    
    <HeroSection/>
    <div className="w-screen h-screen bg-red-400">
        hello
    </div>
    </main>
      
    
  );
}
