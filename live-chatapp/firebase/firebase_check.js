import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase, ref, child, push, update, get } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
import {app, db} from './firebaseConfig.js'

const dbRef = ref(getDatabase());

export const logIn = () => {

    const username = document.getElementById('username_login')
    const password = document.getElementById('password_login')

   get(child(dbRef, `users/`)).then((snapshot) => {

if (snapshot.exists()) {
    console.log(snapshot.val())
    console.log(snapshot.val().username)
    if(username.value == snapshot.val()[`${username.value}`].username && password.value == snapshot.val()[`${username.value}`].password) {
        console.log(`logined succesfully`)
    }
 else {
    console.log("Username or password is incorrect");
}}
}).catch((error) => {
console.error(error, "Username or password is incorrect");
}); 
}
