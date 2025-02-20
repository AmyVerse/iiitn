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
            ? "h-20 bg-white shadow-lg"
            : "h-60 bg-gradient-to-b from-black to-transparent"
        }`}
      >
        <Navbar />
      </div>

      {/* First Section (Fixed Full-Screen Image) */}
      <div className="fixed left-0 top-0 z-10 h-[95vh] w-full bg-[url('/campus.png')] bg-cover bg-center">
        {/* Centered Content */}
        <div className="flex min-h-screen items-center justify-center">
          <div className="relative text-center">
            {/* Main Heading */}
            <h1 className="-mb-6 font-[inter] text-[180px] font-[600] text-white">
              IIITN
            </h1>

            {/* Subtext - Centered Below */}
            <div className="mb-28 space-y-1">
              <span className="font-[poppins] text-[24px] font-semibold text-white">
                Indian Institute of Information Technology, Nagpur
              </span>
              <br></br>
              <span className="font-[mukta] text-[24px] text-white">
                भारतीय सूचना प्रौद्योगिकी संस्थान, नागपुर
              </span>
            </div>
            <div className="sd:grid-cols-1 mb-16 flex grid-cols-2 justify-center gap-28 space-x-8">
              <IButton content="EXPLORE" link="" />
              <IButton content="ADMISSION" link="" />
              <IButton content="CONTACT US" link="" />
              <IButton content="ABOUT US" link="" />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section (Scrolls Over the First) */}
      <div className="relative z-20 mt-[85vh] bg-[url('/paper.png')] bg-center bg-no-repeat">
        <div className="z-20 flex w-full items-center justify-center pt-44 font-[Inter] text-xl font-medium text-black">
          Unveil IIITN
          <svg
            className="ml-2 mt-1 h-6 w-6 animate-bounce"
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
      {/* Footer - Attached to the Sliding Part */}
      <div className="relative z-40 h-36 bg-gradient-to-t from-black via-black via-[90%] to-transparent"></div>
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
}
