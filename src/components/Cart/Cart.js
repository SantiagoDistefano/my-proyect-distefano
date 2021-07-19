import React, { Link, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, totalQuantity, totalPrice, cartSize } =
    useContext(CartContext);

  const clearCart = () => {
    clear();
  };

  console.log(cart)

  const clearPartialCart = (ident) => {
    removeItem(ident);
  };

  return (
    <div className="container">
      <h1> Carrito de compras 🛒</h1>
      <div>
        {cartSize === 0 ? (
          <div>
            <h3> Carrito de Compras Vacío</h3>
            <Link to="/">
              <button>Buscar Productos</button>
            </Link>
          </div>
        ) : (
          <div className="container-table">
            <table className="table">
              <thead>
                <tr>
                  <th className="col">Producto</th>
                  <th className="col">Descripción</th>
                  <th className="col">Cantidad</th>
                  <th className="col">Precio</th>
                  <th className="col"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((element) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={element.item.items.imageURL}
                          alt="Imagen de producto"
                          className="prod-img"
                        />
                      </td>
                      <td>{element.item.items.name}</td>
                      <td>{element.item.quantities} un.</td>
                      <td>${element.item.items.price}</td>
                      <td>
                        <button
                          onClick={() =>
                            clearPartialCart(element.item.items.id)
                          }
                          className="btn-clearID"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  );
                })}

                <tr>
                  <td></td>
                  <td>TOTAL</td>
                  <td>{totalQuantity()} un.</td>
                  <td>$ {totalPrice()}</td>
                  <td>
                    <button
                      onClick={() => clearCart()}
                      className="btn-ClearCart"
                    >
                      <b>Vaciar Carrito</b>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <NavLink exact to={"/finishOrder"}>
              <button className="btn-FinishOrder">
                <b>Terminar mi compra </b>
              </button>
            </NavLink>
            <NavLink exact to={"/"}>
              <button className="btn-FollowingShopping">
                <b>Seguir comprando</b>
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart };
