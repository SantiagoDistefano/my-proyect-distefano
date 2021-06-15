import React from 'react'
import "./Item.css"


const Item = ({item}) => {
    
    return (
        <div>
            <ul className= "lista">
                <li className ="img"></li>
                <li className ="info">Id:</li>
                <li className ="info">Title:</li>
                <li className ="info">Price:</li>
            </ul>
        </div>
    );
};

export default Item
