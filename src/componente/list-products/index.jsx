import React from 'react';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import Item from '../item-card';

// Importar el CSS de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const ListProducts = () => {
  const [productos, setProductos] = React.useState([]);

  React.useEffect(() => {
    const db = getFirestore();

    const products = collection(db, 'productos');
    getDocs(products)
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setProductos(items);
    })

  }, [])

  const onClick = (producto, id) => {
    const db = getFirestore();
    const document = doc(db, 'productos', id);

    updateDoc(document, producto)
    .then(() => {
      alert('Se modificó el producto id: ' + id);
      window.location.reload(); // Recargar la página después de actualizar
    })
    .catch((error) => {
      console.error('Error al modificar el producto:', error);
    });
  }

  const handleCreate = (producto) => {
    const db = getFirestore();
    const productos = collection(db, 'productos');

    addDoc(productos, producto)
    .then(() => {
      alert('Se creó el producto');
      window.location.reload(); // Recargar la página después de crear el producto
    })
    .catch((error) => {
      console.error('Error al crear el producto:', error);
    });
  }

  const handleDelete = (id) => {
    const db = getFirestore();
    const document = doc(db, 'productos', id);

    deleteDoc(document)
      .then(() => {
        alert('Se eliminó el producto id: ' + id);
        window.location.reload(); // Recargar la página después de eliminar
      })
      .catch((error) => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  return (
    <div className="container">
      {
        !productos.length ?
        <p>No hay productos cargados</p>
        :
        <div>
          <h2 className="text-center">Productos cargados</h2>
          <div className="row row-cols-1 row-cols-md-5 g-4 justify-content-center">
            {
              productos.map(producto => {
                return (
                  <div className="col" key={producto.id}>
                    <Item data={producto} onClick={onClick} onDelete={handleDelete} />
                  </div>
                )
              })
            }
            <div className="col-12 col-md-2"> {/* Tamaño de la columna para el botón Agregar */}
              <Item onClick={handleCreate} data={{ id: '', title: '', description: '', imageURL: '', stock: 0, price: 0 }} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ListProducts;
