const user = firebase.auth().currentUser;

if (user) {
  console.log("User is : " + user);
  document.getElementById("Usertext").innerHTML = user;
} else {
  document.getElementById("UserText").innerHTML = "no one is logged in";
}





function Github() {
    firebase.auth().signInWithRedirect(provider);
  }
  