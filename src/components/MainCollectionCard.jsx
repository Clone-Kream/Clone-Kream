import React from "react";
import "../css/MainCollection.css";
import { collectionData } from "../data/collectionData";

const MainCollectionCard = () => {
  return (
    <div className="collection_container">
      {collectionData.slice(0, 10).map((item) => {
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
  );
};

export default MainCollectionCard;
