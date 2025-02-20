import Image from "next/image";
import { FC } from "react";

interface cardprops {
  img: string;
  name: string;
  position: string;
}

const Fcards: FC<cardprops> = ({ img, name, position }) => {
  return (
    <div
      className="relative grid max-w-[250px] cursor-pointer grid-rows-2 items-center rounded-sm border"
      style={{ boxShadow: "0 4px 6px rgba(255, 0, 0, 0.1)" }}
    >
      <div className="relative box-border flex flex-1 flex-col items-center bg-pink-200 p-4">
        <Image
          alt=""
          src={img}
          className="m-10 block min-h-1/2 min-w-1/2 rounded-full border object-cover"
        />
        <div className="cursor-pointer p-4 font-sans text-2xl font-bold text-black transition-transform duration-300 hover:scale-105">
          {name}
        </div>
        <hr className="mx-auto w-1/5 rounded-sm border-t-2 border-blue-500" />
        <div className="p-4 font-mono text-xl font-semibold text-black">
          {" "}
          {position}
        </div>
      </div>
      <div className="h-1/10 flex-1 bg-white text-xl text-black">LOGOS</div>
      {/* logo icons here */}
    </div>
  );
};

export default Fcards;
