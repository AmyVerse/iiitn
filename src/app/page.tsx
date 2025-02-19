import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import icon from "../../public/Favicon.ico";

export default async function Home() {
  return (
    <div className="relative min-h-screen bg-[url('/campus.png')] bg-cover bg-center bg-no-repeat">
      {/* Sticky Top Navigation */}
      <div className="sticky top-0 flex items-center justify-between px-8 py-3">
        {/* Left - Logo */}

        <div className="flex items-center">
          <Image src={icon} alt="IIITN Logo" width={50} height={50} />
        </div>

        {/* Right - Icons */}
        <div className="flex items-center gap-10 text-white">
          <FiSearch size={38} className="cursor-pointer" />
          <GiHamburgerMenu size={38} className="cursor-pointer" />
        </div>
      </div>

      {/* Centered Content */}
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative text-center">
          {/* Main Heading */}
          <h1 className="font-[poppins] text-[180px] font-[400] leading-none text-white">
            IIITN
          </h1>

          {/* Subtext - Centered Below */}
          <div className="mt-4 space-y-2">
            <h3 className="font-[poppins] text-[24px] text-white">
              Indian Institute of Information Technology, Nagpur
            </h3>
            <h3 className="font-[poppins] text-[24px] text-white">
              भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
