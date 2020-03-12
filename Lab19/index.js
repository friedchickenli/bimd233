$(document).ready(function() {
  const base_url="https://api.weather.gov/stations/";
  const endpoint="/observations/latest";

  // weather update button click
  $('#getwx').on('click', function(e) {
    var mystation = $('input').val();
    var myurl = base_url + mystation + endpoint;
    $('input#my-url').val(myurl);
    
    // clear out any previous data
    $('ul li').each(function() {
      // enter code to clear each li
      $('ul').empty();
      
    });
      
    console.log("Cleared Elements of UL");
    
    // execute AJAX call to get and render data
    $.ajax({
      url: myurl,
      dataType: "json",
      success: function(data) {
        const wxprop = data['properties'];
        var tempC= data['properties']['temperature'].value.toFixed(1);
        var tempF = (tempC * 9/5 + 32).toFixed(1);
        const conversion = 1.94384;
        
        // get wind info and convert m/s to kts

       var windDirection = wxprop['windDirection'].value.toFixed(0);
       var windSpeed = (wxprop['windSpeed'].value * conversion).toFixed(0);
       
        // uncomment this if you want to dump full JSON to textarea
        var myJSON = JSON.stringify(data);
        $('textarea').val(myJSON);

        $('.list-group').append(`
        <li>${data['properties'].rawMessage}</li>
        <li>Current temperature: ${tempC}C ${tempF}F </li>
        <li>Humidity: ${data['properties'].relativeHumidity.value.toFixed(0)}% RH</li>
        <li>Current Wind: ${windDirection} degrees at ${windSpeed}kts</li>
        <p><img src="https://api.weather.gov/icons/land/night/fog?size=medium"</img></p>
        <p>Fog/Mist</p>`)
        $('ul li').attr('class', 'list-group-item');


        
      }
    });
  });
});