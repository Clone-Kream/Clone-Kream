import React, { useEffect, useState } from "react";
import * as S from "../my.style";
import imgUrl from "../../../asset/item1.webp";

const Purchase = () => {
  const [tabState, setTabState] = useState("전체");

  const onClickTab = (e) => {
    // console.log(e.currentTarget.id);
    setTabState(e.currentTarget.id);
    // classActive(e.currentTarget.id);
  };

  const isTabActive = (tabId) => (tabState === tabId ? "active" : "");
  console.log(tabState);

  return (
    <S.PurchaseContainer>
      <S.TitleLabel>구매내역</S.TitleLabel>
      <div className="total">
        총 <span className="num">7</span>건
      </div>
      <div className="filter">
        <input type="date" />
        <input type="text" placeholder="상품명으로 검색" />
        <button>조회</button>
      </div>
      <ul>
        <li className={isTabActive("전체")} onClick={onClickTab} id="전체">
          <span className="number number-active">0</span>
          <span className="title title-active">전체</span>
        </li>
        <li
          className={isTabActive("판매대기")}
          onClick={onClickTab}
          id="판매대기"
        >
          <span className="number">0</span>
          <span className="title">판매대기</span>
        </li>
        <li
          className={isTabActive("판매 중")}
          onClick={onClickTab}
          id="판매 중"
        >
          <span className="number">0</span>
          <span className="title">판매 중</span>
        </li>
        <li
          className={isTabActive("정산 완료")}
          onClick={onClickTab}
          id="정산 완료"
        >
          <span className="number">0</span>
          <span className="title">정산 완료</span>
        </li>
      </ul>

      <S.Table>
        <li className="table-title">
          <div className="table-title_item">상품 정보</div>
          <div className="table-title_item">상품 명</div>
          <div className="table-title_item">구매금액(수량)</div>
          <div className="table-title_item">구매 일시</div>
          <div className="table-title_item">주문 상태</div>
          <div className="table-title_item">결제 수단</div>
        </li>
        <li className="item">
          <div className="item_desc imgBox">
            <img className="item_desc" src={imgUrl} alt="상품" />
          </div>
          <div className="item_desc">나이키</div>
          <div className="item_desc">1500원(3개)</div>
          <div className="item_desc">2023.08.08</div>
          <div className="item_desc">입출 중</div>
          <div className="item_desc">신용카드</div>
        </li>

        {/* <li className="item">
          <div className="item_desc imgBox">
            <img className="item_desc" src={imgUrl} alt="상품" />
          </div>
          <div className="item_desc">나이키</div>
          <div className="item_desc">1500원(3개)</div>
          <div className="item_desc">2023.08.08</div>
          <div className="item_desc">입출 중</div>
          <div className="item_desc">신용카드</div>
        </li>

        <li className="item">
          <div className="item_desc imgBox">
            <img className="item_desc" src={imgUrl} alt="상품" />
          </div>
          <div className="item_desc">나이키</div>
          <div className="item_desc">1500원(3개)</div>
          <div className="item_desc">2023.08.08</div>
          <div className="item_desc">입출 중</div>
          <div className="item_desc">신용카드</div>
        </li>

        <li className="item">
          <div className="item_desc imgBox">
            <img className="item_desc" src={imgUrl} alt="상품" />
          </div>
          <div className="item_desc">나이키</div>
          <div className="item_desc">1500원(3개)</div>
          <div className="item_desc">2023.08.08</div>
          <div className="item_desc">입출 중</div>
          <div className="item_desc">신용카드</div>
        </li> */}
      </S.Table>
    </S.PurchaseContainer>
  );
};

export default Purchase;
