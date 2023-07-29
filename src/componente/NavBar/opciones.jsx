import { Link, NavLink } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import CardWidget from "../CardWidget/cardWidget";


const BotonNavBar = () => {
  return (
    <div className="navbar-menu categorias">
      <div className="button-wrapper">
        <NavLink exact to="/" activeClassName="ActiveOpcion" className="btn  btn-custom">
          Inicio
        </NavLink>
      </div>
      <div className="button-wrapper">
        {/* Reemplazamos el NavLink por el Dropdown */}
        <Dropdown>
          <Dropdown.Toggle as={Link} activeClassName="ActiveOpcion" className="btn  btn-custom">
            Productos
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to="/category/" activeClassName="ActiveOpcion" className="btn  btn-custom">
              Todos
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/category/lienzo" activeClassName="ActiveOpcion" className="btn  btn-custom">
              Lienzo
            </Dropdown.Item>
            <Dropdown.Item as={NavLink} to="/category/papel" activeClassName="ActiveOpcion" className="btn  btn-custom"> 
              Papel
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <CardWidget />
    </div>
  );
};

export default BotonNavBar;
