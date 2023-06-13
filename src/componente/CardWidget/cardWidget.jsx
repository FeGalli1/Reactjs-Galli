import React from "react";
import carrito from './assets/carrito.svg';

const CardWidget = () => {
  const handleClick = () => {
    // aca se ejecutaria lo que 
    console.log("Se hizo clic en la imagen del Carrito de compras");
  };
  
  return (
    //le agrego la opcion onClick para cuando se haga clic ejecute "handleClick"
    <button style={{ border: 'none', background: 'none', padding: 0 }} onClick={handleClick}>
      <img src={carrito} alt="Carrito de compras" />
      0

    </button>
  );
};

export default CardWidget;
