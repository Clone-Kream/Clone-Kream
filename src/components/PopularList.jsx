import React from "react";
import { useState } from "react";
import { productData } from "../data/productData";
import "../css/PopularList.css";

const PopularList = () => {
  const [visibleProducts, setVisibleProducts] = useState(
    productData.slice(0, 4) //초기값
  );
  // 한 페이지에 보여줄 상품 수와 전체 상품 수
  const productsPerPage = 4;
  const totalProducts = productData.length;

  const handleShowMore = () => {
    const currentProductCount = visibleProducts.length; //현재
    const nextProductCount = currentProductCount + productsPerPage; //다음 보여질 개수

    if (nextProductCount >= totalProducts) {
      setVisibleProducts(productData);
    } else {
      setVisibleProducts(productData.slice(0, nextProductCount));
    }
  };

  return (
    <>
      <div className="popularproduct_wrap">
        <div className="info">
          <p className="main_title">Most Popular</p>
          <p className="sub_title">인기 상품</p>
        </div>
        <div className="product_container">
          {visibleProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.imageUrl} alt={product.title} />
              <div className="info-box">
                <p className="brand">{product.brand}</p>
                <p className="title">{product.title}</p>
                <p className="price">{product.price}</p>
                <p className="subdescription">{product.subdescription}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleProducts.length < totalProducts && (
          <button onClick={handleShowMore}>더보기</button>
        )}
      </div>
    </>
  );
};

export default PopularList;
