import { React, useState } from "react";
import { CartContext } from "../Context/CartContext";

const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue);
  const [cartTotalAmount, setCartTotalAmount] = useState(0);

  const addItem = (obj) => {
    if (isInCart(obj.item)) {
      cart.map((x) => increaseQuantity(x, obj));
      var amountToIncreaseInUse = obj.amount * obj.item.price;
      setCartTotalAmount(cartTotalAmount + amountToIncreaseInUse);
      return;
    }
    var amountToIncrease = obj.amount * obj.item.price;
    setCart([...cart, obj]);
    setCartTotalAmount(cartTotalAmount + amountToIncrease);
  };

  const isInCart = (id) => {
    return id === undefined ? undefined : getFromCart(id) !== undefined;
  };

  const removeItem = (id) => {
    substractAmount(id);
    var newCart = cart.filter((x) => x.item.id !== id);
    setCart(newCart);
  };

  const clear = () => {
    setCart(defaultValue);
  };

  const getFromCart = (id) => {
    return cart.find((x) => x.item.id === id);
  };

  function increaseQuantity(x, obj) {
    if (x.item.id === obj.item.id) {
      x.amount = x.amount + obj.amount;
    }
  }

  const substractAmount = (id) => {
    var unitPrice = cart.filter((x) => x.item.id === id);
    var amounToSubstract = unitPrice[0].item.price * unitPrice[0].amount;
    setCartTotalAmount(cartTotalAmount - amounToSubstract);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        cartTotalAmount,
        cartSize: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
