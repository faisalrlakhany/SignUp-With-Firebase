
import {  signInWithEmailAndPassword , GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import { auth } from "./firebase-configuration.js";

    
    const provider = new GoogleAuthProvider();

    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const btn = document.querySelector('#form');


    btn.addEventListener('submit' , function(event){


        event.preventDefault();
        signInWithEmailAndPassword( auth, email.value, password.value)
        .then((userCredential) => {

        const user = userCredential.user;
        console.log(user);
        window.location = 'index1.html';
        
            
  })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert("Wrong Email or Password");
        
  });
    })

    const googleBtn = document.querySelector('#google-btn');

    googleBtn.addEventListener('click',() =>{

      console.log('google Called');

      signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    window.location = 'index1.html'
    
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorMessage = error.message;
    console.log(errorMessage);
    
   
  });
      

    })


    