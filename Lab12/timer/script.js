var counter = 1;
var word = document.getElementById("value");
function random (){
  word.textContent = counter;
  counter++;
}

setInterval(random,3000);