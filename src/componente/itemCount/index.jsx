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
        <div className="counter">
            <div>
                <button className="btn" onClick={decremento}>-</button>
                <h4>{quantity}</h4>
                <button className="btn" onClick={incremento}>+</button>
            </div>
            <div>
                <button onClick={ () => onadd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;