import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from "path";

const app = express();
app.use(cors({ origin: true }));

// Change username and password in deployment
const dbConfig = {
  host: "us-cdbr-east-06.cleardb.net",
  user: "bf0a42aeb7d40",
  password: "4f6cf533",
  database: "heroku_264c75a097e4d01",
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Helper function to query from the connection pool
const queryFromPool = (query) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

app.use(express.static(new URL("../client/build", import.meta.url).pathname));
// Set CORS headers to allow cross-origin access
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://www.herokucdn.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Alumnos solo pueden acceder a videos y libros
app.get("/Alumno", async (req, res) => {
  try {
    const q = "SELECT * FROM contenido WHERE tipo=1 OR tipo=2;";
    const results = await queryFromPool(q);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

// Acompanantes solo pueden acceder a videos, libros y actividades
app.get("/Acompanante", async (req, res) => {
  try {
    const q = "SELECT * FROM contenido WHERE tipo=1 OR tipo=2 OR tipo=3;";
    const results = await queryFromPool(q);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

// Rest of your routes...

app.listen(8800, () => {
  console.log("Connected to back");
});
