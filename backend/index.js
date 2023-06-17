import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from "path";

import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors({ origin: true }));

// Change username and password in deployment
const dbConfig = {
  host: "us-cdbr-east-06.cleardb.net",
  user: "bf0a42aeb7d40",
  password: "4f6cf533",
  database: "heroku_264c75a097e4d01",
};

const connectionLimit = 10;
let connectionPool = [];

function createConnectionPool() {
  for (let i = 0; i < connectionLimit; i++) {
    const dbConnection = mysql.createConnection(dbConfig);
    connectionPool.push(dbConnection);
  }
}

function getConnectionFromPool() {
  if (connectionPool.length === 0) {
    return null;
  }
  return connectionPool.pop();
}

function releaseConnectionToPool(connection) {
  connectionPool.push(connection);
}

function queryFromPool(query, params) {
  return new Promise((resolve, reject) => {
    const connection = getConnectionFromPool();
    if (!connection) {
      reject(new Error("Connection pool exhausted"));
    } else {
      connection.query(query, params, (error, results) => {
        releaseConnectionToPool(connection);
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    }
  });
}

app.use(express.static(path.resolve(__dirname, "../client/build")));

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
  createConnectionPool();
  console.log("connected to back");
});
