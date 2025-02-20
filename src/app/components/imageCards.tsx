import { FC } from "react";

interface icardprops {
  number: number;
  email: string;
  link: string;
}

const Icard: FC<icardprops> = ({ number, email, link }) => {
  return (
    <div className="flex flex-1 flex-col items-center rounded-sm border bg-white h-7/10">
      <image link={link} alt="image" className="mb-6 h-9/10 w-full" />
      <div className="mx-auto border-none rounded-t-lg box-border text-center w-6/10 h-16 min-h-8 hover:bg-iip text-xs text-iip hover:text-white">
        {number}
      </div>
      <hr className="mx-auto w-6/10 rounded-sm border-t-2 border-iip" />
      <div className="mx-auto border-none text-center align-middle box-border w-6/10 h-16 min-h-8 hover:bg-iip text-xs text-iip hover:text-white">
        {email}
      </div>
      <hr className="mx-auto w-6/10 rounded-sm border-t-2 border-iip" />
      {/* logo icon will be here */}
    </div>
  );
};

export default Icard;
