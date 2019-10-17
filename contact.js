var firebaseConfig = {
    apiKey: "AIzaSyCmdi3TshpY70pHZ_M5JYeAGpNmluWPjg4",
    authDomain: "food-for-life-ce35a.firebaseapp.com",
    databaseURL: "https://food-for-life-ce35a.firebaseio.com",
    projectId: "food-for-life-ce35a",
    storageBucket: "food-for-life-ce35a.appspot.com",
    messagingSenderId: "959002011903",
    appId: "1:959002011903:web:8bcd5d55631cc8bd93c4ca"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page
  setTimeout(function(){
    document.location.href="index.html";
  },3040);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
