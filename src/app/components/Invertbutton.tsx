// IButton.tsx
import React from "react";
import Link from "next/link";

interface IButtonProps {
  content: string;
  link: string;
  className?:string;
}

const IButton: React.FC<IButtonProps> = ({ content, link,className}) => {

  return (
    <Link href={link}>
      <button className={`border-2 rounded-sm relative min-w-[130px] cursor-pointer duration-200 transition border-iio bg-transparent hover:bg-iio flex flex-row justify-center items-center decoration-none box-border px-4 py-2 text-iio hover:text-white m-0 sm:min-w-max ${className}`}>
        {content}
      </button>
      </Link>
  );
};

export default IButton;
