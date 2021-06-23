import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({item})  => {
    return (
        <div>
            <p>{item.name}</p>
            <img src={item.URL} alt="img-detail"/>
            <p>{item.description}</p>
            <p>{item.price}</p>
        </div>
    );
};

export default ItemDetail