import React from "react";
import * as S from "./my.style";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";

const Direct = (props) => {
  const onClickChart = () => {
    props.render.setRendered("금액 관리");
  };
  return (
    <S.Direct onClick={onClickChart}>
      <div className="direct-left">
        <div className="direct-logo">
          <AiOutlineBarChart className="chart" />
        </div>
        <div className="direct-desc">
          <h3>차트 보러가기</h3>
          <span>한 눈에 차트를 보고 확인하세요.</span>
        </div>
      </div>
      <AiOutlineRight className="right" />
    </S.Direct>
  );
};

export default Direct;
