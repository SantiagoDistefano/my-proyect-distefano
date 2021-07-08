import React, { useState } from "react";
import {CartContext} from "../Context/CartContext";

const CartProvider = ({ defaultValue = [], children }) => {
  const [cartState, setCartState] = useState(defaultValue);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCartState([...cartState, { item, quantity }]);
    } else {
      let product = cartState.find((x) => x.item.id === item.id);
      product.quantity += quantity;

      setCartState(
        cartState.map((item) =>
          item.item.id === item.id
            ? { ...item.item, quantity: product.quantity }
            : item
        )
      );
    }
  };

  const removeItem = (id) => {
    if (isInCart(id)) {
      setCartState(cartState.filter((item) => item.item.id !== id));
    }
  };

  const clear = () => {
    setCartState([]);
  };

  const isInCart = (id) => {
    return getFromCart(id);
  };

  const getFromCart = (id) => {
    return cartState.find((x) => x.item.id === id);
  };

  const totalQuantity = () => {
    let cartQuantity = 0;
    cartState.map(x => cartQuantity += x.quantities);
    return cartQuantity;
  };

  const totalPrice = () => {
    let cartPrice = 0;
    cartState.map(x => cartPrice += (x.items.price * x.quantities));
    return cartPrice || 0;
}

  return (
    <CartContext.Provider
      value={{ cartState, addItem, removeItem, clear, isInCart, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
