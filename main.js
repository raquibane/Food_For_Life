// Firstly, the Firebase configuration
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


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){

 e.preventDefault();
  var name=document.getElementById('name').value;
  var company=document.getElementById('company').value;
  var email=document.getElementById('email').value;
  var phone=document.getElementById('phone').value;
  var message=document.getElementById('message').value;

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
  document.getElementById('contactForm').reset();

}


function createTable() {
  var table = document.getElementById('dataTable');

  var emailsRef = firebase.database().ref("messages");

  emailsRef.on('value', data => {
    var alldata = data.val();
    var keys = Object.keys(alldata);
    
    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = alldata[index].name;
        cell2.innerHTML = alldata[index].email;
        cell3.innerHTML = alldata[index].company;
        cell4.innerHTML = alldata[index].message;
      }
  }, errEmailsData);
}

function errEmailsData(err) {
  console.log("Error!! id: ");
  console.log(err);
}


firebase.auth().onAuthStateChanged(function(user) {
  console.log(user);
  if (user) {
    if(user.email=='admin@gmail.com'){
		console.log('Admin');
      document.getElementById('adminTable').style.display='block';
	  document.getElementById('contactus_form').style.display='none';
      createTable();
    }else{
      document.getElementById('adminTable').style.display='none';
	  document.getElementById('contactus_form').style.display='block';
    }
  } else {
    // No user is signed in.
  }
});
