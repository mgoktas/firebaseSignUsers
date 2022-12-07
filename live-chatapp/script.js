var elements = {
selectCountriesElement: document.getElementById('Countries'),
selectCitiesElement: document.getElementById('Cities'),
checkforTerms: document.getElementById('checkForTerms'),
signupForm: document.getElementById('signup_form'),
button_login: document.getElementById('btn_login'),
button_signup: document.getElementById('btn_signup'),
loginbuttons: document.getElementById('login_buttons')
}

export const signUpClicked = () => {

  var selectCountriesElement = document.getElementById('Countries')
  var selectCitiesElement = document.getElementById('Cities')
    
fetch('../files/countries.json')
    .then((resp) => resp.json())
    .then((jsn) => { 
        for (let i=0; i<jsn.length; i++){
            let html = `
                        <option value="${jsn[i]['country_name']}">${jsn[i]['country_name']}</option>
        `;
        
            selectCountriesElement.insertAdjacentHTML('beforeend', html)}
        selectCountriesElement.addEventListener('change', (e) => {
            var selectedCountry = e.target.value
        
                selectCountriesElement.addEventListener('change', (e) => {
                    var selectedCountry = e.target.value
                        if (selectedCountry == 'Turkey') {
                            fetch('./files/cities_turkey.json')
                                .then((resp) => resp.json())
                                    .then((jsn) => { 

                                            for (let i=0; i<jsn.length; i++){
                                                let html = `
                                                    <option value="${jsn[i]['name']}">${jsn[i]['name']}</option>
                                    `;
                                                selectCitiesElement.insertAdjacentHTML('beforeend', html)
                                                                            }   
                                    })
                                }}
                                )})})}
                            
           

const logInClicked = () => {   button_login.addEventListener('click', ()=>{
  elements.signupForm.style.opacity=1
  elements.loginbuttons.innerHTML = ``;
  elements.loginbuttons.style.width = 0
  elements.loginbuttons.style.height= 0
  elements.signupForm.innerHTML = ``
    
})}



const checkIfTerms = () => { 
  elements.btn_submit_user.addEventListener('click',(e) => {
    e.preventDefault()
    var ifChecked = document.getElementById('checkForTerms').checked      
        if(ifChecked == false) {
            alert('You must accept the terms & conditions.')
        }})                 }   






