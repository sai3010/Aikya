var i = 0;
var txt = 'DEPARTMENT OF CSE PRESENTS';
var speed = 85;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("htitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();