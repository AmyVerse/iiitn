import { FC } from "react";

interface cardprops{
    img: string;
    name: string;
    position: string;
}

const Fcards:FC<cardprops>=({
    img,
    name,
    position,
})=>{
    return(
        <div className="grid grid-rows-2 items-center border rounded-sm max-w-[250px] cursor-pointer relative" style={{ boxShadow: '0 4px 6px rgba(255, 0, 0, 0.1)'}}>
        <div className=" flex-1 relative flex flex-col items-center box-border bg-pink-200 p-4">
          <img src={img} className="block rounded-full border min-h-1/2 min-w-1/2  m-10 object-cover" />
          <div className="font-sans text-2xl hover:scale-105 transition-transform duration-300 font-bold text-black p-4 cursor-pointer">{name}</div>
          <hr className="border-t-2 rounded-sm border-blue-500 w-1/5 mx-auto"/>
          <div className="font-mono text-xl font-semibold text-black p-4"> {position}</div>      
        </div> 
        <div className="bg-white text-black text-xl flex-1 h-1/10">
            LOGOS
        </div>
        {/* logo icons here */}
        </div>
    )
}

export default Fcards;