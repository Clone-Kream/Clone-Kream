import React from "react";
import Header from "../components/Header";
import SwiperBanner from "../components/SwiperBanner";
import MainCollectionCard from "../components/MainCollectionCard";
import ProductList from "../components/ProductList";
import SubCollectionCard from "../components/SubCollerctionCard";
import "../css/MainPage.css";
import "../css/MainCollection.css";
import { bannerData } from "../data/bannerData";
import SwiperProduct from "../components/SwiperProduct";

const MainPage = () => {
  return (
    <div className="main_container">
      <Header />
      <SwiperBanner />
      <div className="homecard_container">
        <MainCollectionCard />
        <ProductList />
        <SubCollectionCard />
      </div>
      <div
        className="banner_item"
        style={{ backgroundColor: bannerData[0].color }}
      >
        <div className="item_inner">
          <div className="img_box">
            <img src={bannerData[0].imageUrl} alt="img"></img>
          </div>
        </div>
      </div>
      <div className="homecard_container">
        <ProductList />
        <SwiperProduct />
      </div>
    </div>
  );
};

export default MainPage;
