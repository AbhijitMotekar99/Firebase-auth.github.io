// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1Le0C9GAdnJdmqKQ4l9l8ZWnMfSh_BDs",
  authDomain: "login-signup-9b105.firebaseapp.com",
  projectId: "login-signup-9b105",
  storageBucket: "login-signup-9b105.appspot.com",
  messagingSenderId: "1097251597949",
  appId: "1:1097251597949:web:e845e5d82bec556a434b14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

//Getting Objects from html
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("email");
var password = document.getElementById("password");

//function for storing  data
window.signup = function(e){
    e.preventDefault();
    var obj = {
        firstname:firstname.value,
        lastname:lastname.value, 
        email:email.value,
        password:password.value,
    }

    createUserWithEmailAndPassword(auth,obj.email,obj.password)
    .then(function(success){
        window.location.href = "Signup_success.html";
    })

    .catch(function(err){
        alert("error" +err)
    })
    console.log(obj)
}; 