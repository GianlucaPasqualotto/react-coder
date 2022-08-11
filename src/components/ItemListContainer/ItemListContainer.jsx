import React, { useEffect, useState, useParams } from "react";
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
    
const ItemListContainer = () => {
    const [data, setData] = useState([]);
    // const idCategory = useParams().idCategory

    useEffect(() => {
        getProductos()
        .then((respuesta) => {
        // respuesta.filter(elemento => elemento.category === idCategory)
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
                    id={productos.id}
                    name={productos.name}
                    img={productos.img}
                    price={productos.price} 
                    description={productos.category}
                    stock={productos.stock}
                />
            );
        })}
    </div>
);
}

export default ItemListContainer;