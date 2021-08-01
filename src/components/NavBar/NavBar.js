import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="highNav">
      <CartWidget />

      <NavLink activeClassName="Mark" exact to={"/"}>
        <h5>Home</h5>
      </NavLink>
      <NavLink activeClassName="Mark" exact to={"/category/osos"}>
        <h5>Osos</h5>
      </NavLink>
      <NavLink activeClassName="Mark" exact to={"/category/perros"}>
        <h5>Perros</h5>
      </NavLink>
      <img
        src="https://i.ibb.co/ZzHfyQP/Icon.png"
        className="Icon"
        alt="Icon"
      />
      <div className="nombreTienda">
        <Link to={"/"}>
          <h4>Peluchin</h4>
        </Link>
      </div>
    </nav>
  );
};

export { NavBar };
