import {signUp} from '../firebase/firebase_add.js'

var mysql = require('mysql');
var fs = require('fs');

// export const checkIfUserExist = (userInfo) => {
//    get(child(dbRef, `users/`)).then((snapshot) => {
// if (snapshot.exists()) {
//     console.log(snapshot.val());
// } else {
//     console.log("No data available");
// }
// }).catch((error) => {
// console.error(error);
// }); 
// }

export const signUpMySQL = (check) => {

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

var conn=mysql.createConnection({
    host:"mgoktas.mysql.database.azure.com", 
    user:"mgoktas", password:"mg2026.12", 
    port:3306, 
    database: 'users',
    ssl:{ca:fs.readFileSync("/Users/admin/Downloads/DigiCertGlobalRootCA.crt.pem")}});
    
    var sql = `INSERT INTO TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(255), firstname VARCHAR(255), lastname VARCHAR(255), password VARCHAR(255), country VARCHAR(255)),
    VALUES (${userInfo.username}, ${userInfo.firstname}, ${userInfo.lastname}, ${userInfo.password}, ${userInfo.country},)`

    conn.connect(
        function (err) { 
        if (err) { 
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        conn.query(sql, function (err, result) {if (err) throw err;console.log(result);});
    });

}}





var elements = {
    selectCountriesElement: document.getElementById('Countries'),
    selectCitiesElement: document.getElementById('Cities'),
    checkforTerms: document.getElementById('checkForTerms'),
    signupForm: document.getElementById('signup_form'),
    button_signup: document.getElementById('btn_signup'),
    selectCountriesElement: document.getElementById('Countries'),
    selectCitiesElement: document.getElementById('Cities'),
    btn_submit_user: document.getElementById('button_submit_user')
}

var fireBaseElements = {
    firstName: document.getElementById('firstname_user'),
    lastName: document.getElementById('lastname_user'),
    userName: document.getElementById('username_user'),
    password_user: document.getElementById('password_login'),
    country: document.getElementById('Countries')
    }

const getCountries = () => {
    fetch('../files/countries.json')
    .then((resp) => resp.json())
    .then((jsn) => { 
        for (let i=0; i<jsn.length; i++){
            let html = `
                        <option value="${jsn[i]['country_name']}">${jsn[i]['country_name']}</option>
        `;
        
        elements.selectCountriesElement.insertAdjacentHTML('beforeend', html)}
                                })}

const getCitiesTurkey = () => {
    elements.selectCountriesElement.addEventListener('change', (e) => {
        var selectedCountry = e.target.value
    if (selectedCountry == 'Turkey') {
        fetch('../files/cities_turkey.json')
            .then((resp) => resp.json())
                .then((jsn) => { 

                        for (let i=0; i<jsn.length; i++){
                            let html = `
                                <option value="${jsn[i]['name']}">${jsn[i]['name']}</option>
                `;
                            selectCitiesElement.insertAdjacentHTML('beforeend', html)
                                                        }   
                })
            }
    })

}



 
// const getCities = (country) => {
//     if (selectedCountry == 'Turkey') {
//         fetch('../files/cities_turkey.json')
//             .then((resp) => resp.json())
//                 .then((jsn) => { 

//                         for (let i=0; i<jsn.length; i++){
//                             let html = `
//                                 <option value="${jsn[i]['name']}">${jsn[i]['name']}</option>
//                 `;
//                             selectCitiesElement.insertAdjacentHTML('beforeend', html)
//                                                         }   
//                 })
//             }
// }
    
const checkIfTerms = () => { 
    var ifChecked = document.getElementById('checkForTerms').checked    
    if(ifChecked == false) {
             alert('You must accept the terms & conditions.')
        }  
        return ifChecked
    
    }

getCountries()

elements.btn_submit_user.addEventListener('click', () => {
    var check = checkIfTerms()
    signUp(check)
})

elements.btn_submit_user.addEventListener('click', () => {
    var check = checkIfTerms()
    signUpMySQL(check)
})

        

    