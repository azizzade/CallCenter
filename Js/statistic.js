
let chart_line = document.getElementById("chart_line");

let myChart = echarts.init(chart_line);

let option = {
    xAxis: {
        type: 'category',
        data: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [100, 150, 200, 250, 300, 400, 450],
        type: 'line',
        smooth: true
    }]
};

myChart.setOption(option);



