var baseUrl = "https://api.coindesk.com/v1/bpi/currentprice/";
var currency = "USD";
var reqUrl = "";
var graph = null;
var graphData = [];
var index = 1;
var timer = null;

$("#start").click(function() {
  $("#myfirstchart").empty();
  graphData = [];
  currency = $("#currency").val();
  reqUrl = baseUrl + currency + ".json";
  startGraph();
  timer = setInterval(grabData, 2000);
});

$("#stop").click(function() {
  clearInterval(timer);
});

function startGraph() {
  $("#myfirstchart").empty();
  graph = Morris.Line({
    element: "myfirstchart",
    data: graphData,
    xkey: "time",
    ykeys: ["bpi"],
    labels: ["bpi"],
    parseTime: false
  });
}

function grabData() {
  $.ajax({
    url: reqUrl,
    dataType: "json",
    success: function(data) {
      index++;
      var bpi = data.bpi[currency].rate_float;
      graphData.push({
        time: new Date().toLocaleTimeString(),
        bpi: bpi
      });
      graph.setData(graphData);
    }
  });
}