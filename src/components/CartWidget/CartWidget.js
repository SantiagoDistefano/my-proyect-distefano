import React from "react";
import { Link } from "react-router-dom";

const CartWidget = ({cartLength}) => {
  return (
    <div>
      <Link to="/cart">
      <img
        className="cart"
        src="https://img.icons8.com/windows/32/000000/add-shopping-cart.png"
        alt="cart"
      />
      </Link>
      <span>{cartLength}</span>
    </div>
  );
};

export { CartWidget };
