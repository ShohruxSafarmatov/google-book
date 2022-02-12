"use strict"

let elForm = document.querySelector(".login__form");
let elUserName = document.querySelector("#username");
let elPassword = document.querySelector("#password");

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    const usernameValue = elUserName.value;
    const passwordValue = elPassword.value;
    fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(
        {
            "email": usernameValue,
            "password": passwordValue,
        }),
    }).then((res) => res.json()).then(data => {
        if(data?.token){
            window.localStorage.setItem("token",data.token);
            window.location.replace("home.html")
        }
        
    });
});

const elLogoutbtn = document.querySelector(".logout");
const localStorage = window.localStorage.getItem("token");
if (!localToken)
{
    window.location.replace("index.html"); 
}

elLogoutbtn.addEventListener("click", function(){
    window.localStorage.removeItem("token");
});