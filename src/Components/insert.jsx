import { useState } from 'react';

export default function Insert() {
    const [task, setTask] = useState('');

    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const updatedTasks = [...existingTasks, task];

        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        console.log("Task saved:", task);
        setTask('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Write your task"
                    value={task}
                    onChange={handleInputChange}
                />
                <button type="submit">Add Task</button>
            </form>
        </>
    );
}