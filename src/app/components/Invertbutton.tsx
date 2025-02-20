"use client";
import Link from "next/link";

interface IButtonProps {
  content: string;
  link: string;
  className?: string;
}

const IButton: React.FC<IButtonProps> = ({ content, link, className }) => {
  return (
    <Link
      href={link}
      className={`group relative inline-block w-52 overflow-hidden rounded-xl border-4 border-iio bg-[#0000001d] px-6 py-2 text-iio transition-all duration-200 hover:bg-transparent ${className}`}
    >
      {/* Fluid fill effect */}
      <span className="absolute bottom-0 left-0 -z-10 h-0 w-full bg-iio transition-all duration-200 ease-out group-hover:h-full" />

      {/* Button Text */}
      <span className="text-shadow- relative z-10 font-[poppins] text-[20px] font-black group-hover:text-white">
        {content}
      </span>
    </Link>
  );
};

export default IButton;
