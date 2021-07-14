import { React, useContext, useState } from "react";
import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ( {items} ) => {
  const [comprarCantidad, setComprarCantidad] = useState(0);
  const { addItem } = useContext(CartContext);
  

  const onAdd = (items) => {
    setComprarCantidad(items);
    addItem(items, items);
  };
  console.log(items)

  return (
    <div className="contenedor">
      <div className="Map">
        <h1>{items.name}</h1>
        <img
          src={items.imageURL}
          className="imgDetail"
          alt="img-detail"
        />
        <p>{items.description}</p>
        <p>{items.price}</p>
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
