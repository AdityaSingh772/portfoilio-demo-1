import HeroSection from "@/components/HeroSection";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import 'intersection-observer';



import { Roboto_Mono } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import Navbar1 from "@/components/Navbar-in";
import AboutAdi from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Projects from "@/components/Project";

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
    <Skills/>
    <Projects/>
    <Footer/>
    </main>
      
    
  );
}
