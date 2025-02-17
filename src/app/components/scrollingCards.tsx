"use client";
import { useRef } from "react";

export default function ScrollingCards({ cards }: { cards: any[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="relative w-full overflow-hidden">
        <div ref={scrollRef} className="animate-scrolling flex w-max gap-4 p-4">
          {cards.map((card) => (
            <CardItem key={card.id} card={card} />
          ))}
          {/* Duplicate for looping */}
          {cards.map((card) => (
            <CardItem key={`dupe-${card.id}`} card={card} />
          ))}
        </div>
      </div>
    </main>
  );
}

// Flip each card on hover
function CardItem({ card }: { card: any }) {
  return (
    <div className="group relative h-72 w-72 [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front side */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <img
            src={card.img_url}
            alt={card.heading}
            className="h-40 w-full rounded-t-lg object-cover"
          />
          <div className="rounded-b-lg bg-white p-4 shadow-lg">
            <h3 className="text-lg font-bold text-red-600">{card.heading}</h3>
            <p className="mt-2 text-gray-600">{card.desc}</p>
          </div>
        </div>
        {/* Back side */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="h-full w-full rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 text-white shadow-lg">
            <h3 className="text-lg font-bold">{card.heading} (Back)</h3>
            <p className="mt-2">
              {card.addinfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
