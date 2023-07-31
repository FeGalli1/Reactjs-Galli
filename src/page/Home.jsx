import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import NavBar from "../componente/NavBar/navBar";
import UncontrolledExample from "../componente/Carrusel/Carrusel";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const db = getFirestore();
        const productosRef = collection(db, "productos");
        const productosSnapshot = await getDocs(productosRef);

        const productosData = productosSnapshot.docs.map((doc) => doc.data());
        setProductos(productosData);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  return (
    <div style={{backgroundColor: "black"}}>
      <NavBar />
      <UncontrolledExample productos={productos} />
    </div>
  );
};

export default Home;
