import { React, useState } from "react";
import { CartContext } from "../Context/CartContext";

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (obj) => {
    if (isInCart(obj.item)) {
      cart.map((x) => increaseQuantity(x, obj));
      return;
    }
    setCart([...cart, obj]);
  };

  const isInCart = (id) => {
    return cart.find((x) => x.id === id);
  };

  const removeItem = (id) => {
    var newCart = cart.filter((x) => x.item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart(defaultValue);
  };

  const increaseQuantity = (x, obj) => {
    if (x.item.id === obj.item.id) {
      x.amount = x.amount + obj.amount;
    }
  };

  function getTotalPrice() {
    let totalPrice = 0;
    cart.map((item) => {
      totalPrice += item.amount * item.item.items.price;
    });
    return totalPrice;
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        getTotalPrice,
        cartSize: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
