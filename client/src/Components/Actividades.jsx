import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
//import actividads from '../imagenes/actividads.png'
import {context} from "./Dashboard"
import { useContext } from 'react';

const PORT = process.env.PORT || 3001;

const Actividades = () => {
    const [contenido, setContenido] = useState([])
    const etiqueta = useContext(context);

    useEffect(()=>{
        const fetchActividades = async ()=>{
            try{
                if(etiqueta == ""){
                    const res = await axios.get("http://localhost:8800/Actividades")
                    setContenido(res.data);
                }else{
                    const res = await axios.get("http://localhost:8800/Actividades/"+etiqueta)
                    setContenido(res.data);
                }
               
            }catch(err){
                console.log(err)
            }
        }
        fetchActividades()
    },[etiqueta])

    console.log(contenido)   

    return (
        <div className='left'>
            <div className='contenedorDeContenedores'>
            {
            contenido.map(actividad=>(
            
                <div className="contenido" key={actividad.ID_Contenido}>
                    <div className='contenedor'> 
                    <Link to={`/InformacionActividades/${actividad.ID_Contenido}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{width: "18rem", height:"12rem"}}>
                <img src={actividad.Imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title"><h2>{actividad.nomCont}</h2></h5>
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

export default Actividades