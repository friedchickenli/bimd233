var canvas=document.getElementById("board")
var context=canvas.getContext("2d");
context.lineWidth=3;
context.strokeStyle="#787556";

context.moveTo(0,200);
context.lineTo(600,200);
context.stroke();

context.moveTo(0,400);
context.lineTo(600,400);
context.stroke();

context.moveTo(200,0);
context.lineTo(200,600);
context.stroke();

context.moveTo(400,0);
context.lineTo(400,600);
context.stroke();

var x=100, y=100, radius=90, angle=2*Math.PI;
context.moveTo(x,y);
context.beginPath();
context.arc(x,y,radius, 0, angle);
context.stroke();

context.moveTo(300,300);
context.beginPath();
context.arc(300,300,radius, 0, angle);
context.stroke();

context.moveTo(400,400);
context.lineTo(600,600);
context.stroke();

context.moveTo(600,400);
context.lineTo(400,600);
context.stroke();
