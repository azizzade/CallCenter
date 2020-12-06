var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'container',
      marginBottom: 80
    },
    xAxis: {
      categories: ['10:00', '11:00', '12:00', '13:00', '14::00', '15:00', '16:00', '17:00', '18:00'],
      labels: {
        rotation: 90
      }
    },
  
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]        
    }]
  });