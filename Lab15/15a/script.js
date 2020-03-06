var companies = new Array();

companies.push({
  company_name: "Microsoft",
  market_cap: "$381.7 B",
  sales: "$86.6 B",
  profit: "$22.1 B",
  num_of_employees: "128,000"
});

companies.push({
  company_name: "Symetra Financial",
  market_cap: "$2.7 B",
  sales: "$2.2 B",
  profit: "$254.4 M",
  num_of_employees: "1,400"
});

companies.push({
  company_name: "Micron Technology",
  market_cap: "$37.6 B",
  sales: "$16.4 B",
  profit: "$3.0 B",
  num_of_employees: "30,400"
});

companies.push({
  company_name: "F5 Networks",
  market_cap: "$9.5 B",
  sales: "$1.7 B",
  profit: "$311.2 M",
  num_of_employees: "3,484"
});

companies.push({
  company_name: "Expedia",
  market_cap: "$10.8 B",
  sales: "$5.8 B",
  profit: "$398.1 M",
  num_of_employees: "18,210"
});


var contents = "";

const myFunction = (item, index) => {  
   var htmlString = 
        `<tr>
          <th>${item.company_name}</th>
          <td>${item.market_cap}</td>
          <td>${item.sales}</td>
          <td>${item.profit}</td>
          <td>${item.num_of_employees}</td>
        </tr>`
    contents = contents + htmlString;
}



companies.forEach(myFunction);

var tableContents = document.getElementById("tableContents");
tableContents.innerHTML = contents;