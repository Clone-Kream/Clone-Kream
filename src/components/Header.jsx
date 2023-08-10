import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/reset.css";
import "../css/Header.css";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const location = useLocation();
  // console.log(location);

  const [nowLocation, setNowLocation] = useState(location.pathname);
  console.log("nowLocation", nowLocation);

  const navigate = useNavigate();

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const navLists = [
    { id: "/", value: "HOME" },
    { id: "/shop", value: "SHOP" },
    { id: "/search", value: "search" },
  ];

  const onClickNav = (e) => {
    const id = e.target.id;
    setNowLocation(id);
    // console.log(id);
    if (id === "/home") {
      navigate("/");
    } else {
      // console.log(id);
      navigate(`${id}`);
    }
  };

  const getNavItem = () => {
    return navLists.map((el) => {
      if (el.id === "/search") {
        return (
          <img
            src="assets/search.svg"
            id="/search"
            alt="search"
            key={el.id}
            onClick={onClickNav}
          ></img>
        );
      } else {
        return (
          <div
            key={el.id}
            id={el.id}
            className={nowLocation === el.id ? "nav-active" : "navItem"}
            onClick={onClickNav}
          >
            {el.value}
          </div>
        );
      }
    });
  };

  // const getClasses =

  return (
    <>
      <header>
        <div className="header_container">
          <div className="top_inner">
            <div className="top_list">
              <Link to="/notice">고객센터</Link>
              <Link to="/mypage">마이페이지</Link>
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
              <nav className="gnb">{getNavItem()}</nav>
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
