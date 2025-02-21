"use client";

import { useEffect, useState } from "react";
import Footer from "./components/footer";
import IButton from "./components/invertButton";
import Navbar from "./components/navbar";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change navbar color when scrolled past the first section (adjusted for new height)
      if (window.scrollY > window.innerHeight * 0.75) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[350vh] bg-gray-900">
      {/* Navbar - Always Sticks on Top */}
      <div
        className={`animation- fixed left-0 top-0 z-50 w-full transition-colors duration-500 ${
          scrolled
            ? "h-16 bg-white shadow-lg md:h-20"
            : "h-40 bg-gradient-to-b from-black to-transparent md:h-60"
        }`}
      >
        <Navbar />
      </div>

      {/* First Section (Fixed Full-Screen Image) */}
      <div className="fixed left-0 top-0 z-10 h-[95vh] w-full bg-[url('/campus.png')] bg-cover bg-center">
        {/* Centered Content */}
        <div className="flex min-h-screen items-center justify-center px-4">
          <div className="relative text-center">
            {/* Main Heading */}
            <h1 className="-mb-2 font-[Poppins] text-[15vw] font-[900] text-white sm:text-[15vw] md:-mb-6 md:text-[12vw] lg:text-[180px]">
              IIITN
            </h1>

            {/* Subtext - Centered Below */}
            <div className="mb-12 space-y-1 md:mb-28">
              <span className="block font-[poppins] text-[3vw] font-semibold text-white sm:text-[4vw] md:text-[3vw] lg:text-[24px]">
                Indian Institute of Information Technology, Nagpur
              </span>
              <span className="block font-[mukta] text-[3vw] text-white sm:text-[4vw] md:text-[3vw] lg:text-[24px]">
                भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
              </span>
            </div>

            {/* Buttons */}
            <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-1 lg:flex lg:justify-center lg:gap-28 lg:space-x-0 lg:px-0">
              <IButton content="EXPLORE" link="" />
              <IButton content="ADMISSION" link="" />
              <IButton content="CONTACT US" link="" />
              <IButton content="ABOUT US" link="" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section (Scrolls Over the First) */}
      <div className="relative z-40 mt-[95vh] flex flex-col items-center justify-center bg-[url('/paper.png')] bg-center bg-no-repeat">
        <div className="flex items-center px-4 text-base font-medium text-black md:text-xl">
          Unveil IIITN
          <svg
            className="ml-2 mt-1 h-4 w-4 animate-bounce md:h-6 md:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      {/* Repeated Background Sections */}
      <div className="relative z-20 h-[200vh] bg-[url('/blockbg.png')] bg-center bg-repeat"></div>

      {/* Footer - Attached to the Sliding Part */}
      <footer className="relative z-10">
        <Footer />
      </footer>
    </div>
  );
}
