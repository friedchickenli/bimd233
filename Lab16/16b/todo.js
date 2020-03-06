//var todos = document.querySelector("ul");

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
   // console.log(lis[1].id);
   // let e = lis[i];
   
   lis[i].addEventListener("mouseover", function(){
      console.log("mouseover");
   });

   lis[i].addEventListener("mouseout", function(){
    console.log("mouseout");
   });

   lis[i].addEventListener("click", function(){
      console.log("clicked");
   });
}

