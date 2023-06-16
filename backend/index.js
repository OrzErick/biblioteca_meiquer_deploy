import express from "express"
import mysql from "mysql"
import cors from "cors"
import path from "path"

const app = express()
app.use(cors({origin:true}))

// Cambiar username y contrasena en deploy
const db = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bf0a42aeb7d40",
    password:"4f6cf533",
    database: "heroku_264c75a097e4d01"
})

app.use(exoress.static(path.resolve(__dirname, '../client/build')));

// Alumnos solo pueden acceder a videos y libros
app.get("/Alumno", (req, res)=>{
    const q = "SELECT * FROM contenido WHERE tipo=1 OR tipo=2;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Acompanantes solo pueden acceder a videos, libros y actividades
app.get("/Acompanante", (req, res)=>{
    const q = "SELECT * FROM contenido WHERE tipo=1 OR tipo=2 OR tipo=3;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Maestros pueden acceder a todo el contenido disponible
app.get("/Maestro", (req, res)=>{
    const q = "SELECT * FROM contenido;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Obtiene 1 video
app.get("/Video/:id", (req, res)=>{
    const id = req.params.id
    const q = "SELECT * FROM Videos  INNER JOIN contenido USING(ID_Contenido) WHERE videos.ID_Contenido = ?;"
    db.query(q,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Obtiene todos los videos y sus detalles 
app.get("/Videos", (req, res)=>{
    const q = "SELECT contenido.ID_Contenido,contenido.Descripcion, Nombre AS nomCont, URL, Duracion, Canal FROM contenido INNER JOIN videos WHERE contenido.Tipo =1 AND contenido.ID_Contenido = videos.ID_Contenido"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Obtiene todos los videos por filtro de 1 etiqueta 
app.get("/Videos/:nombre", (req, res)=>{
    const nombre = req.params.nombre
    const q = "SELECT contenido.ID_Contenido,contenido.Descripcion, contenido.Nombre AS nomCont, URL, Duracion, Canal, etiquetas.Nombre FROM contenido INNER JOIN videos USING(ID_contenido) INNER JOIN contenido_etiqueta USING(ID_contenido) INNER JOIN etiquetas USING(ID_Etiqueta) WHERE contenido.ID_Contenido = videos.ID_Contenido AND etiquetas.Nombre= ?;"
    db.query(q,[nombre],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Obtiene 1 libro
app.get("/Libro/:id", (req, res)=>{
    const id = req.params.id
    const q = "SELECT * FROM libros  INNER JOIN contenido USING(ID_Contenido) WHERE libros.ID_Contenido = ?;"
    db.query(q,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Obtiene todos los libros y sus detalles 
app.get("/Libros", (req, res)=>{
    const q = "SELECT contenido.ID_Contenido,contenido.Descripcion, Nombre AS nomCont, URL, Paginas,Imagen FROM contenido INNER JOIN Libros WHERE contenido.Tipo =2 AND contenido.ID_Contenido = Libros.ID_Contenido"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Obtiene todos los libros por filtro de 1 etiqueta 
app.get("/Libros/:nombre", (req, res)=>{
    const nombre = req.params.nombre
    const q = "SELECT contenido.ID_Contenido,contenido.Descripcion, contenido.Nombre AS nomCont, etiquetas.Nombre, Paginas,Imagen FROM contenido INNER JOIN libros USING(ID_contenido) INNER JOIN contenido_etiqueta USING(ID_contenido) INNER JOIN etiquetas USING(ID_Etiqueta) WHERE contenido.ID_Contenido = libros.ID_Contenido AND etiquetas.Nombre= ?;"
    db.query(q,[nombre],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Referencias", (req, res)=>{
    const q = "SELECT contenido.ID_Contenido,contenido.Descripcion, Nombre AS nomCont, URL, NombreArticulo, NombrePagina FROM contenido INNER JOIN Referencias WHERE contenido.Tipo =4 AND contenido.ID_Contenido = Referencias.ID_Contenido"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
// SELECT c.contenido_ID, c.Nombre, c.URL, r.NombreArticulo, r.NombrePagina FROM contenido c INNER JOIN Referencias r USING(ID_contenido) INNER JOIN contenido_etiqueta ce USING(ID_contenido) INNER JOIN etiquetas e USING(ID_Etiqueta) WHERE c.ID_Contenido = r.ID_Contenido AND etiquetas.Nombre = ?


app.get("/Referencias/:nombre", (req, res)=>{
    const nombre = req.params.nombre
    const q = "SELECT contenido.ID_Contenido,contenido.Descripcion, contenido.Nombre as nomCont, etiquetas.Nombre, NombreArticulo, NombrePagina FROM contenido INNER JOIN referencias USING(ID_contenido) INNER JOIN contenido_etiqueta USING(ID_contenido) INNER JOIN etiquetas USING(ID_Etiqueta) WHERE contenido.ID_Contenido = referencias.ID_Contenido AND etiquetas.Nombre= ?"
    db.query(q,[nombre],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})


//Obtiene 1 actividad
app.get("/Actividad/:id", (req, res)=>{
    const id = req.params.id
    const q = "SELECT * FROM actividades  INNER JOIN contenido USING(ID_Contenido) WHERE actividades.ID_Contenido = ?"
    db.query(q,[id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Obtiene todos las actividades y sus detalles 
app.get("/Actividades", (req, res)=>{
    const q = "SELECT contenido.ID_Contenido,Imagen, Nombre AS nomCont, URL, Descripcion FROM contenido INNER JOIN actividades WHERE contenido.Tipo =3 AND contenido.ID_Contenido = actividades.ID_Contenido"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

//Obtiene todos las Actividades por filtro de 1 etiqueta 
app.get("/Actividades/:nombre", (req, res)=>{
    const nombre = req.params.nombre
    const q = "SELECT contenido.ID_Contenido,contenido.Descripcion, Imagen,contenido.Nombre AS nomCont, etiquetas.Nombre, Descripcion FROM contenido INNER JOIN actividades USING(ID_contenido) INNER JOIN contenido_etiqueta USING(ID_contenido) INNER JOIN etiquetas USING(ID_Etiqueta) WHERE contenido.ID_Contenido = actividades.ID_Contenido AND etiquetas.Nombre= ?"
    db.query(q,[nombre],(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

// Se define stored procedure en BD_BibliotecaMeiquer.sql
// En lista solo se hace fetch de la tabla contenido
// Cuando se da click en mas detalles, entonces se hace fetch de la tabla respectiva del tipo de contenido
// Ejemplo Fila en contenido con columna "Tipo" 1 (Video) cuando le doy click a mas detalles hace fetch de la tabla "Videos" 
app.get("/Alumno/:idparam", (req, res)=>{
    const q = "CALL sp_Details(${req.params.idparam});"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Acompanante/:idparam", (req, res)=>{
    const q = "CALL sp_Details(${req.params.idparam});"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/Maestro/:idparam", (req, res)=>{
    const q = "CALL sp_Details(${req.params.idparam});"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build','index.html'));
});

app.listen(8800, ()=>{
    console.log("connected to back")
})
