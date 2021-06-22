import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [ items ,setItems] = useState([])
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
        name: "Peluche atigrado ",
        id: "2",
        description: "Oso atigrado naranja ",
        price: "$500",
      },
    ];

    useEffect(()=>{
      const getItem = () =>{
          return new Promise((resolve, reject)=>{
              resolve(info);
          });
      };
      getItem().then(response=>{
          setItems(response.filter(items => items.id === id)[0])
      });
  }, [id]);
   
    
    return (
        <div>
            <ItemDetail items = {items}/>
        </div>
    )
};

export default ItemDetailContainer;