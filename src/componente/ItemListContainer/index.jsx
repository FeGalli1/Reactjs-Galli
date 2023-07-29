import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/Index";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, "productos");
    let productosQuery = query(productosCollection);

    // Si se proporciona la categoría, filtrar por ella
    if (categoriaId) {
      productosQuery = query(productosCollection, where("category", "==", categoriaId));
    }

    getDocs(productosQuery)
      .then((snapshot) => {
        const items = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setProductos(items);
      })
      .catch((error) => {
        console.log("Error fetching productos: ", error);
      });
  }, [categoriaId]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
