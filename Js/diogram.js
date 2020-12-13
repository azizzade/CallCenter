let diogram = document.getElementById("diogram");

let myDiogram = echarts.init(diogram);

let option = {
    
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['Emma', 'Lucy', 'Amelia', 'Sophia', 'Jessica', 'Lily', 'Emily']
    },
    series: [
        {
            name: 'Zəng sayı',
            color: ['#00B2BE'],
            type: 'bar',
            data: [25, 50, 5, 12, 21, 33, 18]
        }
    ]
};


myDiogram.setOption(option);
