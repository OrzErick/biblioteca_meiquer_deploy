import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import {context} from "./Dashboard"
import { useContext } from 'react';
import '../Styles/PageStyle.css'
const PORT = process.env.PORT || 3001;

const Libros = () => {
    const [contenido, setContenido] = useState([])
    const etiqueta = useContext(context);

    useEffect(()=>{
        const fetchLibros = async ()=>{
            try{
                if(etiqueta == ""){
                    const res = await axios.get("/Libros")
                    setContenido(res.data);
                }else{
                    const res = await axios.get("/Libros/"+etiqueta)
                    setContenido(res.data);
                }
               
            }catch(err){
                console.log(err)
            }
        }
        fetchLibros()
    },[etiqueta])

    console.log(contenido)   

    return (
        <div className='left'>
            <div className='contenedorDeContenedores'>
            <p>"Recibido libros;" {etiqueta}</p>
            {
            contenido.map(libro=>(
            
                <div className="contenido" key={libro.ID_Contenido}>
                    <div className='contenedor'> 
                    <Link to={`/InformacionLibros/${libro.ID_Contenido}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{width: "20rem", height: "26.5rem"}}>
                <div className='centrar'>
                { <img src={libro.Imagen} className="libros"  alt="..."/>}
                 </div>
           

            <div className="card-body">
                <h5 className="titulo">{libro.nomCont}</h5>
                <p className="card-text">{libro.Paginas} Paginas</p>
            </div>
            </div>
                        </Link>
            </div>
            </div>
            
            ))}
        </div>
          
    </div>

            
        
    )
}

export default Libros