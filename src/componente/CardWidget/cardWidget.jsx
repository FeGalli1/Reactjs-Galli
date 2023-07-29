import React, { useContext } from "react";
import carrito from './assets/carrito.svg';
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";

const CardWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  console.log(totalQuantity);
  return (
    <div className="button-wrapper">
      <Dropdown.Item as={NavLink} to="/carrito" activeClassName="ActiveOpcion">
        <img src={carrito} alt="Carrito de compras" />
        {totalQuantity}
      </Dropdown.Item>
    </div>
  );
};

export default CardWidget;
