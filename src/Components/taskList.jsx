import { useState, useEffect } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    const handleRemove = (index) => {
        tasks.splice(index, 1);
        setTasks([...tasks]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const handleEdit = (index) => {
        const newTask = prompt('Edit your task:', tasks[index]);
        if (newTask) {
            tasks[index] = newTask;
            setTasks([...tasks]);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    };

    const handleDone = (index) => {
        const doneTask = tasks[index];
        const doneTasks = JSON.parse(localStorage.getItem('doneTasks')) || [];
        doneTasks.push(doneTask);
        localStorage.setItem('doneTasks', JSON.stringify(doneTasks));
        tasks.splice(index, 1);
        setTasks([...tasks]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert(`Task "${doneTask}" marked as done!`);
    };

    return (
        <div>
            <h2>Task List</h2>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span>{task}</span>
                            <div className="buttons">
                                <button onClick={() => handleEdit(index)}><i className="fa-regular fa-pen-to-square"></i>
                                </button>
                                <button onClick={() => handleDone(index)}><i className="fa-solid fa-check"></i></button>
                                <button onClick={() => handleRemove(index)}><i className="fa-solid fa-trash"></i></button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}
