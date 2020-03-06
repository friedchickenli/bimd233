var schools = new Array();

schools.push({
  name: 'Oregon',
  conference: '8-1',
  overall: '12-2', logo:'https://ssl.gstatic.com/onebox/media/sports/logos/3hAm47Tasadw7t9cB8K24Q_48x48.png'

});

schools.push({
  name: 'California',
  conference: '4-5',
  overall: '8-5',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Cal_logo.png'

});

schools.push({
  name: 'Washington',
  conference: '4-5',
  overall: '8-5',
  logo: 'https://s3.amazonaws.com/static.pac-12.com/images/logos/washington-logo.png'

});

schools.push({
  name: 'Oregon State',
  conference: '4-5',
  overall: '5-7', logo:'https://ssl.gstatic.com/onebox/media/sports/logos/yRfBxcPyYsr5xQwxK_eryg_48x48.png'

});

schools.push({
  name: 'Washington State',
  conference: '3-6',
  overall: '6-7',
  logo:'https://cdn.bleacherreport.net/images/team_logos/328x328/washington_state_football.png'

});

schools.push({
  name: 'Stanford',
  conference: '3-6',
  overall: '4-8',
  logo:'https://x.pac-12.com/sites/default/files/styles/medium/public/logo-stanford-color-2019.png?itok=zxI_erOF'

});



var rows = document.querySelectorAll('.row');




function renderData(item,i){
  // console.log(item,i);
  // console.log(currentRow.innerHTML)
  var content = `
 <div class="col-sm">
  <img src="${item.logo}"/> ${item.name}
</div>

<div class="col-sm center">
  ${item.conference}
</div>

<div class="col-sm center">
  ${item.overall}
</div>
`;
  
 rows[i+1].innerHTML = content;
  console.log(content);
  
}

function myFunction(){
  schools.forEach(renderData);

  

}

// select the second element that matches a list item with CSS style selector <li class= 'bar'>, then traverse to the previous and next sibilings of this first matched element.
// var element = document.querySelector('li.bar[1]');
// var ps = element.previous.Sibling;
// var ns = element.nextSibiling;