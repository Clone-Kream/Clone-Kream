import React from "react";
import {
  AiFillCreditCard,
  AiFillDollarCircle,
  AiFillFund,
} from "react-icons/ai";

const CardBox = () => {
  return (
    <>
      <div className="purchase amount-card">
        <div className="svg-box card">
          <AiFillCreditCard />
        </div>
        <div className="price-info-box">
          <div className="total-price">650,000 원</div>
          <div className="title">총 구매액</div>
        </div>
      </div>
      <div className="sale amount-card">
        <div className="svg-box cash">
          <AiFillDollarCircle />
        </div>
        <div className="price-info-box">
          <div className="total-price">250,000 원</div>
          <div className="title">총 판매액</div>
        </div>
      </div>
      <div className="revenue amount-card">
        <div className="svg-box fund">
          <AiFillFund />
        </div>
        <div className="price-info-box">
          <div className="total-price">50,000 원</div>
          <div className="title">총 수익</div>
        </div>
      </div>
    </>
  );
};

export default CardBox;
