import React, { useState } from "react";
import { productData } from "../data/productData";
import "../css/ProductList.css";

const ProductList = () => {
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
      <div className="product_container">
        {visibleProducts.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <div className="info-box">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts.length < totalProducts && (
        <button onClick={handleShowMore}>더보기</button>
      )}
    </>
  );
};

export default ProductList;
