import'../Styles/InformacionVideo.css'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar'

const InformacionVideo = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [contenido, setContenido] = useState([])
    var link;
    // const [link, setLink] = useState("")

    const idVideo = location.pathname.split("/")[2]
    console.log(idVideo)

    useEffect(()=>{
        const fetchVideo = async ()=>{
            try{
                const res = await axios.get("/Video/"+idVideo)
                setContenido(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchVideo()
    },[])

    console.log(contenido)

    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className='bg2'>
        <div className="bg">
        <NavBar></NavBar>
        
        <div className="bg_infovideo">
        {
            contenido.map(v => (
            <div className="card_descripciones">
                <h1 className="name">{v.Nombre}</h1>
                <h1 className="duration">Duracion: {v.Duracion} minuto/s </h1>
                <h2 className="description">{v.Descripcion}</h2>
               <div style={{display:"none"}}>{link = v.URL}</div>
            </div>
            ))
        }
        <div className="izquierda_video">
                <iframe width="560" height="315" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className="cont_bt_atras">
                    <button className="bt_atras" onClick={handleGoBack}>Regresar</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    )

}


export default InformacionVideo