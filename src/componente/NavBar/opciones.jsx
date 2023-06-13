import CardWidget from "../CardWidget/cardWidget";

const botonNavBar = () =>
{
    return(
        <div className="navbar-menu">
            <button>Inicio</button>
            <button>Obras</button>
            <button>Contacto</button>
            <CardWidget/>
        </div>
    )
};

export default botonNavBar;