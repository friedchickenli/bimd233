var bmwE90 = ["BMW E90", "BMW", "E90", "2020", "$65,900"];
var bmwE91 = ["BMW E91", "BMW", "E91", "2020", "$73,900"];
var bmwE92 = ["BMW E92", "BMW", "E92", "2020", "$40,750"];
var bmwE93 = ["BMW E93", "BMW", "E93", "2013", "$13,359"];
var bmwM4 = ["BMW M4", "BMW", "M4", "2020", "$69,150"];
var cars =[bmwE90, bmwE91, bmwE92, bmwE93, bmwM4]



var contents = "";
for (let i=0; i <cars.length; i++){
   var htmlString = 
        `<tr>
          <th>${cars[i][0]}</th>
          <td>${cars[i][1]}</td>
          <td>${cars[i][2]}</td>
          <td>${cars[i][3]}</td>
          <td>${cars[i][4]}</td>
        </tr>`
    contents = contents + htmlString;
}

var tableContents = document.getElementById("tableContents");
tableContents.innerHTML = contents;