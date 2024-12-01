import { getTasks, addTasks, deleteTasks } from "../models/TaskRepository.js";

export const browse = async (req, res) => {
  try {
    // Fetch all tasks from the database
    const tasks = await getTasks();
    // Respond with the tasks in JSON format
    res.json(tasks);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    res.status(500).json({ message: "Failed to fetch tasks", error: err });
  }
};

// The A of BREAD - Add (Create) operation
export const add = async (req, res) => {
  try {
    const task = req.body;
    // Create new task
    const newTask = await addTasks(task);

    res.status(201).json(newTask);
  } catch (err) {
    console.error("error during adding tasks to database:", err);
    res.status(500).json();
  }
};

// The D of BREAD - Destroy (Delete) operation
export const destroy = async (req, res) => {
  // Extract the item id from the request body
  const { id } = req.params;
  try {
    // Delete the task from the database
    const deletedTask = await deleteTasks(id);

    // Respond with HTTP 200 (OK) and the response data
    res.status(200).json({ deletedTask });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    res.status(500).json({ message: "Failed to delete task", error: err });
  }
};
