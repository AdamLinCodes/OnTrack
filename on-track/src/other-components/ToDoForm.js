import React from 'react';
import { useState } from 'react';
import '../styles/todo.css';

function ToDoForm() {

    const [toggleState, setToggleState] = useState(1);

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
                {/*TODO This is going to be used in new class component? */}
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Workout</div>
                        <div className="taskDuration">1 hour</div>
                    </div>
                </div>
            </div>
            <div className={toggleState === 2 ? "content activeContent" : "content"}>
                {/*TODO This is going to be used in new class component? */}
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Workout</div>
                        <div className="taskDuration">1 hour</div>
                    </div>
                </div>
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Guitar</div>
                        <div className="taskDuration">30 mins</div>
                    </div>
                </div>
            </div>
            <div className={toggleState === 3 ? "content activeContent" : "content"}>
                {/*TODO This is going to be used in new class component? */}
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Workout</div>
                        <div className="taskDuration">1 hour</div>
                    </div>
                </div>
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Guitar</div>
                        <div className="taskDuration">30 mins</div>
                    </div>
                </div>
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Apply for Jobs</div>
                        <div className="taskDuration">2 hours</div>
                    </div>
                </div>
            </div>
            <div className={toggleState === 4 ? "content activeContent" : "content"}>
                {/*TODO This is going to be used in new class component? */}
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Guitar</div>
                        <div className="taskDuration">30 mins</div>
                    </div>
                </div>
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Workout</div>
                        <div className="taskDuration">1 hour</div>
                    </div>
                </div>
            </div>
            <div className={toggleState === 5 ? "content activeContent" : "content"}>
                {/*TODO This is going to be used in new class component? */}
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Workout</div>
                        <div className="taskDuration">1 hour</div>
                    </div>
                </div>
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Guitar</div>
                        <div className="taskDuration">30 mins</div>
                    </div>
                </div>
                <div className="task">
                    <input type="checkbox" className='checkbox'/>
                    <div className="taskContainer">
                        <div className="taskTitle">Programming</div>
                        <div className="taskDuration">7 hours!</div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToDoForm;