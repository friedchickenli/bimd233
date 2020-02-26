function printValues(){
  var radius = Math.floor(Math.random() * Math.floor(20));
  var geometries = calcCircleGeometries(radius);
  
  var area = document.getElementById("area1");
  area.textContent = geometries[0];
    
  var circumference = document.getElementById("cir1");
  circumference.textContent = geometries[1];
  
  var diameter= document.getElementById("dia1");
  diameter.textContent = geometries[2];
}

function calcCircleGeometries(radius){
  const pi = Math.PI;
  var area = pi*radius*radius;
  var circumference=2*pi*radius;
  var diameter=2*radius;
  var geometries = [area,circumference,diameter];
return geometries;

}