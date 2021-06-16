import React, { useState, useEffect } from "react";
import Item from '../Item/Item';
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    
    const [items , setItems] = useState([])
    
    useEffect(() => {
      new Promise((result, reject) => {
        setTimeout(() => {
          result(Item);
        }, 2000);
      }).then((response) => setItems(response));
    }, []);
    
    return (
        <div>
            <ItemDetail/>
        </div>
    )
}

export default ItemDetailContainer;
