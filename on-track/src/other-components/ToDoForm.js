import React from 'react';
import { useState, useEffect } from 'react';
import TasksDao from '../daos/tasks.dao';

const taskDao = new TasksDao();

function ToDoForm() {

    const [toggleState, setToggleState] = useState(1);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const data = await taskDao.getAll();
          setTasks(data);
        }
        fetchData();
    }, [tasks]);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
    <div className="container">
        <div className="tabRow">
            <div className={toggleState === 1 ? "tab activeTab" : "tab"} onClick={() => toggleTab(1)}>Daily</div>
            <div className={toggleState === 2 ? "tab activeTab" : "tab"} onClick={() => toggleTab(2)}>Weekly</div>
            <div className={toggleState === 3 ? "tab activeTab" : "tab"} onClick={() => toggleTab(3)}>Monthly</div>
            <div className={toggleState === 4 ? "tab activeTab" : "tab"} onClick={() => toggleTab(4)}>Annually</div>
            <div className={toggleState === 5 ? "tab activeTab" : "tab"} onClick={() => toggleTab(5)}>Custom..</div>
        </div>
        <div className='tabContent'>
            {/* Daily tab starts here */}
            <hr/>
            <h2>Daily</h2>
            <div className={toggleState === 1 ? "content activeContent" : "content"}>
                <ul>
                    {tasks.filter((item) => {
                        return item.frequency === "daily"
                    }).map(item => (
                        <li key={crypto.randomUUID()}>{item.taskName}</li>
                    ))}
                </ul>
            </div>

            {/* Weekly tab starts here */}
            <hr/>
            <h2>Weekly</h2>
            <div className={toggleState === 2 ? "content activeContent" : "content"}>
                <ul>
                    {tasks.filter((item) => {
                        return item.frequency === "weekly"
                    }).map(item => (
                        <li key={crypto.randomUUID()}>{item.taskName}</li>
                    ))}
                </ul>
            </div>

            {/* Monthly tab starts here */}
            <hr/>
            <h2>Montly</h2>
            <div className={toggleState === 3 ? "content activeContent" : "content"}>
                <ul>
                    {tasks.filter((item) => {
                        return item.frequency === "monthly"
                    }).map(item => (
                        <li key={crypto.randomUUID()}>{item.taskName}</li>
                    ))}
                </ul>
            </div>

            {/* Yearly tab starts here */}
            <hr/>
            <h2>Yearly</h2>
            <div className={toggleState === 4 ? "content activeContent" : "content"}>
                <ul>
                    {tasks.filter((item) => {
                        return item.frequency === "yearly"
                    }).map(item => (
                        <li key={crypto.randomUUID()}>{item.taskName}</li>
                    ))}
                </ul>
            </div>

            {/* Custom tab starts here */}
            <hr/>
            <div className={toggleState === 5 ? "content activeContent" : "content"}>
                {/*TODO This is going to be used in new class component? */}
            </div>
        </div>
    </div>
  )
}

export default ToDoForm;