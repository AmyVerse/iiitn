import Image from "next/image";
import { FC } from "react";

interface LogoProps {
  className?: string;
}


const Logo:FC<LogoProps> = ({className})=>{
  return (
    <div className={`flex flex-row items-center h-[100%] gap-1 justify-center bg-white space-x-4 cursor-pointer ${className}`}>
      <Image src="/X-black.png" alt="X" className="grayscale hover:filter-none transition-all" width={20} height={20} />
      <Image src="/facebook.svg" alt="facebook" className="grayscale hover:filter-none transition-all" width={25} height={25} />
      <Image src="/insta.png" alt="insta" className="grayscale hover:filter-none transition-all" width={30} height={30} />
      <Image src="/linkedin.svg" alt="linkedin" className="grayscale hover:filter-none transition-all" width={35} height={35} />
    </div>
  );
}

export default Logo;