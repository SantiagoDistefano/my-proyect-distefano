import React from 'react'
import "./ItemDetail.css"

const ItemDetail = ({items})  => {
    return (
        <div>
            <h2>{items.name}</h2>
            <img src={items.URL} alt="img-detail"/>
            <p>{items.description}</p>
            <p>{items.price}</p>
        </div>
    );
};

export default ItemDetail