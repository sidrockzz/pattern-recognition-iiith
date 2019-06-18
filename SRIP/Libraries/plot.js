google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['X-Axis', 'Y-Axis'],
          [ 8,      12],
          [ 4,      5.5],
          [ 11,     14],
          [ 4,      5],
          [ 3,      3.5],
          [ 6.5,    7]
        ]);

        var options = {
          title: 'Mean',
          hAxis: {title: 'X-Axis', minValue: -10, maxValue: 10},
          vAxis: {title: 'Y-Axis', minValue: -10, maxValue: 10},
          legend: 'none'
        };

        var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

        chart.draw(data, options);
  }
