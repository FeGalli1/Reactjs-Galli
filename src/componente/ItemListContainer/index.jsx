import React, { useEffect, useState } from "react";
import { getProductos, getProductosByCategory } from "../../asyncMock";
import ItemList from "../ItemList/Index";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductosByCategory : getProductos

    asyncFunc(categoriaId)
      .then (response => {
        setProductos(response);
      }) 
      .catch(error => {
        console.error((error));
      })
  }, [categoriaId])


  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;