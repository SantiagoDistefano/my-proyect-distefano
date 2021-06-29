import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
  
const [comprarCantidad, setComprarCantidad] = useState(0);

  const onAdd = (items) => {
    setComprarCantidad(items);
  };

  return (
    <div className="contenedor">
      <div className="Map">
        <h1>{item.name}</h1>
        <img src={item.URL} className="imgDetail" alt="img-detail" />
        <p>{item.description}</p>
        <p>{item.price}</p>
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

export default ItemDetail;
