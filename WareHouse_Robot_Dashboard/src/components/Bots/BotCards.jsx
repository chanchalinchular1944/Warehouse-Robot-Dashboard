import React from "react";

export default function BotCard({ bot }) {
  const colorByStatus = {
    idle: "text-gray-600",
    busy: "text-green-600",
    charging: "text-blue-600",
    error: "text-red-600"
  };
  return (
    <div className="bg-white rounded-lg p-3 shadow">
      <div className="flex justify-between items-center">
        <div className="font-semibold">{bot.id}</div>
        <div className="text-xs text-gray-500">{new Date(bot.lastUpdated).toLocaleTimeString()}</div>
      </div>
      <div className="mt-2">Battery: <span className="font-medium">{bot.battery}%</span></div>
      <div>Status: <span className={colorByStatus[bot.status] + " font-medium "}>{bot.status}</span></div>
      <div>Task: <span>{bot.currentTask ?? "—"}</span></div>
      <div>Speed: <span>{bot.speed} m/s</span></div>
    </div>
  );
}
