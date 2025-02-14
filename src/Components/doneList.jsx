import { useState, useEffect } from 'react';

export default function DoneList() {
    const [doneTasks, setDoneTasks] = useState([]);

    useEffect(() => {
        const storedDoneTasks = JSON.parse(localStorage.getItem('doneTasks')) || [];
        setDoneTasks(storedDoneTasks);
    }, []);

    const handleRemove = (index) => {
        const updatedDoneTasks = doneTasks.filter((_, i) => i !== index);
        setDoneTasks(updatedDoneTasks);
        localStorage.setItem('doneTasks', JSON.stringify(updatedDoneTasks));
    };

    const handleClear = () => {
        setDoneTasks([]);
        localStorage.setItem('doneTasks', JSON.stringify([]));
    };

    return (
        <div>
            <h2>Done Tasks</h2>
            {doneTasks.length > 0 ? (
                <ul>
                    {doneTasks.map((task, index) => (
                        <li key={index} style={{ textDecoration: 'line-through' }}>
                            <span>{task}</span>
                            <button onClick={() => handleRemove(index)}><i className="fa-solid fa-trash"></i></button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks marked as done</p>
            )}
            {doneTasks.length > 0 && (
                <button onClick={handleClear}>Clear All</button>
            )}
        </div>
    );
}
