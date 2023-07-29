import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../../App';
import ListProducts from '../../../componente/list-products';

const Main = () => {

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div>
        <h1>Backoffice</h1>
        <button onClick={handleSignOut}>Salir</button>
        <ListProducts />
    </div>
  )
}

export default Main;