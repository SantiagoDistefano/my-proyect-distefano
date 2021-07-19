import {React} from "react";
import { Item } from "../Item/Item";

const ItemList = (props) => {

  return (
    <div>
      {props.items.map((element, e) => (
        <Item
          key={e}
          id={element.id}
          imageURL={element.imageURL}
          name={element.name}
          price={element.price}
          description={element.description}
        />
      ))}
    </div>
  );
};

export { ItemList };
