var room_name = document.getElementById("room_name").value;


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

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");

    window.location = "index.html";
}

function addRoom() {
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room name =  " + Room_names);

   row = "<div class = 'room_name' id =" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" +Room_names+ "</div> <hr>";
   document.getElementById("output").innerHTML += row;
   });
});
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}