const firebaseConfig = {
  apiKey: "AIzaSyDxEBjHz29bOK_EjQW3L8H1ysVExp4GzRg",
  authDomain: "project-kwitter-619ea.firebaseapp.com",
  databaseURL: "https://project-kwitter-619ea-default-rtdb.firebaseio.com",
  projectId: "project-kwitter-619ea",
  storageBucket: "project-kwitter-619ea.appspot.com",
  messagingSenderId: "458069401252",
  appId: "1:458069401252:web:85dd1b40294038460a5031"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  //Username and server variables

  var user_name = document.getElementById("user_name");
  var room_name = document.getElementById("room_name");
  function logout() {
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");

    window.location = "index.html";
  }