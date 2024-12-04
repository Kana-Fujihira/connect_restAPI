import { getDB } from "../config/db.js";

export const getTasks = () => { // getTasks is used in Controller
  const db = getDB(); // connected to database
  return new Promise((resolve, reject) => {
    const sql = "SELECT id, title, completed FROM tasks"; // optimize query of mySQL , we don't ask ALL data with *
    db.query(sql, (err, result) => { // send this query into datase and then return err or result 
      if (err) return reject(err);
      resolve(result);
    });
  });
};

export const addTasks = (task) => { // addTasks is used in Controller
  const db = getDB();
  const { title, completed } = task; // value title and completed is take from object task 
  return new Promise((resolve, reject) => {
    const sql = "INSERT INTO tasks(title, completed) VALUES (?, ?)"; // place holder avoid SQL injection 
    db.query(sql, [title, completed], (err, result) => { // replaced title and completed with placeholder ??
      if (err) return reject(err);
      resolve({ id: result.insertId, title, completed });
    });
  });
};

export const deleteTasks = (id) => { // deleteTasks is used in Controller
  const db = getDB();
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM tasks WHERE id = ?";
    db.query(sql, [id], (err) => { // replace id into placeholder ? 
      if (err) return reject(err);
      resolve();
    });
  });
};
