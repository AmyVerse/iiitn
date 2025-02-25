import Image from "next/image";
import Fcards from "./components/facultyCard";
import Ibutton from "./components/InvertButton2";
import IButton from "./components/InvertButton";

export default async function Fpage() {
  return (
    <div className="relative min-h-screen w-full m-0 p-0">
      {/* <div className="absolute -top-40 left-0 h-[80vh] w-full ">
        <Image
          src="/college.jpg"
          fill
          style={{objectFit:"cover", zIndex:-10, objectPosition:"top"}}
          alt="college"
          className="filter blur-sm"
        />
      </div> */}
      <div className=" my-36 cursor-pointer flex flex-col items-center justify-center h-[60%] w-full z-10">
        <div className="font-mono mb-4 text-3xl font-semibold tracking-[0.5rem] text-iip bg-transparent">
          <pre>ABOUT US</pre>
        </div>
        <div className="bg-white p-2 border rounded-md text-iip">Home &gt; About us</div>
      </div>
      <div className="bg-white text-black w-[90%] border flex flex-col items-center justify-center rounded-lg mt-40 p-4 ">
        <header className="text-3xl font-bold text-iip text-center">HOD</header>
        <Fcards img={"#"} name="Neha Kasture" position="Assistant Professor" />
      </div>
    </div>
  );
}