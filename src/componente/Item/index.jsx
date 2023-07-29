import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css';

const Item = ({ id, title, price, imageURL, description, stock }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleShowMoreClick = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayPrice = price === "0" ? "Consultar" : `$${price}`;

  return (
    <div className=" col">
      <div className="card shadow">
        <div className="card-body">
          <header className="Header">
            <h2 className="ItemHeader">
              {title}
            </h2>
          </header>
          <div className="image-container">
            <img src={imageURL} alt={title} className="img-fluid" />
            {stock === 0 && (
              <div className="vendido-overlay">
                <span>VENDIDO</span>
              </div>
            )}
          </div>
          <div>
            <h5 className="card-title">
              Precio: {displayPrice}
            </h5>
            <p className={`description ${showFullDescription ? 'show-full' : 'show-less'}`}>
              {description}
            </p>
            {description.length > 160 && (
              <button
                className="show-more-btn"
                onClick={handleShowMoreClick}
              >
                {showFullDescription ? "Ver menos" : "Ver más"}
              </button>
            )}
          </div>
          <div className="ItemFooter">
            <Link to={`/item/${id}`} className="btn btn-primary btn-s">Ver detalles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
