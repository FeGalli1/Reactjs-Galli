import { useContext, useState } from "react";
import { CartContext } from "../componente/CardWidget/CartContext";
import { Timestamp, addDoc, collection, documentId, getFirestore, getDocs, query, where, writeBatch } from "firebase/firestore";
import CheckoutForm from "../componente/checkOut/";
import { Link } from "react-router-dom";


const CheckOut = () => {
    const db = getFirestore();
    const [cargando,setCargando] =  useState(false);
    const [ordenIp,setOrdenIp] =    useState('');

    const {cart, total, clearCart } =useContext(CartContext)
    
    const crearOrden = async ({nombre, celular, email}) => {
        setCargando(true);

        try {
            const objOrden = {
                buyer: {
                    nombre, celular, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            
            const ids = cart.map(prod => prod.id)
            
            const productosRef =collection (db,'productos')

            const productosAddedFromfirestore = await getDocs(query(productosRef, where(documentId(), "in", ids)))

            const { docs } =productosAddedFromfirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb =dataDoc.stock

                const productosAddedCart = cart.find( prod =>prod.id ===doc.id )
                const prodQuantity = productosAddedCart?.quantity 

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            });

            if(outOfStock.length ===0) {
                await batch.commit()

                const ordenRef = collection(db, "orders")
                const orderAdded = await addDoc(ordenRef, objOrden)

                setOrdenIp(orderAdded.id)
                clearCart();
            } else {
                console.error ("hay productos fuera de stock")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setCargando(false)
        }
    }


    const handleBackToHome = () => {
        setOrdenIp(null);
      }
    
      if (cargando) {
        return <h1>Se esta generando la orden...</h1>
      }
    
      if (ordenIp) {
        return (
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <h1> El id de su orden es: {ordenIp}</h1>
            <Link to="/">
              <button onClick={handleBackToHome} style={{ marginTop: "20px" }}>Volver al inicio</button>
            </Link>
          </div>
        );
      }
    
      return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
          <div style={{ border: "2px solid #000", borderRadius: "10px", padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "10px" }}>Checkout</h1>
            <CheckoutForm onConfirm={crearOrden} />
          </div>
        </div>
      )
    };


export default CheckOut;