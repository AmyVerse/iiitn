import Bgimage from "./bgimage";
import Fetchapi from "./components/page";
import IButton from "./components/InvertButton";



export default async function Home() {
  return (
    <div className="flex min-h-screen content-center items-center">
     <Fetchapi/>
    </div>
  );
}
