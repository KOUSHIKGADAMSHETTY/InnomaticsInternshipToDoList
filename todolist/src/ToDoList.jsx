import React, { useState } from "react";
import "./App.css";
import { FaCalendarAlt, FaEdit, FaTrash } from "react-icons/fa";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [taskTime, setTaskTime] = useState("");

    function addTask() {
        if (newTask.trim() === "" || taskTime === "") return;

        const newTaskItem = { text: newTask, time: new Date(taskTime) };
        const updatedTasks = [...tasks, newTaskItem].sort((a, b) => a.time - b.time);
        setTasks(updatedTasks);
        setNewTask("");
        setTaskTime("");
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    return (
        <div className="home-container">
            <h1 className="header-text">To-Do List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
                className="text-container"
            />
            <div className="input-group">
                <input
                    type="datetime-local"
                    value={taskTime}
                    onChange={(e) => setTaskTime(e.target.value)}
                    className="text-container"
                />
                <FaCalendarAlt className="datetime-icon" onClick={() => document.querySelector("input[type=datetime-local]").showPicker()} />
            </div>
            <button onClick={addTask} className="btn-add">+ Add Task</button>
            <ul id="taskList">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <div className="task-details">
                            <span className="task-text">{task.text}</span>
                            <span className="task-time">{task.time.toLocaleString()}</span>
                        </div>
                        <div className="task-actions">
                            <button className="btn-delete" onClick={() => removeTask(index)}><FaTrash /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
