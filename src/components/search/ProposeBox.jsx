import React from "react";
import * as S from "./search.style";
import { propose } from "./search.data";

const ProposeBox = () => {
  /** 추천 검색어 뿌려주는 함수 */
  const getProposeProduct = () => {
    return propose.map((el, index) => <li key={index}>{el}</li>);
  };
  return (
    <>
      <S.ProposeBox>
        <S.Label>추천 검색어</S.Label>
        <ul>{getProposeProduct()}</ul>
      </S.ProposeBox>
    </>
  );
};

export default ProposeBox;
