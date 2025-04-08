import React from 'react'

const TaskCard = ({ task, toggleDescription }) => {
    return (
        <div className="bg-white p-4 rounded-lg lg:w-[50%] md:w-full sm:w-full mx-auto mb-4 transition-transform transform hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-800">{task.title}</h2>
            <p className="text-gray-600 mt-2">Severity:{" "}
                <span className="font-semibold">
                    {task.severity}
                </span>
            </p>
            <p className="text-gray-600">Reported At: {new Date(task.reported_at).toLocaleDateString()}</p>
            <button
                onClick={() => toggleDescription(task.id)}
                className="mt-2 p-2 bg-[#39868E] hover:bg-[#5F6FFF] text-white rounded-md transition-colors duration-300 cursor-pointer"
            >
                {task.descExpanded ? "Hide Details" : "Show Details"}
            </button>
            {
                task.descExpanded && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-md">
                        <p className="text-gray-700">{task.description}</p>
                    </div>
                )
            }
        </div>
    )
}

export default TaskCard
