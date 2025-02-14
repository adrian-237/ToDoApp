import { useState } from 'react'

import './App.css'
import Insert from "./Components/insert.jsx";
import TaskList from "./Components/taskList.jsx";
import DoneList from "./Components/doneList.jsx";

function App() {

    const [activeTab, setActiveTab] = useState('insert');
  return (
    <>
        <div className="card">

            <div className="actions">
                <div className={`action ${activeTab === 'insert' ? 'action-active' : ''}`} onClick={() => setActiveTab('insert')}>Insert</div>
                <div  className={`action ${activeTab === 'tasks' ? 'action-active' : ''}`} onClick={() => setActiveTab('tasks')}>Tasks</div>
                <div className={`action ${activeTab === 'done' ? 'action-active' : ''}`} onClick={() => setActiveTab('done')}>Done</div>
            </div>

            <div className="content">
                {activeTab === 'insert' && <Insert />}
                {activeTab === 'tasks' && <TaskList />}
                {activeTab === 'done' && <DoneList />}
            </div>

        </div>
    </>
  )
}

export default App
