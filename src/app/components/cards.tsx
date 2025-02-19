import IButton from "./Invertbutton"
import React from "react";

interface cardsProps {
  Content: string;
  blink: string;
  bcontent: string;
  Head: string;
  className?:string;
}


const Card:React.FC<cardsProps>=({Head,Content,bcontent,blink,className})=>{
    return(
        <div className={`flex flex-col items-start justify-between bg-white text-black border rounded-sm min-h-[100px] min-w-[150px] ${className}`}>
            <div className="font-bold mx-2 text-2xl mb-4">{Head}</div>
            <div className="text-xs mx-2 my-4">{Content}</div>
            <IButton 
            className="mx-4"
            content={bcontent}
            link={blink}
            />
        </div>
    )
}

export default Card