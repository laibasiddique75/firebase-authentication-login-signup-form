import { signInWithEmailAndPassword ,getAuth} from "./firebase.js";


const auth = getAuth();

let  signInEmail = document.getElementById("login-email")
let signInPassword = document.getElementById("login-password")
let loginBtn = document.getElementById("login-btn")


loginBtn.addEventListener("click",()=>{
    if(signInEmail.value.trim() && signInPassword.value.trim()){
        signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          
        });
      

    }
    else{
        console.log("insert your data");
        
    }


  
    
    setTimeout(() => {
      location.href = "profile.html";
    }, 2000);



})