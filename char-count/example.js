
 
function fun() {


var str = document.getElementById("name").value;
var y = str.length;
document.getElementById("length").innerHTML ='Given Sting Length is '+':'+""+ y;
var letters = new Object;
var finalletters = new Object;
//loop, figure it out
for(x = 0, length = str.length; x < length; x++) {
	var l = str.charAt(x);
  if(isNaN(letters[l]) ) {
    letters[l] = 1;

    finalletters[l] = str[x];
  }
  else
  {
    letters[l] = letters[l] + 1;
  }

}


//output count!
var out = "";
document.getElementById("repeat").innerHTML = 'Repeated Characters in Given String Are '+':';
for(key in finalletters) {
	   out =letters[key];

 document.getElementById("repeat").innerHTML +=  ""+key+ ' = ' + out + ", ";
}

 }
