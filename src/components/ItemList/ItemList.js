import React from "react";
import { Item } from "../Item/Item";

const ItemList = (props) => {
  return (
    <div>
      {props.items.map((element, e) => (
        <Item
          key={e}
          id={element.data.id}
          imageURL={element.data.imageURL}
          name={element.data.name}
          price={element.data.price}
          description={element.data.description}
        />
      ))}
    </div>
  );
};

export { ItemList };
