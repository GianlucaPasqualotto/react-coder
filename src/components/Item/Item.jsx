import React from 'react'
import { Link } from "react-router-dom"; 
import ItemCount from "../ItemCount/ItemCount";

import "../Item/Item.css";


function Item ( {name, img, category, price, stock, id} ) {
    
    return (
        
        <div className='container'>
        <div className="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">

        <div className='card'>
            <div className="card-body">
            <img className=" w-25" src={img} alt="producto" />
                <h2>{name}</h2>
                <p>{category}</p>
                <h3>$ {price}</h3>
                <h6>Disponibles: {stock}</h6>
                <Link to={`/detalle/${id}`}>Ver detalle</Link>
                <ItemCount initial={1} stock={stock} />
            </div>
        </div>
    </div>
    </div>
    </div>

    );
}  

export default Item;
