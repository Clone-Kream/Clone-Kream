import React from "react";
import * as S from "../my.style.js";
import {
  AiFillCreditCard,
  AiFillDollarCircle,
  AiFillFund,
} from "react-icons/ai";
import ApexChart from "react-apexcharts";
import {
  saleYearData,
  purchaseYearData,
  revenueYearData,
  month,
} from "../my.data.js";

const Amount = (props) => {
  const chartInfo = {
    options: {
      chart: {
        type: "area",
        height: "60rem",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        //x축
        categories: month,
      },
      stroke: {
        curve: "smooth",
        show: true,
        lineCap: "butt",
        colors: ["#4241a4", "#5e87fe", "#fa6e7a"],
        width: 3,
      },
      dataLabels: {
        // 꼭짓점에 생기는 값
        enabled: false,
      },
      // title: {
      //   text: "title",
      //   align: "left",
      //   margin: 40,
      //   style: {
      //     fontSize: "2.4rem",
      //     fontWeight: "bold",
      //     color: "#263238",
      //   },
      // },
      // subtitle: {
      //   text: "subtitle",
      //   align: "center",
      //   margin: 10,
      //   style: {
      //     fontSize: "12px",
      //     fontWeight: "normal",
      //     fontFamily: undefined,
      //     color: "#9699a2",
      //   },
      // },
      tooltip: {
        x: {
          show: true,
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
        fontSize: "1.8rem",
        fontWeight: 700,
        // labels: {
        //   colors: ["#4d4cac", "#659cff", "#ff808b"],
        // },
      },
      labels: ["Apples", "Oranges", "Berries"],

      markers: {
        size: 1,
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

  // console.log(chartInfo.options);

  return (
    <S.AmountContainer>
      <S.TitleLabel>금액관리</S.TitleLabel>
      <S.AmountSection>
        <div className="purchase amount-card">
          <div className="svg-box card">
            <AiFillCreditCard />
          </div>
          <div className="price-info-box">
            <div className="total-price">650,000 원</div>
            <div className="title">총 구매액</div>
          </div>
        </div>
        <div className="sale amount-card">
          <div className="svg-box cash">
            <AiFillDollarCircle />
          </div>
          <div className="price-info-box">
            <div className="total-price">250,000 원</div>
            <div className="title">총 판매액</div>
          </div>
        </div>
        <div className="revenue amount-card">
          <div className="svg-box fund">
            <AiFillFund />
          </div>
          <div className="price-info-box">
            <div className="total-price">50,000 원</div>
            <div className="title">총 수익</div>
          </div>
        </div>
      </S.AmountSection>

      <S.Chart>
        <ApexChart
          type="area"
          series={chartInfo.series}
          options={chartInfo.options}
        />
      </S.Chart>

      {/* <S.Chart>
        chart
        <div className="time-dropbox">
          <div className="logo"></div>
          <div className="time-dropbox_list">
            <div className="list-item">연간</div>
            <div className="list-item">월간</div>
            <div className="list-item">주간</div>
          </div>
        </div>
      </S.Chart>

      <S.AmountBottom className="amount-bottom">
        <div className="amount-daily">주간</div>
        <div className="amount-yearly">월간</div>
      </S.AmountBottom> */}
    </S.AmountContainer>
  );
};

export default Amount;
