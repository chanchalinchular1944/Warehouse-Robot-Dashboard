import React from "react";
import useStore from "../store/useStore";
import BotGrid from "../components/Bots/BotGrid";

export default function BotStatusPage() {
  const bots = useStore(state => state.bots);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Bot Status</h1>
      <div className="mb-3 text-sm text-gray-600">Auto-updates every 10 seconds.</div>
      <BotGrid bots={bots} />
    </div>
  );
}
