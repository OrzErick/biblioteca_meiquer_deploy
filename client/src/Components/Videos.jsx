import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import '../Styles/PageStyle.css'
import {context} from "./Dashboard"

const PORT = process.env.PORT || 3001;

const Videos = () => {
    const [contenido, setContenido] = useState([])
    const etiqueta = useContext(context);

    useEffect(()=>{
        const fetchVideos = async ()=>{
            try{
                if(etiqueta == ""){
                    const res = await axios.get("http://localhost:8800/Videos")
                    setContenido(res.data);
                }else{
                    const res = await axios.get("http://localhost:8800/Videos/"+etiqueta)
                    setContenido(res.data);
                }
            }catch(err){
                console.log(err)
            }
        }
        fetchVideos()
    },[etiqueta])

   

    console.log(contenido)   

    return (
        <div className='left'>
            <div className='contenedorDeContenedores'>
            {
            contenido.map(video=>(
            
                <div className="contenido" key={video.ID_Contenido}>
                    <div className='contenedor'> 
                    <Link to={`/InformacionVideo/${video.ID_Contenido}`} style={{ textDecoration: 'none' }}>
            <div className="card" style={{width: "18rem", height: "17.5rem"}}>
            
            <iframe
                src={video.URL} >
            </iframe> 
                
            <div className="contenedortexto">
                <h2 className='titulo'>{video.nomCont}</h2>
                <p>{video.Duracion} minuto/s</p>
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

export default Videos