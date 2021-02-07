var fruits = ["banana","kiwi","mango"];
var res = fruits.length;
var text = " ";
for (i=o;i<fruits.length;i++) {
     text += "<li>"+ fruits[i] + "</li> ";
}
document.getElementById("demo").innerHTML = text;