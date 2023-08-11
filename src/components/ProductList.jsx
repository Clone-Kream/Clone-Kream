import { useState } from "react";
import { productData } from "../data/productData";
import "../css/ProductList.css";
import { useNavigate } from "react-router";

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

  const navigate = useNavigate();
  const [localCurrentProduct, setLocalCurrentProduct] = useState(
    JSON.parse(localStorage.getItem("current")) || []
  );

  const handleClick = (id) => {
    console.log(id);
    const currentProduct = productData.find((el) => el.id === id);

    if (currentProduct) {
      const updatedProducts = [
        ...localCurrentProduct.filter((item) => item.id !== id),
        currentProduct,
      ];
      // 로컬 스토리지에 저장
      localStorage.setItem("current", JSON.stringify(updatedProducts));
      navigate(`/product/${id}`);
    }
  };

  return (
    <>
      <div className="product_wrap">
        <div className="info">
          <p className="main_title">Just Dropped</p>
          <p className="sub_title">발매 상품</p>
        </div>
        <div className="product_container">
          {visibleProducts.map((product) => (
            <div
              className="product"
              key={product.id}
              onClick={() => handleClick(product.id)}
            >
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

export default ProductList;
