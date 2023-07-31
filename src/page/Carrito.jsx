import { useContext } from "react";
import { CartContext } from "../componente/CardWidget/CartContext";
import { Link } from "react-router-dom";
import CardItem from "../componente/CardWidget/CardItem";
import NavBar from "../componente/NavBar/navBar";
import "../componente/CardWidget/carrito.css"


const Carrito = () => {
    const { cart, clearCart, total } = useContext(CartContext);
  
    if (cart.length === 0) {
      return (
        <div>
          <NavBar/>
          <div className="container">
            <h1 className="titulo">No hay productos</h1>
            <Link to="/category" className="btn boton btn-primary">
              <h1>Ver otras Productos</h1>
            </Link>
          </div>
        </div>
      );
    }
  
    return (
      
      <div>
       <NavBar/>
       <div className="container">
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
                  <button onClick={() => clearCart()} className=" vaciar btn-primary">
                    Limpiar Carrito
                  </button>
                </th>
              </tr>
            </tfoot>
          </table>
          <Link to={"/checkOut"} className="buttom btn btn-primary">
            Finalizar Compra
          </Link>
        </div>
      </div>
    );
  };
  
  export default Carrito;
  