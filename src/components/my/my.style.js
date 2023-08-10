import { styled } from "styled-components";

export const MyContainer = styled.div`
  width: 120rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  padding-top: 6.4rem;
`;

export const Label = styled.label`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`;

export const Mypage = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  padding-bottom: 3rem;
  cursor: pointer;
`;

export const Nav = styled.nav`
  width: 18rem;
  height: 300px;
  position: sticky;
  /* top: 6.4rem; */
  top: 1rem;
  .shopping {
    &-info-list {
      &_item {
        color: rgba(34, 34, 34, 0.5);
        font-size: 1.5rem;
        margin-top: 1.2rem;
        cursor: pointer;
      }
    }
  }

  .my {
    margin-top: 4rem;
    &-info-list {
      &_item {
        color: rgba(34, 34, 34, 0.5);
        font-size: 1.5rem;
        margin-top: 1.2rem;
        cursor: pointer;
      }
    }
  }
  .active {
    color: #222;
    font-weight: 700;
  }
`;

export const Section = styled.section`
  width: 100rem;
`;

// 마이페이지
export const MyPageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ebebeb;
  border-radius: 1rem;
  background-color: #fff;
  padding: 2.3rem 0 2.3rem 2.3rem;
  box-sizing: border-box;
`;

export const MyMetaBox = styled.div`
  display: flex;
  align-items: center;

  .my-meta_img {
    border: 1px solid;
    box-sizing: border-box;
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    margin-right: 1.2rem;
  }
  .my-meta {
    display: flex;
    flex-direction: column;
    &_nickname {
      color: #000;
      font-size: 1.8rem;
      font-weight: 600;
    }
    &_email {
      color: rgba(34, 34, 34, 0.5);
      font-size: 1.4rem;
      margin-top: 0.2rem;
    }
    .my-meta-btn-box {
      display: flex;
      flex-direction: row;
      margin-top: 12px;
      gap: 0.7rem;
      button {
        background-color: #fff;
        height: 36px;
        border: 1px solid #d3d3d3;
        font-size: 1.2rem;
        border-radius: 1rem;
        padding: 0 1.4rem;
        cursor: pointer;
      }
    }
  }
`;

export const UserMetaBox = styled.div`
  display: flex;
  align-items: center;
  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 8rem;
    font-size: 1.6rem;
    font-weight: 700;
    position: relative;
  }

  .user-lank {
    border-right: 1.5px solid #ebebeb;
  }

  span {
    color: rgba(34, 34, 34, 0.5);
    font-size: 1.3rem;
    margin-top: 0.3rem;
  }
`;

export const History = styled.div`
  margin-top: 4.2rem;
  .history-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 16px;
    h3 {
      font-size: 1.8rem;
      font-weight: 700;
    }
    span {
      color: rgba(34, 34, 34, 0.5);
      font-size: 1.3rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }
  }
  ul {
    /* background-color: #f2f9f6; */
    border-radius: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .history-tab {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 25rem;
      height: 8.5rem;
      padding-top: 18px;
      cursor: pointer;
      position: relative;

      &_title {
        color: rgba(34, 34, 34, 0.8);
        font-size: 1.3rem;
      }
      &_number {
        font-size: 1.8rem;
        font-weight: 700;
        margin-top: 0.2rem;
      }
      &_green {
        color: #31b46e;
      }
      &_red {
        color: #f15746;
      }
    }
  }
  .bg-green {
    background-color: #f2f9f6;
  }
  .bg-white {
    background-color: #fafafa;
  }
  .first::after {
    content: "";
    width: 1px;
    height: 6.5rem;
    background-color: #ebebeb;
    position: absolute;
    left: 100%;
  }
`;

export const Direct = styled.div`
  background-color: #222c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.3rem 3rem 1.3rem 1.6rem;
  border-radius: 1rem;
  margin-top: 1.2rem;
  position: relative;
  cursor: pointer;
  .direct-left {
    display: flex;
    align-items: center;
    .direct-logo {
      width: 3.4rem;
      height: 3.4rem;
      border-radius: 50%;
      background-color: #0fde70;
      margin-right: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .chart {
        width: 2.8rem;
        height: 2.8rem;
        fill: #fff;
      }
    }
    .direct-desc {
      display: flex;
      flex-direction: column;
      h3 {
        font-size: 1.4rem;
        font-weight: 700;
        color: #fff;
      }
      span {
        color: #ffffffcc;
        font-size: 1.2rem;
        margin-top: 0.2rem;
      }
    }
  }
  .right {
    width: 2rem;
    height: 2rem;
    fill: #fff;
    position: absolute;
    right: 0.8rem;
  }
`;

// 구매내역
export const PurchaseContainer = styled.div`
  padding: 0.5rem 0 0.6rem;
  .total {
    margin: 1.2rem 0;
    font-size: 1.4rem;
    font-weight: 700;
    padding-bottom: 2rem;
    border-bottom: 1px solid #ebebeb;
    .num {
      color: blue;
    }
  }
  input {
    width: 40rem;
    height: 4rem;
    outline: none;
    padding: 0 0.5rem;
    border: 1px solid #ebebeb;
    border-radius: 8px;
  }
  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: #fff;
      border: 1px solid #ebebeb;
      color: rgba(34, 34, 34, 0.8);
      padding: 1rem;
      border-radius: 1.2rem;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 68px;
      padding-top: 12px;
      gap: 0.5rem;
      border-bottom: 1px solid #d3d3d3;
      cursor: pointer;
      .number {
        font-size: 20px;
        font-weight: 700;
        color: #222;
        transition: color 0.35s ease 0s;
      }
      .number-active {
        color: #f15746;
      }
      .title {
        color: #22222280;
        font-weight: 700;
        font-size: 1.3rem;
        transition: color 0.35s ease 0s;
      }
      .title-active {
        color: #222;
      }
    }
    .active {
      border-bottom: 2px solid #222;
    }
  }
`;
export const TitleLabel = styled.div`
  font-size: 2.9rem;
  font-weight: 700;
`;

export const Table = styled.ul`
  display: flex;
  flex-direction: column;
  .table-title {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 3rem;
    background-color: #eaeaea;
    border-radius: 8px 8px 0 0;
    &_item {
      width: calc(100% / 6);
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      padding-bottom: 0.5rem;
      font-weight: 700;
    }
  }
  .item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    padding: 0 0 0.5rem 0;
    border-bottom: 1px solid #ccc;
    .imgBox {
      img {
        width: 4.2rem;
        height: 4.2rem;
        border-radius: 50%;
      }
    }

    &_desc {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      width: calc(100% / 6);
    }
    &:nth-child(2n + 1) {
      background-color: #454f5d12;
    }
    &:nth-last-child(1) {
      border: none;
    }
  }
`;

// 금액 관리
export const AmountContainer = styled.div`
  padding-bottom: 10rem;
`;

export const AmountSection = styled.div`
  /* background-color: pink; */
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  .amount-card {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% / 3 - 6rem);
    height: 7rem;
    border-radius: 1.2rem;
    font-size: 1.8rem;
    font-weight: 700;
    color: #fff;
    gap: 2rem;
    .svg-box {
      padding: 1rem;
      border-radius: 1.2rem;
      svg {
        width: 3rem;
        height: 3rem;
      }
    }

    .card {
      background-color: #4241a4;
    }
    .cash {
      background-color: #5e87fe;
    }
    .fund {
      background-color: #fa6e7a;
    }
    .price-info-box {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .total-price {
      }
      .title {
        font-size: 1.4rem;
      }
    }
  }
  .purchase {
    background-color: #4d4cac;
  }
  .sale {
    background-color: #659cff;
  }
  .revenue {
    background-color: #ff808b;
  }
`;

export const ChartContainer = styled.div`
  margin-top: 3rem;
  .top {
    display: flex;
    justify-content: space-between;
    .time-dropbox {
      width: 12rem;
      height: 3rem;
      border: 1px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      position: relative;
      .calendar {
        width: 2.4rem;
        height: 2.4rem;
        fill: #636ab6;
      }
      .time-value {
        font-size: 1.5rem;
        font-weight: 700;
        color: #636ab6;
        display: flex;
        &::before {
          content: "";
          width: 1px;
          height: 1.5rem;
          background-color: #636ab6;
          margin-right: 1rem;
        }
      }
      .arrow {
        width: 1.8rem;
        height: 1.8rem;
        fill: #636ab6;
      }

      .time-dropbox_list {
        position: absolute;
        z-index: 1;
        top: 120%;
        width: 12rem;
        display: flex;
        flex-direction: column;
        border-radius: 0.8rem;
        overflow: hidden;
        li {
          width: 100%;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.5rem;
          font-weight: 700;
          background-color: #3182f6;
          border-bottom: 1px solid #c9e2ff;
          transition: all 0.3s;
          &:last-child(1) {
            border: none;
          }
          &:hover {
            background-color: #1b64da;
          }
        }
      }
    }
  }
`;

export const Chart = styled.div`
  background-color: #fff;
  border: 2px solid #eee;
  border-radius: 2rem;
  padding: 0.5rem;
  margin-top: 1.2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  .tooltip {
    width: 12rem;
    height: 11rem;
    border: 1px solid #e3e3e3;
    background: rgba(255, 255, 255, 0.96);
    border-radius: 5px;
    box-shadow: 2px 2px 6px -4px #999;
    cursor: default;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .header {
      background-color: #ddd;
      height: 2.5rem;
      width: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #999;
      padding: 0 0.5rem;
      font-weight: 700;
    }
    .item {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      .circle {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
      .title {
        font-size: 1.2rem;
        margin-right: 0.5rem;
      }
      .value {
        font-size: 1.2rem;
      }
    }
  }
`;

export const AmountBottom = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  height: 45rem;
  gap: 1rem;

  .amount-bar {
    background: #fff;
    padding-top: 1rem;
    width: calc(100% / 2 - 1rem);
    border-radius: 2rem;
    border: 2px solid #eee;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      svg {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 1.2rem;
        cursor: pointer;
        fill: #626768;
      }
    }
  }
  .amount-pie {
    padding-top: 1rem;
    width: calc(100% / 2 - 1rem);
    border-radius: 2rem;
    border: 2px solid #eee;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);

    .arrow_box {
      padding: 1rem 2rem;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 700;
    }
    .purple {
      background-color: #4d4cac;
    }
    .blue {
      background-color: #659cff;
    }
    .pink {
      background-color: #ff808b;
    }
  }
`;
export const SubTitle = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  padding: 0 1.2rem;
  box-sizing: border-box;
  color: #626768;
`;
export const ChangeTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0 1.2rem;
  box-sizing: border-box;
  color: #ddd;
  cursor: pointer;
`;
