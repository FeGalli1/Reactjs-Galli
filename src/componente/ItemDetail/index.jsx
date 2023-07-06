const addToCart = () => {
    // Lógica para agregar al carrito
    console.log("Producto agregado al carrito");
  };
const ItemDetail = ({nombre,  precio,categoria,  imagen, descripcion }) => {
    return (
        <div className="CardItem">
            <header className="Header">
                <h2>{nombre}</h2>
            </header>
            <img src={imagen} alt={nombre} />
            <div>            
                <p>
                    Categoria: {categoria} 
                </p>
                <p>{descripcion}</p>
                <p>
                    Precio: ${precio}
                </p>
            </div>
            <footer>
                <button className="add-to-cart-button" onClick={addToCart}>
                    Agregar al carrito
                </button>
            </footer>
        </div>
    )
}

export default ItemDetail;
