var firebaseConfig = {
    apiKey: "AIzaSyAexoKQd7Mi6Of7cLSLAH7vq7Ymq2ILZPQ",
    authDomain: "evacuateisad.firebaseapp.com",
    databaseURL: "https://evacuateisad-default-rtdb.firebaseio.com",
    projectId: "evacuateisad",
    storageBucket: "evacuateisad.appspot.com",
    messagingSenderId: "880708938906",
    appId: "1:880708938906:web:be4eaf69a49e0b5d99c323",
    measurementId: "G-EKMCWF5M2Z"
};

 firebase.initializeApp(firebaseConfig);

var database = firebase.database();
    
var ref = database.ref("Users");

var dataRefsite = database.ref("Users");



var passemail,passpass;



$("#loginData").submit(function(e){
    e.preventDefault();
    console.log("pogi q");
    
    var count1 = 0;
    let emailtxt = document.getElementById('email').value;
    var password1 = document.getElementById('password').value;
   
   

    var check = 0;
    var check1 = 1;
    var checkroleSuperAdmin = "superAdmin";
    var checkroleSubAdmin = "Admin"
    var role;
   
dataRefsite.once("value", function(snapshot) {
    // Keep track of the number of matching children
    // Iterate through the children of the snapshot

   
    snapshot.forEach(function(childSnapshot) {
      // Get the value of the child
      var childEmail = childSnapshot.val().email;
      var childRole = childSnapshot.val().role;
      var email1 = emailtxt;
  
      // Check if the value matches
      if ((childEmail === email1) && (childRole === checkroleSubAdmin)) {
    

        check = 1;

      
      }

      else if ((childEmail === email1) && (childRole === checkroleSuperAdmin )) {
       

        check = 2;

      
      }

     
    

    });

    

    check1 = check;
 console.log(check)

    if (check1 === 1){
      passemail = emailtxt;
      passpass = password1;
   
      
      loginyeah();
      
    }

    else if (check1 === 2){
      passemail = emailtxt;
      passpass = password1;
      loginyeah2();
    }

    else {
      Swal.fire("Login Failed!", "Invalid username or password", "error");
    }
    

    });

  
    });


    function loginyeah(){

        
     
    
        firebase.auth().signInWithEmailAndPassword(passemail, passpass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;


        if (user.emailVerified) {
          Swal.fire({
            title: 'Login Successfully!',
            text : 'Welcome Admin',
            icon: 'success',
            confirmButtonText: 'OK',
  
          }).then((result) => {
            if (result.value) {
              window.location.href ="subAddashboard.html";
              // Perform action if user confirms
            } 
          });
        } else {
          // Display an error message to the user
          Swal.fire("Login Failed!", "Please verify your email first!", "error");
          // Send a verification email to the user's email address
           user.sendEmailVerification();
          return
        }

      
        // ...
      })
      .catch((error) => {
        Swal.fire("Login Failed!", "Invalid username or password", "error");
        const errorCode = error.code;
        const errorMessage = error.message;
   });
    }


    function loginyeah2(){

        
     
    
      firebase.auth().signInWithEmailAndPassword(passemail, passpass)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;


      if (user.emailVerified) {
        Swal.fire({
          title: 'Login Successfully!',
          text : 'Welcome Super Admin',
          icon: 'success',
          confirmButtonText: 'OK',

        }).then((result) => {
          if (result.value) {
            window.location.href ="superAddashboard.html";
            // Perform action if user confirms
          } 
        });
      } else {
        // Display an error message to the user
        Swal.fire("Login Failed!", "Please verify your email first!", "error");
        // Send a verification email to the user's email address
         user.sendEmailVerification();
        return
      }

    
      // ...
    })
    .catch((error) => {
      Swal.fire("Login Failed!", "Invalid username or password", "error");
      const errorCode = error.code;
      const errorMessage = error.message;
 });
  }