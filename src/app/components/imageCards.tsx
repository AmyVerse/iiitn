import Image from "next/image";
import { FC } from "react";

interface icardprops {
  number: number;
  email: string;
  link: string;
}

const Icard: FC<icardprops> = ({ number, email, link }) => {
  return (
    <div className="flex h-7/10 flex-1 flex-col items-center rounded-sm border bg-white">
      <Image src={link} alt="image" className="mb-6 h-9/10 w-full" />
      <div className="mx-auto box-border h-16 min-h-8 w-6/10 rounded-t-lg border-none text-center text-xs text-iip hover:bg-iip hover:text-white">
        {number}
      </div>
      <hr className="mx-auto w-6/10 rounded-sm border-t-2 border-iip" />
      <div className="mx-auto box-border h-16 min-h-8 w-6/10 border-none text-center align-middle text-xs text-iip hover:bg-iip hover:text-white">
        {email}
      </div>
      <hr className="mx-auto w-6/10 rounded-sm border-t-2 border-iip" />
      {/* logo icon will be here */}
    </div>
  );
};

export default Icard;
