import React, { useState, useEffect } from "react";
import axios from 'axios';

const getProfile = () => {
  const storedData = localStorage.getItem('profile');
  return storedData ? JSON.parse(storedData) : null;
};

function AddTask() {
  const [task, setTask] = useState("");
  const [goal, setGoal] = useState("");
  const [frequency, setFrequency] = useState("");

  let urlQuery = 'http://localhost:8080/tasks/add';//getProfile().userId

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Task submitted: ${task}`);

    try {
      const response = await axios.post(urlQuery, {
        "userId": getProfile().userId,
        "goal": goal,
        "task": task,
        "frequency": frequency
    });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

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