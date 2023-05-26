import {initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js'

import { getFirestore,collection,doc,setDoc } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js'

const firebaseConfig = {
    apiKey: "AIzaSyC0AO8-o_0FoVZgLfVs31UvYm1Gm-fL6lI",
    authDomain: "project-javascript-4e903.firebaseapp.com",
    projectId: "project-javascript-4e903",
    storageBucket: "project-javascript-4e903.appspot.com",
    messagingSenderId: "785523512113",
    appId: "1:785523512113:web:675e257b7b759e00b6d610"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const citiesRef = collection(db, "cities");
await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });

