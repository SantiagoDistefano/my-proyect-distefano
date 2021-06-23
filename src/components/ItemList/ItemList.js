import React from "react";
import Item from "../Item/Item";

const ItemList = (props) => {



  return (
    <div>
        {props.items.map( (element ,e) =>(
            <Item
            key = {e}
            id = {element.id}
            URL = {element.URL}
            name = {element.name}
            price ={element.price}
            description ={element.description}
            
            />
        ))}
    </div>
  );
};

export default ItemList;
