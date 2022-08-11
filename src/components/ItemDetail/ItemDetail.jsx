import React from 'react'
import Button from '../Btn/Button';
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

function ItemDetail ( {data} ) {
    
    return (
            <div id="card">
            <div className="card border-primary mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                <img id="img" className="img-fluid rounded-start" src={data.img} alt="producto-aceite"></img>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p className="card-text">Categoría: {data.description}</p>
                    <h3 className="card-text">Precio: $ {data.price}</h3>
                    <hr />
                    <ItemCount className="card-body" initial={1} stock={5} />
                    <small className="text-muted">Disponibles: {data.stock}</small>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    );
}  

export default ItemDetail;