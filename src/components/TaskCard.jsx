import React from 'react'

const TaskCard = () => {
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

export default TaskCard