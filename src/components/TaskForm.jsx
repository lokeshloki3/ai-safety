import React, { useState } from 'react'

const TaskForm = ({ addNewTask }) => {

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        severity: "Low",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, description, severity } = formData;

        if (!title || !description) {
            return;
        }

        const newTask = {
            id: Date.now(),
            title,
            description,
            severity,
            reported_at: new Date().toISOString(),
        };

        addNewTask(newTask);

        setFormData({
            title: "",
            description: "",
            severity: "Low",
        });
    };

    return (
        <div className="mt-4 mx-auto lg:w-[50%] md:w-full sm:w-full bg-white p-6 rounded-lg ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Incident</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                />

                <select
                    name="severity"
                    value={formData.severity}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button
                    type="submit"
                    className="w-fit px-6 py-2.5 bg-[#39868E] hover:bg-[#5F6FFF] text-white rounded-md transition-colors duration-300 cursor-pointer"
                >
                    Add Task
                </button>
            </form>
        </div>
    )
}

export default TaskForm