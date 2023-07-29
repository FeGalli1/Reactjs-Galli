import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { doc, getFirestore, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      const db = getFirestore();
      const productoRef = doc(db, "productos", itemId);

      try {
        const productoSnapshot = await getDoc(productoRef);

        if (productoSnapshot.exists()) {
          setProducto({ id: productoSnapshot.id, ...productoSnapshot.data() });
        } else {
          console.error("El producto no fue encontrado en Firebase.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducto();
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {producto ? <ItemDetail {...producto} /> : <div>Cargando...</div>}
    </div>
  );
};

export default ItemDetailContainer;
