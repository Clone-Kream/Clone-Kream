import React from "react";
import { useState } from "react";
import MyInfo from "./MyInfo";
import Purchase from "./shoppingInfo/Purchase";
import Sale from "./shoppingInfo/Sale";
import Interest from "./shoppingInfo/Interest";
import Amount from "./myInfo/Amount";
import Profile from "./myInfo/Profile";
import * as S from "./my.style";
import { shoppingInfo, myInfo } from "../my/my.data";

const MyWrap = () => {
  //localStorage로 저장해서 있으면 해당걸로, 없으면 마이페이지로
  const [rendered, setRendered] = useState("마이 페이지");

  const renderPage = {
    "마이 페이지": <MyInfo />,
    "구매 내역": <Purchase />,
    "판매 내역": <Sale />,
    "관심 상품": <Interest />,
    "금액 관리": <Amount />,
    "프로필 관리": <Profile />,
  };

  /** 클릭하면 target의 값을 rendered state를 바꿔주는 함수 */
  const clickRenderPage = (e) => {
    setRendered(e.target.innerText);
  };

  /** shopping의 nav를 가져오고, active를 확인하는 함수 */
  const getShoppingInfo = () => {
    return shoppingInfo.map((el, index) => (
      <div
        key={index}
        className={
          rendered === el
            ? "shopping-info-list_item active"
            : "shopping-info-list_item"
        }
        onClick={clickRenderPage}
      >
        {el}
      </div>
    ));
  };

  /** myInfo의 nav를 가져오고, active를 확인하는 함수 */
  const getMyInfo = () => {
    return myInfo.map((el, index) => (
      <div
        key={index}
        className={
          rendered === el
            ? "shopping-info-list_item active"
            : "shopping-info-list_item"
        }
        onClick={clickRenderPage}
      >
        {el}
      </div>
    ));
  };

  return (
    <S.MyContainer>
      <S.Nav>
        <S.Mypage onClick={clickRenderPage}>마이 페이지</S.Mypage>

        <div className="shopping">
          <S.Label>쇼핑 정보</S.Label>
          <div className="shopping-info-list">{getShoppingInfo()}</div>
        </div>

        <div className="my">
          <S.Label>내 정보</S.Label>
          <div className="my-info-list">{getMyInfo()}</div>
        </div>
      </S.Nav>

      <S.Section>{renderPage[rendered]}</S.Section>
    </S.MyContainer>
  );
};

export default MyWrap;
