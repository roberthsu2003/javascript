import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'

import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

const firebaseConfig = {
    /*
    自已的code
    */
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "products"));
let contents = ""
querySnapshot.forEach(doc => {
    console.log(doc.id)    
    let documentData = doc.data()
    console.log(documentData['productName'])
    contents += `<tr><th scope="row">${doc.id}</th><td>${documentData['productName']}</td><td>${documentData['code']}</td></tr>`
});

let tbodyElement = document.querySelector('#tbody')
tbodyElement.innerHTML = contents




