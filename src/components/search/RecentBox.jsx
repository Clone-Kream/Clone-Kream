import React, { useEffect, useState } from "react";
import * as S from "./search.style";
import { productData } from "./../../data/productData";

const RecentBox = () => {
  // 로컬 스토리지에서 가져온 데이터

  const [currentData, setCurrentData] = useState(
    JSON.parse(localStorage.getItem("current")) || []
  );

  console.log(currentData);

  /** 최근 본 상품 뿌려주는 함수*/
  const getRecentProduct = () => {
    // mock data와 로컬스토리지에서 가져온 데이터 비교하기
    const matchingProducts = currentData.map((currentItem) => {
      return productData.find(
        (productItem) => productItem.id === currentItem.id
      );
    });

    return matchingProducts.map((el, index) => (
      <li key={index}>
        <img src={el.imageUrl} alt={el.alt} />
        <span>{el.desc}</span>
      </li>
    ));
  };

  const removeCurrentProduct = () => {
    localStorage.removeItem("current");
    setCurrentData([]);
  };

  return (
    <>
      {currentData.length !== 0 && (
        <>
          <div className="recent-meta">
            <S.Label>최근 본 상품</S.Label>
            <span onClick={removeCurrentProduct}>지우기</span>
          </div>
          <ul>{getRecentProduct()}</ul>
        </>
      )}
    </>
  );
};

export default RecentBox;
