var firebaseConfig = {
  apiKey: "AIzaSyCbw4reqJeLyYyLyb8pEkrxwkWIFR624k4",
  authDomain: "project-test-ae6bf.firebaseapp.com",
  databaseURL: "https://project-test-ae6bf-default-rtdb.firebaseio.com",
  projectId: "project-test-ae6bf",
  storageBucket: "project-test-ae6bf.appspot.com",
  messagingSenderId: "918130248062",
  appId: "1:918130248062:web:f924464d00ab3afc32cb2f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
user_name=document.getElementById("user_name").value;
     firebase.database().ref("/").child(user_name).update({ 
         purpose : "adding user"
          });
}