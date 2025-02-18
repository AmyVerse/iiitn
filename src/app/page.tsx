import { prisma } from "@/lib/prisma";
import ScrollingCards from "./components/scrollingCards";

export default async function Home() {
  const cards = await prisma.card.findMany();
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-red-700">
      <ScrollingCards cards={cards} />
    </div>
  );
}
