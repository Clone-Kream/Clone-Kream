import React from "react";
import {
  months,
  purchaseYearData,
  revenueYearData,
  saleYearData,
} from "../chart.data";
import ApexChart from "react-apexcharts";

const AreaChart = () => {
  const comparisonChartInfo = {
    options: {
      chart: {
        type: "area",
        height: "60rem",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        //x축
        categories: months,
      },
      stroke: {
        curve: "smooth",
        show: true,
        lineCap: "butt",
        colors: ["#4241a4", "#5e87fe", "#fa6e7a"],
        width: 2,
      },
      dataLabels: {
        // 꼭짓점에 생기는 값
        enabled: false,
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, dataPointIndex }) {
          const colors = ["#4241a4", "#5e87fe", "#fa6e7a"];
          return `<div class="tooltip">
              <div class="header">${dataPointIndex + 1}월</div>
              <div class="item">
              <span class="circle" style="background-color : ${
                colors[0]
              }"></span>
              <span class="title">구매</span>
              <span class="value">${series[0][dataPointIndex]}원</span>
              </div>

              <div class="item">
              <span class="circle" style="background-color : ${
                colors[1]
              }"></span>
              <span class="title">구매</span>
              <span class="value">${series[1][dataPointIndex]}원</span>
              </div>

              <div class="item">
              <span class="circle" style="background-color : ${
                colors[2]
              }"></span>
              <span class="title">구매</span>
              <span class="value">${series[2][dataPointIndex]}원</span>
              </div>
            </div>`;
        },
      },
      fill: {
        colors: ["#4d4cac", "#659cff", "#ff808b"],
        opacity: 0.3,
        type: "solid",
      },
      legend: {
        show: true,
        position: "top",
        fontSize: 15,
        fontWeight: 700,
        labels: {
          // 글씨
          colors: ["#4d4cac", "#659cff", "#ff808b"],
          useSeriesColors: false,
        },
        markers: {
          width: 15,
          height: 15,
          // strokeColor: "#fff",
          fillColors: ["#4d4cac", "#659cff", "#ff808b"],
        },
      },

      markers: {
        // strokeColor: "#3182f6",
        strokeColor: ["#4d4cac", "#659cff", "#ff808b"],
        size: 2,
        colors: ["#4d4cac", "#659cff", "#ff808b"],
      },
    },
    series: [
      {
        name: "구매",
        data: purchaseYearData,
      },
      {
        name: "판매",
        data: saleYearData,
      },
      {
        name: "수익",
        data: revenueYearData,
      },
    ],
  };

  return (
    <>
      <ApexChart
        type="area"
        series={comparisonChartInfo.series}
        options={comparisonChartInfo.options}
      />
    </>
  );
};

export default AreaChart;
