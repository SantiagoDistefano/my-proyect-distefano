import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css"


const Item = (props) => {

    const onAdd = (e,count)=>{
        alert(`Has agregado ${count} al carrito`);
        count = 1;
    };
    return (
        <div className="info">
            <h4>{props.name}</h4>
            <Link to={`/item/${props.id}`}>
                <img class="img-item" src={props.URL} alt="img-item"/>
            </Link>
            <p>{props.price}</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    );
};

export default Item

