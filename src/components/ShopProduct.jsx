import React from "react";
import { productData } from "../data/productData";
import "../css/ProductList.css";
import { useNavigate } from "react-router";

const ShopProduct = ({ selectedMain, selectedSub }) => {
  const filteredProducts = productData.filter((product) => {
    if (!selectedMain && !selectedSub) {
      return true; // 모든 상품 보여주기
    }
    if (selectedMain && !selectedSub) {
      return product.categories === selectedMain;
    }
    if (selectedMain && selectedSub) {
      return (
        product.categories === selectedMain &&
        product.subCategories === selectedSub
      );
    }
    return false;
  });

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product_wrap">
      <div className="product_container">
        {filteredProducts.map((product) => (
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
    </div>
  );
};

export default ShopProduct;
