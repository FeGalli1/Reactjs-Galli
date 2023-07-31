import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import "./index.css";
import { CartContext } from "../CardWidget/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount";

const ItemDetail = ({ id, title, price, category, imageURL, description, stock }) => {

  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      title,
      price,
      imageURL
    };
    addItem(item, quantity);
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
          <Card.Text>
            {
              quantityAdded >0 ? (
                <Link to="/carrito" className="btn btn-primary">Terminar Compra</Link>
              ) : ( 
                <ItemCount inicial={1} stock={stock} onadd={handleOnAdd}></ItemCount>
              )
            }
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};



export default ItemDetail;
