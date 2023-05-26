//搜尋資料
import {initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js'

import { getFirestore,collection,query,where,getDocs } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js'

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
const querySnapshot = await getDocs(collection(db,"cities"))
querySnapshot.forEach((doc)=>{
    console.log(doc.id," => ",doc.data())
})

