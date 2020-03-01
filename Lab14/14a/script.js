// var highTemp = ['81','63','66','73','81'];

var highTemp = [81,63,66,73,81];

var lowTemp = [54,50,48,46,52];

for (i = 0; i < highTemp.length; i++){
  document.getElementById("high").innerHTML += " " + highTemp[i] ;
  
  document.getElementById("low").innerHTML += " " + lowTemp[i] ;
  
}

function accuTemp(total, num) {
  return total + num;
  
}
document.getElementById("highAvg").innerHTML = (highTemp.reduce(accuTemp))/(highTemp.length);
document.getElementById("lowAvg").innerHTML = (lowTemp.reduce(accuTemp))/(lowTemp.length);


var day = [0,0,0,0,0,0,0,0];
var day1 = [64,54,70,55,81,73,75,61];
var day2 = [59,50,54,50,63,55,59,50];
var day3 = [50,48,57,50,66,61,66,55];
var day4 = [55,46,64,50,73,70,73,61];
var day5 = [57,52,73,54,81,77,75,63];
// var totalDays = [day1,day2,day3,day4,day5];


  function accuTemp1(total, num) {
  return (total + num);
  }


function addAvgs(){
return ((day1.reduce(accuTemp1))/(day.length) + (day2.reduce(accuTemp1))/(day.length) + (day3.reduce(accuTemp1))/(day.length) + (day4.reduce(accuTemp1))/(day.length) + (day5.reduce(accuTemp1))/(day.length))/5;
}

document.getElementById("5dayAvg").innerHTML = addAvgs();