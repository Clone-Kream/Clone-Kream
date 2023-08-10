import React from "react";
import ApexChart from "react-apexcharts";

const BarChart = (props) => {
  const checkData =
    props.title === "구매량" ? props.purchaseData : props.saleData;

  // barChartInfo
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
        style: {
          fontSize: "10px",
          colors: ["#000"],
        },
      },
      xaxis: {
        categories: props.changeUnit,
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
        colors: props.title === "구매량" ? ["#4d4cac"] : ["#5e87fe"],
        opacity: 0.7,
      },
    },
    series: [
      {
        name: `${props.title === "구매량" ? "구매량" : "판매량"}`,
        data: checkData,
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
