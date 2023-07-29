import { useContext } from "react";
import { CartContext } from "../componente/CardWidget/CartContext";
import { Link } from "react-router-dom";
import CardItem from "../componente/CardWidget/CardItem";
import NavBar from "../componente/NavBar/navBar";



const Carrito = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  
    if (totalQuantity === 0) {
      return (
        <div>
          <h1>No hay productos</h1>
          <Link to="/" className="btn">
            Inicio
          </Link>
        </div>
      );
    }
  
    return (
      
      <div>
       <NavBar/>
        <table className="carrito-table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart &&
              cart.map((p) => (
                <CardItem
                  key={p.id}
                  id={p.id}
                  imageURL={p.imageURL}
                  title={p.title}
                  price={p.price}
                  quantity={p.quantity}
                />
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={3}>Total</th>
              <th>${total}</th>
              <th>
                <button onClick={() => clearCart()} className="btn-primary">
                  Limpiar Carrito
                </button>
              </th>
            </tr>
          </tfoot>
        </table>
        <Link to={"/checkOut"} className="buttom">
          toCheckout
        </Link>
      </div>
    );
  };
  
  export default Carrito;
  