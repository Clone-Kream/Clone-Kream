import React, { useState } from "react";
import * as S from "../my.style";
import { allData, buyingData, finishData, tabs, waitingData } from "../my.data";

const Purchase = () => {
  const [tabState, setTabState] = useState("전체");

  // 현재 데이터 상태
  const [dataState, setDataState] = useState(allData);

  // 달력
  const [date, setDate] = useState("");
  // 상품명
  const [productName, setProductName] = useState("");

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeName = (e) => {
    setProductName(e.target.value);
  };

  /**Tab을 누르면 현재 데이터의 상태, Tab의 상태를 관리하는 함수 */
  const onClickTab = (e) => {
    setTabState(e.currentTarget.id);
    const state = e.currentTarget.id;
    if (state === "전체") {
      setDataState(allData);
    } else if (state === "판매대기") {
      setDataState(waitingData);
    } else if (state === "판매 중") {
      setDataState(buyingData);
    } else {
      setDataState(finishData);
    }
  };

  /**Tab의 active를 구분해주는 함수 */
  const isTabActive = (tabId) => (tabState === tabId ? "active" : "");

  /**Tab의 상태에 따라 데이터의 개수를 구하는 함수 */
  const getDataQuantity = (tabId) => {
    switch (tabId) {
      case "전체":
        // setDataState(allData);
        return allData.length;
      case "판매대기":
        // setDataState(waitingData);
        return waitingData.length;
      case "판매 중":
        // setDataState(buyingData);
        return buyingData.length;
      case "정산 완료":
        // setDataState(finishData);
        return finishData.length;
      default:
        return 0;
    }
  };

  /**Tab을 돌리고 active class 주는 함수 */
  const mapTab = () => {
    return tabs.map((tab) => (
      <li
        className={isTabActive(tab.id)}
        onClick={onClickTab}
        id={tab.id}
        key={tab.id}
      >
        <span className={`number number-${isTabActive(tab.id)}`}>
          {getDataQuantity(tab.id)}
        </span>
        <span className={`title title-${isTabActive(tab.id)}`}>
          {tab.label}
        </span>
      </li>
    ));
  };

  /** 금액 format으로 만들어주는 함수 */
  const formatPrice = (price) => {
    // console.log(price);
    return new Intl.NumberFormat().format(price);
  };

  /** DataList를 돌려주는 함수 */
  const mapData = () => {
    let filteredData = [];
    switch (tabState) {
      case "판매대기":
        filteredData = waitingData;
        break;
      case "판매 중":
        filteredData = buyingData;
        break;
      case "정산 완료":
        filteredData = finishData;
        break;
      default:
        filteredData = allData;
    }

    // 상품명을 작성했을 때
    if (productName.trim() !== "") {
      filteredData = dataState.filter((el) => el.name.includes(productName));
    }

    // 날짜를 지정했을 때
    if (date !== "") {
      filteredData = dataState.filter(
        (el) => el.purchaseDate.replace(/\./g, "-") === date
      );
    }

    // 상품명, 날짜 둘 다 지정했을 때
    if (productName.trim() !== "" && date !== "") {
      filteredData = dataState.filter(
        (el) =>
          el.purchaseDate.replace(/\./g, "-") === date &&
          el.name.includes(productName)
      );
    }

    return filteredData.map((data) => (
      <li className="item" key={data.id}>
        <div className="item_desc imgBox">
          <img className="item_desc" src={data.img} alt="상품" />
        </div>
        <div className="item_desc">{data.name}</div>
        <div className="item_desc">
          {formatPrice(data.price)}원({data.quantity}개)
        </div>
        <div className="item_desc">{data.purchaseDate}</div>
        <div className="item_desc">{data.status}</div>
        <div className="item_desc">{data.method}</div>
      </li>
    ));
  };

  const onClickReset = () => {
    console.log("눌림");
    setProductName("");
    setDate("");
  };

  return (
    <S.PurchaseContainer>
      <S.TitleLabel>구매내역</S.TitleLabel>
      <div className="total">
        총 <span className="num">{allData.length}</span>건
      </div>
      <div className="filter">
        <input type="date" onChange={onChangeDate} value={date || ""} />
        <input
          type="text"
          placeholder="상품명으로 검색"
          onChange={onChangeName}
          value={productName}
        />
        <button onClick={onClickReset}>초기화</button>
      </div>

      <ul>{mapTab()}</ul>

      <S.Table>
        <li className="table-title">
          <div className="table-title_item">상품 정보</div>
          <div className="table-title_item">상품 명</div>
          <div className="table-title_item">구매금액(수량)</div>
          <div className="table-title_item">구매 일시</div>
          <div className="table-title_item">주문 상태</div>
          <div className="table-title_item">결제 수단</div>
        </li>
        {mapData()}
      </S.Table>
    </S.PurchaseContainer>
  );
};

export default Purchase;
