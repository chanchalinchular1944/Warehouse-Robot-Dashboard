import React from "react";
import useStore from "../../store/useStore";

export default function TaskQueue() {
  const tasks = useStore(state => state.tasks);

  return (
    <div className="bg-white rounded p-4 shadow">
      <h3 className="font-semibold mb-3">Task Queue ({tasks.length})</h3>
      {tasks.length === 0 && <div className="text-sm text-gray-500">No pending tasks</div>}
      <ul className="space-y-2">
        {tasks.map((t, idx) => (
          <li key={t.id} className="border rounded p-2 flex justify-between">
            <div>
              <div className="text-sm font-medium">{t.pickup} → {t.drop}</div>
              <div className="text-xs text-gray-500">Priority: {t.priority} • {new Date(t.createdAt).toLocaleTimeString()}</div>
            </div>
            <div className="text-sm text-gray-600">{idx+1}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
