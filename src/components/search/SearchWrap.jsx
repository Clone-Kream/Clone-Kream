import React, { useState } from "react";
import * as S from "./search.style";
import { AiOutlineRollback } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ProposeBox from "./ProposeBox";
import PopularBox from "./PopularBox";
import RecentBox from "./RecentBox";
import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";

const SearchWrap = () => {
  const navigate = useNavigate();

  const [searchHistory, setSearchHistory] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const onKeyUpValue = (e) => {
    if (e.key === "Enter") {
      setSearchHistory([...searchHistory, inputValue]);
      setInputValue("");
    }
  };

  const clickSearchOne = (e) => {
    e.stopPropagation();
    const elValue = e.currentTarget.querySelector("span").textContent;
    if (searchHistory.length !== 0) {
      const filteredList = searchHistory.filter((el) => el !== elValue);
      console.log(filteredList);
      setSearchHistory([...filteredList]);
    }
  };

  const mapSearchHistory = () => {
    if (searchHistory.length !== 0) {
      return searchHistory.map((el, index) => (
        <div className="search-item" key={index} onClick={clickSearchOne}>
          <span>{el}</span>
          <AiOutlineClose />
        </div>
      ));
    }
  };

  const removeSearchHistory = () => {
    setSearchHistory([]);
  };

  return (
    <S.Container>
      <S.SearchBox>
        <input
          type="text"
          placeholder="브랜드명, 모델명, 모델번호 등"
          value={inputValue}
          onChange={onChangeInputValue}
          onKeyUp={onKeyUpValue}
        />
        <AiFillCloseCircle
          className="close"
          onClick={() => setInputValue("")}
        />
      </S.SearchBox>

      <S.HistorySearch>
        {searchHistory.length !== 0 && (
          <>
            <div className="history-meta">
              <S.Label>최근 본 상품</S.Label>
              <span onClick={removeSearchHistory}>지우기</span>
            </div>
            <div className="search-list">{mapSearchHistory()}</div>
          </>
        )}
      </S.HistorySearch>

      <ProposeBox />

      <S.SectionList>
        <S.PopularBox>
          <PopularBox />
        </S.PopularBox>

        <S.RecentBox>
          <RecentBox />
        </S.RecentBox>
      </S.SectionList>

      <AiOutlineRollback className="back" onClick={() => navigate("/")} />
    </S.Container>
  );
};

export default SearchWrap;
