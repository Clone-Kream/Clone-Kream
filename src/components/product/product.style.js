import styled from "styled-components";

export const ProductWrapper = styled.div`
  max-width: 112rem;
  margin: 0 auto;
`;
export const ProductArea = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ProductSliderSection = styled.section`
  width: 56rem;
  padding-right: 4rem;
  box-sizing: border-box;
  height: 120rem;
  .bg {
    width: 52rem;
    height: 52rem;
    background-color: rgb(244, 244, 244);
    position: sticky;
    top: 10rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const ProductInfoSection = styled.section`
  width: 56rem;
  padding-left: 4rem;
  box-sizing: border-box;
  border-left: 0.1rem solid rgba(0, 0, 0, 0.1);
  padding-bottom: 7rem;
`;
export const ProductInfoArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const ProductInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    font-weight: 900;
    width: max-content;
    border-bottom: 2px solid #222;
    cursor: pointer;
    margin-bottom: 9px;
  }
  h3 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 4px;
  }
  h4 {
    color: #22222280;
    margin-top: 0.8rem;
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const ProductSizeSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
  padding: 19px 0 12px 0;
  .size {
    font-size: 1.3rem;
  }
  .drop-box {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    h2 {
      font-size: 1.6rem;
      font-weight: 700;
    }
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
`;
export const ProductRecentPrice = styled.div`
  padding: 1.5rem 0.2rem;
  font-size: 1.2rem;
  color: #222c;
  /* background-color: pink; */
  display: flex;

  justify-content: space-between;

  .price-box {
    .title-price {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 5px;
    }
    .price-change {
      display: flex;
      gap: 0.4rem;
      span {
        color: red;
      }
      svg {
        fill: red;
      }
    }
  }
`;
export const ProductButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ProductButton = styled.div`
  background-color: ${(props) => props.background};
  width: 47%;
  height: 6rem;
  border-radius: 1.2rem;
  display: flex;
  color: white;
  div:first-child {
    width: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    h3 {
      font-weight: 600;
      font-size: 1.6rem;
    }
  }
  div:last-child {
    width: 65%;
    border-left: 0.05rem solid rgba(0, 0, 0, 0.4);
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h2 {
      font-size: 1.4rem;
      font-weight: 600;
    }
    span {
      margin-top: 0.3rem;
      font-ize: 1.2rem;
    }
  }
`;
export const ProductSaleArea = styled.div`
  margin-top: 7rem;
  width: 100%;
  h2 {
    font-size: 1.4rem;
  }
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

export const ProductSale = styled.div`
  margin-top: 2rem;
  padding-left: 0.1rem;
  display: flex;
  h3 {
    font-size: 1.3rem;
    font-weight: 350;
    color: rgba(0, 0, 0, 0.4);
    width: 20%;
  }
  div {
    font-size: 1.3rem;
    font-weight: 400;
    span {
      font-size: 1.32rem;
      font-weight: 900;
    }
    h4 {
      margin-top: 1rem;
    }
  }
`;
export const ProductDeliveryArea = styled.div`
  width: 100%;
  margin-top: 2rem;
  h2 {
    font-size: 1.4rem;
  }
`;
export const ProductDelivery = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  div:first-child {
    width: 20%;
    img {
      border: 0.1rem solid rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      width: 4rem;
    }
  }
  div:last-child {
    width: 80%;
    h2 {
      font-weight: 600;
      span {
        font-weight: 400;
      }
    }
    div {
      margin-top: 0.6rem;
      display: flex;
      font-size: 1.4rem;
      color: rgba(0, 0, 0, 0.5);
      h3 {
        margin-left: 3rem;
      }
    }
  }
`;
export const ProductPriceChartArea = styled.div`
  margin-top: 4rem;
  width: 100%;
  height: 35rem;
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
export const ProductPriceChart = styled.section`
  border: 1px solid black;
  margin-bottom: 2rem;
`;

export const ProductNotiArea = styled.div`
  margin-top: 10rem;
  width: 100%;
  h2 {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
export const ProductNoti = styled.div`
  margin-top: 2rem;
  li {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    padding: 2rem 0;
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
    svg {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;
