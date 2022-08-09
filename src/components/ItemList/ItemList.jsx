import React, { useEffect, useState } from "react";

import Item from "../Item/Item";
import Data from "../../data/Data";
import ItemsData from "../../data/Data";
import "./ItemList.css";

function ItemList( {ItemsData} ) { 
    return(
        <div>
            <h1>Sección Aceites</h1>
            <ItemList 
                key={ItemsData.id}
                name={ItemsData.name}
                img={ItemsData.img}
                price={ItemsData.price} 
                description={ItemsData.description}
                stock={ItemsData.stock}
            />    
        </div>
        )
    }



export default ItemList;