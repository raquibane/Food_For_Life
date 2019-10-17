console.log("from login");

document.getElementById('sub-btn').addEventListener('click', function(e) {
  e.preventDefault();
  const name = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  console.log(name, password);
  auth.signInWithEmailAndPassword(name, password).then(() => {
      console.log('login Done');
      // window.location.herf = "index.html";
      window.location.href = "index.html";
  }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
});
