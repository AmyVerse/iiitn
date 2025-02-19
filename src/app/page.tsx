import Card from "./components/cards";
import Fcards from "./components/facultycard";
import Ibutton from "./components/Invertbutton";

export default async function Home() {
  return (
    <div className="flex min-h-screen content-center items-center">
      <Fcards img="#" name="Kamaljeet" position="Assistant professor"/>
    </div>
  );
}
