import React, { useEffect, useState } from "react";
import ItemData from '../../data/Data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const idURL = useParams().id;


function getProducto() {
    return new Promise( (resolve, reject) => {
        let itemRequested = ItemData.find( elemento => elemento.id == idURL)
        if (itemRequested === undefined)
            reject("No encontramos el producto")
        else
            resolve(itemRequested);
    });
};

    useEffect(() => {
        getProducto()
        .then((products) => setData(products))
        .catch((error) => alert(error));
    }, [])
    
    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}
export default ItemDetailContainer;