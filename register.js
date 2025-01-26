
import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import { auth } from "./firebase-configuration.js";


   
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const btn = document.querySelector('#form');


    btn.addEventListener('submit' , function(event){


        event.preventDefault();
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
        // Signed up 
           const user = userCredential.user;
           console.log(user);
           email.value='';
           password.value='';
           window.location = 'login.html';
            
     })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           console.log(errorMessage);
           alert("Already Registered");
    // ..
  });

    
    })


    