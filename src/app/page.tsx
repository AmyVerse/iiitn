import { prisma } from "@/lib/prisma";
import ScrollingCards from "./components/scrollingCards";

export default async function Home() {
  return (
    <div className="flex bg-gradient-to-r from-purple-600 via-pink-600 to-red-700 min-h-screen">
    </div>
  )
  // Server component fetching from Prisma
  // const cards = await prisma.card.findMany();
  // return <ScrollingCards cards={cards} />;
}
