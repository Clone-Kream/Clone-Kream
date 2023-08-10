import React, { useState, useEffect, useRef } from "react";
import * as S from "../my.style.js";
import { AiFillCalendar, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaExchangeAlt } from "react-icons/fa";

import AreaChart from "./chart/AreaChart.jsx";
import PieChart from "./chart/PieChart.jsx";
import BarChart from "./chart/BarChartN.jsx";
import CardBox from "./CardBox.jsx";

const Amount = (props) => {
  // console.log(props);
  const [dropValue, setDropValue] = useState("연간");

  const [dropOpen, setDropOpen] = useState(false);

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

  const [title, setTitle] = useState("구매량");

  /** 스위치 아이콘 누르면 BarChart 타이틀 변경해주는 함수 */
  const clickChangeTitle = () => {
    if (title === "판매량") {
      setTitle("구매량");
    } else {
      setTitle("판매량");
    }
  };

  // console.log(new Date("2023-07-28").getDate());

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

  return (
    <S.AmountContainer>
      <S.TitleLabel>금액관리</S.TitleLabel>
      <S.AmountSection>
        <CardBox />
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
              <AiFillCaretUp className="arrow" />
            ) : (
              <AiFillCaretDown className="arrow" />
            )}
            {checkDropOpen()}
          </div>
        </div>

        <S.Chart>
          <AreaChart />
        </S.Chart>
      </S.ChartContainer>

      <S.AmountBottom>
        <div className="amount-bar">
          <div className="flex">
            <S.SubTitle>{title}</S.SubTitle>
            <FaExchangeAlt onClick={clickChangeTitle} />
          </div>
          <BarChart />
        </div>

        <div className="amount-pie">
          <div className="flex">
            <S.SubTitle>Report</S.SubTitle>
          </div>
          <PieChart />
        </div>
      </S.AmountBottom>
    </S.AmountContainer>
  );
};

export default Amount;
