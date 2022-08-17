import React, { useEffect, useState } from "react";
import ItemData from '../../data/Data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const { id } = useParams();
    function getProducto() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
            let itemRequested = ItemData.find(
                (elemento) => elemento.id === Number(id)
            );
            if (itemRequested === undefined) reject("No encontramos el item");
            else resolve(itemRequested);
            }, 1000);
        });
    }

    useEffect(() => {
        getProducto()
        .then((respuesta) => setData(respuesta))
        .catch((error) => alert(error));
}, []);
    
    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}
export default ItemDetailContainer;