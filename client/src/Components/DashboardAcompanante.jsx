import '../Styles/PageStyle.css'
import Videos from './Videos'
import Libros from './Libros'
import Actividades from './Actividades';
import { useState } from 'react';
import { Component } from 'react';
import { createContext} from 'react';
import {context} from "./Dashboard";

const DashboardAcompanante= () => {
    const [cargar, setCargar] = useState(1)
    const [etiqueta, setEtiqueta] = useState("")

    const cambiarTipo = async (tipo)=>{
      setEtiqueta("")
      setCargar(tipo)
  }
    
    return(
        <div className='bg2'>
        <div className='bg'>
    <div className='navegacion2'>
        <button className='bigbtt' onClick={()=>cambiarTipo(3)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-notebook" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
  <path d="M13 8l2 0" />
  <path d="M13 12l2 0" />
</svg> Actividades</button>
        <button className='bigbtt' onClick={()=>cambiarTipo(2)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6l0 13" />
  <path d="M12 6l0 13" />
  <path d="M21 6l0 13" />
</svg> Libros</button>
        <button className='bigbtt' onClick={()=>cambiarTipo(1)}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
  <path d="M10 9l5 3l-5 3z" />
</svg> Videos</button>
    </div>
    <div className='navegacion'>
        <div>
            <button className='btt' onClick={()=>setEtiqueta("Ciencia")}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-paw" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14.7 13.5c-1.1 -2 -1.441 -2.5 -2.7 -2.5c-1.259 0 -1.736 .755 -2.836 2.747c-.942 1.703 -2.846 1.845 -3.321 3.291c-.097 .265 -.145 .677 -.143 .962c0 1.176 .787 2 1.8 2c1.259 0 3 -1 4.5 -1s3.241 1 4.5 1c1.013 0 1.8 -.823 1.8 -2c0 -.285 -.049 -.697 -.146 -.962c-.475 -1.451 -2.512 -1.835 -3.454 -3.538z" />
  <path d="M20.188 8.082a1.039 1.039 0 0 0 -.406 -.082h-.015c-.735 .012 -1.56 .75 -1.993 1.866c-.519 1.335 -.28 2.7 .538 3.052c.129 .055 .267 .082 .406 .082c.739 0 1.575 -.742 2.011 -1.866c.516 -1.335 .273 -2.7 -.54 -3.052z" />
  <path d="M9.474 9c.055 0 .109 0 .163 -.011c.944 -.128 1.533 -1.346 1.32 -2.722c-.203 -1.297 -1.047 -2.267 -1.932 -2.267c-.055 0 -.109 0 -.163 .011c-.944 .128 -1.533 1.346 -1.32 2.722c.204 1.293 1.048 2.267 1.933 2.267z" />
  <path d="M16.456 6.733c.214 -1.376 -.375 -2.594 -1.32 -2.722a1.164 1.164 0 0 0 -.162 -.011c-.885 0 -1.728 .97 -1.93 2.267c-.214 1.376 .375 2.594 1.32 2.722c.054 .007 .108 .011 .162 .011c.885 0 1.73 -.974 1.93 -2.267z" />
  <path d="M5.69 12.918c.816 -.352 1.054 -1.719 .536 -3.052c-.436 -1.124 -1.271 -1.866 -2.009 -1.866c-.14 0 -.277 .027 -.407 .082c-.816 .352 -1.054 1.719 -.536 3.052c.436 1.124 1.271 1.866 2.009 1.866c.14 0 .277 -.027 .407 -.082z" />
</svg> Ciencia</button>
            <button className='btt' onClick={()=>setEtiqueta("Matematicas")}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-square" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M9.5 9.5m-6.5 0a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0 -13 0" />
  <path d="M10 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z" />
</svg> Matematicas</button>
            <button className='btt' onClick={()=>setEtiqueta("Tecnologia")}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-devices-pc" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 5h6v14h-6z" />
  <path d="M12 9h10v7h-10z" />
  <path d="M14 19h6" />
  <path d="M17 16v3" />
  <path d="M6 13v.01" />
  <path d="M6 16v.01" />
</svg> Tecnología</button>
            <button className='btt' onClick={()=>setEtiqueta("Ingenieria")}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-settings" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
  <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
</svg> Ingeniería</button>
            <button className='btt' onClick={()=>setEtiqueta("Pintura")}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brush" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
  <path d="M21 3a16 16 0 0 0 -12.8 10.2" />
  <path d="M21 3a16 16 0 0 1 -10.2 12.8" />
  <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
</svg> Pintura</button>
            <button className='btt' onClick={()=>setEtiqueta("Musica")}>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-music" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M9 17l0 -13l10 0l0 13" />
  <path d="M9 8l10 0" />
</svg> Musica</button>
            </div>
    </div>
    <div>
    {(() => {
        switch (cargar) {
          case 1:  return <context.Provider value={etiqueta}>
                            <Videos></Videos>
                          </context.Provider>

          case 2:  return <context.Provider value={etiqueta}>
                            <Libros></Libros>
                           </context.Provider>

          case 3:  return <context.Provider value={etiqueta}>
                            <Actividades></Actividades>
                          </context.Provider>

          case 4:  return "Not yet";

          default: return "Not Found";
        }
      })()}
    </div>
    </div>
    </div>
    )

}

export default DashboardAcompanante