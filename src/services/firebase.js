import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import ItemData from "../data/Data";

const firebaseConfig = {
    apiKey: "AIzaSyAYfgmppF9ZpoP0FAEJrbv5UkHTMsAWb0E",
    authDomain: "react-rapidlubeservice.firebaseapp.com",
    projectId: "react-rapidlubeservice",
    storageBucket: "react-rapidlubeservice.appspot.com",
    messagingSenderId: "374297562199",
    appId: "1:374297562199:web:875f7817698b667587e712",
    measurementId: "G-5RB3P4JP5J"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export async function saveProductsToFirebase(){
    const productosCollection = collection(firestoreDB, "productos")
    
    for(let item of ItemData) {
        const docref = await addDoc(productosCollection, item)
        console.log("documento creado con id:", docref.id)
    }
}
export default firestoreDB; 