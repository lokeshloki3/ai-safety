import React from 'react'

const TaskCard = ({ task, toggleDescription }) => {
    return (
        <div>
            <h2>{task.title}</h2>
            <p>Severity: {task.severity}</p>
            <p>Reported At: {new Date(task.reported_at).toLocaleDateString()}</p>
            <button onClick={() => toggleDescription(task.id)}>
                {task.descExpanded ? "Hide Details" : "Show Details"}
            </button>
            {
                task.descExpanded && (
                    <p>{task.description}</p>
                )
            }
        </div>
    )
}

export default TaskCard