import React from "react";
import useStore from "../store/useStore";
import Card from "../components/common/Card";

function StatCard({ title, value }) {
  return (
    <Card className="text-center">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </Card>
  );
}

export default function HomePage() {
  const bots = useStore(state => state.bots);
  const tasks = useStore(state => state.tasks);

  const total = bots.length;
  const active = bots.filter(b => b.status === "busy").length;
  const idle = bots.filter(b => b.status === "idle").length;
  const errors = bots.filter(b => b.status === "error").length;
  const pending = tasks.length;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Total Bots" value={total} />
        <StatCard title="Active Tasks" value={active} />
        <StatCard title="Idle Bots" value={idle} />
        <StatCard title="Bots in Error" value={errors} />
        <StatCard title="Pending Tasks" value={pending} />
      </div>

      {/* optional area: small chart placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <div className="font-semibold mb-2">Bot Battery Overview</div>
          <div className="text-sm text-gray-500">(Add chart here)</div>
        </Card>
        <Card>
          <div className="font-semibold mb-2">Task Throughput</div>
          <div className="text-sm text-gray-500">(Add chart here)</div>
        </Card>
      </div>
    </div>
  );
}
