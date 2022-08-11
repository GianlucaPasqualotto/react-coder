import React, { useEffect, useState } from "react";

import Item from "../Item/Item";
import Data from "../../data/Data";
import ItemData from "../../data/Data";
import "./ItemList.css";

function ItemList( {ItemData} ) { 
    return(
        <div>
            <h1>Sección Aceites</h1>
            <ItemList 
                key={ItemData.id}
                name={ItemData.name}
                img={ItemData.img}
                price={ItemData.price} 
                description={ItemData.description}
                stock={ItemData.stock}
            />    
        </div>
        )
    }



export default ItemList;