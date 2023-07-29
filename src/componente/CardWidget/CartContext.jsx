import React, { createContext, useContext, useEffect, useState } from "react";

// Crear el contexto CartContext
export const CartContext = createContext({ cart: [], isInCart: () => false });

export const useCartContext = () => useContext(CartContext);
// Definir el componente CartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartStock, setCartStock] = useState({});

  useEffect(() => {
    // Actualizar el stock del carrito cada vez que cambie cart
    const newCartStock = {};
    cart.forEach((item) => {
      const productId = item.id;
      const currentStock = cartStock[productId] || 0;
      newCartStock[productId] = currentStock + 1;
    });
    setCartStock(newCartStock);
  }, [cart, cartStock]); // Agrega cartStock al array de dependencias

  const addToCart = (item) => {
    const productId = item.id;
    const currentStock = cartStock[productId] || 0;
    const stockToAdd = item.stock || 0;

    if (currentStock < stockToAdd) {
      setCart((prevCart) => [...prevCart, item]);
      setCartStock({
        ...cartStock,
        [productId]: currentStock + 1,
      });
    } else {
      console.log("No se puede agregar más stock de este producto al carrito");
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);

    // Ajustar el stock disponible para este producto en el carrito al eliminarlo
    const productId = itemId;
    const currentStock = cartStock[productId] || 0;
    if (currentStock > 0) {
      setCartStock({ ...cartStock, [productId]: currentStock - 1 });
    }
  };

  const getCartStock = (itemId) => {
    return cartStock[itemId] || 0;
  };

  const cartQuantity = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        addToCart,
        removeFromCart,
        getCartStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;