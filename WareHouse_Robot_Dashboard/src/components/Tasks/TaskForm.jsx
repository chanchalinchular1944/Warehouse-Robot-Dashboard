import React, { useState } from "react";
import useStore from "../../store/useStore";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm() {
  const addTask = useStore(state => state.addTask);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [priority, setPriority] = useState("medium");
  const [comments, setComments] = useState("");

  const onSubmit = (e) => {
    e?.preventDefault();
    if (!pickup || !drop) return;
    const task = {
      id: uuidv4(),
      pickup,
      drop,
      priority,
      comments,
      createdAt: new Date().toISOString()
    };
    addTask(task);
    setPickup(""); setDrop(""); setComments(""); setPriority("medium");
  };

  return (
    <div className="bg-white rounded p-4 shadow">
      <h3 className="font-semibold mb-3">Create Task</h3>
      <form onSubmit={onSubmit} className="space-y-3">
        <div>
          <label className="text-sm block mb-1">Pickup</label>
          <input className="w-full border px-3 py-2 rounded" value={pickup} onChange={e=>setPickup(e.target.value)} />
        </div>
        <div>
          <label className="text-sm block mb-1">Drop</label>
          <input className="w-full border px-3 py-2 rounded" value={drop} onChange={e=>setDrop(e.target.value)} />
        </div>
        <div>
          <label className="text-sm block mb-1">Priority</label>
          <select value={priority} onChange={e=>setPriority(e.target.value)} className="w-full border px-3 py-2 rounded">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label className="text-sm block mb-1">Comments</label>
          <textarea className="w-full border px-3 py-2 rounded" value={comments} onChange={e=>setComments(e.target.value)} />
        </div>
        <div className="text-right">
          <button className="px-4 py-2 rounded bg-blue-600 text-white">Submit Task</button>
        </div>
      </form>
    </div>
  );
}
