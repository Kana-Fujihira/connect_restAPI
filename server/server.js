import express from "express";
import { createConnection } from "mysql2";

const app = express();
app.use(express.json());

const db = createConnection({
  host: "localhost",
  user: "kana",
  password: "kana",
  database: "test_data",
});

db.connect((err) => {
  if (err) throw err;
  console.log("mySQL connected");
});

app.get("/task", (req, res) => {
  const sql = "SELECT * FROM tasks";
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/task", (req, res) => {
  const { title, completed } = req.body;
  const sql = "INSERT INTO tasks(title,completed) VALUES (?,?)";
  db.query(sql, [title, completed], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, title, completed });
  });
});

app.delete("/task/:id", (req, res) => {
  const sql = "DELETE FROM tasks WHERE id = ?";
  db.query(sql, [req.params.id], (err) => {
    if (err) throw err;
    res.status(204).send();
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
