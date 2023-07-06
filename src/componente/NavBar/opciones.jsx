import { NavLink } from "react-router-dom";
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
        <NavLink to="/category/lienzo" activeClassName="ActiveOpcion" className="btn  btn-custom">
          Lienzo
        </NavLink>
      </div>
      <div className="button-wrapper">
        <NavLink to="/category/papel" activeClassName="ActiveOpcion" className="btn  btn-custom">
          Papel
        </NavLink>
      </div>
      <CardWidget />
    </div>
  );
};

export default BotonNavBar;
