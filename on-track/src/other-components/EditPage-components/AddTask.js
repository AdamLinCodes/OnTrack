import React, { useState, useEffect } from "react";
import TasksDao from "../../daos/tasks.dao";

const taskDao = new TasksDao();

function AddTask() {
  const [task, setTask] = useState("");
  const [goal, setGoal] = useState("");
  const [frequency, setFrequency] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Task submitted: ${task}`);

    taskDao.addTask(task, goal, frequency);

    setTask("");
    setGoal("");
    setFrequency("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Task:</h3>
      <input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Enter a task"
      />      
      <input
        type="text"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
        placeholder="Enter associated goal"
      />
      <input
        type="text"
        value={frequency}
        onChange={(event) => setFrequency(event.target.value)}
        placeholder="Enter frequency"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddTask;