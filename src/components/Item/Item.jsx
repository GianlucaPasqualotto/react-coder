import React from 'react'
import { Link } from "react-router-dom"; 
import ItemCount from "../ItemCount/ItemCount";
import { Button } from 'bootstrap';

import "../Item/Item.css";


function Item ( { name, img, category, price, stock, id } ) {
    
    return (
        <div className="row">
            <div className='col-sm-4'>
                <div className='card h-100'> 
                    <img className="card-img-top" src={img} alt="producto" />
                <div className='card-body'>
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{category}</p>
                    <h3 className="card-text">$ {price}</h3>
                    <h6 className="card-text">Disponibles: {stock}</h6>
                    <ItemCount initial={1} stock={stock} /> <hr></hr>
                    <Link to={`/detalle/${id}`}><button className='btn'>Ver detalle</button></Link>
                </div>
                </div>
            </div>
        </div>
    );
}
    
export default Item;
