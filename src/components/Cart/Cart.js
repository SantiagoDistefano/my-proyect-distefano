import React, { Link, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cartState, removeItem, clear, totalQuantity, totalPrice } =
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
        {cartState.Lenght === 0 ? (
          <div>
            <h3> Carrito de Compras Vacío</h3>
            <Link to="/">
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
                {cartState.map((pc) => {
                  return (
                    <tr>
                      <td>
                        <img src={pc.items.imageURL} alt="Imagen de producto" />
                      </td>
                      <td>{pc.items.title}</td>
                      <td>{pc.quantities} un.</td>
                      <td>${pc.items.price}</td>
                      <td>
                        <button onClick={() => clearPartialCart(pc.items.id)}>
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
