import { Routes,Route, BrowserRouter } from "react-router-dom"
import Acompañante from "../Pages/Acompañante"
import Main from "../Components/Main"
import Alumno from "../Pages/Alumno"
import Educador from "../Pages/Educador"
import InformacionVideo from "../Components/InformacionVideo"
import InformacionLibros from "../Components/InformacionLibros"
import InformacionActividades from "../Components/InformacionActividades"
const Rutas = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element = {<Main/>} />
        <Route path='/Acompañante' element = {<Acompañante/>} />
        <Route path='/Alumno' element = {<Alumno/>} />
        <Route path='/Educador' element = {<Educador/>} />
        <Route path='/InformacionVideo/:id' element = {<InformacionVideo/>} />
        <Route path='/InformacionLibros/:id' element = {<InformacionLibros/>} />
        <Route path='/InformacionActividades/:id' element = {<InformacionActividades/>} />
        
    </Routes>
    </BrowserRouter>
  )
}

export default Rutas




