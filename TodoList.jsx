import React, { useState, useCallback } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addTask = useCallback(() => {
    // Check if the task already exists in the list
    if (tasks.includes(taskName)) {
      setErrorMessage("Task already exists. Please use another name.");
      return;
    }
    // Add the task if it's not a duplicate
    if (taskName.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, taskName]);
      setTaskName(""); // Reset the input field
      setErrorMessage(""); // Clear any previous error
    }
  }, [tasks, taskName]);

  return (
    <div className="my-3 mx-3">
      <h1 style={{color:'orange'}}>Todo List</h1>
      <div>
        <input
          type="text"
          value={taskName}
          placeholder="Enter a task"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={addTask} className="mx-2 btn btn-success">Add Task</button>
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
