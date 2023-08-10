import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/reset.css";
import "../css/Header.css";
import logo from "../asset/logo.png";

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
    { id: "/mypage", value: "MY" },
    { id: "/login", value: "Login" },
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
          <div className="header_main">
            <div className="main_inner">
              <div className="logo">
                {/* <Link to="/">KREAM</Link> */}
                <img src={logo} alt="logo" onClick={() => navigate("/")} />
              </div>
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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
