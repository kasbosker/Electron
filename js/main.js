google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {


 var data = google.visualization.arrayToDataTable([
   ['Task', 'Hours per Day'],
   ['Hortensia',     11],
   ['Tomaat',         2],
   ['Lavendel',       2],
   ['Radijsje',       2],
   ['Komkommer',      7]
 ]);

 var options = {
   title: 'Top 5 planten',
   is3D: true,
 };

 var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));

 chart.draw(data, options);
}

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawLineColors);

function drawLineColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'X');
      data.addColumn('number', 'hortensia');
      data.addColumn('number', 'tomaat');
      /*
      data.addColumn('number', 'Lavendel');
      data.addColumn('number', 'komkommer');
      data.addColumn('number', 'radijsje');
      */
    ;
    var jsonData = $.ajax({
          url: "./dummy.json",
          dataType: "json",
          async: false
          }).responseText;

      // Create our data table out of JSON data loaded from server.
      var data = new google.visualization.DataTable(jsonData);

      // Instantiate and draw our chart, passing in some options.
      var options = {
        hAxis: {
          title: 'Time in days'
        },
        vAxis: {
          title: 'ph waarde'
        },
        colors: ['#a52714', '#097138']
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
