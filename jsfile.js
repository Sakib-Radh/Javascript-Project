function func()
{
 var cl = document.getElementById("sel").value;
 
 document.getElementById("square").style.background = cl;
    
    
}
function funch(){
	var hv = document.getElementById("hov").value;
  var cl = document.getElementById("sel").value;
  	document.getElementById("square").onmouseover = function() {mouseOver()};
    document.getElementById("square").onmouseout = function() {mouseOut()};
    function mouseOver() {
  document.getElementById("square").style.background = hv;
}

function mouseOut() {
  document.getElementById("square").style.background = cl;
}

  

}