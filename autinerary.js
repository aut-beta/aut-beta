var myVar;
            
function stuff() {
  myVar = setTimeout(showPage, 2000);
}

function loadingScreen() {
    stuff();
}

function showPage() {
  document.getElementsByClassName("loader")[0].style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
    
/***** MODAL STUFF *****/
// Get the modal
//var modals = [document.getElementById("modal1"), document.getElementById("modal2"), document.getElementById("modal3"), document.getElementById("modal4"), document.getElementById("modal5")];
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
    
// Get the button that opens the modal
//var modalbtns = [document.getElementById("modalbtn1"), document.getElementById("modalbtn2"), document.getElementById("modalbtn3"), document.getElementById("modalbtn4"), document.getElementById("modalbtn5")];
var modalbtn1 = document.getElementById("modalbtn1");
var modalbtn2 = document.getElementById("modalbtn2");
var modalbtn3 = document.getElementById("modalbtn3");
var modalbtn4 = document.getElementById("modalbtn4");
var modalbtn5 = document.getElementById("modalbtn5");

// Get the <span> element that closes the modal
//var spans = [document.getElementsByClassName("close")[0], document.getElementsByClassName("close")[1], document.getElementsByClassName("close")[2], document.getElementsByClassName("close")[3], document.getElementsByClassName("close")[4]];
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];


/*var j=0;
for (j=0; j<modals.length; j++){
    modalbtns[j].onclick = function() {
      modals[j].style.display = "block";
    }
    
    spans[j].onclick = function() {
      modals[j].style.display = "none";
    }
    
    window.onclick = function(event) {
      if (event.target == modals[j]) {
        modals[j].style.display = "none";
      }
    }
}*/
    
// When the user clicks the button, open the modal 
/*btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/
    
// When the user clicks the button, open the modal
modalbtn1.onclick = function() {modal1.style.display = "block";}
modalbtn2.onclick = function() {modal2.style.display = "block";}
modalbtn3.onclick = function() {modal3.style.display = "block";}
modalbtn4.onclick = function() {modal4.style.display = "block";}
modalbtn5.onclick = function() {modal5.style.display = "block";}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {modal1.style.display = "none";}
span2.onclick = function() {modal2.style.display = "none";}
span3.onclick = function() {modal3.style.display = "none";}
span4.onclick = function() {modal4.style.display = "none";}
span5.onclick = function() {modal5.style.display = "none";}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {if (event.target == modal1) {modal1.style.display = "none";}}
window.onclick = function(event) {if (event.target == modal2) {modal2.style.display = "none";}}
window.onclick = function(event) {if (event.target == modal3) {modal3.style.display = "none";}}
window.onclick = function(event) {if (event.target == modal4) {modal4.style.display = "none";}}
window.onclick = function(event) {if (event.target == modal5) {modal5.style.display = "none";}}


/***** CHANGE DARK/LIGHT TOGGLE IMAGE *****/
var n = 0;

function changeImage() {
  if ( n == 0 ) {
    document.getElementsByClassName('dlimg')[0].src = "Images/sun.png";
    n = 1;
  }
  else if ( n == 1 ) {
    document.getElementsByClassName('dlimg')[0].src = "Images/moon.png";
    n = 0;
  }
}
    
    
    
/***** DARK/LIGHT TOGGLE *****/
function toggleDarkLight() {
    var body = document.getElementById("body");
    var bCurrentClass = body.className;
    body.className = bCurrentClass == "dark-mode" ? "light-mode" : "dark-mode";
    changeImage();
    
    var graydiv = document.getElementsByClassName("graydiv");
    var graydivdark = document.getElementsByClassName("graydivdark");
    var i=0;
    if (graydiv.length > 0) {
        for (i=0; i<graydiv.length; i++) {
            graydiv.item(i).className = "graydivdark";
        }
    } else if (graydivdark.length > 0) {
        for (i=0; i<graydivdark.length; i++) {
            graydivdark.item(i).className = "graydiv";
        }
    }
}
    
    
    
/***** TRANSITIONING TOPNAV COLOR *****/
window.onscroll = function() {scrollFunction()};  
    
    
    
/***** SCROLL-TO-TOP BUTTON *****/
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("topbtn").style.display = "block";
    //document.getElementById("dltoggle").style.display = "block";
    document.getElementsByClassName('topnav')[0].style.backgroundColor = "white";
    document.getElementsByClassName('topnav')[0].style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    document.getElementsByClassName('dropdown-content')[0].style.backgroundColor = "white";
    document.getElementsByClassName('dropdown-content')[0].style.opacity = "1";
    document.getElementById('logoimg').src = "Logos/Filled/Logo Filled.png";
    document.getElementById('dropimg').src = "Images/drop.jpg";
      
  } else {
    document.getElementById("topbtn").style.display = "none";
    //document.getElementById("dltoggle").style.display = "none";
    document.getElementsByClassName('topnav')[0].style.backgroundColor = "transparent";
    document.getElementsByClassName('topnav')[0].style.boxShadow = "none";
    document.getElementsByClassName('dropdown-content')[0].style.backgroundColor = "white";
    document.getElementsByClassName('dropdown-content')[0].style.opacity = "0.8";
    document.getElementsByClassName('dropdown-content')[0].style.color = "white";
    document.getElementById('logoimg').src = "Logos/Filled/Logo Filled White.png";
    document.getElementById('dropimg').src = "Images/drop2.png";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}