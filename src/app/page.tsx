import HeroSection from "@/components/HeroSection";

import { Roboto_Mono } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Navbar1 from "@/components/Navbar-in";
import AboutAdi from "@/components/About";

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

    

    <Navbar1/>
    
    <HeroSection/>
    <AboutAdi/>
    </main>
      
    
  );
}
