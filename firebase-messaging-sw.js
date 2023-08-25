importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhkcsGl6ELkMaonR4pZtoD20A6YEx1Qo0",
    authDomain: "entel8-ff820.firebaseapp.com",
    projectId: "entel8-ff820",
    storageBucket: "entel8-ff820.appspot.com",
    messagingSenderId: "398001272297",
    appId: "1:398001272297:web:8c487ed9554bfe7d59c778"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize FCM
const messaging = firebase.messaging()