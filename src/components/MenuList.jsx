import React, { useState } from "react";
import "../css/MenuList.css";

const MenuList = () => {
  const categories = ["신발", "아우터"];
  const subCategories = {
    신발: ["스니커즈", "구두"],
    아우터: ["자켓", "아노락"],
  };

  const [selectedMain, setSelectedMain] = useState(null);
  const [selectedSubs, setSelectedSubs] = useState({});

  const handleMainClick = (mainCategory) => {
    if (selectedMain === mainCategory) {
      setSelectedMain(null);
      setSelectedSubs({}); // 메인 카테고리 선택 해제 시 서브 카테고리 선택 해제
    } else {
      setSelectedMain(mainCategory);
    }
  };

  const handleSubClick = (subCategory) => {
    setSelectedSubs((prevSelectedSubs) => ({
      ...prevSelectedSubs,
      [subCategory]: !prevSelectedSubs[subCategory],
    }));
  };

  return (
    <>
      <ul className="menu_list">
        {categories.map((category) => (
          <li key={category} className="category-item">
            <label className="category-label">
              <input
                type="checkbox"
                value={category}
                onChange={() => handleMainClick(category)}
                checked={selectedMain === category}
              />
              {category}
            </label>
            {selectedMain === category && (
              <ul className="sub-items">
                {subCategories[category].map((subCategory) => (
                  <li key={subCategory}>
                    <label className="category-label">
                      <input
                        type="checkbox"
                        value={subCategory}
                        onChange={() => handleSubClick(subCategory)}
                        checked={selectedSubs[subCategory] || false}
                      />
                    </label>
                    {subCategory}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuList;
