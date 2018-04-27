$("#payment-gateway").prop("disabled", true);
	$("select").change(function() {
    	if ($('#payment').val() === "Online") {
        	$("#payment-gateway").prop("disabled", false);
    	} else {
        if($('#payment').index() === 0 || $('#payment').val() === "Offline")
            $('#payment-gateway').prop("disabled", true);       
    }	
});

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCD64P6ynVrCLAtDHcKHNnB04zAs93A0z0",
    authDomain: "aikyaweb-fe148.firebaseapp.com",
    databaseURL: "https://aikyaweb-fe148.firebaseio.com",
    projectId: "aikyaweb-fe148",
    storageBucket: "aikyaweb-fe148.appspot.com",
    messagingSenderId: "628936850494"
  };
  firebase.initializeApp(config);
  var databaseRef = firebase.database().ref('Aikya18/');
  var db='/Aikya18/';
  function store()
  {
  var name= $("#name").val();
  var college= $("#college").val();
  var usn= $("#usn").val();
  var e = document.getElementById("events");
  var events = e.options[e.selectedIndex].text;
  var d = document.getElementById("payment");
  var pay = d.options[d.selectedIndex].text;
  var pg = document.getElementById("payment-gateway");
  var paygate = pg.options[pg.selectedIndex].text;
  var oid= $("#oid").val();
 alert(events)
  switch(events)
            {
                case "PHINEAS & FERB’S TECHNO-EXTRAVAGANZA":var databaseRef = firebase.database().ref('TECHNO-EXTRAVAGANZA/');
						   var db='/TECHNO-EXTRAVAGANZA/';
                           break;
                case "CODE BREAKERS-CODING CONTEST":var databaseRef = firebase.database().ref('CODING CONTEST/');
						   var db='/CODING CONTEST/';
                           break;
                case "RICK SANCHEZ’S IDEAPALOOZA":var databaseRef = firebase.database().ref('IDEAPALOOZA/');
                           var db='/IDEAPALOOZA/';
                           break;
                case "HUNT FOR THE INFINTY STONES":var databaseRef = firebase.database().ref('INFINTY STONES/');
                           var db='/INFINTY STONES/';
                           break;
                case "CRISIS ON INFINITE EARTHS":var databaseRef = firebase.database().ref('INFINITE EARTHS/');
                           var db='/INFINITE EARTHS/';
                           break;
                case "MARVEL &amp; DC DEBATE STANDOFF":var databaseRef = firebase.database().ref('DEBATE STANDOFF/');
                           var db='/DEBATE STANDOFF/';
                           break;
                case "COSPLAY DAY":var databaseRef = firebase.database().ref('COSPLAY DAY/');
                           var db='/COSPLAY DAY/';
                           break;
			}
			checkIfUserExists(usn);
			var data = {
				name:name.toUpperCase(),
				usn: usn.toUpperCase(),
                college:college.toUpperCase(),
                mop:pay,
                pgateway:paygate,
                oid:oid
			}	
			var updates = {};
            updates[db + usn] = data;            // + usn makes it a primary key.
            firebase.database().ref().update(updates);
            alert('success');

            reload_page();

  }
  function reload_page() {
    window.location.reload();
   }
   function checkIfUserExists(usn) {
	databaseRef.child("/"+db+"/"+usn).once('value', function(snapshot) {
	  var exists = (snapshot.val() !== null);
	  userExistsCallback(usn, exists);
	});
  }
  function userExistsCallback(usn, exists) {
	if (exists) {
	  alert('user ' + usn + ' exists!');
	} else {
	  alert('user ' + usn + ' does not exist!');
	}
  }