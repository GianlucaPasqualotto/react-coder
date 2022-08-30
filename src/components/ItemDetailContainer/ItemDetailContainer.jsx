import React, { useEffect, useState } from "react";
import ItemData from '../../data/Data';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";
import firestoreDB from "../../services/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
    const [data, setData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        function getDetail(id) {
            return new Promise((resolve) => {
                const productosCollection = collection(firestoreDB, "productos");
                const docRef = doc(productosCollection, id);
                getDoc(docRef).then(snapshot => {
                    resolve(
                        { ...snapshot.data(), id: snapshot.id }
                    )
                });
            })
        }
        getDetail(id).then(product=>{
            setData(product)
        })
    }, [id])
    
    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}
export default ItemDetailContainer;