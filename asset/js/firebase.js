
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyCFJVw9CEIoVWWxO4KJtw0LhGXJgjmRk3I",
   authDomain: "evacuateucc.firebaseapp.com",
   projectId: "evacuateucc",
   storageBucket: "evacuateucc.appspot.com",
   messagingSenderId: "150135370003",
   appId: "1:150135370003:web:4464ae4e79ea010de52ae6",
   measurementId: "G-QB7N3J7K1T"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
