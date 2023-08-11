import React, { useState } from "react";
import Header from "../components/Header";
import "../css/ShopPage.css";
import thunder from "../image/png/thunder.png";
import MenuList from "../components/MenuList";
import ShopProduct from "../components/ShopProduct";
import SwiperShop from "../components/SwiperShop";
import "../css/ShopPage.css";
const ShopPage = () => {
  const [menuVisible, setMenuVisible] = useState(true); // 메뉴리스트 보이기/감추기 상태
  const [selectedMain, setSelectedMain] = useState(null); // 선택된 메인 카테고리 상태
  const [selectedSub, setSelectedSub] = useState(null); // 선택된 서브 카테고리 상태

  const handleMenuToggle = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  const handleCategorySelect = (mainCategory, subCategory) => {
    setSelectedMain(mainCategory);
    setSelectedSub(subCategory);
  };

  return (
    <>
      <Header />
      <SwiperShop />
      <div className="content">
        <aside className="category">
          <div className="search_filter">
            <div className="filter_status">
              <div className="status_box">
                <p className="status_txt">필터</p>
              </div>
              <div className="filter_express">
                <div className="express_btn">
                  <img className="thunder" src={thunder} alt="" />
                  <span className="text">빠른배송</span>
                </div>
              </div>
            </div>
            <div className="filter_list">
              <div className="filter_title">
                <div className="title_box">
                  <span className="main_title">카테고리</span>
                  {!menuVisible && (
                    <span className="placeholder">모든 카테고리</span>
                  )}
                </div>
                <div className="icon_box">
                  <img
                    src={menuVisible ? "/assets/minus.svg" : "/assets/plus.svg"}
                    alt=""
                    onClick={handleMenuToggle}
                    className="toggle_btn"
                  />
                </div>
              </div>
              <div className="filter_menu">
                {menuVisible && (
                  <MenuList
                    selectedMain={selectedMain}
                    selectedSub={selectedSub}
                    onCategorySelect={handleCategorySelect}
                  />
                )}
              </div>
            </div>
          </div>
        </aside>
        <ShopProduct selectedMain={selectedMain} selectedSub={selectedSub} />
      </div>
    </>
  );
};

export default ShopPage;
