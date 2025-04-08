import React from "react";
import FilterTasks from "./components/FilterTasks";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

const App = () => {
  return (
    <div>
      <h1>AI Safety Incident Dashboard</h1>
      <FilterTasks />
      <TaskForm />
      <TaskCard />
    </div>
  )
}

export default App