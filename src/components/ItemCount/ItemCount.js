import { React, useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [items, setItems] = useState(initial);

  const addItems = () => {
    items < stock ? setItems(items + 1) : alert("no hay mas stock");
  };

  const deleteItems = () => {
    items > 0 && setItems(items - 1);
  };

  return (
    <div>
      <div>
        <button className="icon" onClick={deleteItems}>
          -
        </button>
        <span className="items"> {items} </span>
        <button className="icon" onClick={addItems}>
          +
        </button>
      </div>
      <button
        type="button"
        className="AddCart"
        onClick={() => onAdd(items)}
      >
        Agregar al Carrito
      </button>
    </div>
  );
};

export { ItemCount };
