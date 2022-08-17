import React from "react";
import Item from "../Item/Item";
import Data from "../../data/Data";
import ItemData from "../../data/Data";

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
                    description={product.description}
                    stock={product.stock}
                />    
            )
        })
    )
}
export default ItemList;