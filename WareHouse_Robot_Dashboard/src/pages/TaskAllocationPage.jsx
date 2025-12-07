import React from "react";
import TaskForm from "../components/Tasks/TaskForm";
import TaskQueue from "../components/Tasks/TaskQueue";

export default function TaskAllocationPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-1">
        <TaskForm />
      </div>
      <div className="md:col-span-2">
        <TaskQueue />
      </div>
    </div>
  );
}
