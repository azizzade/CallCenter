
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



// let diogram = document.getElementById("diogram");

// let myDiogram = echarts.init(diogram);

//  let option = {
//     dataset: {
//         source: [
//             ['score', 'amount', 'product'],
//             [89.3, 58212, 'Matcha Latte'],
//             [57.1, 78254, 'Milk Tea'],
//             [74.4, 41032, 'Cheese Cocoa'],
//             [50.1, 12755, 'Cheese Brownie'],
//             [89.7, 20145, 'Matcha Cocoa'],
//             [68.1, 79146, 'Tea'],
//             [19.6, 91852, 'Orange Juice'],
//             [10.6, 101852, 'Lemon Juice'],
//             [32.7, 20112, 'Walnut Brownie']
//         ]
//     },
//     grid: {containLabel: true},
//     xAxis: {name: 'amount'},
//     yAxis: {type: 'category'},
//     visualMap: {
//         orient: 'horizontal',
//         left: 'center',
//         min: 10,
//         max: 100,
//         text: ['High Score', 'Low Score'],
//         // Map the score column to color
//         dimension: 0,
//         inRange: {
//             color: ['#D7DA8B', '#E15457']
//         }
//     },
//     series: [
//         {
//             type: 'bar',
//             encode: {
//                 // Map the "amount" column to X axis.
//                 x: 'amount',
//                 // Map the "product" column to Y axis
//                 y: 'product'
//             }
//         }
//     ]
// };

// myDiogram.setOption(option);
