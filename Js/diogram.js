let diogram = document.getElementById("diogram");

let myDiogram = echarts.init(diogram);

var option1 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },

  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: "category",
    data: ["Emma", "Lucy", "Amelia", "Sophia", "Jessica", "Lily", "Emily"],
  },
  series: [
    {
      name: "Zəng sayı",
      color: ["#00B2BE"],
      type: "bar",
      data: [25, 50, 5, 12, 21, 33, 18],
    },
  ],
};

// ----


let chart_line = document.getElementById("chart_line");

let myChart = echarts.init(chart_line);

var option2 = {
  xAxis: {
    type: "category",
    data: [
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [100, 150, 200, 250, 300, 400, 450],
      type: "line",
      smooth: true,
    },
  ],
};

myDiogram.setOption(option1);
myChart.setOption(option2);

window.onresize = function () {
  if (myChart != null && myChart != undefined) {
    myChart.resize();
  }
  if (myDiogram != null && myDiogram != undefined) {
    myDiogram.resize();
  }
};

var btns = document.querySelectorAll(".statistic_title button");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (i == 0) {
        chart_line.classList.remove("active");
        diogram.classList.add("active");
        myDiogram.resize();
    }
    else if (i == 1) {
        chart_line.classList.add("active");
        diogram.classList.remove("active");
        myChart.resize();
    }
    
  });
}
