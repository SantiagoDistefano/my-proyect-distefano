import React from "react";
import { useEffect, useState } from "react";
import Item from "../Item/Item";

const ItemList = () => {
  const ProductList = [
    { name: "Producto 1", id: "1", description: "", price: "4000" },
    { name: "Producto 2", id: "2", description: "", price: "5000" },
    { name: "Producto 3", id: "3", description: "", price: "6000" },
  ];
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((result, reject) => {
      setTimeout(() => {
        result(Item);
      }, 2000);
    }).then((response) => setItems(response));
  }, []);

  return (
    <div>
      {ProductList.map((element, i) => {
        return (
          <div className="map" key={element.id} >
            <p>{element.name}</p>
            <p>{element.id}</p>
            <p>{element.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
