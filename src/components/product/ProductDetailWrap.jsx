import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { notification } from "./product.data";
import * as S from "./product.style";
import ProductModal from "./ProductModal";
import ProductGraph from "./ProductGraph";
import { productData } from "../../data/productData";
import Header from "./../Header";
import { BsFillTriangleFill } from "react-icons/bs";

const ProductDetailWrap = (props) => {
  const params = useParams();
  // console.log(typeof params.productId);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    setProductInfo(
      ...productData.filter((item) => item.id === Number(params.productId))
    );
  }, []);

  console.log(productInfo);

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
  const ProductCategory = productInfo.categories;
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
  // const price = productInfo.price.slice(0, productInfo.price.length - 1);
  const data = [
    {
      id: "시세 변동 추이",
      data: [
        { x: 0, y: 300000 },
        { x: 5, y: 320000 },
        { x: 10, y: 330000 },
        { x: 13, y: 335000 },
        { x: 15, y: 400000 },
        { x: 20, y: 380000 },
        { x: 23, y: 375000 },
        { x: 25, y: 370000 },
        { x: 30, y: 400000 },
      ],
    },
  ];
  return (
    <>
      <Header />
      <S.ProductWrapper>
        {isModalShow && (
          <ProductModal
            ProductCategory={ProductCategory}
            handleShowModal={handleShowModal}
            handleSubmitSize={handleSubmitSize}
          />
        )}
        <S.ProductArea>
          <S.ProductSliderSection>
            <div className="bg">
              <img alt="product-img" src={productInfo.imageUrl} />
            </div>
          </S.ProductSliderSection>
          <S.ProductInfoSection>
            <S.ProductInfoArea>
              <S.ProductInfo>
                <h2>{productInfo.brand}</h2>
                <h3>{productInfo.title}</h3>
                <h4>{productInfo.description}</h4>
              </S.ProductInfo>
              <S.ProductSizeSelect>
                <div className="size">사이즈</div>
                <div className="drop-box" onClick={handleShowModal}>
                  <h2>{size}</h2>

                  <MdOutlineArrowDropDownCircle />
                </div>
              </S.ProductSizeSelect>
              <S.ProductRecentPrice>
                <div className="current">최근 거래가</div>
                <div className="price-box">
                  <div className="title-price">299,000원</div>
                  <div className="price-change">
                    <BsFillTriangleFill />
                    <span>14,000원</span>
                    <span>(+4.9%)</span>
                  </div>
                </div>
              </S.ProductRecentPrice>
            </S.ProductInfoArea>
            <S.ProductButtonArea>
              <S.ProductButton background={"#EF6253"}>
                <div>
                  <h3>구매</h3>
                </div>
                <div>
                  <h2>{productInfo.price}</h2>
                  <span>즉시 구매가</span>
                </div>
              </S.ProductButton>
              <S.ProductButton background={"#41BA78"}>
                <div>
                  <h3>판매</h3>
                </div>
                <div>
                  <h2>{productInfo.price}</h2>
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
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg9R0iUuMacdeiBughJFqXGZJMxFBeS5ujfQ&usqp=CAU"
                    }
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
              <ProductGraph data={data} />
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
