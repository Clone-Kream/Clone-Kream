import React from "react";
import "../css/MainCollection.css";
import { collectionData } from "../data/collectionData";

const SubCollectionCard = () => {
  return (
    <div className="subcollection_wrap">
      <div className="before"></div>
      <div className="info">
        <p className="main_title">Top 15 Brand</p>
        <p className="sub_title">인기 탑 15 브랜드</p>
      </div>
      <div className="collection_container">
        {collectionData.slice(10, 25).map((item) => {
          return (
            <div className="collection_item">
              <div className="collection_img">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="collection_title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubCollectionCard;
