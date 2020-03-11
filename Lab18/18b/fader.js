$(document).ready(function () {
  $('li').css('margin', '10px');
  $('li').attr('id', 'uw');

  $('#p1 li').click(function () {
    console.log("$(this):" + $(this));
    $(this).fadeOut(2000, function () {
      console.log("fadeout complete!")
    });
  });

  $('.btn1').click(function () {
    $('#p2 li').fadeOut(2000, function () {
      console.log("fadeout complete!")
    });
  });
  $('.btn2').click(function(){
    $('#p2 li').fadeIn(2000, function () {
      console.log("fadein complete!")
    });
  })

  $('.btn3').click(function () {
    $('#p3 li').fadeTo("slow", 0.5);
  });

  $('.btn4').click(function(){
    $('#p4 li').fadeToggle(500);
  })
});