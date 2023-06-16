import React from 'react'
import { Link } from "react-router-dom";
import logo from "../imagenes/estacion_meiquer_logo.png"
import '../Styles/PageStyle.css'
const NavBar = () => {
  return (
    <div>
        <div className='navcolor'>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "rgb(44,62,76)"}}>
            <div className="container-fluid">
                <Link to='/'>
                    <img src={logo} alt='' className='logo'/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                <Link className="nav-link" to="/Alumno">Estudiantes</Link>
                <Link className="nav-link" to="/Acompañante">Acompañante</Link>
                <Link className="nav-link" to="/Educador">Educadores</Link>
            </div>
            </div>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default NavBar
