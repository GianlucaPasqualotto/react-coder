import React from 'react';
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Button from '../Btn/Button';
import { cartContext } from "../../store/cartContext";
import Item from '../Item/Item';

function ItemDetail ( {data} ) {
    const { addToCart } = useContext(cartContext);
    const [countCart, setCountCart] = useState(0);
    function onAdd(amount) {
        addToCart(data, amount);
        setCountCart(amount);
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
                    <small className="text-muted">Disponibles: {data.stock}</small> 
                    <hr />
                    {countCart === 0 ?
                        <ItemCount className="card-body" initial={1} stock={data.stock} onAdd={onAdd} /> :
                        <>
                        <ItemCount stock={data.stock} initial={1} onAdd={onAdd}/>
                        <Link to={`/cart`}><button className='btn'>Ver Carrito</button></Link> <hr></hr>
                        </>
                    }
                    <Link to={`/category/${data.category}`}><button className='btn'>Volver a Categoría: {data.category}</button></Link>
                    <Link to={"/"}><button className='btn'>Volver al inicio</button></Link>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    );
}  

export default ItemDetail;