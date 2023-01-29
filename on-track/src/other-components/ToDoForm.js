import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/todo.css';
import axios from 'axios';

const getProfile = () => {
    const storedData = localStorage.getItem('profile');
    return storedData ? JSON.parse(storedData) : null;
};

function ToDoForm() {

    const [toggleState, setToggleState] = useState(1);
    const [data, setData] = useState([]);

    let urlQuery = 'http://localhost:8080/tasks/tasksbyuser/' + getProfile().userId;

    useEffect(() => {
        axios.get(urlQuery)
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    });

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
            <div className={toggleState === 1 ? "content activeContent" : "content"}>
                <ul>
                    {data.filter((item) => {
                        return item.frequency === "daily"
                    }).map(item => (
                        <li key={crypto.randomUUID()}>{item.task}</li>
                    ))}
                </ul>
            </div>
            <div className={toggleState === 2 ? "content activeContent" : "content"}>
                <ul>
                    {data.filter((item) => {
                        return item.frequency === "weekly"
                    }).map(item => (
                        <li key={crypto.randomUUID()}>{item.task}</li>
                    ))}
                </ul>
            </div>
            <div className={toggleState === 3 ? "content activeContent" : "content"}>
                <ul>
                    {data.filter((item) => {
                        return item.frequency === "monthly"
                    }).map(item => (
                        <li key={crypto.randomUUID()}>{item.task}</li>
                    ))}
                </ul>
            </div>
            <div className={toggleState === 4 ? "content activeContent" : "content"}>
                <ul>
                    {data.filter((item) => {
                        return item.frequency === "yearly"
                    }).map(item => (
                        <li key={crypto.randomUUID()}>{item.task}</li>
                    ))}
                </ul>
            </div>
            <div className={toggleState === 5 ? "content activeContent" : "content"}>
                {/*TODO This is going to be used in new class component? */}
            </div>
        </div>
    </div>
  )
}

export default ToDoForm;