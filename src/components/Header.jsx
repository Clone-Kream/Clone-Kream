import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/reset.css";
import "../css/Header.css";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedNav, setSelectedNav] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };
  const handleNavClick = (index) => {
    setSelectedNav(index);
  };

  return (
    <>
      <header>
        <div className="header_container">
          <div className="top_inner">
            <div className="top_list">
              <Link to="/notice">고객센터</Link>
              <Link to="/my">마이페이지</Link>
              <Link to="/saved">관심상품</Link>
              <Link to="#notifications">알림</Link>
              <Link to="/">로그아웃</Link>
            </div>
          </div>
          <div className="header_main">
            <div className="main_inner">
              <h1 className="logo">
                <Link to="/">KREAM</Link>
              </h1>
              <nav className="gnb">
                <Link
                  to="/"
                  className={selectedNav === 0 ? "active" : ""}
                  onClick={() => handleNavClick(0)}
                >
                  HOME
                </Link>
                <Link
                  to="/style"
                  className={selectedNav === 1 ? "active" : ""}
                  onClick={() => handleNavClick(1)}
                >
                  STYLE
                </Link>
                <Link
                  to="/search"
                  className={selectedNav === 2 ? "active" : ""}
                  onClick={() => handleNavClick(2)}
                >
                  SHOP
                </Link>
                <Link
                  className={selectedNav === 3 ? "active" : ""}
                  onClick={() => handleNavClick(3)}
                >
                  <img src="assets/search.svg"></img>
                </Link>
              </nav>
            </div>
          </div>
          <nav className="tabs">
            <ul className="ul_tabs">
              <li className="li_tabs">
                <Link
                  to="/"
                  className={selectedTab === 0 ? "active" : ""}
                  onClick={() => handleTabClick(0)}
                >
                  <span>추천</span>
                </Link>
              </li>
              <li className="li_tabs">
                <Link
                  to="/"
                  className={selectedTab === 1 ? "active" : ""}
                  onClick={() => handleTabClick(1)}
                >
                  <span>랭킹</span>
                </Link>
              </li>
              <li className="li_tabs">
                <Link
                  to="/"
                  className={selectedTab === 2 ? "active" : ""}
                  onClick={() => handleTabClick(2)}
                >
                  <span>럭셔리</span>
                </Link>
              </li>
              <li className="li_tabs">
                <Link
                  to="/"
                  className={selectedTab === 3 ? "active" : ""}
                  onClick={() => handleTabClick(3)}
                >
                  <span>남성</span>
                </Link>
              </li>
              <li className="li_tabs">
                <Link
                  to="/"
                  className={selectedTab === 4 ? "active" : ""}
                  onClick={() => handleTabClick(4)}
                >
                  <span>여성</span>
                </Link>
              </li>
              <li className="li_tabs">
                <Link
                  to="/"
                  className={selectedTab === 5 ? "active" : ""}
                  onClick={() => handleTabClick(5)}
                >
                  <span>발견</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
