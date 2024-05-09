var a=0;
var b='a boy of fancies';
var speed=100;
window.onload=function typeWriter()
{
if(a<b.length){
  document.getElementById("typing").innerHTML+=b.charAt(a);
  a++;
  setTimeout(typeWriter,speed);
}
}

var today = new Date();
var time = today.getHours();
if((time>=4)&&(time<=11)){
  var Greet=document.getElementById('Time').innerHTML="Good Morning";
}
else if((time>11)&&(time<=16)){
  var Greet=document.getElementById('Time').innerHTML="Good Noon";
}
else if((time>16)&&(time<=17)){
  var Greet=document.getElementById('Time').innerHTML="Good Afternoon";
}
else if((time>17)&&(time<=18)){
  var Greet=document.getElementById('Time').innerHTML="Good Evening";
}
else{
  var Greet=document.getElementById('Time').innerHTML="Good Night";
}


document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(
          "body").style.visibility = "hidden";
      document.querySelector(
          "#loader").style.visibility = "visible";
  } else {
      document.querySelector(
          "#loader").style.display = "none";
      document.querySelector(
          "body").style.visibility = "visible";
  }
};


var header = document.getElementById("carousel");
var btns = header.getElementsByClassName("Btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("_active");
  current[0].className = current[0].className.replace(" _active", "");
  this.className += " _active";
  });
}
var header = document.getElementById("carousel1");
var btns = header.getElementsByClassName("Btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("_active1");
  current[0].className = current[0].className.replace(" _active1", "");
  this.className += " _active1";
  });
}

var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
}


// File: functions/index.js
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.captureIP = functions.https.onRequest((request, response) => {
  const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  const ipsRef = admin.database().ref('ips');
  ipsRef.push({ ip: ip })
    .then(() => response.status(200).send('IP Address captured'))
    .catch(error => response.status(500).send('Error capturing IP'));
});

