import React, {  } from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "./index.css";


const ItemDetail = ({ nombre, precio, categoria, imagen, descripcion }) => {
 
  const addToCart = () => {
    //agrega el producto al carrito
    console.log("Producto agregado al carrito");
  };

  return (
    <div>
      <Card className="card-container card shadow container">
        <Card.Img className="imagenP" src={imagen} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Categoria: {categoria}</Card.Text>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text>Precio: ${precio}</Card.Text>
          <Button className="add-to-cart-button center" onClick={addToCart}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
      </div>
  );
};

ItemDetail.propTypes = {
  nombre: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  categoria: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
};
export default ItemDetail;
