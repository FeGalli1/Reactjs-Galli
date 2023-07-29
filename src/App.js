import './style/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemListContainer from './componente/ItemListContainer';
import NavBar from './componente/NavBar/navBar';
import ItemDetailContainer from './componente/ItemDetailContainer';
import Home from './page/Home'
import Carrito from './page/Carrito'
import CheckOut from './page/CheckOut'
import Admin from './page/Admin'
import {CartProvider} from "./componente/CardWidget/CartContext"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAszqSRxq6fn1rbr3Z64cM5CSUzXVvHIA4",
  authDomain: "ecommers-galli.firebaseapp.com",
  projectId: "ecommers-galli",
  storageBucket: "ecommers-galli.appspot.com",
  messagingSenderId: "455083572577",
  appId: "1:455083572577:web:689b70461c1792fe181920",
  measurementId: "G-7SFQGDKMWX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<ItemListContainer />} />
          <Route path="/category/:categoriaId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito/>} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/Admin/Admin" element={<Admin />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
      </CartProvider>

    </div>
  );
}

export default App;
