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
var config = {
  apiKey: 'AIzaSyCD64P6ynVrCLAtDHcKHNnB04zAs93A0z0',
  authDomain: 'aikyaweb-fe148.firebaseapp.com',
  databaseURL: 'https://aikyaweb-fe148.firebaseio.com',
  projectId: 'aikyaweb-fe148',
  storageBucket: 'aikyaweb-fe148.appspot.com',
  messagingSenderId: '628936850494'
}
firebase.initializeApp(config)
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

  switch (events) {
    case 'PHINEAS & FERB’S TECHNO-EXTRAVAGANZA':
      var databaseRef = firebase.database().ref('TECHNO-EXTRAVAGANZA/')
      var db = '/TECHNO-EXTRAVAGANZA/'
      break
    case 'CODE BREAKERS-CODING CONTEST':
      var databaseRef = firebase.database().ref('CODING CONTEST/')
      var db = '/CODING CONTEST/'
      break
    case 'RICK SANCHEZ’S IDEAPALOOZA':
      var databaseRef = firebase.database().ref('IDEAPALOOZA/')
      var db = '/IDEAPALOOZA/'
      break
    case 'HUNT FOR THE INFINTY STONES':
      var databaseRef = firebase.database().ref('INFINTY STONES/')
      var db = '/INFINTY STONES/'
      break
    case 'CRISIS ON INFINITE EARTHS':
      var databaseRef = firebase.database().ref('INFINITE EARTHS/')
      var db = '/INFINITE EARTHS/'
      break
    case 'MARVEL &amp; DC DEBATE STANDOFF':
      var databaseRef = firebase.database().ref('DEBATE STANDOFF/')
      var db = '/DEBATE STANDOFF/'
      break
    case 'COSPLAY DAY':
      var databaseRef = firebase.database().ref('COSPLAY DAY/')
      var db = '/COSPLAY DAY/'
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
      alert('user ' + usn + ' exists!')
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
      alert('success')
      reload_page()
    }
  })
}
// Firebase end
