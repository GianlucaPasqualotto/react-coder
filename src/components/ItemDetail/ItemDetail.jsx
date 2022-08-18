import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from '../Btn/Button';

function ItemDetail ( {data} ) {
    const [count,setCount] = useState(0);
    const addToCart=(count)=>{

    console.log(`Agregaste ${count} ${data.name} al carrito`);
    setCount(count);
}
    
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
                    <p className="card-text">Categoría: {data.category}</p>
                    <h3 className="card-text">Precio: $ {data.price}</h3>
                    <hr />
                    <ItemCount className="card-body" initial={1} stock={data.stock} addToCart={addToCart} />
                    <small className="text-muted">Disponibles: {data.stock}</small> <hr></hr>
                    <Link to={`/category/${data.category}`}><button className='btn'>Volver a Categoría: {data.category}</button></Link>
                    <Link to={"/"}><button className='btn'>Volver al inicio</button></Link>
                    <Link to={"/cart"}><button className='btn'>Finalizar Compra</button></Link>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    );
}  

export default ItemDetail;