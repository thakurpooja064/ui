var fruits = ["banana","kiwi","mango", "pineapple", "guava"];
// var res = fruits.length;
var text = " ";
for (i=0;i<fruits.length;i++) {
    text += "<li>"+ fruits[i] + "</li> ";
}
document.getElementById("demo").innerHTML = text;