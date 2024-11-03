import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


    const firebaseConfig = {
        apiKey: "AIzaSyA4XR1HvKF5SIv-J9VeHVAFeVEN6PzYAfg",
        authDomain: "fir-signuploginform-c0c43.firebaseapp.com",
        projectId: "fir-signuploginform-c0c43",
        storageBucket: "fir-signuploginform-c0c43.firebasestorage.app",
        messagingSenderId: "310275773574",
        appId: "1:310275773574:web:7be3a6d2c85e371bde6d07"
      };

  
  
  const app = initializeApp(firebaseConfig);


  export {getAuth ,  createUserWithEmailAndPassword};