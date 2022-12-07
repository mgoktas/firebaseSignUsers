import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase, ref, child, push, update, get } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
import {app, db} from './firebaseConfig.js'




const dbRef = ref(getDatabase());


export const checkIfUserExist = (userInfo) => {
   get(child(dbRef, `users/`)).then((snapshot) => {
if (snapshot.exists()) {
    console.log(snapshot.val());
} else {
    console.log("No data available");
}
}).catch((error) => {
console.error(error);
}); 
}



    

export const signUp = (check) => {

    if(check) {
    
const   firstName = document.getElementById('firstname_user')
const   lastName = document.getElementById('lastname_user')
const   userName = document.getElementById('username_user') 
const   password_user =  document.getElementById('password_login') 
const   country = document.getElementById('Countries') 
   
var userInfo = {
    username: userName.value,
    password: password_user.value,
    firstname: firstName.value,
    lastname: lastName.value,
    country: country.value
}

    const newUserKey = push(child(ref(db), 'users')).key
    const updates = {}
    updates['/users/' + userInfo.username + '/'] = userInfo
    return update(ref(db), updates)
}}

