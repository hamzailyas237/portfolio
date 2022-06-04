
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0mR4YPXKJ-7epkD33Ev-X-o6NouvYVdo",
  authDomain: "hamzailyas-portfolio-237.firebaseapp.com",
  projectId: "hamzailyas-portfolio-237",
  storageBucket: "hamzailyas-portfolio-237.appspot.com",
  messagingSenderId: "504424623182",
  appId: "1:504424623182:web:c058d20da0aab0f02f271f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

let login = loginBtn.addEventListener('click', () => {
  let loginEmail = document.getElementById('loginEmail')
  let loginPassword = document.getElementById('loginPassword')
  // console.log(loginEmail.value)
  // console.log(loginPassword.value)
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      const user = userCredential.user;
      location.href = ("../dashboard/index.html")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  loginEmail.value = ""
  loginPassword.value = ""
})



