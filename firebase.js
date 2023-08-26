import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyC8Ysgk8A7yp3b1hfXc0Wq46HdWDzmT76s",
    authDomain: "firestore-proyect-66b9b.firebaseapp.com",
    projectId: "firestore-proyect-66b9b",
    storageBucket: "firestore-proyect-66b9b.appspot.com",
    messagingSenderId: "573323262635",
    appId: "1:573323262635:web:cbad6b90545747750e95ee"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export const saveToken = (token) => addDoc(collection(db, 'tokens'), {token})

// export const getTasks = () => getDocs(collection(db, 'tasks'))

// export const onGetTasks = (callback) => onSnapshot(collection(db, 'tasks'), callback)