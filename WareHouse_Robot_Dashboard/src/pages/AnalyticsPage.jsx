import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import useStore from "../store/useStore";

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function AnalyticsPage() {
  const bots = useStore(state => state.bots);
  const tasks = useStore(state => state.tasks);

  const statusCounts = bots.reduce((acc, b) => {
    acc[b.status] = (acc[b.status] || 0) + 1;
    return acc;
  }, {});

  const doughnutData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: [
          'rgba(99,102,241,0.7)',
          'rgba(16,185,129,0.7)',
          'rgba(59,130,246,0.7)',
          'rgba(239,68,68,0.7)'
        ]
      }
    ]
  };

  // crude battery trend sample (randomized)
  const lineData = {
    labels: bots.map(b => b.id),
    datasets: [
      {
        label: 'Battery',
        data: bots.map(b => b.battery),
        tension: 0.2
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white rounded p-4 shadow">
        <h3 className="font-semibold mb-3">Bot Status Distribution</h3>
        <Doughnut data={doughnutData} />
      </div>

      <div className="bg-white rounded p-4 shadow">
        <h3 className="font-semibold mb-3">Battery Levels</h3>
        <Line data={lineData} />
      </div>

      <div className="bg-white rounded p-4 shadow md:col-span-2">
        <h3 className="font-semibold mb-3">Quick Insights</h3>
        <ul className="list-disc pl-6 text-sm text-gray-600">
          <li>Total bots: {bots.length}</li>
          <li>Pending tasks: {tasks.length}</li>
          <li>Average battery: {Math.round(bots.reduce((s,b) => s + b.battery,0) / bots.length)}%</li>
        </ul>
      </div>
    </div>
  );
}
