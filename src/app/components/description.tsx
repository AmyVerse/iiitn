import { FC } from "react";

interface desprops {
  img: string;
  name: string;
  position: string;
  education: string;
  experience: string;
  teaching: string;
  research: string;
  publication: string;
  supervision: string;
  responsibility: string;
  anyother: string;
}

const Description:FC<desprops>=({
  img,
  name,
  position,
  education,
  experience,
  teaching,
  research,
  publication,
  supervision,
  responsibility,
  anyother,
})=>{
  return (
    <div className="flex flex-1 flex-row">
      {/* left side */}
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-1 flex-col items-center">
          <img src={img} className="block rounded-full border" />
          <div className="font-sans text-2xl font-bold text-black">{name}</div>
          <div className="font-mono text-xl font-semibold text-black">
            {position}
          </div>
        </div>
        {/* logo icons here */}
      </div>
      {/* Right side */}
      <div className="flex flex-1 flex-col items-start p-4">
        <div className="mb-1 text-xl font-semibold">EDUCATION</div>
        <div className="mb-2 text-xs">{education}</div>
        <div className="mb-1 text-xl font-semibold">EXPERIENCE</div>
        <div className="mb-2 text-xs">{experience}</div>
        <div className="mb-1 text-xl font-semibold">TEACHING</div>
        <div className="mb-2 text-xs">{teaching}</div>
        <div className="mb-1 text-xl font-semibold">RESEARCH</div>
        <div className="mb-2 text-xs">{research}</div>
        <div className="mb-1 text-xl font-semibold">PUBLICATION</div>
        <div className="mb-2 text-xs">{publication}</div>
        <div className="mb-1 text-xl font-semibold">SUPERVISION</div>
        <div className="mb-2 text-xs">{supervision}</div>
        <div className="mb-1 text-xl font-semibold">RESPONSIBILTY</div>
        <div className="mb-2 text-xs">{responsibility}</div>
        <div className="mb-1 text-xl font-semibold">ANY OTHER</div>
        <div className="mb-2 text-xs">{anyother}</div>
      </div>
    </div>
  );
}


export default Description;
