import { useState, useEffect } from "react";
import styles from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function Home() {
  const [newTask, setNewTask] = useState({
    title: "",
  });

  const [tasks, setTasks] = useState([]);

  // update input of task
  const handleInput = (event) => {
    setNewTask((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // function to complete the task
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTask.title,
          completed: false, // put false = not done as default
        }),
      });

      if (!response.ok) throw new Error("Failed to add task");

      const addedTask = await response.json();
      setTasks((prev) => [...prev, addedTask]); // update task list with new added task
      setNewTask({ title: "" }); //  Reset form
    } catch (err) {
      console.error(err.message);
    }
  };

  // get all tasks from data base with fetch
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/task");
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        console.error(err.message, "there is error");
      }
    };
    fetchTasks();
  }, []);

  // Delete tasks existed on the list
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/task/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete task");

      setTasks((prev) => prev.filter((task) => task.id !== id)); // update task list
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.containerList}>
        {/* Show all tasks of database */}
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}{" "}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.newTaskInput}>
        {/* formulaire to put new tasks */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">
            Title:
            <input
              onChange={handleInput}
              value={newTask.title}
              type="text"
              name="title"
              placeholder="Add a new task"
            />
          </label>
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
}
