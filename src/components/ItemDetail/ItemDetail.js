import { React, useContext, useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = (item) => {
  const [comprarCantidad, setComprarCantidad] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (amount) => {
    setComprarCantidad(amount);
    addItem({ item, amount });
    console.log(amount)
  };

  
  return (
    <div className="contenedor">
      <div className="Map">
        <h1>{item.items.name}</h1>
        <img src={item.items.imageURL} className="imgDetail" alt="img-detail" />
        <p>{item.items.description}</p>
        <p>${item.items.price}</p>
      </div>
      {comprarCantidad === 0 ? (
        <ItemCount stock={10} initial={1} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button className="AddCart">Terminar compra</button>
        </Link>
      )}
    </div>
  );
};
export { ItemDetail };
