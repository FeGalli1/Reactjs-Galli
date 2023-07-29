import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./carrito.css"

const CardItem = ({ id, title, price, imageURL, quantity }) => {
    const { removeItem } = useContext(CartContext);
  
    const handleRemove = () => {
      removeItem(id);
    };
  
    return (
      <tr>
        <td>
          <img className="card-item-image" src={imageURL} alt={title} />
        </td>
        <td>{title}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>
          <button className="remove-button btn btn-danger" onClick={handleRemove}>
            X
          </button>
        </td>
      </tr>
    );
  };
  
  export default CardItem;
  