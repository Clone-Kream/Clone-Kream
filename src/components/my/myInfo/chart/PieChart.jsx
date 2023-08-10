import React from "react";
import ApexChart from "react-apexcharts";

const PieChart = () => {
  const pieChartInfo = {
    series: [50, 80, 40],
    options: {
      chart: {
        type: "donut",
      },
      legend: {
        position: "bottom",
        labels: {
          // 글씨
          colors: ["#4d4cac", "#659cff", "#ff808b"],
          useSeriesColors: false,
        },
        markers: {
          width: 15,
          height: 15,
          strokeColor: "#fff",
          fillColors: ["#4d4cac", "#659cff", "#ff808b"],
        },
      },
      fill: {
        colors: ["#4d4cac", "#659cff", "#ff808b"],
        opacity: 0.7,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "35px",
                fontWeight: 600,
                color: "#659cff",
              },
            },
          },
        },
      },
      labels: ["구매", "판매", "수익"],
      tooltip: {
        enabled: true,
        custom: function ({ series, seriesIndex }) {
          const colorClasses = ["purple", "blue", "pink"];
          return `<div class="arrow_box ${colorClasses[seriesIndex]}">
          <span>${series[seriesIndex]}</span></div>`;
        },
      },
      dataLabels: {
        enabled: true,
      },
    },
  };

  return (
    <>
      <ApexChart
        type="donut"
        series={pieChartInfo.series}
        options={pieChartInfo.options}
      />
    </>
  );
};

export default PieChart;
