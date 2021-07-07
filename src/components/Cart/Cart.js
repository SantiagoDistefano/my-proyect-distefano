import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import Table from "react-bootstrap-table";
import { NavLink } from "react-router-dom";

const Cart = ({item}) => {
  const { cart, clear, removeItem } = useContext(CartContext);

  var totalCompra = cart.reduce(function (prev, cur) {
    return prev + cur.item.price * cur.quantity;
  }, 0);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Total Producto</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((element, item) => {
                return (
                  <tr>
                    <td>{element.item.title}</td>
                    <td>{element.item.price}</td>
                    <td>{element.quantity}</td>
                    <td>{element.item.price * element.quantity}</td>
                    <td>
                      <button
                        
                        onClick={() => removeItem(element.item.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div >
            <div >
              <button  onClick={() => clear()}>
                Vaciar carrito
              </button>
            </div>
            <div >
              <h3>Total Compra: {totalCompra}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>El carrito está vacío.</p>
          <NavLink  exact to={"/"}>
            Volver a la lista de productos
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart
