import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDhkcsGl6ELkMaonR4pZtoD20A6YEx1Qo0",
    authDomain: "entel8-ff820.firebaseapp.com",
    projectId: "entel8-ff820",
    storageBucket: "entel8-ff820.appspot.com",
    messagingSenderId: "398001272297",
    appId: "1:398001272297:web:8c487ed9554bfe7d59c778"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveToken = (token) => addDoc(collection(db, 'tokens'), {token})

export const getTokens = () => getDocs(collection(db, 'tokens'))

export const onGetTokens = (callback) => onSnapshot(collection(db, 'tokens'), callback)

// export const getTasks = () => getDocs(collection(db, 'tasks'))

// export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)