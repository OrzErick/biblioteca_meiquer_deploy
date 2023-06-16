import '../Styles/PageStyle.css'
import libros from '../imagenes/libros.png'

const LeftComponent= () => {

    return(

    <div className='left'>
           <div className='contenedor'>
                <div className='contenedorimg'>
                    <img src={libros}></img>
                </div>
                <div className='contenedortexto'>
                    <h1>Titulo del contenido </h1>
                    <h2>Descripción</h2>
                </div>
           </div>
           <div className='contenedor'>
           <div className='contenedorimg'>
                    <img src={libros}></img>
                </div>
                <div className='contenedortexto'>
                    <h1>Titulo del contenido </h1>
                    <h2>Descripción</h2>
                </div>
           </div>
           <div className='contenedor'>

           </div>
           <div className="card" style={{width: "18rem"}}>
                    <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
    </div>

    )

}

export default LeftComponent