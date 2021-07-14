import React from "react";
import { Link } from "react-router-dom";

import "./Item.css";

const Item = (props) => {


  console.log(props)
  return (
    <div className="info">
      <Link to={`/item/${props.id}`}>
        <img class="img-item" src={props.imageURL} alt="img-item" />
      </Link>
      <h4>{props.name}</h4>
      <h5>
        <b>{props.price}</b>
      </h5>
      <br />
      <Link to={`/item/${props.id}`} className="Link">
        <h6 className="addCart">Ir al detalle</h6>
      </Link>
    </div>
  );
};

export { Item };
