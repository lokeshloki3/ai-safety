import React, { useState } from "react";
import FilterTasks from "./components/FilterTasks";
import TaskForm from "./components/TaskForm";
import initialData from "./assets/data";
import TaskCard from "./components/TaskCard";

const App = () => {

  const [tasks, setTasks] = useState(initialData);
  const [severityFilter, setSeverityFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const toggleDescription = (id) => {
    setTasks((prev) => prev.map((task) => task.id === id ? { ...task, descExpanded: !task.descExpanded } : task));
  };

  const filteredTasks = tasks.filter((task) => severityFilter === "All" || task.severity === severityFilter)
    .sort((a, b) => sortOrder === "Newest"
      ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
      : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
    );

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 p-8 text-center w-11/12 mx-auto">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">AI Safety Incident Dashboard</h1>
      <FilterTasks
        severityFilter={severityFilter}
        setSeverityFilter={setSeverityFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <TaskForm addNewTask={addNewTask} />
      <div className="mt-6">
        {
          filteredTasks.map((task) => {
            return (
              <TaskCard
                key={task.id}
                task={task}
                toggleDescription={toggleDescription}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default App