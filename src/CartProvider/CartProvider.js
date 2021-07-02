import React, { useState } from "react";
import CartContext from "../Context/CartContext";

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { item, quantity }]);
    } else {
      let product = cart.find((y) => y.item.id === item.id);
      product.quantity += quantity;

      setCart(
        cart.map((item) =>
          item.item.id === item.id
            ? { ...item.item, quantity: product.quantity }
            : item
        )
      );
    }
  };

  const removeItem = (id) => {
    if (isInCart(id)){

    }
    
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return getFromCart(id);
  };

  const getFromCart = (id) => {
    return cart.find((y) => y.item.id === id);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
