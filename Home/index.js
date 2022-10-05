firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          // document.getElementById("user_div").style.display = "block";
          // document.getElementById("login_div").style.display = "none";

         // document.getElementById("Profile").style.display = "none";
          var user = firebase.auth().currentUser;
      
          if(user != null){
      
            var email_id = user.email;
            document.getElementById("user_para").innerHTML = "Login as : " + email_id;
            document.getElementById("user_email").innerHTML = "Email is : " + email_id;
            document.getElementById("user_para").innerHTML = "Login as : " + email_id;
            document.getElementById("Welcome").innerHTML = "Welcome " + email_id;
          }
      
        } else {
          // No user is signed in.
      
          document.getElementById("user_div").style.display = "none";
          document.getElementById("login_div").style.display = "block";
          document.getElementById("Profile").style.display = "none";
      
        }
      });
      
      function login(){
      
        var userEmail = document.getElementById("email_field").value;
        var userPass = document.getElementById("password_field").value;
      
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
      
          window.alert("Error : " + errorMessage);
      
          // ...
        });
      
      }
      
      function logout(){
        firebase.auth().signOut();
        document.getElementById("Profile").style.display = "none";
      }



      function Create(){
        
        var userEmail = document.getElementById("email_field").value;
        var userPass = document.getElementById("password_field").value;

        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
      
          window.alert("Error : " + errorMessage);
      
          // ...
        });


        
      }







      












function setLanguageCode() {
  // [START auth_set_language_code]
  firebase.auth().languageCode = 'it';
  // To apply the default browser preference instead of explicitly setting it.
  // firebase.auth().useDeviceLanguage();
  // [END auth_set_language_code]
}

function initializeWithCustomDomain() {
  // [START auth_init_custom_domain]
  firebase.initializeApp({
    apiKey: 'AIzaSyA1btAshbXjWcIWkiPdd7_B0L3tUDBYJ_E',
    // By default, authDomain is '[YOUR_APP].firebaseapp.com'.
    // You may replace it with a custom domain.
    authDomain: '[YOUR_CUSTOM_DOMAIN]'
  });
  // [END auth_init_custom_domain]
}




function Skip() {
  window.location.href = "/Pages/Home2.html"
}


function Admin() {
  window.location.href = "https://banana-nana.github.io/Admin"
}







console.log("Loading...");
