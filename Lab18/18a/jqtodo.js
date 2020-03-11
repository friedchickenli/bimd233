$(document).ready(function() {
  $("li").css("id", "uw");


  $("ul").on("mouseover", "li", function() {
    console.log("x:" + $(this).text());
    $(this).attr("id", "uw");
  });

  $("ul").on("mouseleave", "li", function() {
    $(this).attr("id", "uw-gold");
  });

  // reset button click
  $("button").on("click", function(e) {
    $(".list-group").empty();
    $("input").val("");
  });

  // keypress
  $("input").on("keypress", function(e) {
    var code = e.which;
    var char = String.fromCharCode(code);
    console.log('key:' + code + '\tchar code:' + char);
    if (code == 13){
      console.log("helo");
      var result = $("input").val();
      $('.list-group').append(`
      <li>${result}</li>`)
      $("input").val("");

    
    }
    
  });
});
