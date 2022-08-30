import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

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

export default firestoreDB; 