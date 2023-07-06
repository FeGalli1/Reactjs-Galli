import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

const Item = ({id,nombre,precio,imagen,descripcion}) => {
    return (

        <div className="card-conteiner col">
            <div className=" card shadow">
                <div className="card-body">                    
                    <header className="Header">
                        <h2 className="ItemHeader">
                            {nombre}
                        </h2>
                    </header>
                        <img src={imagen} alt={nombre} className="img-fluid"/>
                    <div>
                        <h5 className="card-title">
                            Precio: ${precio}
                        </h5>
                        <p className="Info">
                            {descripcion}
                        </p>
                    </div>
                    <div className="ItemFooter">
                        <Link to={`/item/${id}`} className="btn btn-primary btn-s"> Ver detalles </Link>
                        
                    </div>
                </div>                
            </div>
        </div>
        
    )
}

export default Item