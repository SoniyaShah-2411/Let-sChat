var firebaseConfig = {
    apiKey: "AIzaSyAqfjKyKDBXVXKaCCStkuP-7fzCPcd48fM",
    authDomain: "let-s-chat-6481e.firebaseapp.com",
    databaseURL: "https://let-s-chat-6481e-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-6481e",
    storageBucket: "let-s-chat-6481e.appspot.com",
    messagingSenderId: "914095708460",
    appId: "1:914095708460:web:2e6ff38ab546f67ed23489"
  };

function addUser() 
{ 
 user_name = document.getElementById("user_name").value;
 localStorage.setItem("user_name", user_name); 
 window.location = "index_room.html"; 
}