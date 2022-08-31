import React from "react";
import { useState, useEffect } from "react";
import { collection, addDoc, where, writeBatch, documentId, getDocs, query } from "firebase/firestore";
import { cartContext } from "../../store/cartContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import firestoreDB from "../../services/firebase";
import "../CheckOut/CheckOut.css"; 

function CheckOut() {
const { cart, totalPrice, clearCart } = useContext(cartContext)
const [userBuyer, setUserBuyer] = useState({
    name: "",
    phone: "",
    email: "",
});
const [orderFirebase, setOrderFirebase] = useState({
    id:"",
    complete: false,
});
const purchaseOrder = {
    buyer: {...userBuyer},
    items: {...cart},
    total: totalPrice(),
    date: new Date(),
};
async function handleSubmit(e) {
    e.preventDefault()
    const collectionRef = collection(firestoreDB, "orders");
    const order = await addDoc(collectionRef, purchaseOrder);
    setOrderFirebase({ id: order.id, complete: true });
    clearCart()
}
/* Control de Stock . . .  */
//     const collectionRefStock = collection(firestoreDB, "productos");
//     const arrayIds = cart.map((item) => item.id);
//     const q = query(collectionRefStock, where(documentId(), "in", arrayIds));
//     let batch = writeBatch(firestoreDB);
//     getDocs(q).then((response) => {
//     response.docs.forEach((doc) => {
//         const itemToUpdate = cart.find((prod) => prod.id === doc.id);
        
//         if (doc.data().stock >= itemToUpdate.quantity) {
//             batch.update(doc.ref, {
//                 stock: doc.data().stock - itemToUpdate.quantity,
//             });
//         }
//         batch.commit();
//         console.log("commit")
//     });
// });

function inputChangeHandler(e) {
    const input = e.target;
    const value = input.value;
    const inputName = input.name;
    let copyUserData = { ...userBuyer };
    copyUserData[inputName] = value;
    setUserBuyer(copyUserData);
}
if (orderFirebase.complete === true) {
    return (
        <main className="mainCheckOut">
            <div className="thankYouContainer">
                <FontAwesomeIcon className="checkIcon" icon={faCircleCheck} />
                <h1 className='titleThankYou'>¡Compra exitosa!</h1>
                <h2 className='subtitleThankYou'>Gracias por confiar en Rapid Lube Service {userBuyer.name}</h2>
                <h3 className='detailCheckOut'>En instante recibirá el detalle de su compra en la siguiente dirección: {userBuyer.email}</h3>
                <h3 className='detailCheckOut'>El id de seguimiento de tu compra es: {orderFirebase.id}</h3>
                <Link to={"/"}> <button className='buttonThankYou'>Seguir Comprando</button></Link>
            </div>
        </main>
    )
}
else {
    return (
        <main className='mainCheckOut'>
            <div className='checkoutContainer'>
                <h1 className='title'>Finalizar Compra</h1>
                <form className='formContainer' onSubmit={handleSubmit}>
                    <legend className='label'>Completa los campos para finalizar</legend>
                    <label className='label' htmlFor="name">Nombre y Apellido</label>
                    <input className='formInput' type="text" name='name' value={userBuyer.name} onChange={inputChangeHandler} placeholder='Lionel Messi' required></input>
                    <label className='label' htmlFor="phone">Celular</label>
                    <input className='formInput' type="number" name='phone' value={userBuyer.phone} onChange={inputChangeHandler} placeholder='1123456789' required></input>
                    <label className='label' htmlFor="email">Email</label>
                    <input className='formInput' type="email" name='email' value={userBuyer.email} onChange={inputChangeHandler} placeholder='liomessi@gmail.com' required></input>
                    <input className='buttonForm' type="submit" value='Comprar'></input>
                </form>
            </div>
        </main>
    )
}
}
export default CheckOut