import { useState } from "react"

const ItemCount = ({stock, inicial,onadd}) => {

    const [quantity,setQuantity] =useState(inicial);

    const incremento = () => {
        if(quantity < stock) {
            setQuantity(quantity+1);
        }
    }

    const decremento = () => {
        if(quantity > 1) {
            setQuantity(quantity-1);
        }
    }

    return (
        <div className="counter" style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button className="btn btn-dark" onClick={decremento}>-</button>
          <h4 style={{ margin: "20px" }}>{quantity}</h4>
          <button className="btn btn-dark" onClick={incremento}>+</button>
        </div>
        <div>
          <button className="btn btn-dark" onClick={() => onadd(quantity)} disabled={!stock}>
            Agregar al carrito
          </button>
        </div>
      </div>
    )
}

export default ItemCount;