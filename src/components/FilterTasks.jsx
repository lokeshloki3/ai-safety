import React from "react";

const FilterTasks = ({ severityFilter, setSeverityFilter, sortOrder, setSortOrder }) => {
    return (
        <div className="flex gap-2 lg:w-[50%] md:w-full sm:w-full mx-auto bg-gray-50 p-4 rounded-lg">
            <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
                className="p-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 transition duration-200 w-full sm:w-auto"
            >
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="p-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 transition duration-200 w-full sm:w-auto"
            >
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
            </select>
        </div>
    )
}

export default FilterTasks