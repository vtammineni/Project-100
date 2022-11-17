const firebaseConfig = {
      apiKey: "AIzaSyCkZ6NetVBkJ87wOt6gpsIt1Pn9v28c9Kc",
      authDomain: "kwitter-f2ce5.firebaseapp.com",
      projectId: "kwitter-f2ce5",
      storageBucket: "kwitter-f2ce5.appspot.com",
      messagingSenderId: "62722500544",
      appId: "1:62722500544:web:66b0b24d36ea256bbb8a25"
    };
      //ADD YOUR FIREBASE LINKS HERE
      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      function addRoom(){
            room_name = document.getElementById("room_name").value;
            firebase.database().ref ("/").child(room_name).update({
                  purpuse : "Adding Room Name..."
            });
            localStorage.setItem("room_name" , room_name);
            window.location = "kwitter_page.html";//Hi
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' ># " + Room_names + "</div><hr>";
      document.getElementById ("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

















































































