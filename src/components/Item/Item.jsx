import React from 'react'
import Button from '../Btn/Button';
import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount"

function Item ( {name, img, description, price, stock} ) {
    
    return (
            <div className="item">
                <div className="item-img">
                    <img src={img} alt="producto" />
                </div>
                    <div className="item-detail">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h3>$ {price}</h3>
                    <h6>Disponibles: {stock}</h6>
                    <Button text="Ver más"></Button>
                    <ItemCount />
                    </div>
                </div>
    );
}  

export default Item;