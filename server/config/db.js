import { createConnection } from "mysql2";

export const db = createConnection({
  host: "localhost",
  user: "kana",
  password: "kana",
  database: "test_data",
});

db.connect((err) => {
  if (err) throw err;
  console.log("mySQL connected");
});

export const getDB = () => db; // share the connection of database the other file