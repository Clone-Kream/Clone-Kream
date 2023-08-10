import React from "react";

import ApexChart from "react-apexcharts";

const AreaChart = (props) => {
  console.log(props.changeUnit);
  // AreaChart 정보(비교)
  const comparisonChartInfo = {
    options: {
      chart: {
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        categories: props.changeUnit,
      },
      stroke: {
        curve: "smooth",
        show: true,
        lineCap: "butt",
        colors: ["#4241a4", "#5e87fe", "#fa6e7a"],
        width: 2,
      },
      dataLabels: {
        enabled: false,
      },
      tooltip: {
        enabled: true,
        custom: function ({ series, dataPointIndex }) {
          const colors = ["#4241a4", "#5e87fe", "#fa6e7a"];

          return `<div class="tooltip">
              <div class="header">${props.checkDataPointIndex(
                dataPointIndex + 1
              )}${props.unit}</div>
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
          colors: ["#4d4cac", "#659cff", "#ff808b"],
          useSeriesColors: false,
        },
        markers: {
          width: 15,
          height: 15,
          fillColors: ["#4d4cac", "#659cff", "#ff808b"],
        },
      },

      markers: {
        strokeColor: ["#4d4cac", "#659cff", "#ff808b"],
        size: 2,
        colors: ["#4d4cac", "#659cff", "#ff808b"],
      },
    },
    series: [
      {
        name: "구매",
        data: props.purchaseData,
      },
      {
        name: "판매",
        data: props.saleData,
      },
      {
        name: "수익",
        data: props.revenueData,
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
