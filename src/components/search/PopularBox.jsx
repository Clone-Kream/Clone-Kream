import React, { useEffect } from "react";
import * as S from "./search.style";
import { popular } from "./search.data";

const PopularBox = () => {
  /** 월,일,시 구해줘서 object로 return 해주는 함수 */
  const getNowTime = () => {
    const month = new Date().getMonth() + 1;
    const formatMonth = month.toString().padStart(2, 0);
    const day = new Date().getDate().toString().padStart(2, 0);
    const hour = new Date().getHours().toString().padStart(2, 0);
    return { formatMonth, day, hour };
  };
  useEffect(() => {
    getNowTime();
  }, []);

  const { formatMonth: month, day, hour } = getNowTime();

  /** 인기 검색어 뿌려주는 함수 */
  const getPopularProduct = () => {
    return popular.map((el, index) => (
      <li key={el.id}>
        <span>{index + 1}</span>
        {el.name}
      </li>
    ));
  };
  return (
    <>
      <div className="popular-meta">
        <S.Label>인기 검색어</S.Label>
        <span>
          {month}.{day} {hour}:00 기준
        </span>
      </div>
      <ul>{getPopularProduct()}</ul>
    </>
  );
};

export default PopularBox;
