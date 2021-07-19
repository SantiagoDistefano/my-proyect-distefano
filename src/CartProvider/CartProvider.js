import  {React, useState } from "react";
import {CartContext} from "../Context/CartContext";


const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { item, quantity }]);
    } else {
      let product = cart.find((x) => x.item.id === item.id);
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
    if (isInCart(id)) {
      setCart(cart.filter((item) => item.item.id !== id));
    }
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return getFromCart(id);
  };

  const getFromCart = (id) => {
    return cart.find((x) => x.item.id === id);
  };

  const totalQuantity = () => {
    let cartQuantity = 0;
    cart.map(x => cartQuantity += x.item.quantity);
    return cartQuantity;
  };

  const totalPrice = () => {
    let cartPrice = 0;
    cart.map(x => cartPrice += (x.item.items.price * x.quantity));
    return cartPrice;
}

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clear, totalQuantity, isInCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
