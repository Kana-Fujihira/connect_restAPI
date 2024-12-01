import { getDB } from "../config/db.js";

export const getTasks = () => {
  const db = getDB();
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM tasks";
    db.query(sql, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

export const addTasks = (task) => {
  const db = getDB();
  const { title, completed } = task;
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO tasks(title, completed) VALUES (?, ?)";
    db.query(sql, [title, completed], (err, result) => {
      if (err) return reject(err);
      resolve({ id: result.insertId, title, completed });
    });
  });
};

export const deleteTasks = (id) => {
  const db = getDB();
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM tasks WHERE id = ?";
    db.query(sql, [id], (err) => {
      if (err) return reject(err);
      resolve();
    });
  });
};
