import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
//import Referencias from '../imagenes/Referencias.png'
import {context} from "./Dashboard"
import { useContext } from 'react';
import '../Styles/PageStyle.css'

const PORT = process.env.PORT || 3001;

const Referencias = () => {
    const [contenido, setContenido] = useState([])
    const etiqueta = useContext(context);

    useEffect(()=>{
        const fetchActividades = async ()=>{
            try{
                if(etiqueta == ""){
                    const res = await axios.get("http://localhost:8800/Referencias")
                    setContenido(res.data);
                }else{
                    const res = await axios.get("http://localhost:8800/Referencias/"+etiqueta)
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
            contenido.map(Referencia=>(
            
                <div className="contenido" key={Referencia.ID_Contenido}>
                    <div className='contenedor'> 
                    <Link to={Referencia.URL} style={{ textDecoration: 'none' }}>
            <div className="card" style={{width: "18rem", height: "22.5rem"}}>
                <div className='centrar'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmarks" width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M13 7a2 2 0 0 1 2 2v12l-5 -3l-5 3v-12a2 2 0 0 1 2 -2h6z" />
  <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v12l-1 -.6" />
</svg>
                </div>
                

            <div className="card-body">
                <h5 className="card-title"><h2>{Referencia.nomCont}</h2></h5>
                <p className="card-text">{Referencia.NombreArticulo}</p>
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

export default Referencias