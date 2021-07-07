import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            imageURL:
              "http://i0.wp.com/denavidad.com/wp-content/uploads/2017/12/Osos-de-Peluche-de-Navidad.jpg?resize=256%2C256&317bc1&317bc1",
            name: "Oso con bufanda ",
            id: "1",
            description: "Oso marron con bufanda ",
            price: "$500",
            category: "osos",
          },
          {
            imageURL:
              "https://www.xenex.uy/imgs/productos/productos31_9000.jpg",
            name: "Oso jirafa ",
            id: "2",
            description: "peluche oso con disfraz de jirafa ",
            price: "$500",
            category: "osos",
          },
          {
            imageURL:
              "https://www.xenex.uy/imgs/productos/productos31_8998.jpg",
            name: "Oso cerdito",
            id: "3",
            description: "peluche oso con disfraz de cerdito ",
            price: "$500",
            category: "osos",
          },
          {
            imageURL:
              "https://www.xenex.uy/imgs/productos/productos31_8999.jpg",
            name: "Oso vaca",
            id: "4",
            description: "peluche oso con disfraz de vaca ",
            price: "$500",
            category: "osos",
          },
          {
            imageURL:
              "https://www.xenex.uy/imgs/productos/productos31_8996.jpg",
            name: "Perro springer",
            id: "5",
            description: "perro english springer",
            price: "$700",
            category: "perros",
          },
          {
            imageURL:
              "https://www.xenex.uy/imgs/productos/productos31_9003.jpg",
            name: "Perro golden ",
            id: "6",
            description: "perro golden",
            price: "$700",
            category: "perros",
          },
        ]);
      }, 1500);
    }).then((res) =>
      category === "all" || category === undefined
        ? setItems(res)
        : setItems(res.filter((item) => item.category === category))
    );
  }, [category]);

  return (
    <div className="Objetos">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
