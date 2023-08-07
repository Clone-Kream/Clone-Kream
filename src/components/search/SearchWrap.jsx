import React, { useEffect } from "react";
import * as S from "./search.style";
import { propose, popular, recent } from "./search.data";

const SearchWrap = () => {
  /** 추천 검색어 뿌려주는 함수 */
  const getPropose = () => {
    return propose.map((el, index) => <li key={index}>{el}</li>);
  };

  /** 인기 검색어 뿌려주는 함수 */
  const getPopular = () => {
    return popular.map((el, index) => (
      <li key={el.id}>
        <span>{index + 1}</span>
        {el.name}
      </li>
    ));
  };

  /** 최근 본 상품 뿌려주는 함수*/
  const getRecent = () => {
    return recent.map((el, index) => (
      <li key={index}>
        <img src={el.img} alt={el.alt} />
        <span>{el.desc}</span>
      </li>
    ));
  };

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
  return (
    <S.Container>
      <S.SearchBox>
        <input type="text" placeholder="브랜드명, 모델명, 모델번호 등" />
      </S.SearchBox>

      <S.SectionList>
        <S.ProposeBox>
          <S.Label>추천 검색어</S.Label>
          <ul>{getPropose()}</ul>
        </S.ProposeBox>

        <S.PopularBox>
          <div className="popular-meta">
            <S.Label>인기 검색어</S.Label>
            <span>
              {month}.{day} {hour}:00 기준
            </span>
          </div>
          <ul>{getPopular()}</ul>
        </S.PopularBox>

        <S.RecentBox>
          <div className="recent-meta">
            <S.Label>최근 본 상품</S.Label>
            <span>지우기</span>
          </div>
          <ul>{getRecent()}</ul>
        </S.RecentBox>
      </S.SectionList>
    </S.Container>
  );
};

export default SearchWrap;
