// import { render } from "@testing-library/react";
import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="highNav">
      <a href="#section1">Seccion 1</a>
      <a href="#section2">Seccion 2</a>
      <CartWidget />

      <h3 className="nombreTienda" >Peluchin</h3>
      
    </nav>
  );
}
class CartWidget extends React.Component {
    render() {
    return (
      <img
      className="cart"  
      src="https://img.icons8.com/windows/32/000000/add-shopping-cart.png"
      alt="cart"
      />
    );
  }
}

export default NavBar;