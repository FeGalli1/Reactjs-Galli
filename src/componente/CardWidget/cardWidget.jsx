import React from "react";
import carrito from './assets/carrito.svg';
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./CartContext";

const CardWidget = () => {
  const { cartQuantity } = useCartContext();

  return (
    <div className="button-wrapper">
      <Dropdown.Item as={NavLink} to="/carrito" activeClassName="ActiveOpcion">
        <img src={carrito} alt="Carrito de compras" />
        {cartQuantity}
      </Dropdown.Item>
    </div>
  );
};

export default CardWidget;
