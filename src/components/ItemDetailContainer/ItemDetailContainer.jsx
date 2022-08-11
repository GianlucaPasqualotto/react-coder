import React, { useEffect, useState } from "react";
import ItemData from '../../data/Data';
import ItemDetail from '../ItemDetail/ItemDetail';

function getProducto() {
    return new Promise( (resolve) => {
        setTimeout( ()=> resolve(ItemData), 2000)
    })
};
    
function ItemDetailContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducto().then((products) => {
            setData(products[0]);
        })
    }, [])
    
    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}
export default ItemDetailContainer;