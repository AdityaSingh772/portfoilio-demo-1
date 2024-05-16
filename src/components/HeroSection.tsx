import TypewriterEffectSmoothDemo from "./TypewriterEffectSmooth ";
import Image from "next/image";


function HeroSection() {
  return (
    <div className="bg-black min-h-screen flex">
      <div className="bg-pribg w-2/3 sm:w-full sm:flex-1 justify-items-center min-h-screen text-left pl-20">
        <TypewriterEffectSmoothDemo />
      </div>
      <div className="bg-pribg w-1/3 sm:w-fullsm:flex-1 h-full min-h-screen flex items-center justify-center">
        <div className="w-fit bg-primary rounded-lg">
          <Image className="transition ease-in-out delay-150 hover:-translate-y-2 hover:-translate-x-2 duration-500 rounded-lg border-2 border-secondary hover:border-primary drop-shadow-xl grayscale hover:filter-none"
        src="/cv.jpg"
        width={300}
        height={300}
        alt="my_cv_profile"
        />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
