//var todos = document.querySelector("ul");

var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++){
   
   lis[i].addEventListener("mouseover", function(){
      console.log("mouseover");
      this.id = 'selected';
      this.textContent = "Focused!"
   });

   lis[i].addEventListener("mouseout", function(){
    console.log("mouseout");
    this.id = 'deselected';
    this.textContent = "Not focused"
   });

   lis[i].addEventListener("click", function(){
      console.log("clicked");
   });
}

