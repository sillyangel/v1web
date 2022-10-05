firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  

      document.getElementById("login_div").style.display = "none";
  
      var user = firebase.auth().currentUser;
  
      if(user != null){
  
        var email_id = user.email;
        
  
      }
  
    } else {
      // No user is signed in.

      document.getElementById("login_div").style.display = "block";
  
    }
  });
  
  function login(){
  
    var userEmail = document.getElementById("email_field").value;
    
  
    firebase.auth().signInWithEmailAndPassword(userEmail).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });
  
  }
  
  function logout(){
    firebase.auth().signOut();
  }



  function Create(){
    
    var userEmail = document.getElementById("email_field").value;
  

    firebase.auth().createUserWithEmailAndPassword(userEmail).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
  
      // ...
    });


    
  }







  