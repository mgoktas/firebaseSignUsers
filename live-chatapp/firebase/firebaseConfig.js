import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getDatabase, ref, child, push, update, get } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";


 
const firebaseConfig = {
    apiKey: "AIzaSyDWEPg92hrO9oBLDWlGB6zlVzk4xOyb52o",
    authDomain: "live-chat-64cd8.firebaseapp.com",
    projectId: "live-chat-64cd8",
    storageBucket: "live-chat-64cd8.appspot.com",
    messagingSenderId: "539999928487",
    appId: "1:539999928487:web:7376f3a4bc6e1f272f5b82"

};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase()


