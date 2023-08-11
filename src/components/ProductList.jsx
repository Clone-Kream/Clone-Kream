import { useState } from "react";
import { productData } from "../data/productData";
import "../css/ProductList.css";
import { useNavigate } from "react-router";

const ProductList = () => {
  const productsPerPage = 4;
  const totalProducts = 12; // 최대 12개까지만 보여지도록 설정

  const [visibleProducts, setVisibleProducts] = useState(
    productData.slice(0, productsPerPage) // 초기값
  );

  const [page, setPage] = useState(1); // 현재 페이지 상태 변수

  const handleShowMore = () => {
    if (page === 1) {
      setVisibleProducts(productData.slice(0, 2 * productsPerPage));
      setPage(2);
    } else if (page === 2) {
      setVisibleProducts(productData.slice(0, totalProducts));
      setPage(3);
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
        {page < 3 && <button onClick={handleShowMore}>더보기</button>}
      </div>
    </>
  );
};

export default ProductList;
