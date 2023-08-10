import React from "react";
import {
  AiFillCreditCard,
  AiFillDollarCircle,
  AiFillFund,
} from "react-icons/ai";

const CardBox = (props) => {
  console.log(props);

  /** 금액 format으로 만들어주는 함수 */
  const formatPrice = (price) => {
    // console.log(price);
    return new Intl.NumberFormat().format(price);
  };

  /** 총 구매액 구하는 함수 */
  const getToalPurchase = () => {
    const total = props.purchaseData.reduce((acc, value) => acc + value, 0);
    return formatPrice(total);
  };
  /** 총 판매액 구하는 함수 */
  const getToalSale = () => {
    const total = props.saleData.reduce((acc, value) => acc + value, 0);
    return formatPrice(total);
  };

  /** 총 수익 구하는 함수 */
  const getToalRevenue = () => {
    const total = props.revenueData.reduce((acc, value) => acc + value, 0);
    return formatPrice(total);
  };
  return (
    <>
      <div className="purchase amount-card">
        <div className="svg-box card">
          <AiFillCreditCard />
        </div>
        <div className="price-info-box">
          <div className="total-price">{getToalPurchase()}원</div>
          <div className="title">총 구매액</div>
        </div>
      </div>
      <div className="sale amount-card">
        <div className="svg-box cash">
          <AiFillDollarCircle />
        </div>
        <div className="price-info-box">
          <div className="total-price">{getToalSale()}원</div>
          <div className="title">총 판매액</div>
        </div>
      </div>
      <div className="revenue amount-card">
        <div className="svg-box fund">
          <AiFillFund />
        </div>
        <div className="price-info-box">
          <div className="total-price">{getToalRevenue()}원</div>
          <div className="title">총 수익</div>
        </div>
      </div>
    </>
  );
};

export default CardBox;
