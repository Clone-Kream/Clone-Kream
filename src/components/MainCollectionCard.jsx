import React from "react";
import "../css/MainCollection.css";

const MainCollectionCard = ({ collectionitem }) => {
  return (
    <div className="collection_item">
      <div className="collection_img">
        <img src={collectionitem.imageUrl} alt={collectionitem.title} />
      </div>
      <div className="collection_title">{collectionitem.title}</div>
    </div>
  );
};

export default MainCollectionCard;
