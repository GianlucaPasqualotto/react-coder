import React, { useEffect, useState } from "react";
// import "../ItemListContainer.css";
import ItemData from "../../data/Data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import firestoreDB from "../../services/firebase";
import { getDocs, collection, query, where } from 'firebase/firestore';
    
const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const idCategory = useParams().idCategory
    
    function getItemsFromDB() {
        return new Promise( (resolve) => {
            const productosCollection = collection(firestoreDB, "productos");
            getDocs(productosCollection).then( snapshot => {
                const docsData = snapshot.docs.map( doc =>  {
                    return{ ...doc.data(), id: doc.id };
                })
                resolve(docsData);
            });
        })
    };

    function getItemsFromDBByIdCategory( idCategory ) {
        return new Promise( (resolve) => {
        const productosCollectionRef = collection(firestoreDB, "productos");
        const q = query(productosCollectionRef, where("category", "==", idCategory));
        getDocs(q).then( snapshot => {
            const docsData = snapshot.docs.map( doc =>  {
                return{ ...doc.data(), id: doc.id };
            })
            resolve(docsData);
        });
    })
};

useEffect(() => {
    if (idCategory) {
        getItemsFromDBByIdCategory( idCategory ).then((resolve) => {
            setData(resolve)                
        });
        
        } else {
            getItemsFromDB().then((resolve) => {
            setData(resolve)                
        });
    }
}, [idCategory])
    
return (
    <div>
        <ItemList data={data} />
    </div>
)
}

export default ItemListContainer;