import { useState, useEffect } from "react";
import { Form } from "react-router-dom";

function App() {
  const [newTask, setNewTask] = useState({
    title: "",
  });

  const [tasks, setTasks] = useState([]);

  // 入力値を更新
  const handleInput = (event) => {
    setNewTask((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // タスクを追加するための送信処理
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTask.title,
          completed: false, // デフォルトで未完了として送信
        }),
      });

      if (!response.ok) throw new Error("Failed to add task");

      const addedTask = await response.json();
      setTasks((prev) => [...prev, addedTask]); // タスク一覧を更新
      setNewTask({ title: "" }); // フォームをリセット
    } catch (err) {
      console.error(err.message);
    }
  };

  // タスクを取得
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3000/task");
        const data = await response.json();
        setTasks(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTasks();
  }, []);

  // タスクを削除
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`"http://localhost:3000/task/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete task");

      setTasks((prev) => prev.filter((task) => task.id !== id)); // タスク一覧を更新
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1>This is Kana</h1>
      <p>This is my to-do list</p>

      {/* タスク一覧の表示 */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* 新しいタスクを追加するフォーム */}
      <Form onSubmit={handleSubmit} method="post">
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
      </Form>
    </div>
  );
}

export default App;
