document.getElementById('signout').addEventListener('click', () => {
      console.log('hello');
      auth.signOut().then(function() {
        console.log('sign out!');
      }).catch(function(error) {
    });
    });
	

firebase.auth().onAuthStateChanged(function(user) {
  console.log(user);
  if (user) {
    document.getElementById('signin').style.display='none';
	document.getElementById('signup').style.display='none';
	document.getElementById('signout').style.display='block';
    if(user.email=='admin@gmail.com'){
		console.log('Admin');
		document.getElementById('contactpage').innerHTML='Admin Data';
    
	}else{
      document.getElementById('contactpage').innerHTML='Contact';
    }
  } else {
    // No user is signed in.
	document.getElementById('contactpage').innerHTML='Contact';
	document.getElementById('signin').style.display='block';
	document.getElementById('signup').style.display='block';
	document.getElementById('signout').style.display='none';
  }
});
