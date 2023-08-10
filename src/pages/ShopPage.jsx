import React, { useState } from "react";
import Header from "../components/Header";
import "../css/ShopPage.css";
import { Link } from "react-router-dom";
import MenuList from "../components/MenuList";
import ShopProduct from "../components/ShopProduct";

const ShopPage = () => {
  const [menuVisible, setMenuVisible] = useState(true); // 메뉴리스트 보이기/감추기 상태

  const handleMenuToggle = () => {
    setMenuVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <Header />
      <div className="content">
        <aside className="catagory">
          <div className="search_filter">
            <div className="filter_status">
              <div className="status_box">
                <p className="status_txt">필터</p>
              </div>
              <div className="filter_express">
                <Link to="/shop" className="express_btn">
                  <img src="/image/thunder.png" alt="" />
                  <span className="text">빠른배송</span>
                </Link>
              </div>
            </div>
            <div className="filter_list">
              <div className="filter_title">
                <div className="tilte_box">
                  <span className="mian_title">카테고리</span>
                  {!menuVisible && (
                    <span className="placeholder">모든 카테고리</span>
                  )}
                </div>
                <div className="icon_box">
                  {/* 이미지 클릭 이벤트 핸들러 추가 */}
                  <img
                    src={menuVisible ? "/assets/minus.svg" : "/assets/plus.svg"}
                    alt=""
                    onClick={handleMenuToggle}
                    className="toggle_btn"
                  />
                </div>
              </div>
              <div className="filter_menu">{menuVisible && <MenuList />}</div>
            </div>
          </div>
        </aside>
        <ShopProduct />
      </div>
    </>
  );
};

export default ShopPage;
