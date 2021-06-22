import React from "react";
import Item from "../Item/Item";

const ItemList = (props) => {



  return (
    <div>
        {props.items.map( (y,index) =>(
            <Item
            key = {index}
            id = {y.id}
            URL = {y.URL}
            name = {y.name}
            price ={y.price}
            description ={y.description}
            
            />
        ))}
    </div>
  );
};

export default ItemList;
