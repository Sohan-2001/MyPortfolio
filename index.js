document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          // Remove 'clicked' class from all links
          navLinks.forEach(link => link.classList.remove('clicked'));
          // Add 'clicked' class to the clicked link
          this.classList.add('clicked');
      });
  });
});

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
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
  } else {
      setTimeout(function() {
          document.querySelector("#loader").style.display = "none";
          document.querySelector("body").style.visibility = "visible";
      }, 5000); // Wait for 5 seconds
  }
};


document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
  } else {
      setTimeout(function() {
          document.querySelector("#loader").style.display = "none";
          document.querySelector("body").style.visibility = "visible";
      }, 5000); // Wait for 5 seconds
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.getElementById("text");
  const cursorElement = document.getElementById("cursor");
  const textToType = "</I Believe In Works Rather Than Words>";
  const typingSpeed = 100; // Speed in milliseconds

  let charIndex = 0;

  function typeCharacter() {
      if (charIndex < textToType.length) {
          textElement.textContent += textToType.charAt(charIndex);
          charIndex++;
          setTimeout(typeCharacter, typingSpeed);
      } else {
          cursorElement.style.display = 'none'; // Hide cursor when done
      }
  }

  typeCharacter();
});


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



