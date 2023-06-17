import '../Styles/InformacionVideo.css'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';


const InformacionActividades = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [contenido, setContenido] = useState([])
    
    const idActividad = location.pathname.split("/")[2]

    useEffect(()=>{
        const fetchActividad = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/Actividad/"+idActividad)
                setContenido(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchActividad()
    },[])


    const handleGoBack = () => {
        navigate(-1);
    };
    return (
        <div className='bg'>
            <NavBar></NavBar>
            <div className='bg2'>
            {
                    contenido.map(v=>(
                    <div className='derecho'>
                        <h1>Nombre: {v.Nombre}</h1>
                        <h2>{v.Descripcion}   </h2>

                        <div className='left'>
                         <a href={v.URL}>Descargar actividad</a>
                         </div>
                    </div>
                    ))
                }

            
            </div>
            <button className="bt_atras" onClick={handleGoBack}>Atrás</button>
        </div>

    )




}

export default InformacionActividades