import React from "react";
import { productData } from "../data/productData";
import "../css/ProductList.css";

const ShopProduct = () => {
  return (
    <>
      <div className="product_wrap">
        <div className="product_container">
          {productData.map((product) => (
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
      </div>
    </>
  );
};

export default ShopProduct;
