import React from 'react'
import "./Item.css"


const Item = ({item}) => {
    
    return (
        <div>
            <h3>Peluche pulpo</h3>
            <p>Peluche reversible, enojado o feliz </p>
            <img src="https://i.blogs.es/e2feea/pulpito/450_1000.jpg" alt="detail"></img>
            <p>su precio es de: $1000</p>
        </div>
    );
};

export default Item
