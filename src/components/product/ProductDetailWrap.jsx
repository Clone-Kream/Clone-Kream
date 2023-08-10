import React, { useState } from "react";
import { useParams } from "react-router";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { notification } from "./product.data";
import * as S from "./product.style";
import ProductModal from "./ProductModal";
const ProductDetailWrap = (props) => {
  const params = useParams();
  const [dropDownStates, setDropDownStates] = useState({
    delivery: false,
    inspectation: false,
    purchase: false,
  });
  const [isModalShow, setIsModalShow] = useState(false);
  const [size, setSize] = useState("모든 사이즈");
  const handleDropDown = (event) => {
    console.log(event.target.name);
  };
  const getNotification = () => {
    return notification.map((item, idx) => {
      return (
        <li key={idx} name={item.name} onClick={handleDropDown}>
          <h3>{item.title}</h3>
          {/* <p>{item.desc}</p> */}
          <BsChevronDown />
        </li>
      );
    });
  };
  const handleShowModal = () => {
    setIsModalShow(!isModalShow);
  };
  const handleSubmitSize = (size = "모든 사이즈") => {
    setSize(size);
  };
  return (
    <>
      <S.ProductWrapper>
        {isModalShow && (
          <ProductModal
            handleShowModal={handleShowModal}
            handleSubmitSize={handleSubmitSize}
          />
        )}

        <S.ProductArea>
          <S.ProductSliderSection>
            <div>
              <img
                alt="product-img"
                src="data:image/jpeg;base64,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"
              />
            </div>
          </S.ProductSliderSection>
          <S.ProductInfoSection>
            <S.ProductInfoArea>
              <S.ProductInfo>
                <h2>
                  The North Face
                  <div></div>
                </h2>
                <h3>
                  The North Face Eco Gore-Tex Mountain Vista Jacket Dark Gray
                </h3>
                <h4>노스페이스 에코 고어텍스 마운틴 비스타 자켓 다크 그레이</h4>
              </S.ProductInfo>
              <S.ProductSizeSelect>
                <div>사이즈</div>
                <div onClick={handleShowModal}>
                  <h2>{size}</h2>
                  <button>
                    <MdOutlineArrowDropDownCircle />
                  </button>
                </div>
              </S.ProductSizeSelect>
              <S.ProductRecentPrice>
                <div>최근 거래가</div>
              </S.ProductRecentPrice>
            </S.ProductInfoArea>
            <S.ProductButtonArea>
              <S.ProductButton background={"#EF6253"}>
                <div>
                  <h3>구매</h3>
                </div>
                <div>
                  <h2>510,000원</h2>
                  <span>즉시 구매가</span>
                </div>
              </S.ProductButton>
              <S.ProductButton background={"#41BA78"}>
                <div>
                  <h3>판매</h3>
                </div>
                <div>
                  <h2>290,000원</h2>
                  <span>즉시 판매가</span>
                </div>
              </S.ProductButton>
              {/* 버튼 컴포넌트 */}
            </S.ProductButtonArea>
            <S.ProductSaleArea>
              <h2>추가 혜택</h2>
              <S.ProductSale>
                <h3>포인트</h3>
                <div>
                  <p>
                    구매 후 배송완료 시 수수료의 최대 <span>100%</span> 적립
                  </p>
                  <h4>
                    계좌 간편결제 시 <span>1%</span> 적립
                  </h4>
                </div>
              </S.ProductSale>
              <S.ProductSale>
                <h3>결제</h3>
                <div>
                  <p>
                    우리카드 15만원 이상 결제 시 즉시할인 <span>5%</span>
                  </p>
                </div>
              </S.ProductSale>
            </S.ProductSaleArea>
            <S.ProductDeliveryArea>
              <h2>배송 정보</h2>
              <S.ProductDelivery>
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="box"
                  />
                </div>
                <div>
                  <h2>
                    일반배송 <span>3,000원</span>
                  </h2>
                  <div>
                    <span>검수 후 배송 </span>
                    <h3>5-7일 내 도착 예정</h3>
                  </div>
                </div>
              </S.ProductDelivery>
            </S.ProductDeliveryArea>
            <S.ProductPriceChartArea>
              <h2>시세</h2>
              <S.ProductPriceChart></S.ProductPriceChart>
            </S.ProductPriceChartArea>
            <S.ProductNotiArea>
              <h2>구매 전 꼭 확인해주세요!</h2>
              <S.ProductNoti>{getNotification()}</S.ProductNoti>
            </S.ProductNotiArea>
          </S.ProductInfoSection>
        </S.ProductArea>
      </S.ProductWrapper>
    </>
  );
};
export default ProductDetailWrap;
