
  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBRMdXxj8rJoLEHUSSwBG5Asbqmt-7Cj1c",
    authDomain: "test-6c152.firebaseapp.com",
    databaseURL: "https://test-6c152.firebaseio.com",
    projectId: "test-6c152",
    storageBucket: "",
    messagingSenderId: "19334872917",
    appId: "1:19334872917:web:f1d9e2856f5df7f019f9dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
const db = firebase.firestore();