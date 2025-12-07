import React from "react";
import BotCard from "./BotCard";

export default function BotGrid({ bots }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bots.map(b => <BotCard key={b.id} bot={b} />)}
    </div>
  );
}
