import { getAuth , createUserWithEmailAndPassword} from "./firebase.js";


const auth = getAuth();




let siginUpBtn = document.getElementById("signup-btn");
let signupEmail = document.getElementById("signup-email");
let signupPassword = document.getElementById("signup-password");


 
siginUpBtn.addEventListener("click",()=>{
    if(signupEmail.value.trim() && signupPassword.value.trim()){
        createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          switch (errorMessage){
           case "Firebase: Error (auth/email-already-in-use).":
            console.log("use other email");
            break;
            
          }
          
        });

    }
    else{
        console.log("insert your data");
        
    }

    console.log(error);
    
    
     location.href = "login.html"
    
})

