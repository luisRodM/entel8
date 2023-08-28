import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-messaging.js";
import { saveToken, onGetTokens, getTokens } from "./firebase.js";

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
const app = initializeApp(firebaseConfig);

// Initialize FCM
const messaging = getMessaging(app);

let arrayTokens = []
let arrayTokensUnic = []

window.addEventListener('DOMContentLoaded', async () => {
    onGetTokens((querySnapshot) => {

        let html = ''

        querySnapshot.forEach(doc => {
            // console.log(doc.data())

            const data = doc.data()

            arrayTokens.push(data.token)

        });

        const removeDuplicates = (arr) => {
            return [...new Set(arr)];
        }

        arrayTokensUnic = removeDuplicates(arrayTokens)

        console.log(arrayTokensUnic)
    })
})



const subscribeUser = () => {
    Notification.requestPermission().then(permission => {
        console.log(permission)
        if (permission == 'granted') {
            getToken(messaging, { vapidKey: "BG8FyHdrMX8Go8Tss9nPuUG4RT0qz3HCtxFuLbEDK3U8nqFiUBhIRi0tUDPTsH_beS_UJHUtXVp_G4ghxJeZEzY" }).then(currentToken => {
                // onGetTokens((querySnapshot) => {

                //     querySnapshot.forEach(doc => {

                //         const data = doc.data()

                //         console.log(data)

                //         if (arrayTokens.includes(currentToken)) {
                //             console.log('ya existe')
                //         } else {
                //             console.log('no existe')
                //             arrayTokens.push(data.token)
                //         }

                //         if (arrayTokens.includes(currentToken)) {
                //             console.log('ya existe')
                //         } else {
                //             console.log('no existe')
                //             saveToken(currentToken)
                //         }

                //     });

                // })
                // console.log(arrayTokens)
                // if (arrayTokens.includes(currentToken)) {
                //     console.log('ya existe')
                // } else {
                //     saveToken(currentToken)
                // }
                if (arrayTokensUnic.includes(currentToken)) {
                    console.log('ya existe')
                } else {
                    console.log('no existe')
                    saveToken(currentToken)
                }
                
                document.getElementById('tokenId').innerHTML = currentToken
            })
        }
    })
}

document.getElementById('btnSubscribe').addEventListener('click', subscribeUser)

