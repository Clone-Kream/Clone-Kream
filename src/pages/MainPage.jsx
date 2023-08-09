import React from "react";
import Header from "../components/Header";
import SwiperBanner from "../components/SwiperBanner";
import { collectionData } from "../data/collectionData";
import MainCollectionCard from "../components/MainCollectionCard";
import "../css/MainPage.css";
import ProductList from "../components/ProductList";

const MainPage = () => {
  return (
    <div className="main_container">
      <Header />
      <SwiperBanner />
      <div className="homecard_container">
        <div className="collection_container">
          {collectionData.slice(0, 10).map((item, index) => {
            return <MainCollectionCard key={index} collectionitem={item} />;
          })}
        </div>
        <ProductList />
      </div>
    </div>
  );
};

export default MainPage;
