// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyC8SaS666PdpTuz0V11TKEcpd5SjCh6axY",
    authDomain: "tiendacasla-dc3cd.firebaseapp.com",
    projectId: "tiendacasla-dc3cd",
    storageBucket: "tiendacasla-dc3cd.appspot.com",
    messagingSenderId: "73983281918",
    appId: "1:73983281918:web:b47b0ea8e85b6fd683f3af"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);