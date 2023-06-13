
import React from "react";
import BotonNavBar from "./opciones";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">Tienda</div>
      <BotonNavBar />
      <div className="navbar-search">
        <input type="text" placeholder="Buscar..." />
        <button>Buscar</button>
      </div>
    </div>
  );
}

export default NavBar;
