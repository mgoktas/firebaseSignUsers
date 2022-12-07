import {logIn} from '../firebase/firebase_check.js'

const btn_login_user = document.getElementById('button_log_user')

btn_login_user.addEventListener('click', (e) => {
    e.preventDefault()
    logIn()
}) 

        

    