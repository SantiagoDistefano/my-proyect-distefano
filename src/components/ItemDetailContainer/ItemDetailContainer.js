import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../Factory/Firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  

  // const info = [
  //   {
  //     imageURL: "/public/assets/images/img1.png",
  //     name: "Peluche oso ",
  //     id: "1",
  //     description: "Oso marron con bufanda ",
  //     price: "$500",
  //   },
  //   {
  //     imageURL: "https://www.xenex.uy/imgs/productos/productos31_9000.jpg",
  //     name: "Peluche jirafa ",
  //     id: "2",
  //     description: "peluche oso con disfraz de jirafa ",
  //     price: "$500",
  //   },
  //   {
  //     imageURL: "https://www.xenex.uy/imgs/productos/productos31_8998.jpg",
  //     name: "Oso cerdito",
  //     id: "3",
  //     description: "peluche oso con disfraz de cerdito ",
  //     price: "$500",
  //   },
  //   {
  //     imageURL: "https://www.xenex.uy/imgs/productos/productos31_8999.jpg",
  //     name: "Oso vaca",
  //     id: "4",
  //     description: "peluche oso con disfraz de vaca ",
  //     price: "$500",
  //   },
  //   {
  //     imageURL: "https://www.xenex.uy/imgs/productos/productos31_8996.jpg",
  //     name: "Perro english springer",
  //     id: "5",
  //     description: "Peluche perro english springer",
  //     price: "$700",
  //   },
  //   {
  //     imageURL: "https://www.xenex.uy/imgs/productos/productos31_9003.jpg",
  //     name: "Perro golden ",
  //     id: "6",
  //     description: "Peluche perro golden",
  //     price: "$700",
  //   },
  // ];

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    

    item
      .get()
      .then((doc) => {
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("Error al obtener un item", error);
      })
      .finally(() => {
      });
  }, [id]);

  return (
    <div className="Detail">
      <ItemDetail item={item} />
    </div>
  );
};

export { ItemDetailContainer };
