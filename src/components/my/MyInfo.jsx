import React, { useState } from "react";
import * as S from "./my.style";
import Direct from "./Direct";
import History from "./History";
import {
  allData,
  buyingData,
  finishData,
  saleAllData,
  saleBuyingData,
  saleFinishData,
  saleWaitingData,
  waitingData,
} from "./my.data";

const MyInfo = (props) => {
  const [saleHistory, setSaleHistory] = useState({
    title: "판매 내역",
    moreLink: "/",
    tab1: {
      label: "총 판매",
      number: saleAllData.length,
    },
    tab2: {
      label: "판매 대기",
      number: saleWaitingData.length,
    },
    tab3: {
      label: "판매 중",
      number: saleBuyingData.length,
    },
    tab4: {
      label: "정산완료",
      number: saleFinishData.length,
    },
  });

  const [purchase, setPurchaseHistory] = useState({
    title: "구매 내역",
    moreLink: "/",
    tab1: {
      label: "총 구매",
      number: allData.length,
    },
    tab2: {
      label: "구매 대기",
      number: waitingData.length,
    },
    tab3: {
      label: "진행 중",
      number: buyingData.length,
    },
    tab4: {
      label: "정산완료",
      number: finishData.length,
    },
  });

  return (
    <>
      <S.MyPageContainer>
        <S.MyMetaBox>
          <div className="my-meta_img"></div>
          <div className="my-meta">
            <div className="my-meta_nickname">whgr50</div>
            <div className="my-meta_email">s*****4@naver.com</div>
            <div className="my-meta-btn-box">
              <button>프로필 관리</button>
              <button>내 스타일</button>
            </div>
          </div>
        </S.MyMetaBox>

        <S.UserMetaBox>
          <div className="user-lank label">
            <div className="my-lank">일반 회원</div>
            <span>회원 등급</span>
          </div>

          <div className="user-point label">
            <div className="my-point">0P</div>
            <span>포인트</span>
          </div>
        </S.UserMetaBox>
      </S.MyPageContainer>

      <Direct />
      <History data={saleHistory} render={props} />
      <History data={purchase} render={props} />
    </>
  );
};

export default MyInfo;
