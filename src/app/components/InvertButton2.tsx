// IButton.tsx
import React from "react";

interface IbuttonProps {
  content: string;
  link?: string;
  className?:string;
}

const Ibutton: React.FC<IbuttonProps> = ({ content, link,className}) => {
  return (
      <a href={link} className={`border-2 rounded-sm relative min-w-[130px] cursor-pointer duration-200 transition border-iip bg-transparent hover:bg-iip flex flex-row justify-center items-center decoration-none box-border px-4 py-2 text-iip hover:text-white m-0 sm:min-w-max ${className}`}>
        {content}
      </a>
  );
};

export default Ibutton;
