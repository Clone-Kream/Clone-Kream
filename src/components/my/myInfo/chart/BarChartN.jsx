import React from "react";
import { months } from "../chart.data";
import ApexChart from "react-apexcharts";

const BarChart = () => {
  const barChartInfo = {
    options: {
      chart: {
        type: "bar",
        height: 60,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 3,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        // formatter: function (val) {
        //   return val + "원";
        // },
        style: {
          fontSize: "10px",
          colors: ["#000"],
        },
      },
      xaxis: {
        categories: months,
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      fill: {
        colors: ["#4d4cac"],
        opacity: 0.7,
      },
    },
    series: [
      {
        name: "구매량",
        data: [
          55000, 45000, 32000, 88000, 71000, 62000, 34000, 0, 74500, 81000,
          125000, 91000,
        ],
      },
    ],
  };

  return (
    <>
      <ApexChart
        type="bar"
        series={barChartInfo.series}
        options={barChartInfo.options}
      />
    </>
  );
};

export default BarChart;
