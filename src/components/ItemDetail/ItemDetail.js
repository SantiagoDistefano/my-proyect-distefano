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
      <h3>{item.name}</h3>
      <img src={item.URL} alt="img-detail" />
      <p>{item.description}</p>
      <p>{item.price}</p>

      {comprarCantidad === 0 ? (
        <ItemCount stock={10} initial={0} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button className="AddCart">Terminar compra</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
