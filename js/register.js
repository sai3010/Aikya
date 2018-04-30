$('#payment-gateway').prop('disabled', true)
$('select').change(function () {
  if ($('#payment').val() === 'Online') {
    $('#payment-gateway').prop('disabled', false)
  } else {
    if ($('#payment').index() === 0 || $('#payment').val() === 'Offline')
      $('#payment-gateway').prop('disabled', true)
  }
})

// Initialize Firebase 
var bucket = {
  apiKey: "AIzaSyCbBbveKyGod8a8rq0WSYXbLH-eoGPLLjA",
  authDomain: "aikya-18.firebaseapp.com",
  databaseURL: "https://aikya-18.firebaseio.com",
  projectId: "aikya-18",
  storageBucket: "aikya-18.appspot.com",
  messagingSenderId: "333547296250"
};
firebase.initializeApp(bucket);
// Firebase start
var databaseRef = firebase.database().ref('Aikya18/')
var db = '/Aikya18/'
var name, college, usn, events, pay, paygate, oid

function store () {
  name = $('#name').val()
  college = $('#college').val()
  usn = $('#usn').val()
  e = document.getElementById('events')
  events = e.options[e.selectedIndex].text
  d = document.getElementById('payment')
  pay = d.options[d.selectedIndex].text
  pg = document.getElementById('payment-gateway')
  paygate = pg.options[pg.selectedIndex].text
  oid = $('#oid').val()

  // alert(events)
  switch (events) {
    // case 'JUNKYARD WARS':
    //   var databaseRef = firebase.database().ref('JUNKYARD WARS/')
    //   var db = '/JUNKYARD WARS/'
    //   break
    case 'CODE BREAKERS-CODING CONTEST':
      var databaseRef = firebase.database().ref('CODING CONTEST/')
      var db = '/CODING CONTEST/'
      break
    // case 'RICK SANCHEZ IDEATHON-PALOOZA':
    //   var databaseRef = firebase.database().ref('IDEATHON-PALOOZA/')
    //   var db = '/IDEATHON-PALOOZA/'
    //   break
    case 'HUNT FOR THE INFINTY STONES':
      var databaseRef = firebase.database().ref('INFINTY STONES/')
      var db = '/INFINTY STONES/'
      break
    case 'CRISIS ON INFINITE EARTHS':
      var databaseRef = firebase.database().ref('INFINITE EARTHS/')
      var db = '/INFINITE EARTHS/'
      break
    case 'MARVEL & DC SHOWDOWN (DEBATE)':
      var databaseRef = firebase.database().ref('DEBATE STANDOFF/')
      var db = '/DEBATE STANDOFF/'
      break
    case 'ANIMESIA':
      var databaseRef = firebase.database().ref('ANIMESIA/')
      var db = '/ANIMESIA/'
      break
    case 'FIFA-18':
      var databaseRef = firebase.database().ref('FIFA-18/')
      var db = '/FIFA-18/'
      break
  }
  checkIfUserExists(usn, db)
}

function reload_page () {
  window.location.reload()
}

function checkIfUserExists (usn, db) {
  var databaseRef = firebase.database().ref(db)
  databaseRef.child(usn).once('value', function (snapshot) {
    var exists = (snapshot.val() !== null)
    if (exists) {
      alert('user ' + usn + ' exists!'+'Please contact coordinators')
    } else {
      var data = {
        name: name.toUpperCase(),
        usn: usn.toUpperCase(),
        college: college.toUpperCase(),
        mop: pay,
        pgateway: paygate,
        oid: oid
      }
      var updates = {}
      updates[db + usn] = data; // + usn makes it a primary key.
      firebase.database().ref().update(updates)
      alert('You have sucessfully registered for the event!')
      reload_page()
    }
  })
}
// Firebase end
var user;
function signin()
{
  var provider = new firebase.auth.GoogleAuthProvider();
  if(user){
    app(user);
  }
  else{
  firebase.auth().signInWithPopup(provider).then(function(result) {
// This gives you a Google Access Token. You can use it to access the Google API.
var token = result.credential.accessToken;
// The signed-in user info.
user = result.user;
console.log(user.displayName);
window.location.href="register.html";
// ...
}).catch(function(error) {
// Handle Errors here.
var errorCode = error.code;
var errorMessage = error.message;
// The email of the user's account used.
var email = error.email;
// The firebase.auth.AuthCredential type that was used.
var credential = error.credential;
// ...
});
}
}
function soon()
{
    alert("Coming Soon")
}