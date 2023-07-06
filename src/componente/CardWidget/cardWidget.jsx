import React from "react";
import carrito from './assets/carrito.svg';

const CardWidget = ( ) => {
  const handleClick = () => {
    //agregaria fucionalidades del carrito
    console.log("Se hizo clic en la imagen del Carrito de compras");
  };

  return (
    <button className="btn" onClick={handleClick}>
      <img src={carrito} alt="Carrito de compras" />
      {0}
    </button>
  );
};

export default CardWidget;
