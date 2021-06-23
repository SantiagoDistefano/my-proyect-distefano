import React, { useState } from "react";
import	"./ItemCount.css"

const ItemCount = ({ initial, stock, onAdd }) => {
  
    const [items, setItems] = useState(initial);

    const addItems = () => {
      items < stock ? setItems(items + 1) : alert("no hay mas stock")
    }

    const deleteItems = () => {
      items > 0 &&
        setItems(items - 1)
    }

  return (
    <div>
      <div>
      <button className="icon">
          <img
            src="https://img.icons8.com/officexs/16/000000/minus-math.png"
            alt="icon1"
            onClick={deleteItems}
          />
        </button>
        <span className="items"> {items} </span>
        <button className="icon">
          <img
            src="https://img.icons8.com/officexs/16/000000/plus-math.png"
            alt="icon2"
            onClick={addItems}
          />
        </button>
      </div>
      <button type="button" className="AddCart" onClick={x => onAdd(x,items)}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;