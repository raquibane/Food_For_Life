var keys;
var commentRef = firebase.database().ref("comments");
commentRef.on('value', data => {
  alldata = data.val();

  keys = Object.keys(alldata);
  keys.reverse();
  showComment();
}, errData);


function showComment() {

  for (var i = 0; i < keys.length; i++) {

    var index = keys[i];
    var name = alldata[index].name;
    var comment = alldata[index].comment;

    var scrollbar = document.getElementById('scrollBarForComment');

    var p1 = document.createElement('p');
    p1.setAttribute('class', 'Username');
    var p2 = document.createElement('p');
    p2.setAttribute('class', 'Usercomment');

    p1.innerHTML = name;
    p2.innerHTML = comment;

    var div = document.createElement('div');
    div.setAttribute('class', 'Commentsection');

    div.appendChild(p1);
    div.appendChild(p2);
    scrollbar.appendChild(div);
  }
}

function errData(err) {
  console.log("Error!! id: ");
  console.log(err);
}

function feedbackSubmit() {
  var name = document.getElementById('commenterNameID').value;
  var comment = document.getElementById('inputCommentID').value;
  var commentRef = firebase.database().ref("comments");
  var newEmailRef = commentRef.push();
  newEmailRef.set({
    'name': name,
    'comment': comment
  }).then(e=>{
    document.getElementById('commenterNameID').value="";
    document.getElementById('inputCommentID').value="";
    document.location.reload();
  });
}