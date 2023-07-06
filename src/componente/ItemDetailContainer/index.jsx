import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { getProductosById } from "../../asyncMock";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getProductosById(itemId)
      .then(response => {
        setProducto(response);
      })
      .catch(error => {
                console.error(error);
      });
  }, [itemId]);
 

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
