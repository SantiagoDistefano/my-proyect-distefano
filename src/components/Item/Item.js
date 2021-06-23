import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import "./Item.css"


const Item = (props) => {

    const onAdd = (e,items)=>{
        alert(`Has agregado ${items} items al carrito`);
        items = 1;
    };
    return (
        <div className="info">
            <Link to={`/item/${props.id}`}>
                <img class="img-item" src={props.URL} alt="img-item"/>
            </Link>
            <h4>{props.name}</h4>
            <p>{props.price}</p>
            <ItemCount stock={10} initial={0} onAdd={onAdd}/>
            
        </div>
    );
};

export default Item

