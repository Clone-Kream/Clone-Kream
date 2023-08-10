import React from "react";
import ApexChart from "react-apexcharts";

const PieChart = (props) => {
  /** 총 구매액 구하는 함수 */
  const getToalPurchase = () => {
    const total = props.purchaseData.reduce((acc, value) => acc + value, 0);
    return total;
  };
  /** 총 판매액 구하는 함수 */
  const getToalSale = () => {
    const total = props.saleData.reduce((acc, value) => acc + value, 0);
    return total;
  };

  /** 총 수익 구하는 함수 */
  const getToalRevenue = () => {
    const total = props.revenueData.reduce((acc, value) => acc + value, 0);
    return total;
  };

  // pie chart 정보
  const pieChartInfo = {
    series: [getToalPurchase(), getToalSale(), getToalRevenue()],
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
