import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="highNav">
      
      <CartWidget />
      
      <NavLink activeClassName="Mark"  exact to={"/"}>
        Home
      </NavLink>
      <NavLink activeClassName="Mark"  exact to={"/category/osos"}>
        Osos
      </NavLink>
      <NavLink activeClassName="Mark"  exact to={"/category/perros"}>
        Perros
      </NavLink>


      
      

      <h3 className="nombreTienda">
        <Link to={"/"}> Peluchin</Link>
      </h3>
    </nav>
  );
};
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
