import React from "react";
import * as S from "./my.style";
import { AiOutlineRight } from "react-icons/ai";

const History = (props) => {
  // props.data의 tab을 배열로 만들어서 map으로 돌리기(리펙토링)

  const colorClass =
    props.data.title === "판매 내역"
      ? "history-tab_number history-tab_green"
      : "history-tab_number history-tab_red";

  const bgColorClass =
    props.data.title === "판매 내역" ? "bg-green" : "bg-white";

  const onClickDetail = () => {
    props.render.setRendered(props.data.title);
  };

  return (
    <S.History>
      <div className="history-top">
        <h3>{props.data.title}</h3>
        <span onClick={onClickDetail}>
          자세히 보기 <AiOutlineRight />
        </span>
      </div>
      <ul className={bgColorClass}>
        <li className="history-tab first">
          <span className="history-tab_title">{props.data.tab1.label}</span>
          <span className={colorClass}>{props.data.tab1.number}</span>
        </li>

        <li className="history-tab">
          <span className="history-tab_title">{props.data.tab2.label}</span>
          <span className="history-tab_number">{props.data.tab2.number}</span>
        </li>

        <li className="history-tab">
          <span className="history-tab_title">{props.data.tab3.label}</span>
          <span className="history-tab_number">{props.data.tab3.number}</span>
        </li>

        <li className="history-tab">
          <span className="history-tab_title">{props.data.tab4.label}</span>
          <span className="history-tab_number">{props.data.tab4.number}</span>
        </li>
      </ul>
    </S.History>
  );
};

export default History;
