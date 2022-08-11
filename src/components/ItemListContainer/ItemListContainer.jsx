import React, { useEffect, useState } from "react";
// import "../ItemListContainer.css";
import ItemData from "../../data/Data";
import Card from "../Card/Card";
import Data from "../../data/Data"
import Item from "../Item/Item";
import ItemList from "../ItemList/ItemList";

function getProductos() {
    return new Promise( (resolve) => {
        setTimeout( ()=> resolve(ItemData), 2000)
    })
};
    
export default function ItemListContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProductos().then((respuesta) => {
            setData(respuesta);
        });
    }, []);
    
    return (
    <div>
        <h1>Sección Aceites</h1>
        {data.map((productos) => {
            return (
                <Item
                    key={productos.id}
                    name={productos.name}
                    img={productos.img}
                    price={productos.price} 
                    description={productos.description}
                    stock={productos.stock}
                />
            );
        })}
    </div>
);
}