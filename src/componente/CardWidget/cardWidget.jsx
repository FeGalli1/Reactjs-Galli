import React, { useContext } from "react";
import carrito from './assets/carrito.svg';
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";

const CardWidget = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="button-wrapper">
      <Dropdown.Item as={NavLink} to="/carrito" activeClassName="ActiveOpcion">
        <img src={carrito} alt="Carrito de compras" />
        {cart.length}
      </Dropdown.Item>
    </div>
  );
};

export default CardWidget;
