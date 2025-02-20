import Card from "./components/dataCards";
import Description from "./components/description";
import Fcards from "./components/facultyCard";
import Ibutton from "./components/InvertButton";

export default async function Home() {
  return (
    <div className="flex min-h-screen content-center items-center">
      <Description name="Kamaljeet" position="Assistant Professor"/>
    </div>
  );
}
