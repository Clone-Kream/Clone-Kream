import React from "react";
import { recent } from "./search.data";
import * as S from "./search.style";

const RecentBox = () => {
  /** 최근 본 상품 뿌려주는 함수*/
  const getRecentProduct = () => {
    return recent.map((el, index) => (
      <li key={index}>
        <img src={el.img} alt={el.alt} />
        <span>{el.desc}</span>
      </li>
    ));
  };
  return (
    <>
      <div className="recent-meta">
        <S.Label>최근 본 상품</S.Label>
        <span>지우기</span>
      </div>
      <ul>{getRecentProduct()}</ul>
    </>
  );
};

export default RecentBox;
