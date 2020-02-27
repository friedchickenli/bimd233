function flightInfo(airline, number, origin, destination, dep_time, arrival_time, arrival_gate){
  this.airline = airline;
  this.number = number;
  this.origin = origin;
  this.destination = destination;
  this.dep_time = dep_time;
  this.arrival_time = arrival_time;
  this.arrival_gate = arrival_gate;

  var dT = new Date(dep_time);
  var aT = new Date(arrival_time);
  var diff = aT.getTime() - dT.getTime();
  this.diff = formatTime(diff);
  // console.log(diff);
  
}

function formatTime(milSec){
  var second = Math.floor( (milSec/1000) % 60);
  var minutes = Math.floor(milSec/(1000*60) %60);
  var hours = Math.floor(milSec/ (1000*60*60));
  
  var convertedTime = [hours, minutes, second];

  convertedTime.map(function(item,index){
    if (item < 10){
      convertedTime[index] = "0" + item;
    }
  })
  
  return convertedTime[0] + ":" + convertedTime[1] + ":" + convertedTime[2];
}

var airOne = new flightInfo ("ASA",'1002','Reagan National (KDCA)', 'San Francisco Intl (KSFO)','February 26, 2020 05:34:00', 'February 26, 2020 08:22:00','D15')

var airTwo = new flightInfo ('ASA','1019','Los Cabos Intl (SJD/MMSD)', 'San Diego Intl(KSAN)','February 26, 2020 03:58:00', 'February 26, 2020 04:48:00','Gate 46')

var airThree = new flightInfo ('ASA','1024','San Francisco Intl (KSFO)', 'John F Kennedy Intl (KJFK)','February 26, 2020 01:47:00', 'February 26, 2020 09:50:00','Gate 1')

var airFour = new flightInfo ('ASA','1047','Austin-Bergstrom Intl (KAUS)', 'San Diego Intl (KSAN)','February 26, 2020 04:29:00', 'February 26, 2020 05:28:00','Gate 24')

var airFive = new flightInfo ('ASA','1049','Boston Logan Intl (KBOS)', 'San Diego Intl (KSAN)','February 26, 2020 06:54:00', 'February 26, 2020 09:49:00','Gate 26')

var flights = [airOne, airTwo, airThree, airFour, airFive];


var contents = "";
for (let i=0; i <flights.length; i++){
   var htmlString = 
        `<tr>
          <th>${flights[i].airline}</th>
          <td>${flights[i].number}</td>
          <td>${flights[i].origin}</td>
          <td>${flights[i].destination}</td>
          <td>${flights[i].dep_time}</td>
          <td>${flights[i].arrival_time}</td>
          <td>${flights[i].arrival_gate}</td>
          <td>${flights[i].diff}</td>
        </tr>`
    contents = contents + htmlString;
}

var tableContents = document.getElementById("tableContents");
tableContents.innerHTML = contents;