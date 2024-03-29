import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, cartSize, getTotalPrice } =
    useContext(CartContext);

  return (
    <div>
      <h1>CARRITO DE COMPRAS 🛒 </h1>

      {cartSize === 0 && (
        <div>
          <div>
            <p>No hay items agregados a la carrito!</p>
          </div>
          <NavLink className="btn-home" exact to={"/"}>
            Volver al inicio
          </NavLink>
        </div>
      )}

      {cartSize !== 0 && (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th className="col">Producto</th>
                <th className="col">Descripción</th>
                <th className="col">Cantidad</th>
                <th className="col">Precio Unitario</th>
                <th className="col">Subtotal</th>
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
                    <td>{element.amount} un.</td>
                    <td>${element.item.items.price}</td>
                    <td>${element.amount * element.item.items.price}</td>
                    <td>
                      <button
                        onClick={() => removeItem()}
                        className="btn-clearID"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="4">
                  <hr />
                  <b>TOTAL</b>
                </td>

                <td>
                  <hr />
                  <b>${getTotalPrice()}</b>
                </td>
                <td>
                  <button onClick={() => clear()} className="btn-ClearCart">
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
  );
};

export { Cart };
