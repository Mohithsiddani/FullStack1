// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyApZyWJpA7O9mq5B5njRT_sohtxitpWaZs",
    authDomain: "recycledata-fd235.firebaseapp.com",
    projectId: "recycledata-fd235",
    storageBucket: "recycledata-fd235.appspot.com",
    messagingSenderId: "951509993744",
    appId: "1:951509993744:web:4ae8ba78a89946ad427d95"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  document.getElementById("submit").addEventListener('click',function(e)){
    set(ref(db, 'user/' + document.getElementById("username").value),
 {
    username: document.getfElementById("username").value,
    email: document.getElementById("email").value, 
 });
    alert("Login Sucessfull !");
})
