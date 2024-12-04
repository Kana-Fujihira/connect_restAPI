import { createConnection } from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = createConnection({
  host: "localhost",
  // eslint-disable-next-line no-undef
  user: process.env.DB_USER,
  // eslint-disable-next-line no-undef
  password: process.env.DB_PASSWORD,
  // eslint-disable-next-line no-undef
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) throw err;
  console.log("mySQL connected");
});

export const getDB = () => db; // share the connection of database the other file
