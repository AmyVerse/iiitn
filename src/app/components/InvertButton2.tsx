// IButton.tsx
import React from "react";

interface IbuttonProps {
  content: string;
  link?: string;
  className?: string;
}

const Ibutton: React.FC<IbuttonProps> = ({ content, link, className }) => {
  return (
    <a
      href={link}
      className={`decoration-none relative m-0 box-border flex min-w-[130px] cursor-pointer flex-row items-center justify-center rounded-sm border-2 border-iip bg-transparent px-4 py-2 text-iip transition duration-200 hover:bg-iip hover:text-white sm:min-w-max ${className}`}
    >
      {content}
    </a>
  );
};

export default Ibutton;
