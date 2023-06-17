import express from "express";
import mysql from "mysql";
import cors from "cors";
import path from "path";
const port = process.env.PORT || 3001;

const app = express();
app.use(cors({ origin: true }));

// Change username and password in deployment
const dbConfig = {
  host: "us-cdbr-east-06.cleardb.net",
  user: "bf0a42aeb7d407",
  password: "4f6cf533",
  database: "heroku_264c75a097e4d01",
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Helper function to query from the connection pool
const queryFromPool = (query, params = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
        return;
      }
      connection.query(query, params, (error, results) => {
        connection.release();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  });
};

// Rest of your code...

//Obtiene 1 video
app.get("/Video/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const q =
      "SELECT * FROM Videos  INNER JOIN contenido USING(ID_Contenido) WHERE videos.ID_Contenido = ?;";
    const results = await queryFromPool(q, [id]);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene todos los videos y sus detalles
app.get("/Videos", async (req, res) => {
  try {
    const q =
      "SELECT contenido.ID_Contenido, contenido.Descripcion, Nombre AS nomCont, URL, Duracion, Canal FROM contenido INNER JOIN videos WHERE contenido.Tipo =1 AND contenido.ID_Contenido = videos.ID_Contenido";
    const results = await queryFromPool(q);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene todos los videos por filtro de 1 etiqueta
app.get("/Videos/:nombre", async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const q =
      "SELECT contenido.ID_Contenido, contenido.Descripcion, contenido.Nombre AS nomCont, URL, Duracion, Canal, etiquetas.Nombre FROM contenido INNER JOIN videos USING(ID_contenido) INNER JOIN contenido_etiqueta USING(ID_contenido) INNER JOIN etiquetas USING(ID_Etiqueta) WHERE contenido.ID_Contenido = videos.ID_Contenido AND etiquetas.Nombre= ?;";
    const results = await queryFromPool(q, [nombre]);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene 1 libro
app.get("/Libro/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const q =
      "SELECT * FROM libros  INNER JOIN contenido USING(ID_Contenido) WHERE libros.ID_Contenido = ?;";
    const results = await queryFromPool(q, [id]);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene todos los libros y sus detalles
app.get("/Libros", async (req, res) => {
  try {
    const q =
      "SELECT contenido.ID_Contenido, contenido.Descripcion, Nombre AS nomCont, URL, Paginas,Imagen FROM contenido INNER JOIN Libros WHERE contenido.Tipo =2 AND contenido.ID_Contenido = Libros.ID_Contenido";
    const results = await queryFromPool(q);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene todos los libros por filtro de 1 etiqueta
app.get("/Libros/:nombre", async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const q =
      "SELECT contenido.ID_Contenido, contenido.Descripcion, contenido.Nombre AS nomCont, etiquetas.Nombre, Paginas,Imagen FROM contenido INNER JOIN libros USING(ID_contenido) INNER JOIN contenido_etiqueta USING(ID_contenido) INNER JOIN etiquetas USING(ID_Etiqueta) WHERE contenido.ID_Contenido = libros.ID_Contenido AND etiquetas.Nombre= ?;";
    const results = await queryFromPool(q, [nombre]);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene todas las referencias y sus detalles
app.get("/Referencias", async (req, res) => {
  try {
    const q =
      "SELECT contenido.ID_Contenido, contenido.Descripcion, Nombre AS nomCont, URL, NombreArticulo, NombrePagina FROM contenido INNER JOIN Referencias WHERE contenido.Tipo =4 AND contenido.ID_Contenido = Referencias.ID_Contenido";
    const results = await queryFromPool(q);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene todas las referencias por filtro de 1 etiqueta
app.get("/Referencias/:nombre", async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const q =
      "SELECT contenido.ID_Contenido, contenido.Descripcion, contenido.Nombre as nomCont, etiquetas.Nombre, NombreArticulo, NombrePagina FROM contenido INNER JOIN referencias USING(ID_contenido) INNER JOIN contenido_etiqueta USING(ID_contenido) INNER JOIN etiquetas USING(ID_Etiqueta) WHERE contenido.ID_Contenido = referencias.ID_Contenido AND etiquetas.Nombre= ?";
    const results = await queryFromPool(q, [nombre]);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene 1 actividad
app.get("/Actividad/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const q =
      "SELECT * FROM actividades  INNER JOIN contenido USING(ID_Contenido) WHERE actividades.ID_Contenido = ?";
    const results = await queryFromPool(q, [id]);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene todos las actividades y sus detalles
app.get("/Actividades", async (req, res) => {
  try {
    const q =
      "SELECT contenido.ID_Contenido, Imagen, Nombre AS nomCont, URL, Descripcion FROM contenido INNER JOIN actividades WHERE contenido.Tipo =3 AND contenido.ID_Contenido = actividades.ID_Contenido";
    const results = await queryFromPool(q);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

//Obtiene todas las actividades por filtro de 1 etiqueta
app.get("/Actividades/:nombre", async (req, res) => {
  try {
    const nombre = req.params.nombre;
    const q =
      "SELECT contenido.ID_Contenido, contenido.Descripcion, contenido.Nombre AS nomCont, etiquetas.Nombre, Imagen, URL FROM contenido INNER JOIN actividades USING(ID_contenido) INNER JOIN contenido_etiqueta USING(ID_contenido) INNER JOIN etiquetas USING(ID_Etiqueta) WHERE contenido.ID_Contenido = actividades.ID_Contenido AND etiquetas.Nombre= ?";
    const results = await queryFromPool(q, [nombre]);
    return res.json(results);
  } catch (err) {
    return res.json(err);
  }
});

// ... Rest of your code


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
