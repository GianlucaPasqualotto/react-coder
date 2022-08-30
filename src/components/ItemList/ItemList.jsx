import React from "react";
import Item from "../Item/Item";

function ItemList( {data} ) { 
    return(
        data.map((product) => {
            return (
                <Item
                    id={product.id}
                    key={product.id}
                    name={product.name}
                    img={product.img}
                    price={product.price} 
                    stock={product.stock}
                />    
            )
        })
    )
}
export default ItemList;