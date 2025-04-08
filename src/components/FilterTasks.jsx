import React from "react";

const FilterTasks = ({ severityFilter, setSeverityFilter, sortOrder, setSortOrder }) => {
    return (
        <div>
            <select
                value={severityFilter}
                onChange={(e) => setSeverityFilter(e.target.value)}
            >
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="Newest">Newest First</option>
                <option value="Oldest">Oldest First</option>
            </select>
        </div>
    )
}

export default FilterTasks