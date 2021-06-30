import React from 'react'
import { Link } from 'react-router-dom';

import "./Item.css"


const Item = (props) => {
    
    return (
        <div className="info">
            <Link to={`/item/${props.id}`}>
                <img class="img-item" src={props.URL} alt="img-item"/>
            </Link>
            <h4>{props.name}</h4>
            <h5><b>{props.price}</b></h5>
            <br/>
            <Link to="/cart" className="link" ><h6 className="addCart">Añadir al carrito</h6></Link>
            
        </div>
    );
};

export default Item

