import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const info = [
    {
      URL: "http://i0.wp.com/denavidad.com/wp-content/uploads/2017/12/Osos-de-Peluche-de-Navidad.jpg?resize=256%2C256&317bc1&317bc1",
      name: "Peluche oso ",
      id: "1",
      description: "Oso marron con bufanda ",
      price: "$500",
    },
    {
      URL: "https://www.xenex.uy/imgs/productos/productos31_9000.jpg",
      name: "Peluche jirafa ",
      id: "2",
      description: "peluche oso con disfraz de jirafa ",
      price: "$500",
    },
    {
      URL: "https://www.xenex.uy/imgs/productos/productos31_8998.jpg",
      name: "Oso cerdito",
      id: "3",
      description: "peluche oso con disfraz de cerdito ",
      price: "$500",
    },
    {
      URL: "https://www.xenex.uy/imgs/productos/productos31_8999.jpg",
      name: "Oso vaca",
      id: "4",
      description: "peluche oso con disfraz de vaca ",
      price: "$500",
    },
    {
      URL: "https://www.xenex.uy/imgs/productos/productos31_8996.jpg",
      name: "Perro english springer",
      id: "5",
      description: "Peluche perro english springer",
      price: "$700",
    },
    {
      URL: "https://www.xenex.uy/imgs/productos/productos31_9003.jpg",
      name: "Perro golden ",
      id: "6",
      description: "perro english springer",
      price: "$700",
    },
  ];

  useEffect(() => {
    const getItem = () => {
      return new Promise((resolve, reject) => {
        resolve(info);
      });
    };
    getItem().then((result) => {
      setItem(result.find((item) => item.id === id));
    });
  }, [id]);
  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
