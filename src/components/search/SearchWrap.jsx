import React from "react";
import * as S from "./search.style";
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProposeBox from "./ProposeBox";
import PopularBox from "./PopularBox";
import RecentBox from "./RecentBox";

const SearchWrap = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.SearchBox>
        <input type="text" placeholder="브랜드명, 모델명, 모델번호 등" />
      </S.SearchBox>

      <ProposeBox />

      <S.SectionList>
        <S.PopularBox>
          <PopularBox />
        </S.PopularBox>

        <S.RecentBox>
          <RecentBox />
        </S.RecentBox>
      </S.SectionList>

      <AiOutlineRollback onClick={() => navigate("/")} />
    </S.Container>
  );
};

export default SearchWrap;
