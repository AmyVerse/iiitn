"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import icon from "../../../public/logo.svg";
import Sidebar from "./sidebar";

const suggestions = [
  "Faculty",
  "Holidays",
  "Events",
  "Policy",
  "Placement",
  "NIRF Detail",
];

const AutoTypingSearchBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % suggestions.length);
        return;
      }

      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 50); // Backspace speed
    } else {
      const fullText = suggestions[currentIndex];
      if (displayText === fullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Wait before deleting
        return;
      }

      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100); // Typing speed
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  return (
    <div className="relative flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 190 167"
        width="28"
        height="23"
        className="absolute bottom-1 left-1 animate-pulse"
      >
        <path
          d="M133.5 86.5C132.154 94.049 129.488 101.216 125.5 108C134.624 118.125 144.124 127.958 154 137.5C156.167 147.333 152.333 151.167 142.5 149C132.958 139.124 123.125 129.624 113 120.5C94.0251 131.291 75.1918 131.124 56.5 120C42.0275 108.775 35.3608 93.9412 36.5 75.5C36.3367 73.1432 36.5034 70.8098 37 68.5C46.267 41.6121 65.1003 29.4454 93.5 32C121.598 39.2722 134.931 57.4388 133.5 86.5Z"
          fill="#FBFBFB"
          fillRule="evenodd"
        />
        <path
          d="M78.5 39.5C109.984 39.4831 125.484 55.1497 125 86.5C118.747 110.41 103.247 121.577 78.5 120C60.009 116.176 48.8423 105.009 45 86.5C43.6232 61.733 54.7899 46.0663 78.5 39.5Z"
          fill="#585859"
          fillRule="evenodd"
        />
        <path
          d="M74.5 49.5C79.0119 49.8689 80.5119 52.2022 79 56.5C67.5155 61.3255 61.5155 69.9921 61 82.5C58.6667 85.1667 56.3333 85.1667 54 82.5C52.8836 66.4695 59.717 55.4695 74.5 49.5Z"
          fill="#F8F8F8"
          fillRule="evenodd"
        />
      </svg>
      <input
        className="w-56 rounded-full border-white bg-[#575757] py-0.5 pl-10 pr-4 text-white placeholder-white outline outline-offset-2 outline-[#575757] transition-all duration-700 ease-in-out"
        placeholder={`${displayText}${isDeleting ? "" : " "}`}
      />
    </div>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="h-1 w-full bg-iio"></div>
      <div className="w-full">
        <div
          style={{ cursor: "url('/cursor_cross.svg') 16 16, auto" }}
          className="sticky top-0 flex items-center justify-between px-8 py-3"
        >
          <Link target="blank" href="www.iiitn.ac.in">
            <Image src={icon} alt="IIITN Logo" width={60} />
          </Link>
          <div className="flex items-center gap-8 text-white">
            <AutoTypingSearchBar />
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-40 h-screen w-64 bg-black/95 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className={`absolute right-8 top-8 z-50 flex h-12 w-12 flex-col items-center justify-center transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="absolute h-[2px] w-6 rotate-45 bg-white transition-all duration-300" />
          <span className="absolute h-[2px] w-6 -rotate-45 bg-white transition-all duration-300" />
        </button>

        <div className="mt-60 flex flex-col gap-4 p-8">
          <a href="#" className="text-lg text-white hover:text-iio">
            Home
          </a>
          <a href="#" className="text-lg text-white hover:text-iio">
            About
          </a>
          <a href="#" className="text-lg text-white hover:text-iio">
            Services
          </a>
          <a href="#" className="text-lg text-white hover:text-iio">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
