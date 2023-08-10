import React, { useState, useEffect, useRef, useMemo } from "react";
import * as S from "../my.style.js";
import { AiFillCalendar, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";

import AreaChart from "./chart/AreaChart.jsx";
import PieChart from "./chart/PieChart.jsx";
import BarChart from "./chart/BarChartN.jsx";
import CardBox from "./CardBox.jsx";
import {
  months,
  purchaseMonthData,
  purchaseWeekData,
  purchaseYearData,
  revenueMonthData,
  revenueWeekData,
  revenueYearData,
  saleMonthData,
  saleWeekData,
  saleYearData,
  weeks,
} from "./chart.data.js";

const Amount = () => {
  // 연간, 월간, 주간
  const [dropValue, setDropValue] = useState("연간");

  // dropdown open 상태
  const [dropOpen, setDropOpen] = useState(false);

  // 구매량, 판매량
  const [title, setTitle] = useState("구매량");

  // 차트 단위
  const [unit, setUnit] = useState("월");

  const [purchaseData, setPurchaseData] = useState(purchaseYearData);
  const [saleData, setSaleData] = useState(saleYearData);
  const [revenueData, setRevenueData] = useState(revenueYearData);

  const dropdownRef = useRef(null);

  /**드롭박스 누르면 열리고 닫히는 함수 */
  const clickDropOpen = (e) => {
    e.stopPropagation();
    setDropOpen((prev) => !prev);
  };

  /**드롭박스의 값을 누르면 값을 변경해주는 함수 */
  const clickDropValue = (e) => {
    setDropValue(e.target.innerText);
  };

  /** 스위치 아이콘 누르면 BarChart 타이틀 변경해주는 함수 */
  const clickChangeTitle = () => {
    if (title === "판매량") {
      setTitle("구매량");
    } else {
      setTitle("판매량");
    }
  };

  // 드롭다운 바깥부분 누르면 닫히도록
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /**드롭다운 컴포넌트 return 해주는 함수 */
  const checkDropOpen = () => {
    return (
      dropOpen && (
        <ul className="time-dropbox_list">
          <li className="list-item" onClick={clickDropValue}>
            연간
          </li>
          <li className="list-item" onClick={clickDropValue}>
            월간
          </li>
          <li className="list-item" onClick={clickDropValue}>
            주간
          </li>
        </ul>
      )
    );
  };

  // 드롭다운에 따라 데이터값 바뀜
  useEffect(() => {
    if (dropValue === "연간") {
      setPurchaseData(purchaseYearData);
      setSaleData(saleYearData);
      setRevenueData(revenueYearData);
    }
    if (dropValue === "월간") {
      setPurchaseData(purchaseMonthData);
      setSaleData(saleMonthData);
      setRevenueData(revenueMonthData);
    }
    if (dropValue === "주간") {
      setPurchaseData(purchaseWeekData);
      setSaleData(saleWeekData);
      setRevenueData(revenueWeekData);
    }
  }, [dropValue]);

  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const date = new Date(year, month, 0).getDate();

  // 현재의 월에 따라 배열을 만들어 주는 함수
  const day = useMemo(() => {
    const dayArray = [];
    for (let i = 1; i <= date; i++) {
      dayArray.push(`${i}일`);
    }
    return dayArray;
  }, [date]);

  // dropValue에 따라 단위(unit)을 바꿔주는 함수
  const changeUnit = useMemo(() => {
    if (dropValue === "연간") {
      setUnit("월");
      return months;
    } else if (dropValue === "월간") {
      setUnit("일");
      return day;
    } else if (dropValue === "주간") {
      setUnit("요일");
      return weeks;
    }
  }, [dropValue, day]);

  /** dropValue에 따라 숫자열을 문자열로 바꾸는 함수 */
  const checkDataPointIndex = (dataPointIndex) => {
    if (dropValue === "주간") {
      switch (dataPointIndex) {
        case 1:
          return "월";
        case 2:
          return "화";
        case 3:
          return "수";
        case 4:
          return "목";
        case 5:
          return "금";
        case 6:
          return "토";
        case 7:
          return "일";
        default:
          return;
      }
    } else {
      return dataPointIndex;
    }
  };

  return (
    <S.AmountContainer>
      <S.TitleLabel>금액관리</S.TitleLabel>
      <S.AmountSection>
        <CardBox
          purchaseData={purchaseData}
          saleData={saleData}
          revenueData={revenueData}
        />
      </S.AmountSection>

      <S.ChartContainer>
        <div className="top">
          <S.SubTitle>{dropValue} 금액 비교</S.SubTitle>
          <div
            className="time-dropbox"
            onClick={clickDropOpen}
            ref={dropdownRef}
          >
            <AiFillCalendar className="calendar" />
            <div className="time-value">{dropValue}</div>
            {dropOpen ? (
              <AiFillCaretUp className="arrow " />
            ) : (
              <AiFillCaretDown className="arrow" />
            )}
            {checkDropOpen()}
          </div>
        </div>

        <S.Chart>
          <AreaChart
            changeUnit={changeUnit}
            checkDataPointIndex={checkDataPointIndex}
            purchaseData={purchaseData}
            saleData={saleData}
            revenueData={revenueData}
            dropValue={dropValue}
            unit={unit}
          />
        </S.Chart>
      </S.ChartContainer>

      <S.AmountBottom>
        <div className="amount-bar">
          <div className="flex">
            <S.SubTitle>{title}</S.SubTitle>
            <FaExchangeAlt onClick={clickChangeTitle} />
          </div>
          <BarChart
            changeUnit={changeUnit}
            unit={unit}
            purchaseData={purchaseData}
            saleData={saleData}
            revenueData={revenueData}
            dropValue={dropValue}
            title={title}
          />
        </div>

        <div className="amount-pie">
          <div className="flex">
            <S.SubTitle>Report</S.SubTitle>
          </div>
          <PieChart
            purchaseData={purchaseData}
            saleData={saleData}
            revenueData={revenueData}
            dropValue={dropValue}
          />
        </div>
      </S.AmountBottom>
    </S.AmountContainer>
  );
};

export default Amount;
