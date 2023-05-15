
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

const auth = firebase.auth()
const database = firebase.database()

var picpic = "https://firebasestorage.googleapis.com/v0/b/evacuateisad.appspot.com/o/defaultpic%2FProfile%2Fuser%20128.png?alt=media&token=12a93cb2-42c5-4ac7-864c-930a38413fa2" ;
var notiftrue = true ;
var userrolee = "user"
function register (){

   

}


$("#pogi").submit(function(e){
    e.preventDefault();
    email = document.getElementById('email').value
    password = document.getElementById('password1').value
    username = document.getElementById('username').value
    defaultpic = picpic
    notifuser = notiftrue
    userrole = userrolee

   

    auth.createUserWithEmailAndPassword(email, password).then(function(){
        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data = {
            email: email,
            username : username,
            image : defaultpic,
            notificationEnable : notifuser,
            role : userrole
        }

        database_ref.child('Users/'+ user.uid).set(user_data)
    
        
        user.sendEmailVerification()
  .then(() => {
    // Email verification sent!

    Swal.fire({
      title: 'Registered Successfully!',
      icon: 'success',
      text: 'We sent an email verification to your account and wait for the admin approval before you can login',
      confirmButtonText: 'OK',

    }).then((result) => {
      if (result.value) {
        window.location.href ="/";
        // Perform action if user confirms
      } 
    });
  })
  .catch((error) => {
    // An error occurred
  });

    }).catch(function(error){
         var error_code = error.error_code
         var error_message = error.message

         Swal.fire("error", error_message, "error");
    })

    });