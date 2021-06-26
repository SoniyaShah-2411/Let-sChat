var firebaseConfig = {
    apiKey: "AIzaSyAqfjKyKDBXVXKaCCStkuP-7fzCPcd48fM",
    authDomain: "let-s-chat-6481e.firebaseapp.com",
    databaseURL: "https://let-s-chat-6481e-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-6481e",
    storageBucket: "let-s-chat-6481e.appspot.com",
    messagingSenderId: "914095708460",
    appId: "1:914095708460:web:2e6ff38ab546f67ed23489"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
   function addRoom() 
  {
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
   purpose:"adding room name"
   });
   localStorage.setItem("room_name",room_name);
   window.location = "index_page.html";
  }

  function getData()
{
 firebase.database().ref("/").on('value',function(snapshot)
 {
 document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot)
 {
 childKey = childSnapshot.key;
 Room_names = childKey;
 console.log("Room Name- " + Room_names);
 row = "<div class='room_name' id="+Room_names +" onclick ='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>" ;
 document.getElementById("output").innerHTML += row;
});
});
}
getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location = "index_page.html";
}

  function addUser() 
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose :"adding user"
    })
}

function logout() 
{ 
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location.replace("index.html");
}
