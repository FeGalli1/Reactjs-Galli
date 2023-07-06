import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const productoEncontrado = producto.find(item => item.id === parseInt(itemId));
    if (productoEncontrado) {
      setProducto(productoEncontrado);
    } else {
      console.error(`No se encontró ningún producto con el ID: ${itemId}`);
    }
  }, [itemId, producto]);
  

  return (
    <div className="ItemDetailContainer">
      {producto && (
        <ItemDetail
          imagen={producto.imagen}
          nombre={producto.nombre}
          precio={producto.precio}
          descripcion={producto.descripcion}
        />
      )}
    </div>
  );
};

export default ItemDetailContainer;
