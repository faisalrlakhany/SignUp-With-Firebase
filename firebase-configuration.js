

// import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ7qYTyMNFG5JDOmJnWjdWaIm3CqQYfno",
  authDomain: "fir-series-6596e.firebaseapp.com",
  projectId: "fir-series-6596e",
  storageBucket: "fir-series-6596e.firebasestorage.app",
  messagingSenderId: "231253742943",
  appId: "1:231253742943:web:196f4b72d4f4cb8fbe92ea"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



// <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyAJ7qYTyMNFG5JDOmJnWjdWaIm3CqQYfno",
//     authDomain: "fir-series-6596e.firebaseapp.com",
//     projectId: "fir-series-6596e",
//     storageBucket: "fir-series-6596e.firebasestorage.app",
//     messagingSenderId: "231253742943",
//     appId: "1:231253742943:web:196f4b72d4f4cb8fbe92ea"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// </script>