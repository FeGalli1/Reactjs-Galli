import React from "react";
import { Link } from "react-router-dom";
import BotonNavBar from "./opciones";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src="https://i.ibb.co/2j3DMcT/logo.png" className="Logo" alt="Tienda" />
        </Link>
      </div>
      <BotonNavBar />
      <div className="navbar-search">
        {/* Aquí puedes agregar el código para el buscador, mantuve el diseño para dejar centrado el navegador y si me da el tiempo lo agrego */}
      </div>
    </div>
  );
}

export default NavBar;
