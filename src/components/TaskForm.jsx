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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='Title'
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name='description'
                    placeholder='Description'
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                <select
                    name='severity'
                    value={formData.severity}
                    onChange={handleChange}
                >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <button type='submit'>Add Task</button>
            </form>
        </div>
    )
}

export default TaskForm