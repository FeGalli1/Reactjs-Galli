// ItemDetail.jsx
import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import "./index.css";
import { useCartContext } from "../CardWidget/CartContext";

const ItemDetail = ({ title, price, category, imageURL, description, stock }) => {
  const { addItem, isInCart } = useCartContext();

  const handleAddToCart = () => {
    if (!isInCart(title)) {
      addItem({
        title,
        price,
        category,
        imageURL,
        description,
        stock,
        quantity: 1, // Inicialmente agregamos una cantidad de 1 al carrito
      });
    }
  };

  return (
    <div>
      <Card className="card-container card shadow container">
        <Card.Img className="imagenP" src={imageURL} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Categoria: {category}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Precio: ${price}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          <Button className="add-to-cart-button center" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

ItemDetail.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};

export default ItemDetail;
