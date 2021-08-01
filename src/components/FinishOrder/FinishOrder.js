import { React, useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import firebase from "firebase/app";
import "@firebase/firestore";
import { getFireStore } from "../../Factory/Firebase/index";
import "./FinishOrder.css";

const FinishOrder = () => {
  const { cart, cartTotalAmount } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const InputChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };

  const onClickOrder = () => {
    const db = getFireStore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: buyer,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: cartTotalAmount,
    };

    orders
      .add(newOrder)
      .then(({ id }) => {
        alert(`El id de su compra es: ${id}`);
      })
      .catch((err) => {
        alert("Ha ocurrido un error, su orden no se ha generado");
      });
  };

  return (
    <div className="container">
      <form onSubmit={(x) => x.preventDefault()}>
        <div className="order">
          <label htmlFor="name" className="label1">
            Nombre
          </label>
          <input
            type="text"
            className="input1"
            id="name"
            name="name"
            onChange={InputChange}
          />
        </div>
        <div className="order">
          <label htmlFor="email" className="label1">
            Email
          </label>
          <input
            type="email"
            className="input1"
            id="name"
            name="email"
            onChange={InputChange}
          />
        </div>
        <div className="order">
          <label htmlFor="phone" className="label1">
            Telefono
          </label>
          <input
            type="text"
            className="input1"
            id="phone"
            name="phone"
            onChange={InputChange}
          />
        </div>
        <button
          type="enviar"
          className="btn-enviar"
          onClick={() => onClickOrder()}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export { FinishOrder };
