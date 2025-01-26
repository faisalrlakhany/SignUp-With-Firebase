import {  onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

import { auth } from "./firebase-configuration.js";


const logbtn = document.querySelector('#logOut')

onAuthStateChanged(auth, (user) => {
    if (user) {
      
      const uid = user.uid;
      console.log(uid);
      
    } else {
      window.location = 'login.html'
    }
  });

  logbtn.addEventListener('click' , () => {
    signOut(auth).then(() => {
        window.location = 'login.html';
        
      }).catch((error) => {
        console.log(error);
        
      });
      
  })