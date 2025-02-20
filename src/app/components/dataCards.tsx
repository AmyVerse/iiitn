import React from "react";
import IButton from "./invertButton";

interface cardsProps {
  Content: string;
  blink: string;
  bcontent: string;
  Head: string;
  className?: string;
}

const Card: React.FC<cardsProps> = ({
  Head,
  Content,
  bcontent,
  blink,
  className,
}) => {
  return (
    <div
      className={`flex min-h-[100px] min-w-[150px] flex-col items-start justify-between rounded-sm border bg-white text-black ${className}`}
    >
      <div className="mx-2 mb-4 text-2xl font-bold">{Head}</div>
      <div className="mx-2 my-4 text-xs">{Content}</div>
      <IButton className="mx-4" content={bcontent} link={blink} />
    </div>
  );
};

export default Card;
