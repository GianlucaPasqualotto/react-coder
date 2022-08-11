import React from 'react'
import Button from '../Btn/Button';
import "../Item/Item.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

function Item ( {name, img, category, price, stock, id} ) {
    
    return (
        <div id="card">
        <div className="card border-primary mb-3">
        <div className="row g-0">
                    <div className="col-md-4"></div>
                    <img src={img} alt="producto" />
                </div>
                    <div className="item-detail">
                    <h2>{name}</h2>
                    <p>{category}</p>
                    <h3>$ {price}</h3>
                    <h6>Disponibles: {stock}</h6>
                    <Link to={`/detalle/${id}`}>Ver más</Link>
                    <ItemCount initial={1} stock={5} />
                    </div>
                </div>
        </div>
    );
}  

export default Item;