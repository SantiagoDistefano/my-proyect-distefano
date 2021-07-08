import React, { Link, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart, removeItem, clear, totalQuantity, totalPrice } =
    useContext(CartContext);

  const clearCart = () => {
    clear();
  };

  const clearPartialCart = (ident) => {
    removeItem(ident);
  };

  return (
    <div className="container">
      <h1> Carrito de compras</h1>
      <div>
        {cart[0] === 0 ? (
          <div>
            <h3> Carrito de Compras Vacío</h3>
            <Link to="/categorias/todos">
              <button>Buscar Productos</button>
            </Link>
          </div>
        ) : (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((pC) => {
                  return (
                    <tr>
                      <td>
                        <img src={`/public/img/${pC.items.imageURL}`} alt="Imagen de producto" />
                      </td>
                      <td>{pC.items.title}</td>
                      <td>{pC.quantities} un.</td>
                      <td>${pC.items.price}</td>
                      <td>
                        <button onClick={() => clearPartialCart(pC.items.id)}>
                          X
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
                    <button onClick={() => clearCart()}>BORRAR CARRITO</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export { Cart };
