import React, { useEffect, useState } from "react";
// import "../ItemListContainer.css";
import ItemData from "../../data/Data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
    
const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const idCategory = useParams().idCategory
    function getProductos() {
        return new Promise( (resolve) => {
            setTimeout( ()=> resolve(ItemData), 2000)
        })
    };

    useEffect(() => {
        getProductos().then(products => {
        if (idCategory === undefined) {
            setData(products);
        } else {
            let itemsFilter = ItemData.filter((element) => element.category === idCategory)
            setData(itemsFilter)
        }
        });
    }, [idCategory]);
    
    return (
    <div>
        <ItemList data={data} />
    </div>
);
}

export default ItemListContainer;