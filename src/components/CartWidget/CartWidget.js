import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./CartWidget.css";

const CartWidget = () => {
  const { cartSize } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <sup className="cartSize">{cartSize}</sup>
        <img
          className="cart"
          src="https://img.icons8.com/windows/32/000000/add-shopping-cart.png"
          alt="cart"
        />
      </Link>
    </div>
  );
};

export { CartWidget };
