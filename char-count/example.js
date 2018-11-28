
function fun() {
   var x = document.getElementById("name").value;
   document.getElementById("exa").innerHTML = x;
   var y = x.length;
   document.getElementById("count").innerHTML = y;
   document.getElementById("occurance").innerHTML ='No of a Occur'+':'+""+countOccurrence ('a');
   document.getElementById("occur").innerHTML ='No of c Occur'+':'+""+countOccurrence ('c');
   document.getElementById("occur1").innerHTML ='No of d Occur'+':'+""+countOccurrence ('d');
   document.getElementById("occur2").innerHTML ='No of b Occur'+':'+""+countOccurrence ('b');
   document.getElementById("occur3").innerHTML ='No of r Occur'+':'+""+countOccurrence ('r');
  
function countOccurrence (char) {
 var count = 0;
 for(var i=0; i<x.length; i++) {
 	if(x[i] === char) {
   	count++;
   }
 }
 return count;
}
}